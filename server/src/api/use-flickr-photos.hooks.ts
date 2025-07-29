import useSWR from "swr";
import { FetchFlickrPhotosResponse } from "./flickr-api";

export const useFlickrPhotos = (tags?: string) => {
  const apiKey = process.env.NEXT_PUBLIC_FLICKR_API_KEY;
  const userId = process.env.NEXT_PUBLIC_FLICKR_USER_ID;
  const apiUrl = process.env.NEXT_PUBLIC_FLICKR_API_URL;

  const params = new URLSearchParams({
    method: "flickr.people.getPhotos",
    api_key: apiKey ?? "",
    user_id: userId ?? "",
    format: "json",
    nojsoncallback: "1",
    extras: "geo",
  });

  if (tags) {
    params.append("tags", tags);
  }

  const { data, error, isLoading } = useSWR(
    `${apiUrl}?${params.toString()}`,
    (url: string) => fetch(url).then((res) => res.json())
  );

  const photos: FetchFlickrPhotosResponse[] = data?.photos?.photo || [];

  return {
    data: photos,
    error,
    isLoading,
  };
};
