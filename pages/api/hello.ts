// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { IncomingMessage, ServerResponse } from "http";

export default function handler(req: IncomingMessage, res: ServerResponse) {
  res.status(200).json({ name: "John Doe" });
}
