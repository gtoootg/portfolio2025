"use client";

import { getPhotoUrl } from "@/api/flickr-api";
import { useFlickrPhotos } from "@/api/use-flickr-photos.hooks";
import { LoadingProgress } from "@/components/atoms/loading-progress.tsx/loading-progress";
import AlbumMap, {
  AlbumMapMarkerProps,
} from "@/components/google-map/album-map/album-map";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default function AlbumMapPage() {
  const t = useTranslations("/album");
  const center = { lat: 50.941278, lng: 6.958281 };

  const { data, isLoading } = useFlickrPhotos();

  const markers = data?.reduce<AlbumMapMarkerProps[]>((acc, photo) => {
    const lat = photo.latitude;
    const lng = photo.longitude;
    if (lat && lng) {
      acc.push({
        lat: Number(lat),
        lng: Number(lng),
        key: photo.id,
        imageUrl: getPhotoUrl(photo, "w"),
      });
    }
    return acc;
  }, []);

  if (isLoading) {
    return <LoadingProgress />;
  }

  if (!markers || markers.length === 0) {
    return;
  }

  return (
    <AlbumMap
      center={center}
      markers={markers}
      lightboxLinkLabel={t("map.lightboxLink")}
    />
  );
}
