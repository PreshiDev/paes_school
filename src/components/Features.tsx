import { useState, useEffect, useRef } from "react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Sparkles, Zap, Heart } from "lucide-react";
import image from "../assets/istockphoto-518275278-612x612.jpg";
import image3 from "../assets/istockphoto-925320070-612x612.jpg";
import image4 from "../assets/istockphoto-1373258176-612x612.jpg";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  color: string;
  highlights: string[];
}

const features: FeatureProps[] = [
  {
    title: "Holistic Learning Approach",
    description:
      "At PAES Comprehensive Academy, we focus on the overall development of students, combining academics, arts, and extracurricular activities to shape well-rounded individuals.",
    image: image4,
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-green-400 to-emerald-500",
    highlights: ["Academic Excellence", "Creative Arts", "Leadership Skills"],
  },
  {
    title: "Modern Facilities",
    description:
      "Our school is equipped with state-of-the-art classrooms, science labs, libraries, and digital tools to enhance the learning experience for every student.",
    image: image3,
    icon: <Zap className="w-6 h-6" />,
    color: "from-green-500 to-teal-600",
    highlights: ["Smart Classrooms", "Science Labs", "Digital Library"],
  },
  {
    title: "Dedicated Faculty",
    description:
      "Our experienced and passionate teachers are committed to nurturing every student's potential and fostering a lifelong love for learning.",
    image: image,
    icon: <Heart className="w-6 h-6" />,
    color: "from-lime-400 to-green-600",
    highlights: ["Expert Teachers", "Personalized Mentorship", "Continuous Training"],
  },
];

const featureList: string[] = [
  "Student-Centered Learning",
  "Science & Technology",
  "Sports & Athletics",
  "Cultural Activities",
  "Community Outreach",
  "Parent Engagement",
  "Scholarships",
  "Digital Classrooms",
  "Personalized Mentorship",
];

export const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeBadge, setActiveBadge] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="container py-24 sm:py-32 space-y-16 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-100/40 to-emerald-100/40 dark:from-green-900/10 dark:to-emerald-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-lime-100/40 to-green-100/40 dark:from-lime-900/10 dark:to-green-900/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-green-50/30 to-emerald-50/30 dark:from-green-900/5 dark:to-emerald-900/5 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Section Header */}
        <div
          className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200 dark:border-green-800 text-sm font-medium text-green-700 dark:text-green-300 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:text-center">
            What Makes Us{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-lime-500 text-transparent bg-clip-text animate-gradient">
                Stand Out
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 4 Q100 0 200 4"
                  stroke="url(#features-underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className={isVisible ? "animate-draw-features" : ""}
                />
                <defs>
                  <linearGradient id="features-underline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="50%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#84cc16" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
        </div>

        {/* Feature Badges */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {featureList.map((feature: string, index: number) => (
            <div
              key={feature}
              onMouseEnter={() => setActiveBadge(index)}
              onMouseLeave={() => setActiveBadge(null)}
            >
              <Badge
                variant="secondary"
                className={`text-sm px-4 py-2 cursor-pointer transition-all duration-300 hover:scale-110 ${
                  activeBadge === index
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-transparent shadow-lg shadow-green-500/25"
                    : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-700 hover:shadow-md"
                }`}
              >
                <CheckCircle2 className={`w-3 h-3 mr-1.5 transition-colors duration-300 ${
                  activeBadge === index ? "text-white" : "text-green-500"
                }`} />
                {feature}
              </Badge>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map(
            ({ title, description, image: featureImage, icon, color, highlights }: FeatureProps, index: number) => (
              <div
                key={title}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="relative group h-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Gradient accent top */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={featureImage}
                        alt={title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon on hover */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 shadow-lg">
                      <div className={`text-transparent bg-clip-text bg-gradient-to-r ${color}`}>
                        {icon}
                      </div>
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                        {icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-emerald-600 transition-all duration-300">
                        {title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {highlights.map((highlight, hIndex) => (
                        <div
                          key={hIndex}
                          className={`flex items-center gap-2 text-sm transition-all duration-500 ${
                            hoveredCard === index
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-2"
                          }`}
                          style={{ transitionDelay: `${hIndex * 100}ms` }}
                        >
                          <CheckCircle2 className={`w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${color} flex-shrink-0`} />
                          <span className="text-slate-600 dark:text-slate-400">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter>
                    <button className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 group/link">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </button>
                  </CardFooter>

                  {/* Decorative corner gradient */}
                  <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none`} />
                </Card>
              </div>
            )
          )}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="relative inline-block">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500" />
            
            <p className="relative text-lg text-slate-600 dark:text-slate-400 mb-6">
              And there's so much more to discover...
            </p>
            <a
              href="https://wa.me/+2348132872664"
              target="_blank"
              rel="noreferrer noopener"
              className="relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 text-white font-semibold text-lg hover:from-green-600 hover:via-emerald-600 hover:to-lime-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 group"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl" />
              <Sparkles className="relative z-10 w-5 h-5 group-hover:animate-bounce" />
              <span className="relative z-10">Enroll Your Child Today</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes draw-features {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float-green {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-5px) rotate(1deg); }
          66% { transform: translateY(3px) rotate(-1deg); }
        }

        .animate-draw-features {
          stroke-dasharray: 200;
          animation: draw-features 1.5s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </section>
  );
};