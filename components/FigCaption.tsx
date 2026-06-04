// Mono numbered caption beneath a framed image: "fig. 01.2 — label".
// The leading "fig. NN" token is the only red ink; the rest stays soft.
export default function FigCaption({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const match = text.match(/^(fig\.\s*[\d.]+)(.*)$/i);
  return (
    <p className={`mono normal-case tracking-mono mt-2 text-ink-soft ${className}`}>
      {match ? (
        <>
          <span className="text-red">{match[1]}</span>
          <span>{match[2]}</span>
        </>
      ) : (
        text
      )}
    </p>
  );
}
