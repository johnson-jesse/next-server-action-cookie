'use server';

import { cookies } from "next/headers";

export async function smash() {
  cookies().set({
    name: "actionCookie",
    value: "I was set via server actions from a client component custom invocation",
    httpOnly: true,
  });

  return Promise.resolve({
    actionNow: Date.now(),
  });
}

export async function cookielessSmash() {
  return Promise.resolve({
    actionNow: Date.now(),
  });
}