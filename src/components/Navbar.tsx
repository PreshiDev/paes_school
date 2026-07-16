import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import LogoIcon from "../assets/icon1.png";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#about",
    label: "About-Us",
  },
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "https://edstream.com.ng/accounts/login/",
    label: "E-portal",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section for highlighting
      const sections = routeList
        .filter(route => route.href.startsWith("#"))
        .map(route => route.href.substring(1));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg border-b border-slate-200/50 dark:border-slate-700/50"
          : "bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700"
      }`}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-16 px-4 w-screen flex justify-between items-center">
          {/* Logo Section */}
          <NavigationMenuItem className="font-bold flex items-center">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex items-center gap-3 group"
            >
              <div className="relative">
                <img
                  src={LogoIcon}
                  alt="School Logo"
                  className="h-[42px] w-auto object-contain rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
              </div>
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                Paes Academy
              </span>
            </a>
          </NavigationMenuItem>

          {/* Mobile Navigation */}
          <span className="flex md:hidden items-center gap-2">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2 relative group">
                <div className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300">
                  <Menu className="h-5 w-5 text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform" />
                </div>
              </SheetTrigger>

              <SheetContent side={"left"} className="w-[300px] sm:w-[350px]">
                <SheetHeader className="border-b border-slate-200 dark:border-slate-700 pb-4">
                  <SheetTitle className="font-bold text-xl flex items-center gap-2">
                    <img
                      src={LogoIcon}
                      alt="School Logo"
                      className="h-[35px] w-auto object-contain rounded-lg"
                    />
                    <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                      Paes Academy
                    </span>
                  </SheetTitle>
                </SheetHeader>
                
                <nav className="flex flex-col gap-1 mt-6">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`relative flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        activeSection === href.substring(1)
                          ? "bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 text-orange-600 dark:text-orange-400 border-l-4 border-orange-500"
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 hover:translate-x-1"
                      }`}
                    >
                      {label === "E-portal" && (
                        <span className="absolute top-2 right-2 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                      )}
                      <span className="mr-3 text-lg">
                        {label === "Home" && "🏠"}
                        {label === "About-Us" && "📚"}
                        {label === "Features" && "✨"}
                        {label === "E-portal" && "🎓"}
                        {label === "FAQ" && "💬"}
                      </span>
                      {label}
                    </a>
                  ))}
                  
                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <a
                      rel="noreferrer noopener"
                      href="https://wa.me/+2348132872664"
                      target="_blank"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326a7.3 7.3 0 0 0-10.3 0c-2.83 2.829-2.83 7.431 0 10.259a7.286 7.286 0 0 0 5.13 2.14c.846 0 1.667-.14 2.434-.426l2.916.767a.625.625 0 0 0 .767-.767l-.767-2.916a7.306 7.306 0 0 0-.426-2.433 7.295 7.295 0 0 0-2.14-5.13Zm-2.006 10.193a5.986 5.986 0 0 1-6.394-1.313c-2.33-2.33-2.33-6.13 0-8.459a6.003 6.003 0 0 1 8.458 0 5.986 5.986 0 0 1 1.313 6.393l-.174.452 1.082 4.119-4.12-1.082-.452.174Zm-3.385-7.7c-.234-.494-.466-.557-.846-.557-.22 0-.473.003-.726.045-.238.04-.557.173-.79.497-.235.326-.933.913-.933 2.197 0 1.283.956 2.523 1.09 2.691.132.173 1.827 2.72 4.457 3.696 2.629.973 2.973.65 3.509.61.536-.04 1.729-.705 1.973-1.392.244-.689.244-1.273.173-1.392-.07-.12-.267-.194-.556-.347-.289-.154-1.729-.855-1.995-.956-.266-.102-.46-.153-.654.153-.193.306-.748.96-.916 1.155-.168.195-.336.206-.625.07-.29-.137-1.223-.451-2.33-1.439-.86-.748-1.444-1.663-1.611-1.951-.168-.289-.017-.43.128-.587.131-.134.289-.35.434-.525.148-.176.197-.297.296-.493.1-.195.05-.373-.025-.525-.075-.152-.659-1.63-.927-2.22Z" />
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`relative px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-300 ${
                  activeSection === route.href.substring(1)
                    ? "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {route.label}
                {route.label === "E-portal" && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                )}
                {activeSection === route.href.substring(1) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-3">
            <a
              rel="noreferrer noopener"
              href="https://wa.me/+2348059483533"
              target="_blank"
              className="group relative overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium text-sm hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 w-4 h-4 group-hover:animate-bounce"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326a7.3 7.3 0 0 0-10.3 0c-2.83 2.829-2.83 7.431 0 10.259a7.286 7.286 0 0 0 5.13 2.14c.846 0 1.667-.14 2.434-.426l2.916.767a.625.625 0 0 0 .767-.767l-.767-2.916a7.306 7.306 0 0 0-.426-2.433 7.295 7.295 0 0 0-2.14-5.13Zm-2.006 10.193a5.986 5.986 0 0 1-6.394-1.313c-2.33-2.33-2.33-6.13 0-8.459a6.003 6.003 0 0 1 8.458 0 5.986 5.986 0 0 1 1.313 6.393l-.174.452 1.082 4.119-4.12-1.082-.452.174Zm-3.385-7.7c-.234-.494-.466-.557-.846-.557-.22 0-.473.003-.726.045-.238.04-.557.173-.79.497-.235.326-.933.913-.933 2.197 0 1.283.956 2.523 1.09 2.691.132.173 1.827 2.72 4.457 3.696 2.629.973 2.973.65 3.509.61.536-.04 1.729-.705 1.973-1.392.244-.689.244-1.273.173-1.392-.07-.12-.267-.194-.556-.347-.289-.154-1.729-.855-1.995-.956-.266-.102-.46-.153-.654.153-.193.306-.748.96-.916 1.155-.168.195-.336.206-.625.07-.29-.137-1.223-.451-2.33-1.439-.86-.748-1.444-1.663-1.611-1.951-.168-.289-.017-.43.128-.587.131-.134.289-.35.434-.525.148-.176.197-.297.296-.493.1-.195.05-.373-.025-.525-.075-.152-.659-1.63-.927-2.22Z" />
              </svg>
              <span className="relative z-10">WhatsApp</span>
            </a>

            <div className="relative group">
              <ModeToggle />
            </div>
          </div>
        </NavigationMenuList>
      </NavigationMenu>

      {/* CSS Animations */}
      <style>{`
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          0% {
            transform: translateY(10px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(34, 197, 94, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.8);
          }
        }

        .nav-link-active {
          position: relative;
        }

        .nav-link-active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, #f97316, #eab308);
          border-radius: 2px;
          animation: slideInFromRight 0.3s ease-out;
        }

        .mobile-menu-item {
          animation: fadeInUp 0.3s ease-out forwards;
          opacity: 0;
        }

        .mobile-menu-item:nth-child(1) { animation-delay: 0.05s; }
        .mobile-menu-item:nth-child(2) { animation-delay: 0.1s; }
        .mobile-menu-item:nth-child(3) { animation-delay: 0.15s; }
        .mobile-menu-item:nth-child(4) { animation-delay: 0.2s; }
        .mobile-menu-item:nth-child(5) { animation-delay: 0.25s; }
        .mobile-menu-item:nth-child(6) { animation-delay: 0.3s; }

        @media (max-width: 768px) {
          .mobile-menu-item {
            animation-name: slideInFromLeft;
          }
        }
      `}</style>
    </header>
  );
};