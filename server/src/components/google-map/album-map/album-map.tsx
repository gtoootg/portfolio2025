"use client";
import { useState } from "react";
import GoogleMapCluster from "@/components/google-map/google-map-cluster";

export type AlbumMapMarkerProps = {
  lat: number;
  lng: number;
  imageUrl?: string;
  [key: string]: any;
};

type AlbumMapProps = {
  center: { lat: number; lng: number };
  markers: AlbumMapMarkerProps[];
};

export const AlbumMapLightBox = ({
  onClick,
  imageUrl,
  id,
}: {
  onClick: () => void;
  imageUrl: string;
  id: string;
}) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 opacity-0 animate-fadein"
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt="photo"
        className="max-w-full max-h-full rounded-lg shadow-2xl opacity-0 animate-fadein"
      />
    </div>
  );
};

export default function AlbumMap({ center, markers }: AlbumMapProps) {
  const [lightboxImage, setLightboxImage] = useState<{
    url: string;
    id: string;
  } | null>(null);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <GoogleMapCluster
        center={center}
        zoom={3}
        markers={markers}
        onMarkerClick={(marker: AlbumMapMarkerProps) => {
          if (marker.imageUrl) {
            setLightboxImage({ url: marker.imageUrl, id: marker.key });
            return;
          }
          setLightboxImage(null);
        }}
      />
      {lightboxImage && (
        <AlbumMapLightBox
          onClick={() => {
            setLightboxImage(null);
          }}
          imageUrl={lightboxImage.url}
          id={lightboxImage.id}
        />
      )}
    </div>
  );
}
