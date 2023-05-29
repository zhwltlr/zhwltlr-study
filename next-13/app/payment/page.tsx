import Link from "next/link";
import React from "react";

function Payment() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold mb-4">구매가 완료되었습니다.</h2>

      <Link href="/main">
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700">
          메인으로 이동
        </button>
      </Link>
    </div>
  );
}

export default Payment;
