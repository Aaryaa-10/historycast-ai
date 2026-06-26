import { prisma } from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function GET() {
    const debates = await prisma.debate.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return NextResponse.json(debates);
}