import clsx from "clsx";

interface FeaturesCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  stepNumber: string;
  // className?: string;
  toLeft?: boolean;
}
function FeaturesCard({
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  stepNumber,
  // className,
  toLeft = false,
}: FeaturesCardProps) {
  return (
    <article
      className={clsx(
        "w-fit flex flex-row gap-25 items-center",
        toLeft && "self-start"
      )}
    >
      <div className={clsx("relative", toLeft && "order-1")}>
        <div className="relative pl-18 w-[500px] space-y-3 z-10">
          <h2 className="tracking-[3px] uppercase ">{title}</h2>
          <h3 className="font-chronicle text-5xl">{subtitle}</h3>
          <p className="font-gilroy-medium leading-tight">{description}</p>
        </div>
        <span
          aria-hidden="true"
          className="absolute -top-15 left-0 text-9xl font-gilroy-medium font-bold z-0 text-white/25"
        >
          {stepNumber}
        </span>
      </div>

      <div className="relative w-100 h-auto object-contain">
        <img src={imageUrl} alt={imageAlt} />
        <div className="noisy" />
      </div>
    </article>
  );
}

export default FeaturesCard;
