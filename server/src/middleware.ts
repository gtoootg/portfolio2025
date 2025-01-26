import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const handleI18nRouting = createMiddleware({
    ...routing,
    alternateLinks: true,
  });

  const response = handleI18nRouting(req);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|jp)/:path*"],
};
