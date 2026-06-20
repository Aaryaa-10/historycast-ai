export interface DebateMessage {
    speaker : string,
    content : string,
}

export interface Debate {
  topic: string;
  messages: DebateMessage[];
}