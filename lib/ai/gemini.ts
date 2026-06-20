import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("SERVER KEY:", process.env.GEMINI_API_KEY);

const genAi = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY!
);

export async function askGemini(
    prompt: string

) {
    const model = genAi.getGenerativeModel({
        model : "gemini-2.5-flash",
    
    });

    const result = await model.generateContent(
        prompt
    );

    return result.response.text();
}