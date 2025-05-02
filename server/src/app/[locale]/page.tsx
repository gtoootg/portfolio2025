"use client";

import { useEffect, useState } from "react";

import { Link } from "@/i18n/routing";

import topimage1 from "../../../public/topimage1.jpg";
import topimage2 from "../../../public/topimage2.jpg";

const images = [topimage1, topimage2];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // フェードアウト開始
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true); // フェードイン
      }, 1000); // 1秒かけてフェード
    }, 10000); // 10秒ごと

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white text-center px-4 overflow-hidden">
      {/* 背景画像 */}
      <div
        // className={"h-[100px] w-full border border-red-500"}
        className={`h-full w-full absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${fade ? "opacity-80" : "opacity-0"}`}
        style={{
          backgroundImage: `url(${images[current].src})`,
        }}
      ></div>

      {/* オーバーレイと内容 */}
      <div className="h-full w-full z-10 bg-black bg-opacity-50 p-8 rounded-lg max-w-xl ">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
        <p className="text-lg mb-6">
          ドイツ在住エンジニアの後藤倫宏です。このサイトでは、自身の経歴やドイツでの趣味について紹介しています。
        </p>
        <Link href="/about">
          <span className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            詳しく見る
          </span>
        </Link>
      </div>
    </section>
  );
}
