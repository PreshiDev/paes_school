import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container mx-auto grid lg:grid-cols-2 items-center gap-6 px-6 py-16 md:py-20">
      {/* Text Section */}
      <div className="space-y-8 text-center lg:text-left">
        <header className="text-4xl md:text-5xl font-extrabold leading-tight">
          <h1>
            <span className="bg-gradient-to-r from-[#ffbd2f] to-[#f87d0a] text-transparent bg-clip-text">
              Welcome
            </span>{" "}
            To
          </h1>
          <span className="block">
            Paes{" "}
            <span className="bg-gradient-to-r from-[#63ff43] via-[#4fff09] to-[#15d703] text-transparent bg-clip-text">
              Comprehensive
            </span>{" "}
            Academy
          </span>
        </header>

        <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0">
          Unlock your child's potential with a learning experience tailored for success.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
          {/* <Button className="w-full md:w-auto px-6 py-3 text-lg">
            Get Started
          </Button> */}
          <a
            rel="noreferrer noopener"
            href="https://wa.me/+2348132872664"
            target="_blank"
            className={buttonVariants({
              variant: "outline",
              className: "flex items-center justify-center w-full md:w-auto px-6 py-3 text-lg",
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326a7.3 7.3 0 0 0-10.3 0c-2.83 2.829-2.83 7.431 0 10.259a7.286 7.286 0 0 0 5.13 2.14c.846 0 1.667-.14 2.434-.426l2.916.767a.625.625 0 0 0 .767-.767l-.767-2.916a7.306 7.306 0 0 0-.426-2.433 7.295 7.295 0 0 0-2.14-5.13Zm-2.006 10.193a5.986 5.986 0 0 1-6.394-1.313c-2.33-2.33-2.33-6.13 0-8.459a6.003 6.003 0 0 1 8.458 0 5.986 5.986 0 0 1 1.313 6.393l-.174.452 1.082 4.119-4.12-1.082-.452.174Zm-3.385-7.7c-.234-.494-.466-.557-.846-.557-.22 0-.473.003-.726.045-.238.04-.557.173-.79.497-.235.326-.933.913-.933 2.197 0 1.283.956 2.523 1.09 2.691.132.173 1.827 2.72 4.457 3.696 2.629.973 2.973.65 3.509.61.536-.04 1.729-.705 1.973-1.392.244-.689.244-1.273.173-1.392-.07-.12-.267-.194-.556-.347-.289-.154-1.729-.855-1.995-.956-.266-.102-.46-.153-.654.153-.193.306-.748.96-.916 1.155-.168.195-.336.206-.625.07-.29-.137-1.223-.451-2.33-1.439-.86-.748-1.444-1.663-1.611-1.951-.168-.289-.017-.43.128-.587.131-.134.289-.35.434-.525.148-.176.197-.297.296-.493.1-.195.05-.373-.025-.525-.075-.152-.659-1.63-.927-2.22Z" />
            </svg>
            Chat With Us
          </a>
        </div>
      </div>

      {/* Hero Cards */}
      <div className="relative">
        <HeroCards />
        {/* Optional Accent Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 rounded-full blur-2xl opacity-30 -z-10"></div>
      </div>
    </section>
  );
};
