import React from "react";
import type { Technology } from "../data/technologies";

interface StackSidebarProps {
  selectedTechnologies: Technology[];
  onRemoveFromStack: (id: number) => void;
  onRemoveAll: () => void;
}

const StackSidebar: React.FC<StackSidebarProps> = ({
  selectedTechnologies,
  onRemoveFromStack,
  onRemoveAll,
}) => {
  const count = selectedTechnologies.length;

  return (
    <aside className="w-full">
      <div className="sticky top-40 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
        
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-base-content">
            Your Stack
          </h2>

          <span className=" text-black">
            {count}
          </span>
        </div>

        {/* Count */}
        <p className="mt-2 text-sm text-base-content/60">
          {count === 0
            ? "No technologies selected"
            : `${count} ${
                count === 1 ? "Technology" : "Technologies"
              } Selected`}
        </p>

        {/* Empty State */}
        {count === 0 && (
          <div className="mt-6 rounded-xl border border-dashed border-base-300 bg-base-200/50 p-6 text-center">
            
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-base-100 text-2xl shadow-sm">
              🧩
            </div>

            <h3 className="mt-4 font-semibold text-base-content">
              Your Stack is empty
            </h3>

          </div>
        )}

        {/* Selected Technologies */}
        {count > 0 && (
          <>
            <div className="mt-5 space-y-3">
              {selectedTechnologies.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center gap-3 rounded-xl border border-base-300 bg-base-100 p-3"
                >
                  
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-base-200 p-2">
                    <img
                      src={technology.icon}
                      alt={`${technology.name} icon`}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Name + Category */}
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-semibold text-base-content">
                      {technology.name}
                    </h3>

                    <p className="text-xs text-base-content/50">
                      {technology.category}
                    </p>
                  </div>

                  {/* Remove Single */}
                  <button
                    type="button"
                    onClick={() =>
                      onRemoveFromStack(technology.id)
                    }
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-lg font-bold text-red-500 transition hover:bg-red-50 hover:text-red-700"
                    aria-label={`Remove ${technology.name}`}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Remove All */}
            <button
              type="button"
              onClick={onRemoveAll}
              className="mt-5 w-full rounded-lg border border-red-500 px-4 py-2.5 font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </aside>
  );
};

export default StackSidebar;