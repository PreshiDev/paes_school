import { Radar } from "lucide-react";

interface PartnerProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: PartnerProps[] = [
  {
    icon: <Radar size={34} />,
    name: "Ministry of Education",
  },
  {
    icon: <Radar size={34} />,
    name: "Local School Board",
  },
  {
    icon: <Radar size={34} />,
    name: "Community Leaders",
  },
  {
    icon: <Radar size={34} />,
    name: "Educational NGOs",
  },
  {
    icon: <Radar size={34} />,
    name: "Corporate Sponsors",
  },
  {
    icon: <Radar size={34} />,
    name: "Parent-Teacher Association",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Our Partners and Supporters
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: PartnerProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
