import { useState } from "react";

import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

import type { Technology } from "./data/technologies";

function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);

  // Add Technology
  const handleAddToStack = (technology: Technology) => {
    setSelectedTechnologies((prev) => {
      const alreadyAdded = prev.some(
        (item) => item.id === technology.id
      );

      if (alreadyAdded) {
        alert(`${technology.name} is already in your stack!`);
        return prev;
      }

      return [...prev, technology];
    });
  };

  // Remove Single Technology
  const handleRemoveFromStack = (id: number) => {
    setSelectedTechnologies((prev) =>
      prev.filter((technology) => technology.id !== id)
    );
  };

  // Remove All Technologies
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  
  return (
    <>
      <Nav />
      <Banner />

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <Technologies
            selectedTechnologies={selectedTechnologies}
            onAddToStack={handleAddToStack}
          />

          <StackSidebar
            selectedTechnologies={selectedTechnologies}
            onRemoveFromStack={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </main>

      {/* 👇 Footer এখানে থাকবে */}
      <Footer />
    </>
  );
}

export default App;