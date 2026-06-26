import { figures } from "@/data/figures";
//import { prisma } from "../lib/prisma";
import { askGemini } from "@/lib/ai/gemini";

import {
  buildFigurePrompt,

  buildMemoryPrompt,
  buildSummaryPrompt,
} from "./promptBuilder";

import { Debate, DebateMessage } from "@/types/debate";


export async function generateDebate(
  topic: string,
  selectedFigures: string[]
) {
  const selected = figures.filter((figure) =>
    selectedFigures.includes(figure.id)
  );

 const messages: DebateMessage[] = [];

  messages.push({
  speaker: "Moderator",
  content: `Welcome everyone. Today's topic is "${topic}".`,
  type: "moderator",
});


  let debateContext = "";


  for (let i = 0; i < selected.length; i++) {
    const figure = selected[i];

    let prompt = "";

    if (i === 0) {
      prompt = buildFigurePrompt(
        figure.name,
        figure.beliefs,
        figure.speakingStyle,
        topic
      );
    } else {
      prompt = buildMemoryPrompt(
        figure.name,
        figure.beliefs,
        figure.speakingStyle,
        topic,
        debateContext
      );
    }
const response = await askGemini(prompt);

messages.push({
  speaker: figure.name,
  content: response,
  type: "figure",
});

debateContext += ` ${figure.name}:
${response}`;

  

  }

  const summaryPrompt = buildSummaryPrompt(
    topic,
    debateContext
  );

  const summaryResponse =
  await askGemini(summaryPrompt);

messages.push({
  speaker: "Moderator Summary",
  content: summaryResponse,
  type: "moderator",
});
  
//await prisma.debate.create({
 // data: {
   // topic,
   // transcript: JSON.stringify(messages),
 // },

//});
return {
  topic,
  messages,

} as Debate;
}
