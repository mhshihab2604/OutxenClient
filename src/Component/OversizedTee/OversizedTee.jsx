import React, { useState } from "react";

const OversizedTee = () => {
  const [price, setPrice] = useState([390, 1590]);

  const products = [
    {
      id: 1,
      name: "Oversized Drop Shoulder T-Shirt – Lavender",
      category: "Oversized T-shirt",
      image: "https://i.ibb.co/gFdhS281/photo-6334699560848447682-y.jpg",
      oldPrice: 399,
      newPrice: 299,
      discount: 25,
      inStock: true,
    },
    {
      id: 2,
      name: "Oversized Drop Shoulder T-Shirt – Maroon",
      category: "Oversized T-shirt",
      image: "https://i.ibb.co/TqcZ7CVH/photo-6334699560848447680-y.jpg",
      oldPrice: 399,
      newPrice: 299,
      discount: 25,
      inStock: true,
    },
    {
      id: 3,
      name: "Oversized Drop Shoulder T-Shirt – White",
      category: "Oversized T-shirt",
      image: "https://i.ibb.co/GvKq44M4/photo-6334699560848447684-y.jpg",
      oldPrice: 399,
      newPrice: 299,
      discount: 25,
      inStock: true,
    },
    {
      id: 4,
      name: "Oversized Drop Shoulder T-Shirt – Black",
      category: "Oversized T-shirt",
      image: "https://i.ibb.co/84zTkCqc/photo-6334699560848447681-y.jpg",
      oldPrice: 399,
      newPrice: 299,
      discount: 25,
      inStock: true,
    },
    {
      id: 5,
      name: "Oversized Drop Shoulder T-Shirt – Dark Blue",
      category: "Oversized T-shirt",
      image: "https://i.ibb.co/rR9tWQfc/freepik-assistant-1753029626950.png",
      oldPrice: 399,
      newPrice: 299,
      discount: 25,
      inStock: true,
    },
    {
      id: 6,
      name: "Oversized Drop Shoulder T-Shirt – Bottle Green",
      category: "Oversized T-shirt",
      image: "https://i.ibb.co/2wWQ0z3/photo-6334699560848447683-y.jpg",
      oldPrice: 399,
      newPrice: 299,
      discount: 25,
      inStock: true,
    },
  ];
  return (
    <section className="bg-gray-100 px-4 py-10 mt-20 min-h-[100vh]">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filter */}
        <div className="w-full lg:w-1/4 bg-white border rounded-lg shadow-md p-4 dark:text-black">
          <h2 className="text-xl font-bold mb-4 text-center">
            OVERSIZED DROP SHOULDER
          </h2>

          {/* Product Categories */}
          <div className="mb-5">
            <h3 className="font-semibold text-sm border-b pb-1 mb-2">
              PRODUCT CATEGORIES
            </h3>
            <div className="w-full border rounded px-3 py-2 text-sm dark:border-gray-700">
              Oversized Drop shoulder
            </div>
          </div>

          {/* Size Dropdown */}
          <div className="mb-5">
            <select
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none dark:border-gray-700"
              defaultValue=""
            >
              <option disabled value="">
                Any Size (Oversized)
              </option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </div>

          {/* Price Filter */}
          <div className="mb-5">
            <h3 className="font-semibold text-sm border-b pb-1 mb-2">
              FILTER BY PRICE
            </h3>

            <div className="flex flex-col gap-2">
              <input
                type="range"
                min="390"
                max="1590"
                value={price[0]}
                onChange={(e) => setPrice([+e.target.value, price[1]])}
                className="w-full"
              />
              <input
                type="range"
                min="390"
                max="1590"
                value={price[1]}
                onChange={(e) => setPrice([price[0], +e.target.value])}
                className="w-full"
              />
            </div>

            <div className="mt-2 text-sm text-black">
              Price: <span className="font-bold">{price[0]}৳</span> —{" "}
              <span className="font-bold">{price[1]}৳</span>
            </div>
          </div>

          {/* Filter Button */}
          <button className="w-full bg-gray-800 text-white text-sm py-2 rounded hover:bg-gray-700 transition">
            FILTER
          </button>
        </div>

        {/* Product Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full rounded-md shadow-md border bg-white text-gray-800 relative"
            >
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                -{product.discount}%
              </div>

              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="object-cover object-center w-full h-84 rounded-t-md"
              />

              {/* Info */}
              <div className="flex flex-col justify-between p-4 space-y-4">
                <div className="space-y-2">
                  <h2 className="text-md font-semibold leading-snug">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p
                    className={`text-sm ${
                      product.inStock ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {product.inStock ? "✔ In stock" : "Out of stock"}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <p className="line-through text-gray-400 text-sm">
                    ৳ {product.oldPrice}
                  </p>
                  <p className="text-green-600 font-bold text-base">
                    ৳ {product.newPrice}
                  </p>
                </div>

                {/* Button */}
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-2 font-semibold tracking-wide rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
                >
                  ADD TO BASKET
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OversizedTee;
