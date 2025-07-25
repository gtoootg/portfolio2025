"use client";

import { getPhotoUrl } from "@/api/flickr-api";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { MapIcon } from "@heroicons/react/24/solid";
import { useFlickrPhotos } from "@/api/use-flickr-photos.hooks";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/atoms/button/button";
import { Tag } from "@/components/atoms/tag/tag";

export default function Album() {
  const t = useTranslations("/album");
  const { data, error, isLoading } = useFlickrPhotos();

  const [inputTag, setInputTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleTagSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tag = inputTag.trim();
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setInputTag("");
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <form onSubmit={handleTagSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputTag}
          onChange={(e) => setInputTag(e.target.value)}
          placeholder="タグを入力"
          className="border rounded px-3 py-2 w-48"
        />
        <Button label="register" />
      </form>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <div className="flex justify-end mb-6">
        <Link
          href="/album/map"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all duration-200 group"
        >
          <MapIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          <span>{t("seeOnMap")}</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((data, index: number) => {
          const url = getPhotoUrl(data, "w");
          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition-opacity duration-300 ease-in-out hover:opacity-100 opacity-80"
            >
              <Link href={{ pathname: "/album/[id]", params: { id: data.id } }}>
                <Image
                  src={url}
                  alt=""
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
