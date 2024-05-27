const { NextResponse } = require("next/server");
import { ProductsModel } from "@/libs/productsModel";

export const GET = async (req, { params }) => {
  try {
    const getProductFindById = await ProductsModel.findById(params.id);

    if (!getProductFindById) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(getProductFindById);
  } catch (err) {
    console.error("Error fetching product by ID:", err);
    return NextResponse({ error: "Internal Server Error" }, { status: 500 });
  }
};

export const PATCH = (req, { params }) => {
  return NextResponse.json({ message: "Product Api PATCH" });
};
