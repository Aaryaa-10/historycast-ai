"use client";
//import { toast } from "sonner";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";



type Props = {
  debate: {
    id: string;
    topic: string;
    createdAt: Date;
  };
};

export default function HistoryCard({
  debate,
}: Props) {
  const router = useRouter();

  const handleDelete = async (
    e: React.MouseEvent
  ) => {
    e.preventDefault();

    const confirmed = window.confirm(
      "Delete this debate?"
    );

    if (!confirmed) return;

    try {
      await fetch(
        `/api/debate/${debate.id}`,
        {
          method: "DELETE",
        }
      );

      router.refresh();
    } catch (error) {
      console.error(error);

      alert(
        "Failed to delete debate."
      );
    }
  };

  return (
    <Link
      href={`/history/${debate.id}`}
      className="
        flex
        items-center
        justify-between
        bg-white
        border
        border-[#F2B1AB]
        rounded-2xl
        p-5
        hover:shadow-md
        transition
      "
    >
      <div>
        <h2
          className="
            font-bold
            text-xl
            text-[#A32025]
          "
        >
          {debate.topic}
        </h2>

        <p className="text-gray-500 mt-1">
  {new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(debate.createdAt))}
</p>
      </div>

      <button
        onClick={handleDelete}
        className="
          p-3
          rounded-xl
          border
          border-red-300
          text-red-600
          hover:bg-red-50
          transition
        "
      >
        <Trash2 size={20} />
      </button>
    </Link>
  );
}