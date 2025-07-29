import { PhotoIcon } from "@heroicons/react/16/solid";

export const AlbumEmptyState = () => {
  return (
    <div className="col-span-3 flex flex-col items-center justify-center h-40 text-gray-400">
      <PhotoIcon className="w-10 h-10 mb-2" />
      <span>写真がありません</span>
    </div>
  );
};
