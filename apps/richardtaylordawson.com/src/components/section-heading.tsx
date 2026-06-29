type SectionHeadingProps = {
  kicker: string;
  title?: string;
  description?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div>
      <h2 className="section-kicker">{kicker}</h2>
      {title ? (
        <p className="mt-5 max-w-sm text-xl font-semibold leading-8 text-white">
          {title}
        </p>
      ) : null}
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/[0.58]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
