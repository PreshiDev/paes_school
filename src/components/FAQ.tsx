import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What are the school admission requirements?",
    answer:
      "To apply for admission, students must submit a completed application form, birth certificate, recent school reports, and a valid ID.",
    value: "item-1",
  },
  {
    question: "What extracurricular activities does the school offer?",
    answer:
      "Our school offers a variety of extracurricular activities, including sports, music, drama, and clubs focused on science, technology, and arts.",
    value: "item-2",
  },
  {
    question: "How can I contact my child's teacher?",
    answer:
      "You can reach your child's teacher via email, phone, or by scheduling a meeting through our online parent-teacher scheduling system.",
    value: "item-3",
  },
  {
    question: "What is the school's policy on holidays?",
    answer:
      "The school observes public holidays, as well as additional breaks during the mid-term and end of term. A full holiday schedule is provided at the start of each term.",
    value: "item-4",
  },
  {
    question: "How does the school support students with special needs?",
    answer:
      "We provide personalized support for students with special needs, including resource teachers, speech therapists, and counselors to assist with learning and development.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
