// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ApolloServer } from "@apollo/server";
import { schema } from "../../graphql/schema";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

// Docs: https://vercel.com/docs/concepts/functions/serverless-functions
const server = new ApolloServer({ schema, introspection: true });

export default startServerAndCreateNextHandler(server);

//Yoga example in case apollo gets on my nerves
//this is the only thing needed for a base setup with yoga
// export const config = {
//   api: {
//     // Disable body parsing (required for file uploads)
//     bodyParser: false,
//   },
// };
// export default createYoga<{
//   req: NextApiRequest;
//   res: NextApiResponse;
// }>({
//   graphqlEndpoint: "/api/graphql",
//   schema: schema,
// });
