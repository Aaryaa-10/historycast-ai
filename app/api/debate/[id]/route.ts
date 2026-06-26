import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function DELETE(
  req: Request,
  { params }: Props
) {
  const { id } = await params;

  await prisma.debate.delete({
    where: {
      id,
    },
  });

  return NextResponse.json({
    success: true,
  });
}