"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { HOME_ROUTE, ROOT_ROUTE, SESSION_COOKIE_NAME } from "../../constant";

export async function createSession(uid: string) {
  cookies().set(SESSION_COOKIE_NAME, uid, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30, //one month
    path: "/",
  });

  redirect(HOME_ROUTE);
}

export async function removeSession() {
  cookies().delete(SESSION_COOKIE_NAME);

  redirect(ROOT_ROUTE);
}
