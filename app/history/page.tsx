import { prisma } from "@/lib/prisma";

import { Mic } from "lucide-react";
import HistoryCard from "@/components/HistoryCard";

export default async function HistoryPage() {
  const debates = await prisma.debate.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-10">
        <h1
          className="
            text-5xl
            font-bold
            text-[#A32025]
            mb-3
          "
        >
          Debate History
        </h1>

        <p className="text-gray-600">
          Revisit past conversations between
          history's greatest minds.
        </p>
      </div>

      {debates.length === 0 ? (
        <div
          className="
            bg-white
            border
            border-[#F2B1AB]
            rounded-3xl
            p-10
            text-center
          "
        >
          <Mic
            size={50}
            className="
              mx-auto
              mb-4
              text-[#A32025]
            "
          />

          <h2
            className="
              text-2xl
              font-bold
              text-[#A32025]
              mb-2
            "
          >
            No Debates Yet
          </h2>

          <p className="text-gray-600">
            Generate your first historical debate
            to see it here.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {debates.map((debate) => (
  <HistoryCard
    key={debate.id}
    debate={debate}
  />
))}
          
        </div>
      )}
    </main>
  );
}