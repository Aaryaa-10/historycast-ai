type Props = {
  name: string;
  era: string;
  selected: boolean;
  description: string;
};

export default function FigureCard({
  name,
  era,
  selected,
  description,
}: Props) {
  return (
    <div
      className={`
        p-6
        rounded-2xl
        cursor-pointer
        transition-all
        duration-300
        border
        shadow-sm
        hover:shadow-lg
        hover:-translate-y-1

        ${
          selected
            ? "bg-[#F2B1AB] border-[#A32025]"
            : "bg-white border-[#E5E7EB]"
        }
      `}
    >
      <h2
        className={`
          text-2xl
          font-bold
          mb-2

          ${
            selected
              ? "text-[#A32025]"
              : "text-gray-900"
          }
        `}
      >
        {name}
      </h2>

      <p
        className={`
          text-sm
          font-medium
          mb-3

          ${
            selected
              ? "text-[#8A1B1F]"
              : "text-gray-600"
          }
        `}
      >
        {era}
      </p>

      <p
        className={`
          text-sm
          leading-relaxed

          ${
            selected
              ? "text-[#5B2A2D]"
              : "text-gray-500"
          }
        `}
      >
        {description}
      </p>

      {selected && (
        <div className="mt-4">
          <span
            className="
              bg-[#A32025]
              text-white
              text-xs
              px-3
              py-1
              rounded-full
            "
          >
            Selected
          </span>
        </div>
      )}
    </div>
  );
}