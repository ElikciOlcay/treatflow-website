import { COOKIEBOT_DOMAIN_GROUP_ID } from '@/lib/cookiebot';

export default function CookiebotDeclaration() {
  return (
    <div className="cookiebot-declaration mt-6 overflow-x-auto">
      <script
        id="CookieDeclaration"
        src={`https://consent.cookiebot.com/${COOKIEBOT_DOMAIN_GROUP_ID}/cd.js`}
        async
      />
    </div>
  );
}
