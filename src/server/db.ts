import { PrismaClient } from "@prisma/client";

import { env } from "../env/server.mjs";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

/**
 * Smartsheet client used to access the Smartsheet API. This can be removed
 * when we migrate away from Smartsheet.
 */
const client = require("smartsheet");

export const smartsheet = client.createClient({
  accessToken: env.SMARTSHEET_KEY,
  logLevel: "info",
});
