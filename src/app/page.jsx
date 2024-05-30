import ProductsCart from "@/components/ProductsCart";
import { ProductsModel } from "@/libs/productsModel";

const loadProducts = async () => {
  return await ProductsModel.findAll();

  // const res = await fetch("http://localhost:3000/api/products");
  // const data = await res.json();
  // return data;
};

async function HomePage() {
  const products = await loadProducts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center pt-5">
        Lista de Productos
      </h1>
      <ProductsCart products={products} />
    </div>
  );
}

export default HomePage;
