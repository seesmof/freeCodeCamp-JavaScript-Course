import React from "react";
import StructureImage from "/structure-image.jpg";

const StructureHomework = () => {
  const model = {
    name: "Emily Johnson",
    description:
      "Emily Johnson is a professional model with years of experience in the industry. She has worked with some of the biggest names in fashion and beauty, and her portfolio is a testament to her talent and dedication.",
    employmentHistory: [
      "Victoria's Secret Fashion Show",
      "CoverGirl campaign",
      "Vogue Italia editorial",
      "L'Oreal Paris commercial",
      "Calvin Klein runway show",
    ],
    alertMessage:
      "Be cautious of fake modeling opportunities. Scammers often use social media and messaging apps to lure aspiring models with promises of jobs and wages that are too good to be true. Always research the company and ask for a list of clients and models they have worked with. Never pay an agency upfront and be wary of vague job descriptions or unusual email domains. Protect yourself and your career by staying informed and vigilant.",
  };

  return (
    <>
      <section className="section-template">
        <h2 className="section-heading">Structure</h2>

        <div className="gray-card">
          <div className="lg:gap-6 xl:gap-8 flex flex-row w-full gap-4">
            <img
              src={StructureImage}
              alt="image of a woman"
              className="rounded-xl object-cover w-[30%] lg:w-[25%] 2xl:w-[20%] hidden md:block"
            />

            <div className="flex flex-col justify-between flex-1">
              <h3 className="text-xl font-medium">{model.name}</h3>
              <p className="py-3">{model.description}</p>
              <h4 className="pb-2 font-medium">Employment history:</h4>
              {model.employmentHistory.map((item, index) => (
                <li className="text-sm md:text-base" key={index}>
                  {item}
                </li>
              ))}
              <button
                className="button button-gray mt-3"
                type="button"
                onClick={() => alert(model.alertMessage)}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StructureHomework;
