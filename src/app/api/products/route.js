import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ message: "Product Api" });
};

export const POST = (req) => {
  return NextResponse.json({ message: "Product Created" });
};
