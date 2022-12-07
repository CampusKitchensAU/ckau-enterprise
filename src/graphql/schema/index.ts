import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers";

export const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(
    loadFilesSync("src/graphql/schema/**/*.graphql", { recursive: true })
  ),
  resolvers,
});
