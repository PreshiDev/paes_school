import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Quote } from "lucide-react";
// import image1 from "../assets/miss-ifeoma.jpg";
import image2 from "../assets/mrs-oluwatoyin.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/Mrs-Adeyemi-Motunrayo.jpg";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  bio: string;
  quote: string;
}

const teamList: TeamProps[] = [
  // {
  //   imageUrl: image1,
  //   name: "Miss Ifeoma Osuya",
  //   position: "Ag. Principal (Senior Secondary)",
  //   bio: "Leading the senior secondary section with dedication and a passion for academic excellence.",
  //   quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
  // },
  {
    imageUrl: image2,
    name: "Mrs Oluwatoyin Bamisebi",
    position: "VP Academic",
    bio: "Championing academic programs and ensuring the highest standards of teaching and learning across all levels.",
    quote: "Every student can learn, just not on the same day, or in the same way.",
  },
  {
    imageUrl: image3,
    name: "Mrs Akinbola Moronke Ruth",
    position: "VP Administration",
    bio: "Managing school operations and administrative functions to create an optimal learning environment.",
    quote: "Excellence is not a skill, it's an attitude.",
  },
  {
    imageUrl: image4,
    name: "Mrs Adeyemi Motunrayo",
    position: "Headmistress, Primary School",
    bio: "Nurturing young minds at the foundational level with care, creativity, and compassion.",
    quote: "The foundation of every state is the education of its youth.",
  },
];

export const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
      id="team"
      ref={sectionRef}
      className="container py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/30 to-purple-100/30 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-orange-100/20 to-transparent dark:from-orange-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-800 text-sm font-medium text-blue-700 dark:text-blue-300 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            Our People
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Meet Our{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                Leadership
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 4 Q100 0 200 4"
                  stroke="url(#team-underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className={isVisible ? "animate-draw-team" : ""}
                />
                <defs>
                  <linearGradient id="team-underline">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="50%" stopColor="#9333ea" />
                    <stop offset="100%" stopColor="#db2777" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            Team
          </h2>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Dedicated to guiding and supporting students and teachers, our leadership 
            team is committed to excellence in education and fostering a nurturing 
            learning environment.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {teamList.map(({ imageUrl, name, position, bio, quote }: TeamProps, index) => (
            <div
              key={name}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="relative group bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Gradient accent top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                {/* Image Container */}
                <div className="relative pt-8 px-6">
                  <div className="relative mx-auto w-32 h-32 mb-4">
                    {/* Glow ring */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
                    
                    {/* Spinning border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-75 group-hover:animate-spin-slow" />
                    
                    {/* Image */}
                    <img
                      src={imageUrl}
                      alt={`${name} - ${position}`}
                      className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {name}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full inline-block">
                    {position}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center px-6 pb-6">
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {bio}
                  </p>

                  {/* Quote */}
                  <div
                    className={`relative bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl p-4 transition-all duration-500 ${
                      hoveredCard === index ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"
                    }`}
                  >
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-400 dark:text-blue-600 rotate-180" />
                    <p className="text-xs italic text-slate-500 dark:text-slate-400 leading-relaxed">
                      "{quote}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes draw-team {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-5px) scale(1.05); }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-draw-team {
          stroke-dasharray: 200;
          animation: draw-team 1.5s ease-out forwards;
        }

        .group:hover .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </section>
  );
};