import { fetchFlickrPhotos, getPhotoUrl } from "@/api/flickr-api";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { MapIcon } from "@heroicons/react/24/solid";

export default async function Album() {
  const t = await getTranslations("/album");
  const flickrData = await fetchFlickrPhotos();

  return (
    <div className="max-w-screen-lg mx-auto p-4">
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
        {flickrData.photos.photo.map((data, index: number) => {
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
