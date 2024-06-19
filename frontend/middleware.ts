import { NextResponse, NextRequest } from "next/server";


export const isAuthPaths = [
  "/dashboard",
];
export const isNoAuthPaths = ["/", "/login",];

export function middleware(request: NextRequest) {
  const cookieHeader = request.headers.get("cookie");
  const cookie = cookieHeader
    ? cookieHeader
        .split(";")
        .reduce((cookies: { [key: string]: string }, cookie: string) => {
          const [name, value] = cookie.split("=").map((c) => c.trim());
          cookies[name] = value;
          return cookies;
        }, {})["__session"]
    : null;
  
  const isNoAuth = isNoAuthPaths.includes(request.nextUrl.pathname);
  const isAuth = isAuthPaths.includes(request.nextUrl.pathname)

  if (isAuth && !cookie) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    return response;
  }

  if (isNoAuth && (cookie && JSON.parse(cookie).access)) {
    const response = NextResponse.redirect(new URL("/dashboard", request.url));
    response.headers.set(`x-middleware-cache`, `no-cache`);
    return response;
  }
  const response = NextResponse.next();
  response.headers.set(`x-middleware-cache`, `no-cache`);
  return response;
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/dashboard",
  ],
};
