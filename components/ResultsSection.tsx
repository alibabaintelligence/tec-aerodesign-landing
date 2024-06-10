import React from "react";
import ResultCard from "./ResultCard";

const resultsData = [
  {
    id: 1,
    imgUrl: "",
    title: "Temporada 2023-2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et diam pretium, imperdiet odio sed, commodo elit.",
  },
  {
    id: 2,
    imgUrl: "",
    title: "Temporada 2022-2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et diam pretium, imperdiet odio sed, commodo elit.",
  },
  {
    id: 3,
    imgUrl: "",
    title: "Temporada 2022-2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et diam pretium, imperdiet odio sed, commodo elit.",
  },
  {
    id: 4,
    imgUrl: "",
    title: "Temporada 2020-2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et diam pretium, imperdiet odio sed, commodo elit.",
  },
];

const ResultsSection = () => {
  return (
    <section id="results">
      <div className="mb-16 mt-24 mx-20">
        <div className="w-full flex justify-center">
          <h1 className="text-4xl mb-6 mt-10 font-bold tracking-tight bg-gradient-to-t from-[#ED0000] to-[#FF4141] text-transparent bg-clip-text">
            Resultados Pasados
          </h1>
        </div>
        <p className="text-black text-lg font-semibold tracking-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et diam
          pretium, imperdiet odio sed, commodo elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam sollicitudin sit amet odio nec
          pretium.
        </p>
        <div className="md:grid md:grid-cols-2 gap-8 items-center pt-14 px-4 place-items-center">
          {resultsData.map((result) => (
            <ResultCard
              key={result.id}
              description={result.description}
              imgUrl={result.imgUrl}
              title={result.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
