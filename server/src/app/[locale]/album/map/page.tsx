import { fetchFlickrPhotos, getPhotoUrl } from "@/api/flickr-api";
import GoogleMapCluster from "@/components/google-map/google-map-cluster";

export default async function AlbumMapPage() {
  const flickrData = await fetchFlickrPhotos();
  const center = { lat: 50.941278, lng: 6.958281 };

  const markers = flickrData.photos.photo.reduce<
    { lat: number; lng: number; key: string; imageUrl?: string }[]
  >((acc, photo) => {
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

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <GoogleMapCluster center={center} zoom={3} markers={markers} />
    </div>
  );
}
