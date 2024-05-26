import { NextResponse } from "next/server";
import { CategoryModel } from "./categoryModel";

export const GET = async () => {
  const categories = await CategoryModel.findAll();

  return NextResponse.json(categories);
};

export const POST = () => {
  return NextResponse.json({ message: "Category Api POST" });
};
