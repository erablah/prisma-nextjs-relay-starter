// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { schema } from "@/graphql/schema";
import { createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema,
  graphqlEndpoint: '/api/graphql'
})

export const config = {
  api: {
    bodyParser: false
  }
}