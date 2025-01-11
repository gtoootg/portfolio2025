import { fetchFlickrPhotoInfoById, getPhotoUrl } from "@/utils/flickr-api";
import Image from "next/image";
import Link from "next/link";
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

  // Flickr APIから写真情報を取得
  const { photo } = await fetchFlickrPhotoInfoById(id);

  // 写真のURLを取得
  const url = getPhotoUrl(photo, "z");

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg overflow-hidden">
      {/* 写真 */}
      <div className="relative h-96 rounded-lg overflow-hidden group">
        <Image
          src={url}
          alt={photo.title._content}
          layout="fill"
          objectFit="cover"
          className="transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* 写真タイトル */}
      <h1 className="text-4xl font-extrabold text-gray-800 mt-6">
        {photo.title._content || "Untitled"}
      </h1>

      {/* オーナー情報 */}
      <div className="flex items-center mt-4">
        {/*<Image*/}
        {/*    src={`https://farm${photo.owner.iconfarm}.staticflickr.com/${photo.owner.iconserver}/buddyicons/${photo.owner.nsid}.jpg`}*/}
        {/*    alt={photo.owner.username}*/}
        {/*    width={50}*/}
        {/*    height={50}*/}
        {/*    className="rounded-full border-2 border-gray-300"*/}
        {/*/>*/}
        <div className="ml-4">
          <p className="text-lg font-semibold">
            {photo.owner.realname || photo.owner.username}
          </p>
          <p className="text-sm text-gray-500">
            Uploaded on{" "}
            {new Date(parseInt(photo.dates.posted) * 1000).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* 説明文 */}
      <p className="text-lg text-gray-700 mt-6 leading-relaxed">
        {photo.description._content || "No description available."}
      </p>

      {/* 撮影情報 */}
      <div className="grid grid-cols-2 gap-4 mt-8 text-center">
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-sm text-gray-500">Taken On</p>
          <p className="font-bold text-gray-800">{photo.dates.taken}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-sm text-gray-500">Views</p>
          <p className="font-bold text-gray-800">{photo.views}</p>
        </div>
      </div>

      {/* 戻るボタン */}
      <div className="mt-8 text-center">
        <Link href="/album">
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            ← Back to Album
          </button>
        </Link>
      </div>
    </div>
  );
}
