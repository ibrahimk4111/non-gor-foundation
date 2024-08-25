import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { activitesData } from "@/api/activities/Activities";
import ActivityCard from "../activites/activitycards/ActivityCard";
import FaqCards from "./Cards";

const Faq = () => {
  return (
    <div>
      <div className=" container mx-auto py-20 ">
        <h1 className=" font-semibold uppercase text-green-700 ">FAQ</h1>
        <hr className=" bg-white mb-10 " />
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          {activitesData &&
            activitesData.map((data, index) => (
              <FaqCards
                key={index}
                image={data.img}
                header={data.header}
                text={data.text}
              />
            ))}
        </div>

        <div className=" grid md:grid-cols-2 gap-4 mt-10">
          <Accordion type="single" collapsible className="w-full ">
            {Array.from({ length: 6 }).map((_, index) => (
              <AccordionItem value={index.toString()}>
                <AccordionTrigger className=" bg-slate-100 ">Is it accessible?</AccordionTrigger>
                <AccordionContent className=" p-4 bg-white ">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="single" collapsible className="w-full ">
            {Array.from({ length: 6 }).map((_, index) => (
              <AccordionItem value={index.toString()}>
                <AccordionTrigger className=" bg-slate-100 ">Is it accessible?</AccordionTrigger>
                <AccordionContent className=" p-4 bg-white ">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
