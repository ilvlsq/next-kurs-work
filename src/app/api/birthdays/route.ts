import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { options } from "../auth/[...nextauth]/options";

export async function POST(req: any) {
  const session = await getServerSession(options);
  try {
    const data = await req.json();
    await prisma.birthdaysList.create({
      data: {
        name: data.name,
        date: data.date,
        owner: {
          connect: { email: session?.user?.email! },
        },
      },
    });

    return NextResponse.json({ message: "Birthday created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req: any) {
  try {
    const data = await req.json();
    await prisma.birthdaysList.delete({
      where: { id: data },
    });

    return NextResponse.json({ message: "Birthday deleted" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
