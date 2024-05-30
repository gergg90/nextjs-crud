import ProductCart from "@/components/ProductCart";
import { ProductsModel } from "@/libs/productsModel";

const loadProductId = async (id) => {
  return ProductsModel.findById(id);
};

async function ProductId({ params }) {
  const product = await loadProductId(params.id);

  return <ProductCart product={product} />;
}

export default ProductId;
