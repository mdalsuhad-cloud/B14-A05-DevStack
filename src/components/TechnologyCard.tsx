import React from "react";
import type { Technology } from "../data/technologies";

interface TechnologyCardProps {
  technology: Technology;
  onAddToStack: (technology: Technology) => void;
  isSelected: boolean;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  technology,
  onAddToStack,
  isSelected,
}) => {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-base-200 p-3">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="badge badge-primary badge-sm">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-5 text-xl font-bold text-base-content">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-base-content/70">
        {technology.description}
      </p>

      {/* Category + Difficulty */}
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="badge badge-outline">
          {technology.category}
        </span>

        <span className="badge badge-ghost">
          {technology.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-lg text-warning">★</span>

        <span className="text-sm font-semibold">
          {technology.rating}
        </span>

        <span className="text-xs text-base-content/50">
          / 5.0
        </span>
      </div>

      {/* Add Button */}
      <button
  type="button"
  onClick={() => onAddToStack(technology)}
  disabled={isSelected}
  className="mt-5 w-full rounded-lg bg-[#001f3f] px-4 py-3 font-semibold text-white transition hover:bg-[#003366] disabled:bg-[#001f3f] disabled:text-white"
>
  {isSelected ? "✓ Added to Stack" : "+ Add to Stack"}
</button>
    </div>
  );
};

export default TechnologyCard;