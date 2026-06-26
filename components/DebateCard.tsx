import SpeakButton from "./speakButton";

type Props = {
  speaker: string;
  content: string;
};

export default function DebateCard({
  speaker,
  content,
}: Props) {
  return (
    <div
      className="
        bg-[#FAF7F4]
        border
        border-[#F2B1AB]
        rounded-2xl
        p-6
        mb-5
        shadow-sm
        hover:shadow-md
        transition
      "
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3
            className="
              font-bold
              text-xl
              text-[#A32025]
            "
          >
            {speaker}
          </h3>

          <div
            className="
              h-1
              w-12
              bg-[#C9653A]
              rounded-full
              mt-1
            "
          />
        </div>

        <SpeakButton text={content} speaker={speaker} />
      </div>

      <p
        className="
          whitespace-pre-wrap
          text-gray-700
          leading-8
        "
      >
        {content}
      </p>
    </div>
  );
}