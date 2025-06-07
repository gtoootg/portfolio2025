"use client";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

export interface GoogleMapClusterProps {
  center: { lat: number; lng: number };
  zoom: number;
  markers: { lat: number; lng: number; key?: string | number }[];
}

export default function GoogleMapCluster({
  center,
  zoom,
  markers,
}: GoogleMapClusterProps) {
  const { GOOGLE_MAP_API_KEY } = process.env;

  // GoogleMapのonLoadでクラスタリングをセットアップ
  const handleOnLoad = (map: google.maps.Map) => {
    if (!markers.length) return;
    const gMarkers = markers.map(
      (marker) =>
        new window.google.maps.Marker({
          position: { lat: marker.lat, lng: marker.lng },
          map,
        })
    );
    new MarkerClusterer({ markers: gMarkers, map });
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY as string} language="en">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={zoom}
        onLoad={handleOnLoad}
      />
    </LoadScript>
  );
}
