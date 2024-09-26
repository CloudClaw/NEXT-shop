import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	const users = await prisma.user.findMany(); //Получаем из базы user с помощью призмы
	return NextResponse.json(users); //Достаем в виде json
}

export async function POST(req: NextRequest) {
	const data = await req.json();

	const user = await prisma.user.create({
		data,
	});

    return user;
}
