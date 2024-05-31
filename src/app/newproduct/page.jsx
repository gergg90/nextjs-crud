"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewProduct({ params }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0.0);
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(1);
  const [images, setImages] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      fetch(`/api/products/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title),
            setPrice(data.price),
            setDescription(data.description),
            setCategoryId(data.categoryId),
            setImages(data.images);
        });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      title,
      price,
      description,
      categoryId,
      images,
    };

    if (params.id) {
      try {
        const response = await fetch(`/api/products/${params.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productData),
        });

        if (response.ok) {
          const data = response.json();
          console.log(`Product editing successfully`, data);

          setTitle("");
          setPrice(0.0);
          setDescription("");
          setCategoryId(0);
          setImages("");
        } else {
          console.error();
        }
      } catch (e) {
        console.error("request error", e);
        "Error en la creacion del producto", response.statusText;
      }
    } else {
      try {
        const response = await fetch("/api/products", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(productData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Product created successfully", data);

          setTitle("");
          setPrice(0.0);
          setDescription("");
          setCategoryId(0);
          setImages("");
        } else {
          console.error(
            "Error en la creacion del producto",
            response.statusText
          );
        }
      } catch (e) {
        console.error("request error", e);
      }
    }

    router.push("/");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Price:
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          step="0.01"
          min="0"
          max="100"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-gray-700 font-bold mb-2"
        >
          Category:
        </label>
        <select
          id="category"
          value={categoryId}
          onChange={(e) => setCategoryId(parseInt(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="1">Franelas</option>
          <option value="2">Pantalones</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="images" className="block text-gray-700 font-bold mb-2">
          Images (Comma separated URLs):
        </label>
        <input
          type="text"
          id="images"
          value={images}
          onChange={(e) => setImages(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button className="border border-solid border-white p-4 w-full rounded">
        Enviar
      </button>
    </form>
  );
}

export default NewProduct;
