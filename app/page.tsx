"use client";
import { Mic } from "lucide-react";


import { useState } from "react";
import FigureCard from "@/components/FigureCard";
import { figures } from "@/data/figures";
import { generateDebate } from "@/services/debateService";
export default function Home() {
  const [topic, setTopic] = useState("");

  const [selectedFigures, setSelectedFigures] =
    useState<string[]>([]);

    const [debate, setDebate] = useState("");

  const handleFigureClick = (figureId: string) => {
    if (selectedFigures.includes(figureId)) {
      setSelectedFigures(
        selectedFigures.filter(
          (id) => id !== figureId
        )
      );
    } else {
      setSelectedFigures([
        ...selectedFigures,
        figureId,
      ]);
    }
  };

  const transcript = generateDebate(
  topic,
  selectedFigures
);

setDebate(transcript);

  return (
    <main className="p-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-8">
  <Mic size={40} strokeWidth={2.5} />


  <h1 className="text-4xl font-bold">
    HistoryCast AI
  </h1>
</div>

      <input
        type="text"
        placeholder="Should AI replace teachers?"
        value={topic}
        onChange={(e) =>
          setTopic(e.target.value)
        }
        className="border rounded-lg p-3 w-full mb-8"
      />

      <h2 className="text-2xl font-semibold mb-4">
        Select Historical Figures
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {figures.map((figure) => (
          <div
            key={figure.id}
            onClick={() =>
              handleFigureClick(figure.id)
            }
          >
            <FigureCard
              name={figure.name}
              era={figure.era}
              selected={selectedFigures.includes(
                figure.id
              )}
            />
          </div>
        ))}
      </div>

      <button
  onClick={handleStartDebate}
  className="mt-8 bg-black text-white px-6 py-3 rounded-lg"
>
  Start Debate
</button>

{debate && (
  <div className="mt-10 border rounded-lg p-6">
    <h2 className="text-2xl font-bold mb-4">
      Debate Transcript
    </h2>

    <pre className="whitespace-pre-wrap">
      {debate}
    </pre>
  </div>
)}

      <div className="mt-6">
        <h3 className="font-bold">
          Selected Figures:
        </h3>

        <p>
          {selectedFigures.length > 0
            ? selectedFigures.join(", ")
            : "None"}
        </p>
      </div>
    </main>
  );
}