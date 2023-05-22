import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from 'cookie'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  res
    .status(200)
    .setHeader(
      'Set-Cookie',
      serialize('apiCookie', 'I was set via pages api', {
        httpOnly: true,
        sameSite: true
      })
    )
    .json({ apiNow: Date.now() })
}
