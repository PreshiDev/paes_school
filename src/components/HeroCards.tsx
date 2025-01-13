import { Card } from "@/components/ui/card";
import schoolLogo from "../assets/icon1.png";

export const HeroCards = () => {
  return (
    <div className="flex justify-center items-center h-[500px] w-full">
      <Card className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl">
        <img
          src={schoolLogo}
          alt="School Logo"
          className="w-full h-full object-contain"
        />
      </Card>
    </div>
  );
};
