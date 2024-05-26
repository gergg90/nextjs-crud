const { NextResponse } = require("next/server");

export const GET = async (req, { params }) => {
  const productID = params.id;

  const { searchParams } = new URL(req.url);
  const { name, lastname } = searchParams;

  return NextResponse.json({
    message: `ProductID ${productID}`,
    name,
    lastname,
  });
};
