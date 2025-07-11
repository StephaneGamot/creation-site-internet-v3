import { NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const legacyPaths = [
  "/web",
  "/seo-referencement-naturel",
  "/stephane-gamot/portfolio",
  "/stephane-gamot",
  "/contact",
];

const locales = routing.locales;
const defaultLocale = routing.defaultLocale;

function getPreferredLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // 🌍 Redirection des routes sans locale (legacy)
  if (legacyPaths.includes(pathname)) {
    const locale = getPreferredLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url),
      308
    );
  }

  // 🌐 Middleware next-intl pour i18n
  return createMiddleware(routing)(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
