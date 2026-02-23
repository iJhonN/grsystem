import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const data = await request.json();
  
  try {
    const novaOS = await prisma.ordemServico.create({
      data: {
        numeroOs: data.numeroOs,
        placa: data.placa,
        // ... outros campos
      }
    });
    return NextResponse.json(novaOS);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao salvar OS' }, { status: 500 });
  }
}