import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "../graphql/resolvers";

export const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(
    loadFilesSync("src/graphql/schema/**/*.graphql", { recursive: true })
  ),
  // resolvers: mergeResolvers(
  // loadFilesSync("src/graphql/resolvers/**/*.ts", { recursive: true })
  // ),
  resolvers,
});
