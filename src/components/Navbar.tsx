import { useState } from "react";
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

// import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
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
    href: "#",
    label: "E-portal",
  },
  // {
  //   href: "#testimonials",
  //   label: "Testimonials",
  // },
  // {
  //   href: "#pricing",
  //   label: "Pricing",
  // },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <img
                src={LogoIcon}
                alt="School Logo"
                className="h-[40px] w-auto object-contain rounded-lg"
              />
              Paes Academy
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Paes Academy
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://wa.me/+2348132872664" // Replace "1234567890" with the school's WhatsApp phone number
                    target="_blank"
                    className={`w-[200px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326a7.3 7.3 0 0 0-10.3 0c-2.83 2.829-2.83 7.431 0 10.259a7.286 7.286 0 0 0 5.13 2.14c.846 0 1.667-.14 2.434-.426l2.916.767a.625.625 0 0 0 .767-.767l-.767-2.916a7.306 7.306 0 0 0-.426-2.433 7.295 7.295 0 0 0-2.14-5.13Zm-2.006 10.193a5.986 5.986 0 0 1-6.394-1.313c-2.33-2.33-2.33-6.13 0-8.459a6.003 6.003 0 0 1 8.458 0 5.986 5.986 0 0 1 1.313 6.393l-.174.452 1.082 4.119-4.12-1.082-.452.174Zm-3.385-7.7c-.234-.494-.466-.557-.846-.557-.22 0-.473.003-.726.045-.238.04-.557.173-.79.497-.235.326-.933.913-.933 2.197 0 1.283.956 2.523 1.09 2.691.132.173 1.827 2.72 4.457 3.696 2.629.973 2.973.65 3.509.61.536-.04 1.729-.705 1.973-1.392.244-.689.244-1.273.173-1.392-.07-.12-.267-.194-.556-.347-.289-.154-1.729-.855-1.995-.956-.266-.102-.46-.153-.654.153-.193.306-.748.96-.916 1.155-.168.195-.336.206-.625.07-.29-.137-1.223-.451-2.33-1.439-.86-.748-1.444-1.663-1.611-1.951-.168-.289-.017-.43.128-.587.131-.134.289-.35.434-.525.148-.176.197-.297.296-.493.1-.195.05-.373-.025-.525-.075-.152-.659-1.63-.927-2.22Z" />
                    </svg>
                    WhatsApp
                  </a>

                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://wa.me/+2348059483533" 
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >   
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326a7.3 7.3 0 0 0-10.3 0c-2.83 2.829-2.83 7.431 0 10.259a7.286 7.286 0 0 0 5.13 2.14c.846 0 1.667-.14 2.434-.426l2.916.767a.625.625 0 0 0 .767-.767l-.767-2.916a7.306 7.306 0 0 0-.426-2.433 7.295 7.295 0 0 0-2.14-5.13Zm-2.006 10.193a5.986 5.986 0 0 1-6.394-1.313c-2.33-2.33-2.33-6.13 0-8.459a6.003 6.003 0 0 1 8.458 0 5.986 5.986 0 0 1 1.313 6.393l-.174.452 1.082 4.119-4.12-1.082-.452.174Zm-3.385-7.7c-.234-.494-.466-.557-.846-.557-.22 0-.473.003-.726.045-.238.04-.557.173-.79.497-.235.326-.933.913-.933 2.197 0 1.283.956 2.523 1.09 2.691.132.173 1.827 2.72 4.457 3.696 2.629.973 2.973.65 3.509.61.536-.04 1.729-.705 1.973-1.392.244-.689.244-1.273.173-1.392-.07-.12-.267-.194-.556-.347-.289-.154-1.729-.855-1.995-.956-.266-.102-.46-.153-.654.153-.193.306-.748.96-.916 1.155-.168.195-.336.206-.625.07-.29-.137-1.223-.451-2.33-1.439-.86-.748-1.444-1.663-1.611-1.951-.168-.289-.017-.43.128-.587.131-.134.289-.35.434-.525.148-.176.197-.297.296-.493.1-.195.05-.373-.025-.525-.075-.152-.659-1.63-.927-2.22Z" />
              </svg>
              WhatsApp
            </a>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
