import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Excellence in Education",
    description:
      "Our commitment to academic excellence ensures that students receive a well-rounded education, preparing them for success in their future endeavors.",
  },
  {
    icon: <MapIcon />,
    title: "A Thriving Learning Community",
    description:
      "We foster a collaborative and inclusive learning environment where students, teachers, and parents work together to achieve shared goals.",
  },
  {
    icon: <PlaneIcon />,
    title: "Unlimited Opportunities for Growth",
    description:
      "Through extracurricular activities and leadership programs, students explore their potential and develop essential life skills for personal and professional growth.",
  },
  {
    icon: <GiftIcon />,
    title: "Rewarding Achievements",
    description:
      "We celebrate the hard work and accomplishments of our students through awards, recognitions, and scholarships, encouraging them to aim higher.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        How Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Academy{" "}
        </span>
        Works
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        At PAES Comprehensive Academy, we provide a structured and inspiring approach 
        to learning that empowers students to excel academically and beyond.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
