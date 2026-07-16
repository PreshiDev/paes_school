import { useState, useEffect, useRef } from "react";
import pilot from "../assets/paes_outing1.jpg";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
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

  const highlights = [
    {
      icon: "🎯",
      title: "Our Mission",
      description: "To nurture young minds and foster holistic development through world-class education",
    },
    {
      icon: "💪",
      title: "Our Motto",
      description: '"I Will Make It" - Embodying determination, resilience, and self-belief',
    },
    {
      icon: "🌍",
      title: "Global Standards",
      description: "International curriculum aligned with Nigerian educational framework",
    },
    {
      icon: "👨‍🏫",
      title: "Expert Faculty",
      description: "Highly qualified teachers with modern teaching methodologies",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="container py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/40 to-transparent dark:from-orange-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-100/40 to-transparent dark:from-green-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 border border-orange-200 dark:border-orange-800 text-sm font-medium text-orange-700 dark:text-orange-300 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            Discover Our Story
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            About{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 text-transparent bg-clip-text">
                PAES Comprehensive
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 4 Q100 0 200 4"
                  stroke="url(#about-underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className={isVisible ? "animate-draw" : ""}
                />
                <defs>
                  <linearGradient id="about-underline">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#eab308" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            Academy
          </h2>
        </div>

        {/* Main Content */}
        <div
          className={`bg-gradient-to-br from-white via-orange-50/30 to-yellow-50/30 dark:from-slate-800 dark:via-slate-800/50 dark:to-slate-800/30 border border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="px-6 py-12 md:px-12 md:py-16 flex flex-col-reverse lg:flex-row gap-8 md:gap-12">
            {/* Left - Image Section */}
            <div
              className={`lg:w-[40%] flex items-center justify-center transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative group">
                {/* Image frame decoration */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                
                <div className="relative">
                  <img
                    src={pilot}
                    alt="PAES Academy Students"
                    className="relative w-full max-w-[400px] lg:w-[350px] xl:w-[450px] object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-1"
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl px-4 py-3 border border-slate-200 dark:border-slate-700 animate-float">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">⭐</span>
                      <div>
                        <div className="font-bold text-sm text-slate-800 dark:text-slate-200">
                          Excellence
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Since 2010
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content Section */}
            <div className="lg:w-[60%] flex flex-col justify-center">
              <div className="space-y-6">
                <div
                  className={`transition-all duration-700 delay-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                >
                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="font-bold text-orange-600 dark:text-orange-400 text-2xl">P</span>AES Comprehensive Academy is a prestigious private educational 
                    institution located in Nigeria, dedicated to nurturing young minds 
                    and fostering holistic development. Catering to both primary and 
                    secondary school students, our mission is to provide a world-class 
                    education that empowers students to achieve excellence in academics, 
                    character, and leadership.
                  </p>
                </div>

                <div
                  className={`transition-all duration-700 delay-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                >
                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/10 dark:to-yellow-900/10 border-l-4 border-orange-500 rounded-r-xl p-6">
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                      At PAES Comprehensive Academy, we believe that education is the 
                      foundation for success, and our motto,{" "}
                      <strong className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-400 dark:to-yellow-400 text-xl">
                        "I Will Make It,"
                      </strong>{" "}
                      embodies the spirit of determination, resilience, and self-belief 
                      that we instill in every student. This guiding principle drives our 
                      commitment to creating an environment where every learner is inspired 
                      to dream big, work hard, and excel in all areas of life.
                    </p>
                  </div>
                </div>

                <div
                  className={`transition-all duration-700 delay-900 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                >
                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                    Our curriculum is designed to meet international standards while 
                    aligning with the Nigerian educational framework. With highly qualified 
                    teachers, modern teaching methodologies, and state-of-the-art facilities, 
                    we ensure that our students excel academically while also developing 
                    strong moral values and leadership qualities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div
            className={`px-6 pb-12 md:px-12 md:pb-16 transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Hover gradient border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/0 via-yellow-400/0 to-green-400/0 group-hover:from-orange-400/10 group-hover:via-yellow-400/10 group-hover:to-green-400/10 transition-all duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes draw {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes fadeInScale {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-draw {
          stroke-dasharray: 200;
          animation: draw 1.5s ease-out forwards;
        }

        .hover-shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
        }

        .hover-shimmer:hover {
          animation: shimmer 1.5s ease-out;
        }
      `}</style>
    </section>
  );
};