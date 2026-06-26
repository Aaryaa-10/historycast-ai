import { NextResponse } from "next/server";

import { generateDebate }  from "@/services/debateService";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { topic, selectedFigures } = await req.json();
        const debate = await generateDebate(
            topic,
            selectedFigures
        );
        await prisma.debate.create({
            data: {
                topic: debate.topic,
                transcript: JSON.stringify(
                    debate.messages
                ),
            },
        });

        return NextResponse.json(debate);

        
    } catch(error) {
        console.log(error);

        return NextResponse.json(
            { error : "Failed to generate Debate"},
            {status : 500}
        );
    }
}

