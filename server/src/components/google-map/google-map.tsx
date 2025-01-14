"use client";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export interface GoogleMapApiProps {
  center: { lat: number; lng: number };
  zoom: number;
  // clusterItems?: { lat: number; lng: number; id: number; imageUrl?: string }[];
  // handleClickMarkerOfCluster?: (id: number) => void;
  // markerPositions?: { lat: number; lng: number }[];
  handleClickMap?: (e: google.maps.MapMouseEvent) => void;
}

export default function GoogleMapApi({
  center,
  zoom,
  // clusterItems,
  // handleClickMarkerOfCluster,
  // markerPositions,
  handleClickMap,
}: GoogleMapApiProps) {
  return (
    <LoadScript
      googleMapsApiKey={"AIzaSyAhf8RgW3KVsaUK5Oqr-JKTpASBBrHlXd8"}
      language={"en"}
    >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={zoom}
        onClick={handleClickMap}
      ></GoogleMap>
    </LoadScript>
  );
}
