import { fetchFlickrPhotos, getPhotoUrl } from "@/api/flickr-api";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default async function Album() {
  const flickrData = await fetchFlickrPhotos();

  return (
    <div className="max-w-screen-lg mx-auto p-4">
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
