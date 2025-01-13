import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import schoolIllustration from "../assets/school_illustration.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Academic Excellence",
    description:
      "Our school provides a top-tier curriculum that fosters critical thinking and lifelong learning.",
    icon: <ChartIcon />,
  },
  {
    title: "Extracurricular Activities",
    description:
      "We offer a wide range of activities like sports, music, and drama to nurture talents beyond academics.",
    icon: <WalletIcon />,
  },
  {
    title: "Simplified Admissions",
    description:
      "Our admission process is streamlined and welcoming to ensure a smooth enrollment experience.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Comprehensive{" "}
            </span>
            School Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Discover how we create a supportive and enriching environment for students.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-2 rounded-xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={schoolIllustration}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="School services illustration"
        />
      </div>
    </section>
  );
};
