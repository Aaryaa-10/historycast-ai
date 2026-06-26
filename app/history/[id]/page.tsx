import { prisma } from "@/lib/prisma";
import DebateCard from "@/components/DebateCard";
import PlayDebateButton from "@/components/PlayDebateButton";
import { Mic } from "lucide-react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DebatePage({
  params,
}: Props) {
  const { id } = await params;

  const debate = await prisma.debate.findUnique({
    where: {
      id,
    },
  });

  if (!debate) {
    return (
      <main className="max-w-6xl mx-auto p-8">
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
          <h1
            className="
              text-4xl
              font-bold
              text-[#A32025]
            "
          >
            Debate Not Found
          </h1>
        </div>
      </main>
    );
  }

  const messages = JSON.parse(
    debate.transcript
  );

  return (
    <main className="max-w-6xl mx-auto p-8">
      <div
        className="
          bg-gradient-to-r
          from-[#FAF7F4]
          via-[#F2B1AB]
          to-[#94A9D8]
          rounded-3xl
          p-8
          mb-8
        "
      >
        <div className="flex items-center gap-3 mb-4">
          <Mic
            size={32}
            className="text-[#A32025]"
          />

          <h1
            className="
              text-4xl
              font-bold
              text-[#A32025]
            "
          >
            {debate.topic}
          </h1>
        </div>

        <p className="text-gray-700">
          Created on{" "}
          {new Date(
            debate.createdAt
          ).toLocaleString()}
        </p>
      </div>

      <div
        className="
          bg-white
          border
          border-[#F2B1AB]
          rounded-3xl
          p-6
          shadow-sm
          mb-8
        "
      >
        <PlayDebateButton
          messages={messages}
        />
      </div>

      <div className="space-y-5">
        {messages.map(
          (message: any, index: number) => (
            <DebateCard
              key={index}
              speaker={message.speaker}
              content={message.content}
            />
          )
        )}
      </div>
    </main>
  );
}