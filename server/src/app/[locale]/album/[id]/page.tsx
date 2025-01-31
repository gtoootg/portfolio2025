import {
  fetchFlickrPhotoExif,
  fetchFlickrPhotoInfoById,
  getPhotoUrl,
} from "@/api/flickr-api";
import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

import GoogleMapApi from "@/components/google-map/google-map";
import React from "react";
import { MapPinIcon } from "@heroicons/react/16/solid";
import { getTranslations } from "next-intl/server";

export default async function PhotoDetailPage({
  params,
}: {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}) {
  const { id } = await params;

  const { photo } = await fetchFlickrPhotoInfoById(id);
  const { camera, iso, fNumber, exposure, focalLength } =
    await fetchFlickrPhotoExif(id);
  const url = getPhotoUrl(photo, "b");

  const t = await getTranslations("/album");

  return (
    <>
      <div className={"w-full bg-gray-700 h-[600px] pt-4"}>
        <div className={"flex justify-center items-center gap-3"}>
          <ChevronLeftIcon className="w-10 h-10 text-gray-300 hover:text-white" />
          <Image
            src={url}
            alt={photo.title._content}
            width={810}
            height={540}
          />
          <ChevronRightIcon className="w-10 h-10 text-gray-300 hover:text-white" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white overflow-hidden mt-6">
        <div className={"grid grid-cols-2 gap-2"}>
          <div>
            <h1 className="text-2xl font-extrabold text-gray-800">
              {photo.title._content || t("untitled")}
            </h1>

            <div className="flex items-center mt-4">
              <div className="ml-4">
                <p className="text-lg font-semibold">
                  {photo.owner.realname || photo.owner.username}
                </p>
                <p className="text-sm text-gray-500">
                  {t("uploadedOn", {
                    date: new Date(
                      parseInt(photo.dates.posted) * 1000,
                    ).toLocaleDateString(),
                  })}
                </p>
                <p className="text-sm text-gray-500">
                  {t("takenOn", {
                    date: new Date(photo.dates.taken).toLocaleDateString(),
                  })}
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              {photo.description._content || t("noDescription")}
            </p>
          </div>

          <div className="h-[300px] flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-md">
            {photo.location ? (
              <GoogleMapApi
                center={{
                  lat: Number(photo.location.latitude),
                  lng: Number(photo.location.longitude),
                }}
                zoom={10}
              />
            ) : (
              <div className="flex flex-col items-center text-gray-600">
                <MapPinIcon className="h-16 w-16 text-gray-400" />
                <p className="mt-2 text-lg font-semibold">{t("noLocation")}</p>
              </div>
            )}
          </div>
        </div>

        <div className="my-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {t("photoData")}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
            <DataCard label={t("camera")} value={camera} />
            <DataCard label={t("iso")} value={iso} />
            <DataCard label={t("fNumber")} value={fNumber} />
            <DataCard label={t("exposure")} value={exposure} />
            <DataCard label={t("focalLength")} value={focalLength} />
          </div>
        </div>
      </div>
    </>
  );
}

function DataCard({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-bold text-gray-800">{value || "N/A"}</p>
    </div>
  );
}
