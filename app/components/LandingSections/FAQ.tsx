import React from "react";
import CustomAccordion from "@/app/components/molecules/Accordion";

const FAQ = () => {
  return (
    <div className="text-center my-8">
      <h3 className="capitalize font-bold my-5">frequently asked questions</h3>
      <div>
        SolarMetrix is a team of top experienced data scientists and experts who
        are out to help solar companies make well-informed decisions through:
      </div>
      <div role="accordion" className="max-w-[500px] mx-auto">
        <CustomAccordion />
      </div>
    </div>
  );
};

export default FAQ;
