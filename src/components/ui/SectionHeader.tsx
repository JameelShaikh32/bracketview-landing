import Badge from "@/components/ui/Badge";

type SectionHeaderProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

const SectionHeader = ({
  badge,
  title,
  description,
  align = "left",
  as = "h2",
}: SectionHeaderProps) => {
  const Heading = as;
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : ""}>
      {badge ? <Badge>{badge}</Badge> : null}
      <Heading
        className={`text-2xl font-bold tracking-tight sm:text-3xl ${badge ? "mt-4" : ""}`}
      >
        {title}
      </Heading>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base dark:text-foreground/70">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeader;
