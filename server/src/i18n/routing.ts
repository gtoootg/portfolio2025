import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "jp"],

  // Used when no locale matches
  defaultLocale: "en",

  pathnames: {
    "/": "/",
    "/album": {
      en: "/album",
      jp: "/album",
    },
    "/about": {
      en: "/about",
      jp: "/about",
    },
    "/album/[id]": {
      en: "/album/[id]",
      jp: "/album/[id]",
    },
    "/album/map": {
      en: "/album/map",
      jp: "/album/map",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
