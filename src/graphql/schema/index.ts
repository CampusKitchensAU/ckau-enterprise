import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers";
import path from "path";

export const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(
    loadFilesSync(path.join(process.cwd(), "./**/*.graphql"), {
      recursive: true,
    })
  ),
  resolvers,
});
