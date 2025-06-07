import { fetchFlickrPhotos, getPhotoUrl } from "@/api/flickr-api";
import AlbumMap, {
  AlbumMapMarkerProps,
} from "@/components/google-map/album-map/album-map";

export default async function AlbumMapPage() {
  const flickrData = await fetchFlickrPhotos();
  const center = { lat: 50.941278, lng: 6.958281 };

  const markers = flickrData.photos.photo.reduce<AlbumMapMarkerProps[]>(
    (acc, photo) => {
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
    },
    []
  );

  return <AlbumMap center={center} markers={markers} />;
}
