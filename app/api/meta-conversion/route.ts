import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Meta Conversions API Endpoint
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            eventName,
            userData,
            customData,
            eventSourceUrl,
            clientIpAddress,
            clientUserAgent
        } = body;

        // Validierung der erforderlichen Felder
        if (!eventName || !userData?.email) {
            return NextResponse.json(
                { error: 'Event name and user email are required' },
                { status: 400 }
            );
        }

        // Environment Variables
        const accessToken = process.env.META_ACCESS_TOKEN;
        const pixelId = process.env.META_PIXEL_ID;
        const testEventCode = process.env.META_TEST_EVENT_CODE; // Optional für Testing

        if (!accessToken || !pixelId) {
            console.error('Missing Meta API credentials');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Hash user data für Privacy
        const hashData = (data: string): string => {
            return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
        };

        // Prepare event data
        const eventTime = Math.floor(Date.now() / 1000);
        const eventId = crypto.randomUUID(); // Deduplication

        const serverEvent = {
            event_name: eventName,
            event_time: eventTime,
            event_id: eventId,
            event_source_url: eventSourceUrl || 'https://treatflow.de/landing/dokumentation-formulare',
            action_source: 'website',
            user_data: {
                em: userData.email ? [hashData(userData.email)] : undefined,
                ph: userData.phone ? [hashData(userData.phone.replace(/\D/g, ''))] : undefined,
                fn: userData.firstName ? [hashData(userData.firstName)] : undefined,
                ln: userData.lastName ? [hashData(userData.lastName)] : undefined,
                client_ip_address: clientIpAddress,
                client_user_agent: clientUserAgent,
                fbc: userData.fbc, // Facebook Click ID
                fbp: userData.fbp, // Facebook Browser ID
            },
            custom_data: customData || {},
        };

        // Remove undefined values
        Object.keys(serverEvent.user_data).forEach(key => {
            if (serverEvent.user_data[key as keyof typeof serverEvent.user_data] === undefined) {
                delete serverEvent.user_data[key as keyof typeof serverEvent.user_data];
            }
        });

        // Meta Conversions API Request
        const metaApiUrl = `https://graph.facebook.com/v18.0/${pixelId}/events`;

        const requestBody = {
            data: [serverEvent],
            access_token: accessToken,
            ...(testEventCode && { test_event_code: testEventCode }),
        };

        console.log('Sending to Meta Conversions API:', {
            event_name: eventName,
            event_id: eventId,
            pixel_id: pixelId,
            user_email_hashed: serverEvent.user_data.em?.[0]?.substring(0, 10) + '...',
        });

        const response = await fetch(metaApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        const result = await response.json();

        if (!response.ok) {
            console.error('Meta API Error:', result);
            return NextResponse.json(
                { error: 'Failed to send event to Meta', details: result },
                { status: response.status }
            );
        }

        console.log('Meta API Success:', result);

        return NextResponse.json({
            success: true,
            eventId,
            metaResponse: result,
        });

    } catch (error) {
        console.error('Meta Conversion API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// GET endpoint für Health Check
export async function GET() {
    return NextResponse.json({
        status: 'Meta Conversions API endpoint is running',
        timestamp: new Date().toISOString(),
    });
}
