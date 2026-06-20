interface AiAnswerCapsuleProps {
    question: string;
    answer: string;
    className?: string;
}

/**
 * Frage-H2 + kompakte Antwort für KI-Suchmaschinen (ChatGPT Search, Perplexity, Google AI).
 * Direkt unter dem Hero platziert, damit Crawler die Kernantwort in einem Block extrahieren können.
 */
export default function AiAnswerCapsule({ question, answer, className = "" }: AiAnswerCapsuleProps) {
    return (
        <div className={`mt-8 max-w-3xl mx-auto text-left ${className}`}>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">{question}</h2>
            <div className="bg-indigo-50 border-l-4 border-indigo-600 rounded-r-lg p-6">
                <p className="text-gray-700 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}
