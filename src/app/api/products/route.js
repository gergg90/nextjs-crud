import { ProductsModel } from "@/libs/productsModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  const getProducts = await ProductsModel.findAll();

  return NextResponse.json(getProducts);
};

export const POST = async (req) => {
  const data = await req.json();

  const newProduct = await ProductsModel.createProduct(data);

  return NextResponse.json(newProduct);
};
