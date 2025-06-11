import { notFound } from "next/navigation";
import { Suspense } from "react";

async function fetchOpenTripMapPlaces(lat: number, lon: number) {
  // const apiKey = process.env.OPENTRIPMAP_API_KEY;
  const apiKey = "5ae2e3f221c38a28845f05b6a673f37c0bb85f9c8d98070df21a61fd";
  if (!apiKey) throw new Error("OpenTripMap API key is missing");
  const radius = 2000; // 2km
  const limit = 10;
  const url = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${lon}&lat=${lat}&format=json&limit=${limit}&apikey=${apiKey}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  return res.json();
}

async function fetchOpenTripMapPlaceDetail(xid: string) {
  // const apiKey = process.env.OPENTRIPMAP_API_KEY;
  const apiKey = "5ae2e3f221c38a28845f05b6a673f37c0bb85f9c8d98070df21a61fd";
  if (!apiKey) throw new Error("OpenTripMap API key is missing");
  const url = `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${apiKey}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  return res.json();
}

export default async function LocationPage({ params, searchParams }: any) {
  // 仮のlat/lng（本来はparamsやsearchParamsから取得）
  const lat = Number(searchParams?.lat) || 35.681236;
  const lng = Number(searchParams?.lng) || 139.767125;

  const places = await fetchOpenTripMapPlaces(lat, lng);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">周辺の観光スポット</h1>
      <ul className="space-y-6">
        {places.length === 0 && <li>観光スポットが見つかりませんでした。</li>}
        {places.map(async (place: any) => {
          const detail = await fetchOpenTripMapPlaceDetail(place.xid);
          return (
            <li key={place.xid} className="bg-white rounded-lg shadow p-4">
              <div className="font-semibold text-lg mb-1">
                {detail?.name || place.name || "名称不明"}
              </div>
              <div className="text-sm text-gray-500 mb-2">
                {detail?.address?.road ||
                  detail?.address?.suburb ||
                  detail?.address?.city ||
                  ""}
              </div>
              {detail?.preview?.source && (
                <img
                  src={detail.preview.source}
                  alt={detail?.name}
                  className="mb-2 rounded w-full max-h-48 object-cover"
                />
              )}
              <div className="text-gray-700 text-sm mb-2">
                {detail?.wikipedia_extracts?.text ||
                  detail?.info?.descr ||
                  "説明情報なし"}
              </div>
              <a
                href={
                  detail?.otm || `https://opentripmap.com/en/poi/${place.xid}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
              >
                詳細を見る
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
