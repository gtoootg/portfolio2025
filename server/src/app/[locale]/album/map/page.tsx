import { fetchFlickrPhotos } from "@/api/flickr-api";
import GoogleMapCluster from "@/components/google-map/google-map-cluster";

export default async function AlbumMapPage() {
  const flickrData = await fetchFlickrPhotos();
  const center = { lat: 50.941278, lng: 6.958281 };

  const markers = flickrData.photos.photo
    .filter(
      (photo) =>
        photo.location && photo.location.latitude && photo.location.longitude
    )
    .map((photo) => ({
      lat: photo.location ? parseFloat(photo.location.latitude) : 0,
      lng: photo.location ? parseFloat(photo.location.longitude) : 0,
      key: photo.id,
    }));

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <GoogleMapCluster center={center} zoom={3} markers={markers} />
    </div>
  );
}
