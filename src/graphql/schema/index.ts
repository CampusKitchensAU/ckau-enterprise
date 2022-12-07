import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers";
import path from "path";

const typeDefs = /* GraphQL */ `
  type Query {
    greetings: String
  }
`;
export const schema = makeExecutableSchema({
  typeDefs,
  // typeDefs: mergeTypeDefs(
  //   loadFilesSync(path.join(process.cwd(), "./**/*.graphql"), {
  //     recursive: true,
  //   })
  // ),
  resolvers,
});
