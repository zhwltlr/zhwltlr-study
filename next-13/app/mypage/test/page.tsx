import Link from "next/link";
import React from "react";

function Test() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold mb-4">상품이 배송준비중입니다.</h2>

      <Link href="/mypage">
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700">
          취소
        </button>
      </Link>
    </div>
  );
}

export default Test;
