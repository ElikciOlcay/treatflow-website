/**
 * Answer-first Lead unter einer H2: erst die zitierfähige Antwort,
 * dann optional erklärender Kontext.
 */
export default function AnswerLead({
  answer,
  detail,
  className = "",
}: {
  answer: string;
  detail?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl mx-auto text-left sm:text-center ${className}`}>
      <p className="text-lg sm:text-xl text-gray-800 font-medium leading-relaxed">
        {answer}
      </p>
      {detail ? (
        <p className="mt-3 text-base text-gray-600 leading-relaxed">{detail}</p>
      ) : null}
    </div>
  );
}
