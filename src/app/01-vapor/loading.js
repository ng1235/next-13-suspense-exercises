import React from "react";

import { range } from "@/utils";

import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";

async function VaporExerciseLoading() {
  let placeholderGames = range(0, 12);

  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
      </header>
      <div className="game-grid">
        {placeholderGames.map((_, key) => (
          <LibraryGameCardSkeleton key={key} />
        ))}
      </div>
    </section>
  );
}

export default VaporExerciseLoading;
