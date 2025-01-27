interface FlickrPhotoOwner {
  nsid: string;
  username: string;
  realname: string;
  location: string;
  iconserver: string;
  iconfarm: number;
  path_alias: string | null;
  gift: Record<string, unknown>;
}

interface FlickrPhotoTitle {
  _content: string;
}

interface FlickrPhotoDescription {
  _content: string;
}

interface FlickrPhotoVisibility {
  ispublic: number;
  isfriend: number;
  isfamily: number;
}

interface FlickrPhotoDates {
  posted: string;
  taken: string;
  takengranularity: number;
  takenunknown: string;
  lastupdate: string;
}

interface FlickrPhotoEditability {
  cancomment: number;
  canaddmeta: number;
}

interface FlickrPhotoUsage {
  candownload: number;
  canblog: number;
  canprint: number;
  canshare: number;
}

interface FlickrPhotoComments {
  _content: string;
}

interface FlickrPhotoUrls {
  url: { _content: string }[];
}

interface FlickrPhotoInfo {
  id: string;
  secret: string;
  server: string;
  farm: number;
  dateuploaded: string;
  isfavorite: number;
  license: string;
  safety_level: string;
  rotation: number;
  owner: FlickrPhotoOwner;
  title: FlickrPhotoTitle;
  description: FlickrPhotoDescription;
  visibility: FlickrPhotoVisibility;
  dates: FlickrPhotoDates;
  views: string;
  editability: FlickrPhotoEditability;
  publiceditability: FlickrPhotoEditability;
  usage: FlickrPhotoUsage;
  comments: FlickrPhotoComments;
  notes: { note: unknown[] };
  people: { haspeople: number };
  tags: { tag: unknown[] };
  urls: FlickrPhotoUrls;
  media: string;
  location?: { latitude: string; longitude: string };
}

interface FetchFlickrPhotoInfoResponse {
  photo: FlickrPhotoInfo;
  stat: string;
}

export type FetchFlickrPhotosResponse = {
  photos: {
    photo: FlickrPhotoInfo[];
  };
};

interface GetExifDataResponse {
  photo: {
    id: string;
    secret: string;
    server: string;
    fam: number;
    camera: string;
    exif: {
      tagspace: string;
      tagspaceid: number;
      tag: string;
      label: string;
      raw: {
        _content: string;
      };
    }[];
  };
  stat: string;
}

const filterExifData = (exifData: GetExifDataResponse, tagName: string) => {
  return exifData.photo.exif.find((data) => data.tag === tagName)?.raw[
    "_content"
  ];
};

export const getPhotoUrl = (photo: FlickrPhotoInfo, size: string = "z") =>
  `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

export const fetchFlickrPhotos =
  async (): Promise<FetchFlickrPhotosResponse> => {
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

    return data;
  };

export const fetchFlickrPhotoInfoById = async (
  id: string,
): Promise<FetchFlickrPhotoInfoResponse> => {
  const { FLICKR_API_KEY, FLICKR_USER_ID, FLICKR_API_URL } = process.env;
  if (!FLICKR_API_KEY || !FLICKR_USER_ID) {
    throw new Error("Missing API key or User ID");
  }

  const params = new URLSearchParams({
    method: "flickr.photos.getInfo",
    api_key: FLICKR_API_KEY,
    photo_id: id,
    format: "json",
    nojsoncallback: "1",
  });

  const response = await fetch(`${FLICKR_API_URL}?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch photos: ${response.statusText}`);
  }
  const data = await response.json();

  return data;
};

export const fetchFlickrPhotoExif = async (
  id: string,
): Promise<Record<string, string>> => {
  const { FLICKR_API_KEY, FLICKR_API_URL } = process.env;

  if (!FLICKR_API_KEY || !FLICKR_API_URL) {
    throw new Error("Missing API key or User ID");
  }

  const params = new URLSearchParams({
    method: "flickr.photos.getExif",
    api_key: FLICKR_API_KEY,
    photo_id: id,
    format: "json",
    nojsoncallback: "1",
  });

  const response = await fetch(`${FLICKR_API_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch photos: ${response.statusText}`);
  }

  const exifData = await response.json(); // JSONデータを取得

  return {
    camera: exifData.photo.camera || "---",
    iso: filterExifData(exifData, "ISO") || "---",
    fNumber: filterExifData(exifData, "FNumber") || "---",
    exposure: filterExifData(exifData, "ExposureTime") || "---",
    focalLength: filterExifData(exifData, "FocalLength") || "---",
  };
};
