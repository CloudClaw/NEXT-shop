import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
  const packageTypes = await prisma.packageType.findMany();

  return NextResponse.json(packageTypes);
}