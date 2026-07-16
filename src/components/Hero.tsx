import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { label: "Students Enrolled", value: "1,000+", icon: "👨‍🎓" },
    { label: "Expert Teachers", value: "40+", icon: "👩‍🏫" },
    { label: "Success Rate", value: "98%", icon: "📈" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-orange-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles with CSS animations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-200/30 to-yellow-200/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl animate-float" />
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 items-center gap-12 lg:gap-16 px-6 py-12 md:py-16 relative z-10">
        {/* Left Content */}
        <div 
          className={`space-y-8 text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 border border-orange-200 dark:border-orange-800 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
              Admissions Open 2024/2025
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#ffbd2f] via-[#f89b1c] to-[#f87d0a] text-transparent bg-clip-text">
                  Welcome
                </span>
                <span className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#ffbd2f] to-[#f87d0a] rounded-full transition-all duration-1000 delay-700 ${
                  isVisible ? 'w-full' : 'w-0'
                }`} />
              </span>
              <br />
              <span className="text-slate-800 dark:text-slate-100">To</span>
              <br />
              <span className="relative">
                Paes{" "}
                <span className="bg-gradient-to-r from-[#63ff43] via-[#4fff09] to-[#15d703] text-transparent bg-clip-text animate-pulse">
                  Comprehensive
                </span>{" "}
                <span className="relative inline-block">
                  Academy
                  <svg
                    className={`absolute -bottom-3 left-0 w-full transition-all duration-1000 delay-1000 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    viewBox="0 0 200 20"
                    fill="none"
                    stroke="url(#underline-gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <path d="M10 15 Q100 0 190 15" strokeDasharray="200" strokeDashoffset={isVisible ? "0" : "200"} className="transition-all duration-1000 delay-1000" />
                    <defs>
                      <linearGradient id="underline-gradient">
                        <stop offset="0%" stopColor="#63ff43" />
                        <stop offset="100%" stopColor="#15d703" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className={`text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Unlock your child's potential with a learning experience tailored 
            for success. Join our community of high achievers today.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <a
              rel="noreferrer noopener"
              href="https://wa.me/+2348132872664"
              target="_blank"
              className={`${buttonVariants({
                variant: "default",
                size: "lg",
              })} group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 mr-2 w-5 h-5 group-hover:animate-bounce"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326a7.3 7.3 0 0 0-10.3 0c-2.83 2.829-2.83 7.431 0 10.259a7.286 7.286 0 0 0 5.13 2.14c.846 0 1.667-.14 2.434-.426l2.916.767a.625.625 0 0 0 .767-.767l-.767-2.916a7.306 7.306 0 0 0-.426-2.433 7.295 7.295 0 0 0-2.14-5.13Zm-2.006 10.193a5.986 5.986 0 0 1-6.394-1.313c-2.33-2.33-2.33-6.13 0-8.459a6.003 6.003 0 0 1 8.458 0 5.986 5.986 0 0 1 1.313 6.393l-.174.452 1.082 4.119-4.12-1.082-.452.174Zm-3.385-7.7c-.234-.494-.466-.557-.846-.557-.22 0-.473.003-.726.045-.238.04-.557.173-.79.497-.235.326-.933.913-.933 2.197 0 1.283.956 2.523 1.09 2.691.132.173 1.827 2.72 4.457 3.696 2.629.973 2.973.65 3.509.61.536-.04 1.729-.705 1.973-1.392.244-.689.244-1.273.173-1.392-.07-.12-.267-.194-.556-.347-.289-.154-1.729-.855-1.995-.956-.266-.102-.46-.153-.654.153-.193.306-.748.96-.916 1.155-.168.195-.336.206-.625.07-.29-.137-1.223-.451-2.33-1.439-.86-.748-1.444-1.663-1.611-1.951-.168-.289-.017-.43.128-.587.131-.134.289-.35.434-.525.148-.176.197-.297.296-.493.1-.195.05-.373-.025-.525-.075-.152-.659-1.63-.927-2.22Z" />
              </svg>
              <span className="relative z-10 font-semibold">Chat With Us</span>
            </a>

            <a
              href="#features"
              className={`${buttonVariants({
                variant: "outline",
                size: "lg",
              })} border-2 border-slate-300 dark:border-slate-600 hover:border-orange-400 dark:hover:border-orange-400 text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 hover:scale-105`}
            >
              Explore Programs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>

          {/* Stats Bar */}
          <div className={`flex flex-wrap gap-6 justify-center lg:justify-start pt-8 border-t border-slate-200 dark:border-slate-700 transition-all duration-700 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
              >
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <div className="text-lg font-bold text-slate-800 dark:text-slate-100">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Hero Cards */}
        <div 
          className={`relative flex items-center justify-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          {/* Decorative Rings */}
          <div className="absolute w-[450px] h-[450px] md:w-[550px] md:h-[550px] rounded-full border-2 border-dashed border-orange-200 dark:border-orange-800 opacity-50 animate-spin-slow" />
          <div className="absolute w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full border border-green-200 dark:border-green-800 opacity-30 animate-spin-slower" />

          {/* Cards Container */}
          <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
            <HeroCards />
          </div>

          {/* Floating Particles */}
          <div className="absolute w-2 h-2 rounded-full bg-orange-400 top-[20%] left-[10%] animate-float-particle-1" />
          <div className="absolute w-2 h-2 rounded-full bg-green-400 top-[35%] left-[20%] animate-float-particle-2" />
          <div className="absolute w-2 h-2 rounded-full bg-yellow-400 top-[50%] left-[15%] animate-float-particle-3" />
          <div className="absolute w-2 h-2 rounded-full bg-blue-400 top-[65%] left-[25%] animate-float-particle-4" />
          <div className="absolute w-2 h-2 rounded-full bg-purple-400 top-[80%] left-[30%] animate-float-particle-5" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 animate-bounce">
        <span className="text-sm">Scroll to explore</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Add these styles to your global CSS file (e.g., index.css or globals.css) */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes float-particle-1 {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(15px, -30px); opacity: 1; }
        }
        @keyframes float-particle-2 {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(-10px, -25px); opacity: 1; }
        }
        @keyframes float-particle-3 {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(20px, -20px); opacity: 1; }
        }
        @keyframes float-particle-4 {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(-15px, -15px); opacity: 1; }
        }
        @keyframes float-particle-5 {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(10px, -10px); opacity: 1; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 7s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-slower { animation: spin-slower 25s linear infinite; }
        .animate-float-particle-1 { animation: float-particle-1 3s ease-in-out infinite; }
        .animate-float-particle-2 { animation: float-particle-2 3.5s ease-in-out infinite; animation-delay: 0.5s; }
        .animate-float-particle-3 { animation: float-particle-3 4s ease-in-out infinite; animation-delay: 1s; }
        .animate-float-particle-4 { animation: float-particle-4 3.2s ease-in-out infinite; animation-delay: 1.5s; }
        .animate-float-particle-5 { animation: float-particle-5 3.8s ease-in-out infinite; animation-delay: 2s; }
      `}</style>
    </section>
  );
};