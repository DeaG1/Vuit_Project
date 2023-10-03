import { prisma } from "@/lib/database/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = await req.nextUrl.searchParams.get("id");
  const texto = await prisma.textos.findFirst({
    where: { id: parseInt(id as string) },
  });
  return NextResponse.json(texto, { status: 200 });
}
export async function POST(req: NextRequest) {
  const { texto } = await req.json();

  if (!texto)
    return NextResponse.json({ error: "Faltando Campos" }, { status: 400 });

  const textoCriado = await prisma.textos.create({
    data: {
      texto: texto,
    },
  });

  return NextResponse.json(textoCriado, { status: 201 });
}
