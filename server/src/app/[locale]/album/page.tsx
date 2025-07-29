"use client";

import { getPhotoUrl } from "@/api/flickr-api";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { MapIcon } from "@heroicons/react/24/solid";
import { useFlickrPhotos } from "@/api/use-flickr-photos.hooks";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { AlbumTags } from "@/components/feature/album/album-tags";
import { AlbumEmptyState } from "@/components/feature/album/album-empty-state";
import { LoadingProgress } from "@/components/atoms/loading-progress.tsx/loading-progress";

export default function Album() {
  const t = useTranslations("/album");

  const [inputTag, setInputTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const { data, isLoading } = useFlickrPhotos(
    tags.length ? tags.join(",") : undefined
  );

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
      <div className="flex justify-between">
        <AlbumTags
          tags={tags}
          inputTag={inputTag}
          handleTagSubmit={handleTagSubmit}
          onChangeInput={(e) => setInputTag(e.target.value)}
          onDeleteTag={(tag) =>
            setTags((prev) => prev.filter((el) => el !== tag))
          }
        />
        <div className="flex justify-end h-10">
          <Link
            href="/album/map"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all duration-200 group"
          >
            <MapIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            <span>{t("seeOnMap")}</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {isLoading && <LoadingProgress />}
        {!isLoading && data.length === 0 && <AlbumEmptyState />}

        {data?.map((data, index: number) => {
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
