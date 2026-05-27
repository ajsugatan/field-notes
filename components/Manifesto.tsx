type Props = {
  text: string;
  alignment: "left" | "right";
};

export default function Manifesto({ text, alignment }: Props) {
  const colClass =
    alignment === "left"
      ? "col-span-12 lg:col-start-1 lg:col-span-7"
      : "col-span-12 lg:col-start-6 lg:col-span-7 lg:text-right";

  return (
    <div className="grid grid-cols-12 px-6 md:px-10">
      <p
        className={[
          colClass,
          "font-display font-black display-tight",
          "text-[length:clamp(2.5rem,6vw,5.5rem)] leading-[1.02]",
          "text-ink m-0",
        ].join(" ")}
      >
        {text}
      </p>
    </div>
  );
}
