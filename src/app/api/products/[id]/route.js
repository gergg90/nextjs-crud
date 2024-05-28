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

export const PATCH = async (req, { params }) => {
  const body = await req.json();

  const productUpdate = await ProductsModel.update(params.id, body);

  return NextResponse.json(productUpdate);
};

export const DELETE = async (req, { params }) => {
  try {
    const deleteProduct = await ProductsModel.delete(params.id);
    return NextResponse.json({
      product: deleteProduct,
      message: "Product deleted successfully",
    });
  } catch (e) {
    return NextResponse.json(e.message);
  }
};
