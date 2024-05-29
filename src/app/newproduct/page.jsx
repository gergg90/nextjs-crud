"use client";

import { useState } from "react";

function NewProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0.0);
  const [description, setDescription] = useState("");
  const [categoryID, setCategoryID] = useState(1);
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      title,
      price,
      description,
      categoryID,
      image,
    };

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Product created successfully", data);

        setTitle(""),
          setPrice(0.0),
          setDescription(""),
          setCategoryID(0),
          setImage("");
      } else {
        console.error("Error en la creacion del producto", response.statusText);
      }
    } catch (e) {
      console.error("request error", e);
    }
  };

  return (
    <form>
      <input type="text" />
      <input type="number" />
      <textarea rows="10"></textarea>
    </form>
  );
}

export default NewProduct;
