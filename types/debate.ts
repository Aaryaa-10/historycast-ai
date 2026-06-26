export interface DebateMessage {
  speaker: string;
  content: string;
  type: "moderator" | "figure";
}

export interface Debate {
  topic: string;
  messages: DebateMessage[];
}
