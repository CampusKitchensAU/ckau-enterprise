import { createSchema } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";

const schema = createSchema<{ req: NextApiRequest; res: NextApiResponse }>({
  /* GraphQL */
  typeDefs: `
      type Query {
        greetings: String
      }
    `,
  resolvers: {
    Query: {
      greetings: () => "This is the 'greetings' field of the root 'Query' type",
    },
  },
});

export default schema;
