"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export interface GoogleMapApiProps {
  center: { lat: number; lng: number };
  zoom: number;
  handleClickMap?: (e: google.maps.MapMouseEvent) => void;
}

export default function GoogleMapApi({
  center,
  zoom,
  handleClickMap,
}: GoogleMapApiProps) {
  const googleMapApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

  if (!googleMapApiKey) {
    return;
  }

  return (
    <LoadScript googleMapsApiKey={googleMapApiKey} language={"en"}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={zoom}
        onClick={handleClickMap}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
