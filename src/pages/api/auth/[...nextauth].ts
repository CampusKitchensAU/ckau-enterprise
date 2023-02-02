import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db";

export const authOptions: NextAuthOptions = {
  callbacks: {
    async signIn({ user, profile, account }) {
      //update user data to match changes in profile
      if (user.id && profile) {
        const databaseUser = await prisma.user.findUnique({
          where: {
            id: user.id,
          },
        });
        if (databaseUser) {
          switch (account?.provider) {
            case "google":
              if (
                profile.name != databaseUser.name ||
                profile.picture != databaseUser.image ||
                profile.email != databaseUser.email
              ) {
                await prisma.user.update({
                  where: {
                    id: user.id,
                  },
                  data: {
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                  },
                });
              }
              break;
            case "azure-ad":
              const profilePhotoSize = 48;
              const profilePicture = await fetch(
                `https://graph.microsoft.com/v1.0/me/photos/${profilePhotoSize}x${profilePhotoSize}/$value`,
                {
                  headers: {
                    Authorization: `Bearer ${account.access_token}`,
                  },
                }
              );
              const pictureBuffer = await profilePicture.arrayBuffer();
              const pictureBase64 =
                Buffer.from(pictureBuffer).toString("base64");
              const pictureData = `data:image/png;base64,${pictureBase64}`;

              if (
                profile.name != databaseUser.name ||
                pictureData != databaseUser.image ||
                profile.email != databaseUser.email
              ) {
                await prisma.user.update({
                  where: {
                    id: user.id,
                  },
                  data: {
                    name: profile.name,
                    email: profile.email,
                    image: pictureData,
                  },
                });
              }
              break;
          }
        }
      }
      return true;
    },
    // Include user.id on session
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile, tokens) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID,
      // authorization: { params: { scope: "openid profile user.Read email" } },
    }),
    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

export default NextAuth(authOptions);
