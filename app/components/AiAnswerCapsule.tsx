import { Children, type ReactNode } from "react";

interface AiAnswerCapsuleProps {
    question: string;
    answer: string;
    className?: string;
}

/**
 * Frage + kompakte Antwort für KI-Suchmaschinen (ChatGPT Search, Perplexity, Google AI).
 * Direkt unter dem Hero platziert, damit Crawler die Kernantwort in einem Block extrahieren können.
 */
export default function AiAnswerCapsule({ question, answer, className = "" }: AiAnswerCapsuleProps) {
    return (
        <div className={`h-full text-left ${className}`}>
            <div className="h-full rounded-2xl border border-indigo-100 bg-indigo-50/80 p-6 sm:p-7">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">{question}</h2>
                <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

export function AiAnswerCapsuleGroup({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    const items = Children.toArray(children);
    const twoCol = items.length > 1;

    return (
        <div
            className={
                twoCol
                    ? `max-w-6xl mx-auto grid gap-6 md:grid-cols-2 ${className}`
                    : `max-w-3xl mx-auto ${className}`
            }
        >
            {items}
        </div>
    );
}
