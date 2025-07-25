"use client";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

export interface GoogleMapCluserMarkerProps {
  lat: number;
  lng: number;
  key?: string | number;
  imageUrl?: string;
}

export interface GoogleMapClusterProps {
  center: { lat: number; lng: number };
  zoom: number;
  markers: GoogleMapCluserMarkerProps[];
  onMarkerClick?: (marker: GoogleMapCluserMarkerProps) => void;
}

export default function GoogleMapCluster({
  center,
  zoom,
  markers,
  onMarkerClick,
}: GoogleMapClusterProps) {
  const { GOOGLE_MAP_API_KEY } = process.env;

  const handleOnLoad = (map: google.maps.Map) => {
    if (!markers.length) return;
    const gMarkers = markers.map((marker) => {
      const gMarker = new window.google.maps.Marker({
        position: { lat: marker.lat, lng: marker.lng },
        map,
        ...(marker.imageUrl
          ? {
              icon: {
                url: marker.imageUrl,
                scaledSize: new window.google.maps.Size(48, 48),
                anchor: new window.google.maps.Point(24, 24),
              },
            }
          : {}),
      });
      if (onMarkerClick) {
        gMarker.addListener("click", () => onMarkerClick(marker));
      }
      return gMarker;
    });
    new MarkerClusterer({ markers: gMarkers, map });
  };

  if (!GOOGLE_MAP_API_KEY) {
    return;
  }

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY} language="en">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={zoom}
        onLoad={handleOnLoad}
      />
    </LoadScript>
  );
}
