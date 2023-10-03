import { prisma } from "@/lib/database/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { id } = await req.json();
  const texto = await prisma.textos.findFirst({ where: { id: id } });
  return NextResponse.json(texto, { status: 200 });
}
