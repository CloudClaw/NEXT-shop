import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.get("query") || "";
	const products = await prisma.product.findMany({
		// Найти все, где name includes и не чувствительно к регистру
		where: {
			name: {
				contains: query,
				mode: "insensitive",
			},
		},
            take: 5
	});

	return NextResponse.json(products);
}
