import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.WEBSITE_URL as string,
      // lastModified: new Date(),
      // changeFrequency: "yearly",
      // priority: 1,
    },
    {
      url: process.env.WEBSITE_URL + "about",

      alternates: {
        languages: {
          en: process.env.WEBSITE_URL + "en/about",
          ja: process.env.WEBSITE_URL + "jp/jiko-shoukai",
        },
      },
      // lastModified: new Date(),
      // changeFrequency: "monthly",
      // priority: 0.8,
    },
    {
      url: process.env.WEBSITE_URL + "album",
      // lastModified: new Date(),
      alternates: {
        languages: {
          en: process.env.WEBSITE_URL + "en/album",
          ja: process.env.WEBSITE_URL + "jp/syashin",
        },
      },
      // changeFrequency: "weekly",
      // priority: 0.5,
    },
  ];
}
