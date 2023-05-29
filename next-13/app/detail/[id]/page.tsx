import Link from "next/link";
import React from "react";

function Test() {
  const product = {
    id: 1,
    title: "상품 1",
    description: "이 상품은 아주 좋은 상품입니다.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/07/14/22/53/currants-3538617_1280.jpg",
    price: 10000,
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <img
        className="w-80 h-80 object-cover mb-4 rounded"
        src={product.imageUrl}
        alt={product.title}
      />
      <h2 className="text-2xl font-semibold">{product.title}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-gray-700 mt-4">
        가격: {product.price.toLocaleString()}원
      </p>
      <Link href="/payment">
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700">
          구매하기
        </button>
      </Link>
    </div>
  );
}

export default Test;
