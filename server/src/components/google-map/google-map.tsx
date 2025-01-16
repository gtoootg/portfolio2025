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
  const { GOOGLE_MAP_API_KEY } = process.env;

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY as string} language={"en"}>
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
