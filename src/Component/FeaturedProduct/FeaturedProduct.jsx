import React from 'react';

const products = [
  {
    id: 1,
    name: 'Half Zipper Polo t-shirt – Black',
    category: 'Half Zipper Polo',
    image: 'https://i.ibb.co/bMNJZDyC/De-Watermark-ai-1752682935030.jpg',
    oldPrice: 699,
    newPrice: 449,
    discount: 36,
    inStock: true,
  },
  {
    id: 2,
    name: 'Half Zipper Polo T-shirt – Coffee',
    category: 'Half Zipper Polo',
    image: 'https://i.ibb.co/zTw5YGZr/De-Watermark-ai-1752682915280.jpg',
    oldPrice: 699,
    newPrice: 449,
    discount: 36,
    inStock: true,
  },
  {
    id: 3,
    name: 'Half Zipper Polo t-shirt – Olive',
    category: 'Half Zipper Polo',
    image: 'https://i.ibb.co/NgBwFt6b/Chat-GPT-Image-Jul-16-2025-10-13-33-PM.png',
    oldPrice: 699,
    newPrice: 449,
    discount: 36,
    inStock: true,
  },
  {
    id: 4,
    name: 'Oversized Drop Shoulder T-Shirt – Lavender',
    category: 'Oversized T-shirt',
    image: 'https://i.ibb.co/gFdhS281/photo-6334699560848447682-y.jpg',
    oldPrice: 399,
    newPrice: 299,
    discount: 25,
    inStock: true,
  },
  {
    id: 5,
    name: 'Oversized Drop Shoulder T-Shirt – Maroon',
    category: 'Oversized T-shirt',
    image: 'https://i.ibb.co/TqcZ7CVH/photo-6334699560848447680-y.jpg',
    oldPrice: 399,
    newPrice: 299,
    discount: 25,
    inStock: true,
  },
  {
    id: 6,
    name: 'Oversized Drop Shoulder T-Shirt – White',
    category: 'Oversized T-shirt',
    image: 'https://i.ibb.co/GvKq44M4/photo-6334699560848447684-y.jpg',
    oldPrice: 399,
    newPrice: 299,
    discount: 25,
    inStock: true,
  },
  {
    id: 7,
    name: 'Oversized Drop Shoulder T-Shirt – Black',
    category: 'Oversized T-shirt',
    image: 'https://i.ibb.co/84zTkCqc/photo-6334699560848447681-y.jpg',
    oldPrice: 399,
    newPrice: 299,
    discount: 25,
    inStock: true,
  },
  {
    id: 8,
    name: 'Oversized Drop Shoulder T-Shirt – Dark Blue',
    category: 'Oversized T-shirt',
    image: 'https://i.ibb.co/70FVH6B/photo-6334699560848447679-y.jpg',
    oldPrice: 399,
    newPrice: 299,
    discount: 25,
    inStock: true,
  },
  {
    id: 9,
    name: 'Oversized Drop Shoulder T-Shirt – Bottle Green',
    category: 'Oversized T-shirt',
    image: 'https://i.ibb.co/2wWQ0z3/photo-6334699560848447683-y.jpg',
    oldPrice: 399,
    newPrice: 299,
    discount: 25,
    inStock: true,
  },
  
];

const FeaturedProduct = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <div className="flex items-center justify-center my-6 sm:my-8">
        <div className="h-px bg-gray-400 w-1/3 sm:w-1/5"></div>
        <h1 className="mx-3 text-lg sm:text-2xl font-bold text-center tracking-widest">
          FEATURED PRODUCT
        </h1>
        <div className="h-px bg-gray-400 w-1/3 sm:w-1/5"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-xs rounded-md shadow-md border bg-white text-gray-800 relative"
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
                <p className={`text-sm ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                  {product.inStock ? "✔ In stock" : "Out of stock"}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2">
                <p className="line-through text-gray-400 text-sm">৳ {product.oldPrice}</p>
                <p className="text-green-600 font-bold text-base">৳ {product.newPrice}</p>
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
  );
};

export default FeaturedProduct;
