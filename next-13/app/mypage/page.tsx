import Link from "next/link";
import React from "react";

const MyPage = () => {
  const purchasedProducts = [
    {
      id: 1,
      title: "상품 1",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/07/14/22/53/currants-3538617_1280.jpg",
      price: 10000,
    },
    {
      id: 2,
      title: "상품 2",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/03/04/05/08/cosmetic-oil-3197276_1280.jpg",
      price: 20000,
    },
    {
      id: 3,
      title: "상품 3",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/03/04/09/55/walnut-658569_1280.jpg",
      price: 30000,
    },
    {
      id: 4,
      title: "상품 4",
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_1280.jpg",
      price: 40000,
    },
  ];

  const totalAmount = purchasedProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">구매 내역</h2>
      {purchasedProducts.map((product) => (
        <Link
          href="mypage/test"
          key={product.id}
          className="flex items-center mb-4"
        >
          <img
            className="w-20 h-20 object-cover mr-4 rounded"
            src={product.imageUrl}
            alt={product.title}
          />
          <div>
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p>{product.price.toLocaleString()}원</p>
          </div>
        </Link>
      ))}
      <div className="flex justify-end">
        <p className="text-xl font-semibold">
          총 금액: {totalAmount.toLocaleString()}원
        </p>
      </div>
    </div>
  );
};

export default MyPage;
