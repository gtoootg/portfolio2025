import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales, routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const localeMatch = locales.find((locale) =>
    pathname.startsWith(`/${locale}`),
  );

  if (!localeMatch) {
    // ロケールが含まれていない場合、デフォルトのロケールを追加してリダイレクト
    const url = new URL(`/${defaultLocale}${pathname}`, req.url);
    return NextResponse.redirect(url);
  }

  const handleI18nRouting = createMiddleware({
    ...routing,
    alternateLinks: true,
  });

  const response = handleI18nRouting(req);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|jp)/:path*"],
};
