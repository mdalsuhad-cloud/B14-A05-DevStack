import React from "react";
import TechnologyCard from "./TechnologyCard";
import { technologies } from "../data/technologies";
import type { Technology } from "../data/technologies";

interface TechnologiesProps {
  selectedTechnologies: Technology[];
  onAddToStack: (technology: Technology) => void;
}

const Technologies: React.FC<TechnologiesProps> = ({
  selectedTechnologies,
  onAddToStack,
}) => {
  return (
    <section className="w-full">
        
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-base-content">
          Explore Technologies
        </h1>

        <p className="mt-2 text-base text-base-content/60">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {technologies.map((technology) => {
          const isSelected = selectedTechnologies.some(
            (item) => item.id === technology.id
          );

          return (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAddToStack={onAddToStack}
              isSelected={isSelected}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;