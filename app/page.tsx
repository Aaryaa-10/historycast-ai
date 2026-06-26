"use client";

import { useState } from "react";

import FigureCard from "@/components/FigureCard";
import DebateCard from "@/components/DebateCard";
import PlayDebateButton from "@/components/PlayDebateButton";

import { figures } from "@/data/figures";
import { Debate } from "@/types/debate";

import { toast } from "sonner";

export default function Home() {
  const [topic, setTopic] = useState("");

  const [selectedFigures, setSelectedFigures] =
    useState<string[]>([]);

  const [debate, setDebate] =
    useState<Debate | null>(null);

  const [loading, setLoading] =
    useState(false);

  const handleFigureClick = (
    figureId: string
  ) => {
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

  const handleStartDebate = async () => {
    try {
      setLoading(true);

      setDebate(null);

      const response = await fetch(
        "/api/debate",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            topic,
            selectedFigures,
          }),
        }
      );

      if (!response.ok) {
        const errorData =
          await response.json();

        toast.error(
          errorData.error ||
          "Failed to generate debate"
        );

        return;
      }

      const data = await response.json();

      setDebate(data);
      toast.success(
        "Debate generated successfully!"
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-8 max-w-6xl mx-auto">
      
      <div
        className="
          bg-gradient-to-r
          from-[#FAF7F4]
          via-[#F2B1AB]
          to-[#94A9D8]
          rounded-3xl
          p-8
          mb-10
          shadow-sm
        "
      >
        <h2
          className="
            text-4xl
            font-bold
            text-[#A32025]
            mb-3
          "
        >
          Create Historical Debates
        </h2>

        <p
          className="
            text-gray-700
            mb-6
            text-lg
          "
        >
          Let history's greatest minds
          debate modern questions.
        </p>

        <input
          type="text"
          placeholder="Should AI replace teachers?"
          value={topic}
          onChange={(e) =>
            setTopic(e.target.value)
          }
          className="
            w-full
            p-4
            rounded-xl
            border
            border-[#F2B1AB]
            bg-white
            focus:outline-none
            focus:ring-2
            focus:ring-[#C9653A]
            mb-6
          "
        />

        <button
          onClick={handleStartDebate}
          disabled={
            loading ||
            !topic.trim() ||
            selectedFigures.length < 2
          }
          className="
            bg-[#A32025]
            hover:bg-[#8A1B1F]
            disabled:opacity-70
            disabled:cursor-not-allowed
            text-white
            px-8
            py-4
            rounded-xl
            font-semibold
            transition
            shadow-md
            flex
            items-center
            gap-3
          "
        >
          {loading && (
            <div
              className="
                h-5
                w-5
                border-2
                border-white
                border-t-transparent
                rounded-full
                animate-spin
              "
            />
          )}

          {loading
            ? "Generating Debate..."
            : "Start Debate"}
        </button>

        {selectedFigures.length < 2 && (
          <p
            className="
              text-sm
              text-gray-600
              mt-3
            "
          >
            Select at least 2 figures to
            start a debate.
          </p>
        )}
      </div>

      <h2
        className="
          text-2xl
          font-bold
          text-[#A32025]
          mb-4
        "
      >
        Select Historical Figures
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {figures.map((figure) => (
          <div
            key={figure.id}
            onClick={() =>
              handleFigureClick(
                figure.id
              )
            }
          >
            <FigureCard
              name={figure.name}
              era={figure.era}
              description={
                figure.description
              }
              selected={selectedFigures.includes(
                figure.id
              )}
            />
          </div>
        ))}
      </div>

      {loading && (
        <div
          className="
            mt-10
            bg-white
            border
            border-[#F2B1AB]
            rounded-3xl
            p-8
            shadow-sm
          "
        >
          <h2
            className="
              text-2xl
              font-bold
              text-[#A32025]
              mb-6
            "
          >
            Preparing Debate...
          </h2>

          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="
                  h-28
                  rounded-2xl
                  bg-gray-100
                  animate-pulse
                "
              />
            ))}
          </div>
        </div>
      )}

      {!loading && debate && (
        <div
          className="
            mt-10
            bg-white
            border
            border-[#F2B1AB]
            rounded-3xl
            p-8
            shadow-sm
          "
        >
          <h2
            className="
              text-3xl
              font-bold
              text-[#A32025]
              mb-6
            "
          >
            🎙 Debate Transcript
          </h2>

          <PlayDebateButton
            messages={
              debate.messages ?? []
            }
          />

          {debate.messages.map(
            (message, index) => (
              <DebateCard
                key={index}
                speaker={
                  message.speaker
                }
                content={
                  message.content
                }
              />
            )
          )}
        </div>
      )}

      <div
        className="
          mt-8
          bg-white
          border
          border-[#94A9D8]
          rounded-2xl
          p-6
          shadow-sm
        "
      >
        <h3
          className="
            text-lg
            font-bold
            text-[#A32025]
            mb-3
          "
        >
          Selected Figures
        </h3>

        {selectedFigures.length >
        0 ? (
          <div className="flex flex-wrap gap-2">
            {selectedFigures.map(
              (figure) => (
                <span
                  key={figure}
                  className="
                    bg-[#94A9D8]
                    text-white
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-medium
                  "
                >
                  {figure}
                </span>
              )
            )}
          </div>
        ) : (
          <p className="text-gray-500">
            No figures selected yet.
          </p>
        )}
      </div>
    </main>
  );
}