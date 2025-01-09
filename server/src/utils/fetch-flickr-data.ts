type Photo = {
  id: string;
  title: string;
  farm: number;
  server: string;
  secret: string;
};

export type FlickrResponse = {
  photos: {
    photo: Photo[];
  };
};

export const getPhotoUrl = (photo: Photo, size: string = "z") =>
  `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

export const fetchFlickrData = async (): Promise<FlickrResponse> => {
  const { FLICKR_API_KEY, FLICKR_USER_ID, FLICKR_API_URL } = process.env;

  if (!FLICKR_API_KEY || !FLICKR_USER_ID) {
    throw new Error("Missing API key or User ID");
  }

  const params = new URLSearchParams({
    method: "flickr.people.getPhotos",
    api_key: FLICKR_API_KEY,
    user_id: FLICKR_USER_ID,
    format: "json",
    nojsoncallback: "1",
  });

  const response = await fetch(`${FLICKR_API_URL}?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch photos: ${response.statusText}`);
  }
  const data = await response.json();

  console.log(data);

  return data;
};
