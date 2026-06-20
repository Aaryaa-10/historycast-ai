export function generateDebate(
  topic: string,
  figures: string[]
) {
  return `
Topic: ${topic}

Einstein:
AI can assist teachers but should not replace human wisdom.

Gandhi:
Education is deeply human. Machines should help, not replace teachers.
`;
}