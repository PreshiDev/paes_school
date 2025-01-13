import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/istockphoto-518275278-612x612.jpg";
import image3 from "../assets/istockphoto-925320070-612x612.jpg";
import image4 from "../assets/istockphoto-1373258176-612x612.jpg";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Holistic Learning Approach",
    description:
      "At PAES Comprehensive Academy, we focus on the overall development of students, combining academics, arts, and extracurricular activities.",
    image: image4,
  },
  {
    title: "Modern Facilities",
    description:
      "Our school is equipped with state-of-the-art classrooms, science labs, libraries, and digital tools to enhance the learning experience.",
    image: image3,
  },
  {
    title: "Dedicated Faculty",
    description:
      "Our experienced and passionate teachers are committed to nurturing every student's potential and fostering a love for learning.",
    image: image,
  },
];

const featureList: string[] = [
  "Student-Centered Learning",
  "Science and Technology",
  "Sports and Athletics",
  "Cultural Activities",
  "Community Outreach",
  "Parent Engagement",
  "Scholarships",
  "Digital Classrooms",
  "Personalized Mentorship",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        What Makes Us{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Stand Out
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="Feature illustration"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
