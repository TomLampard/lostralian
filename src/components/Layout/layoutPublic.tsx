/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import type { ReactNode } from "react";
import { Footer } from "../footer";
import { ButtonIcon } from "../buttons/buttonIcon";
import { Button } from "../buttons/button";
import { Logo, SearchIcon } from "../icons";
import {
  Menu,
  MenuButton,
} from "../menu";
import { useRouter } from "next/router";
import Link from "next/link";

type LayoutPublicProps = {
  children: ReactNode;
};

export const LayoutPublic = ({ children }: LayoutPublicProps) => {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-3xl px-6">
      <header className="flex items-center justify-between gap-4 py-12 md:py-20">
        <Link href="/">
          <Logo className="h-[34px] w-auto text-red-light" />
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <ButtonIcon
            variant="secondary"
            onClick={() => {
              console.log("Search");
            }}
          >
            <SearchIcon className="h-4 w-4" />
          </ButtonIcon>
          <Menu>
            <MenuButton 
              className="focus-ring group relative inline-flex rounded-full"
              onClick={() => router.push("/auth/signin")}
              
              >
              <Button variant="secondary">Sign In</Button> 
            </MenuButton>
          </Menu>
        </div>
      </header>
      <main>{children}</main>
      <div className="py-20">
        <Footer />
      </div>
    </div>
  );
};
