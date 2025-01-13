// import { Statistics } from "./Statistics";
import pilot from "../assets/paes_outing1.jpg";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt="Pilot illustration"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                PAES Comprehensive Academy
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                PAES Comprehensive Academy is a prestigious private educational 
                institution located in Nigeria, dedicated to nurturing young minds 
                and fostering holistic development. Catering to both primary and 
                secondary school students, our mission is to provide a world-class 
                education that empowers students to achieve excellence in academics, 
                character, and leadership.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                At PAES Comprehensive Academy, we believe that education is the 
                foundation for success, and our motto, 
                <strong> "I Will Make It," </strong> embodies the spirit of 
                determination, resilience, and self-belief that we instill in every 
                student. This guiding principle drives our commitment to creating an 
                environment where every learner is inspired to dream big, work hard, 
                and excel in all areas of life.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                Our curriculum is designed to meet international standards while 
                aligning with the Nigerian educational framework. With highly qualified 
                teachers, modern teaching methodologies, and state-of-the-art facilities, 
                we ensure that our students excel academically while also developing 
                strong moral values and leadership qualities.
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
