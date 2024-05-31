"use client";

import { useRouter } from "next/navigation";

function ProductCart({ product }) {
  const route = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:bg-slate-400 cursor-pointer"
        key={product.id}
      >
        <img
          src={product.images}
          alt={product.title}
          className="w-64 rounded-lg mb-4"
        />
        <h3 className="text-gray-700 font-bold text-lg mb-2">
          {product.title}
        </h3>
        <p className="text-gray-600 mb-4 ">{product.description} </p>
        <div className="flex justify-between items-center gap-2">
          <span className="text-gray-700 font-bold">S/. {product.price}</span>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">
            Añadir al carrito
          </button>
          <button
            className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600"
            onClick={() => route.push(`/product/edit/${product.id}`)}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
