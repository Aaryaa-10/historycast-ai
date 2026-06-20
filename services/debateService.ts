import { figures } from "@/data/figures";
import { buildFigurePrompt } from "./promptBuilder";

export async function generateDebate(
  topic: string,
  selectedFigures: string[]
) {
  const selected = figures.filter((figure) =>
    selectedFigures.includes(figure.id)
  );

  let transcript = `Topic: ${topic}\n\n`;

  transcript += `Moderator:\n`;
  transcript += `Welcome everyone. Today's topic is "${topic}".\n\n`;

  for (const figure of selected) {
    const prompt = buildFigurePrompt(
      figure.name,
      figure.beliefs,
      figure.speakingStyle,
      topic
    );

    const response = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    const data = await response.json();

    transcript += `${figure.name}:\n`;
    transcript += `${data.response}\n\n`;
  }

  return transcript;
}