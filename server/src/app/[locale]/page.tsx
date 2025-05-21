"use client";

import { useEffect, useState } from "react";

import { Link } from "@/i18n/routing";

import topimage1 from "../../../public/topimage1.jpg";
import topimage2 from "../../../public/topimage2.jpg";
import topimage3 from "../../../public/topimage3.jpg";
import topimage4 from "../../../public/topimage4.jpg";
import { HEADER_HEIGHT } from "@/components/header";
import { useTranslations } from "next-intl";

const images = [topimage1, topimage2, topimage3, topimage4]

export default function Home() {
  const t = useTranslations("top")

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full relative flex items-center justify-center text-white text-center  overflow-hidden"
      >
      <div
        className={`w-full inset-0 bg-cover bg-center  transition-opacity duration-1000 ${fade ? "opacity-80" : "opacity-0"}`}
        style={{
          backgroundImage: `url(${images[current].src})`,
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        }}
      />
      <div className={`absolute w-full flex flex-col items-center justify-center bg-black bg-opacity-30 px-10`} style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)`,}}>
      <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
      <p className="text-2xl mb-6 font-bold">{t("caption")}</p>
        <Link href="/about">
          <span className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          {t("link")}
          </span>
        </Link>
      </div>
    </div>
  );
}
