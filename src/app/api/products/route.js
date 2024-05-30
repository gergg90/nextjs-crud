import { ProductsModel } from "@/libs/productsModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  const getProducts = await ProductsModel.findAll();

  return NextResponse.json(getProducts);
};

export const POST = async (req) => {
  try {
    const data = await req.json();

    const newProduct = await ProductsModel.create(data);

    return NextResponse.json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Internal Server Errorrrrrrr" },
      { status: 500 }
    );
  }
};
