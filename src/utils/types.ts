import type { NextPage } from "next";
import type { User, Profile } from "@prisma/client";
import type { ReactElement, ReactNode } from "react";

export type NextPageWithAuthLayout = NextPage & {
  auth?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type Author = Pick<User, "id" | "name" | "image" >;
export type AuthorProfile = Pick<Profile, "id" | "nickname" | "userId" >;