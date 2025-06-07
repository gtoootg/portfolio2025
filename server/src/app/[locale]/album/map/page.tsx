import { fetchFlickrPhotos } from "@/api/flickr-api";
import GoogleMapCluster from "@/components/google-map/google-map-cluster";

export default async function AlbumMapPage() {
  const flickrData = await fetchFlickrPhotos();
  const center = { lat: 50.941278, lng: 6.958281 };

  const markers = flickrData.photos.photo.reduce<
    { lat: number; lng: number; key: string }[]
  >((acc, photo) => {
    if (photo.location && photo.location.latitude && photo.location.longitude) {
      acc.push({
        lat: parseFloat(photo.location.latitude),
        lng: parseFloat(photo.location.longitude),
        key: photo.id,
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
