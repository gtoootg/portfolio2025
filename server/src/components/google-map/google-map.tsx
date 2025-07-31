"use client";
import {
  GoogleMap,
  GoogleMapProps,
  Marker,
  useJsApiLoader,
  MarkerProps,
} from "@react-google-maps/api";

export interface GoogleMapApiProps extends Omit<GoogleMapProps, "onClick"> {
  handleClickMap?: (e: google.maps.MapMouseEvent) => void;
  hasMarker?: boolean;
}

export default function GoogleMapApi({
  handleClickMap,
  hasMarker,
  ...props
}: GoogleMapApiProps) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
    language: "en",
  });

  if (loadError) return <p>Failed to load</p>;
  if (!isLoaded) return <p>Loading...</p>;

  return (
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "100%",
        ...props.mapContainerStyle,
      }}
      onClick={handleClickMap}
      {...props}
    >
      {props.children}
      {props.center && hasMarker && <Marker position={props.center} />}
    </GoogleMap>
  );
}
