import Link from "next/link";
import React from "react";

function Main() {
  const products = [
    {
      id: 1,
      title: "상품 1",
      description: "이 상품은 아주 좋은 상품입니다.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/07/14/22/53/currants-3538617_1280.jpg",
    },
    {
      id: 2,
      title: "상품 2",
      description: "이 상품은 더욱더 좋은 상품입니다.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/04/14/18/13/honey-5043708_1280.jpg",
    },
    {
      id: 3,
      title: "상품 3",
      description: "이 상품은 더욱더 좋은 상품입니다.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/11/30/08/56/ice-cream-2987955_1280.jpg",
    },
    {
      id: 4,
      title: "상품 4",
      description: "이 상품은 아주 좋은 상품입니다.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/06/12/22/29/bread-3471667_1280.jpg",
    },
    {
      id: 5,
      title: "상품 5",
      description: "이 상품은 더욱더 좋은 상품입니다.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_1280.jpg",
    },
    {
      id: 6,
      title: "상품 6",
      description: "이 상품은 더욱더 좋은 상품입니다.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/04/15/49/cosmetic-1798154_1280.jpg",
    },
    {
      id: 7,
      title: "상품 7",
      description: "이 상품은 아주 좋은 상품입니다.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/12/09/22/37/labels-5818891_1280.jpg",
    },
    {
      id: 8,
      title: "상품 8",
      description: "이 상품은 더욱더 좋은 상품입니다.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/03/04/05/08/cosmetic-oil-3197276_1280.jpg",
    },
    {
      id: 9,
      title: "상품 9",
      description: "이 상품은 더욱더 좋은 상품입니다.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/07/23/15/24/egg-1536990_1280.jpg",
    },
    {
      id: 10,
      title: "상품 10",
      description: "이 상품은 아주 좋은 상품입니다.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/04/05/14/48/cheese-platter-6153716_1280.jpg",
    },
    {
      id: 11,
      title: "상품 10",
      description: "이 상품은 더욱더 좋은 상품입니다.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/03/04/09/55/walnut-658569_1280.jpg",
    },
    {
      id: 12,
      title: "상품 12",
      description: "이 상품은 더욱더 좋은 상품입니다.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/08/14/14/21/shish-kebab-417994_1280.jpg",
    },
  ];

  return (
    <div>
      <div className="w-full">
        <img
          className="w-full h-80 object-cover mb-4 rounded"
          src="https://cdn.pixabay.com/photo/2018/01/25/08/14/beverages-3105631_1280.jpg"
          alt="mainBanner"
        />
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {products.map((product, i) => (
            <Link
              href={`/detail/${i}`}
              key={i}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <img
                className="w-full h-80 object-cover mb-4 rounded"
                src={product.imageUrl}
                alt={product.title}
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-700">{product.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
