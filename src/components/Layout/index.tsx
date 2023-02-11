/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import type { ReactNode } from "react";
import { Avatar } from "../avatar";
import { ButtonLink } from "../buttons/buttonLink";
import { Footer } from "../footer";
import { ButtonIcon } from "../buttons/buttonIcon";
import { Logo, SearchIcon } from "../icons";
import {
  Menu,
  MenuButton,
  MenuItemButton,
  MenuItemLink,
  MenuItems,
  MenuItemsContent,
} from "../menu";
import { capitalize } from "../../utils/text";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { data: session } = useSession();
  const { theme, themes, setTheme } = useTheme();

  return (
    <div className="mx-auto max-w-3xl px-6">
      <header className="flex items-center justify-between gap-4 py-12 md:py-20">
        <Link href="/">
            <Logo className="text-red-light h-[34px] w-auto" />
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
            <MenuButton className="focus-ring group relative inline-flex rounded-full">
            <Avatar
                name={session?.user?.name}
                src={session?.user?.image}
                size="sm"
              />
            </MenuButton>
            <MenuItems className="w-48">
              <MenuItemsContent>
                <MenuItemLink href={`/profile/${session?.user?.id}`}>
                  Profile
                </MenuItemLink>
                <MenuItemLink href={`/orders/${session?.user?.id}`}>
                  Orders
                </MenuItemLink>
                <MenuItemButton onClick={() => signOut()} >
                  Log Out
                </MenuItemButton>
              </MenuItemsContent>
              <div className="bg-secondary flex items-center gap-4 rounded-b px-4 py-3">
                <label htmlFor="theme" className="text=sm">
                  Theme
                </label>
                <select
                  id="theme"
                  name="theme"
                  value={theme}
                  onChange={(event) => {
                    setTheme(event.target.value);
                  }}
                  className="bg-primary border-secondary block w-full rounded border py-1.5 text-xs shadow-sm"
                >
                  {themes.map((theme) => (
                    <option key={theme} value={theme}>
                      {capitalize(theme)}
                    </option>
                  ))}
                </select>
              </div>
            </MenuItems>
          </Menu>

          <ButtonLink href="/new">
            <span className="sm:hidden">Post</span>
            <span className="hidden shrink-0 sm:block">New Post</span>
          </ButtonLink>
        </div>
      </header>
      <main>{children}</main>
      <div className="py-20">
        <Footer />
      </div>
    </div>
  );
};
