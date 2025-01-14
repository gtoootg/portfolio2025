import {
  fetchFlickrPhotoExif,
  fetchFlickrPhotoInfoById,
  getPhotoUrl,
} from "@/utils/flickr-api";
import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

import GoogleMapApi from "@/components/google-map/google-map";
interface PhotoDetailProps {
  photo: {
    title: string;
    description: string;
    url: string;
  };
}

interface PhotoPageProps {
  params: {
    locale: string;
    id: string;
  };
}

export default async function PhotoDetailPage({ params }: PhotoPageProps) {
  const { id } = await params;

  const { photo } = await fetchFlickrPhotoInfoById(id);
  const { camera, iso, fNumber, exposure, focalLength } =
    await fetchFlickrPhotoExif(id);
  const url = getPhotoUrl(photo, "b");

  return (
    <>
      <div className={"w-full bg-gray-700 h-[600px]"}>
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

      <div className="max-w-4xl mx-auto bg-white rounded-xl  overflow-hidden">
        <h1 className="text-4xl font-extrabold text-gray-800 mt-6">
          {photo.title._content || "Untitled"}
        </h1>

        <div className="flex items-center mt-4">
          <div className="ml-4">
            <p className="text-lg font-semibold">
              {photo.owner.realname || photo.owner.username}
            </p>
            <p className="text-sm text-gray-500">
              Uploaded on{" "}
              {new Date(
                parseInt(photo.dates.posted) * 1000,
              ).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500">
              Taken on {new Date(photo.dates.taken).toLocaleDateString()}
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-700 mt-6 leading-relaxed">
          {photo.description._content || "No description available."}
        </p>

        {/* 撮影情報 */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📸 撮影データ
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">カメラ</p>
              <p className="font-bold text-gray-800">{camera || "N/A"}</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">ISO感度</p>
              <p className="font-bold text-gray-800">{iso || "N/A"}</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">F値（絞り）</p>
              <p className="font-bold text-gray-800">{fNumber || "N/A"}</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">シャッター速度</p>
              <p className="font-bold text-gray-800">{exposure || "N/A"}</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">焦点距離</p>
              <p className="font-bold text-gray-800">{focalLength || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /*{photo.location?.latitude && photo.location?.longitude && (*/
}
{
  /*  <div className="mt-8 h-[200px] w-[400px]">*/
}
{
  /*    <h2 className="text-2xl font-bold text-gray-800">Location</h2>*/
}
{
  /*    <div className="mt-4">*/
}
{
  /*      <GoogleMapApi*/
}
{
  /*        center={{*/
}
{
  /*          lat: Number(photo.location.latitude),*/
}
{
  /*          lng: Number(photo.location.longitude),*/
}
{
  /*        }}*/
}
{
  /*        zoom={10}*/
}
{
  /*      />*/
}
{
  /*    </div>*/
}
{
  /*  </div>*/
}
{
  /*)}*/
}
