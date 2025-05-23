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
      jp: "/syashin",
    },
    "/about": {
      en: "/about",
      jp: "/jiko-shoukai",
    },
    "/album/[id]": {
      en: "/album/[id]",
      jp: "/syashin/[id]",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
