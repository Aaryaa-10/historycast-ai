"use client";

import { Play, Square } from "lucide-react";

type Props = {
  text: string;
  speaker: string;
};

export default function SpeakButton({
  text,
  speaker,
}: Props) {
  const voices = speechSynthesis.getVoices();

  const getVoice = (name: string) =>
    voices.find((voice) =>
      voice.name.includes(name)
    );

  const getVoiceSettings = () => {
    switch (speaker.toLowerCase()) {
      case "moderator":
        return {
          voice: getVoice("Microsoft Mark"),
          rate: 1,
          pitch: 1,
        };

      case "albert einstein":
        return {
          voice: getVoice("Microsoft David"),
          rate: 0.82,
          pitch: 0.85,
        };

      case "mahatma gandhi":
        return {
          voice: getVoice("Microsoft Ravi"),
          rate: 0.78,
          pitch: 1.05,
        };

      case "cleopatra":
        return {
          voice: getVoice("Microsoft Zira"),
          rate: 0.95,
          pitch: 1.2,
        };

      case "napoleon":
        return {
          voice: getVoice("Google UK English Male"),
          rate: 1.08,
          pitch: 0.9,
        };

      case "socrates":
        return {
          voice: getVoice("Google UK English Male"),
          rate: 0.82,
          pitch: 0.92,
        };

      case "aristotle":
        return {
          voice: getVoice("Microsoft David"),
          rate: 0.9,
          pitch: 0.95,
        };

      case "charles darwin":
        return {
          voice: getVoice("Microsoft Mark"),
          rate: 0.88,
          pitch: 0.9,
        };

      case "martin luther king jr.":
        return {
          voice: getVoice("Microsoft David"),
          rate: 0.9,
          pitch: 0.88,
        };

      default:
        return {
          voice: getVoice("Microsoft David"),
          rate: 1,
          pitch: 1,
        };
    }
  };

  const handleSpeak = () => {
    speechSynthesis.cancel();

    const settings = getVoiceSettings();

    const utterance =
      new SpeechSynthesisUtterance(text);

    utterance.voice = settings.voice ?? null;
    utterance.rate = settings.rate;
    utterance.pitch = settings.pitch;

    speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleSpeak}
        className="
          bg-[#A32025]
          hover:bg-[#8A1B1F]
          text-white
          px-4
          py-2
          rounded-xl
          flex
          items-center
          gap-2
          transition
        "
      >
        <Play size={16} />
        Play
      </button>

      <button
        onClick={() => speechSynthesis.cancel()}
        className="
          border
          border-[#F2B1AB]
          px-4
          py-2
          rounded-xl
          hover:bg-[#FAF7F4]
          transition
        "
      >
        <Square size={16} />
      </button>
    </div>
  );
}