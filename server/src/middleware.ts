import { defaultLocale, locales, routing } from "./i18n/routing";

import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  // Step 1: Use the incoming request (example)

  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
  });
  const response = handleI18nRouting(request);

  // Step 3: Alter the response (example)
  response.headers.set("jp", defaultLocale);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(jp|en)/:path*"],
};
