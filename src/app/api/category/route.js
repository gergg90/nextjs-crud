import { CategoryModel } from "@/libs/categoryModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  const getCategories = await CategoryModel.findAll();

  return NextResponse.json(getCategories);
};

export const POST = () => {
  return NextResponse.json({ message: "Category Api POST" });
};
