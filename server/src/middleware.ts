import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(jp|en)/:path*"],
};

// export function middleware(req: NextRequest) {
//   const pathname = req.nextUrl.pathname;
//
//   const localeMatch = locales.find((locale) =>
//     pathname.startsWith(`/${locale}`),
//   );
//
//   if (!localeMatch) {
//     // ロケールが含まれていない場合、デフォルトのロケールを追加してリダイレクト
//     const url = new URL(`/${defaultLocale}${pathname}`, req.url);
//     return NextResponse.redirect(url);
//   }
//
//   const handleI18nRouting = createMiddleware({
//     ...routing,
//     alternateLinks: true,
//   });
//
//   const response = handleI18nRouting(req);
//
//   return response;
// }
//
// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/", "/(en|jp)/:path*"],
// };
