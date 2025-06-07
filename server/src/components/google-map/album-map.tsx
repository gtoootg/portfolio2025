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

export default function AlbumMap({ center, markers }: AlbumMapProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <GoogleMapCluster
        center={center}
        zoom={3}
        markers={markers}
        onMarkerClick={(marker: AlbumMapMarkerProps) =>
          setLightboxImage(marker.imageUrl || null)
        }
      />
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="photo"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
