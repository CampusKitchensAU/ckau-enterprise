// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ApolloServer } from "@apollo/server";
import { schema } from "../../graphql/schema";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

// Docs: https://vercel.com/docs/concepts/functions/serverless-functions
const server = new ApolloServer({ schema });

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
// import { ApolloServer } from "@apollo/server";
// import { startServerAndCreateNextHandler } from "@as-integrations/next";
// import { makeExecutableSchema } from "@graphql-tools/schema";

// const typeDefs = /* GraphQL */ `
//   type Query {
//     users: [User!]!
//     user(username: String): User
//     greetings: String
//   }
//   type User {
//     name: String
//     username: String
//   }
// `;

// const users = [
//   { name: "Leeroy Jenkins", username: "leeroy" },
//   { name: "Foo Bar", username: "foobar" },
// ];

// const resolvers = {
//   Query: {
//     users() {
//       return users;
//     },
//     user(_parent: any, { username }: { username: string }) {
//       return users.find((user) => user.username === username);
//     },
//     greetings() {
//       return "Hello World!";
//     },
//   },
// };

// export const schema = makeExecutableSchema({ typeDefs, resolvers });

// const server = new ApolloServer({
//   schema,
// });

// export default startServerAndCreateNextHandler(server);
