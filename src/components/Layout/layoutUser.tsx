/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import type { ReactNode } from "react";
import { Avatar } from "@components/avatar";
import { Footer } from "@components/footer";
import { ButtonIcon } from "@components/buttons/buttonIcon";
import { Logo, SearchIcon } from "@components/icons";
import {
  Menu,
  MenuButton,
  MenuItemButton,
  MenuItemLink,
  MenuItems,
  MenuItemsContent,
} from "@components/menu";
import { capitalize } from "@utils/text";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";

type LayoutUserProps = {
  children: ReactNode;
};

export const LayoutUser = ({ children }: LayoutUserProps) => {
  const { data: session } = useSession();
  const { theme, themes, setTheme } = useTheme();

  return (
    <>
      <div className="mx-auto max-w-3xl px-6">
        <header className="flex items-center justify-between gap-4 py-12 md:py-20">
          <Link href="/">
            <Logo 
              className="w-auto text-red-light" 
              width={54}  
            />
          </Link>
          {
            // If the user is not logged in, show the login button.
            !session ? (
              <div className="flex items-center gap-2 md:gap-4">
                <Menu>
                  <MenuItemLink
                    href="/auth/signin"
                    className="focus-ring w-22 group relative inline-flex h-6 items-center justify-center rounded-3xl bg-red-700 text-xs font-medium text-white hover:bg-red-800"
                  >
                    Sign In
                  </MenuItemLink>
                </Menu>
              </div>
            ) : (
              // If the user is logged in, show the logout button
              <div className="flex items-center gap-2 md:gap-4">
                <Menu>
                  <MenuButton className="focus-ring group relative inline-flex rounded-full">
                    <Avatar
                      name={session?.user?.name}
                      src={session?.user?.image}
                      size="md"
                    />
                  </MenuButton>
                  <MenuItems className="w-48">
                    <MenuItemsContent>
                      {session?.user?.role === "ADMIN" && (
                        <MenuItemLink href="/admin">
                          <span role="img" aria-label="king">
                            For the Kings 👑
                          </span>
                        </MenuItemLink>
                      )}
                      <MenuItemLink href={`/profile/${session?.user?.id}`}>
                        Profile
                      </MenuItemLink>
                      <MenuItemLink href={`/orders/${session?.user?.id}`}>
                        Orders
                      </MenuItemLink>
                      <MenuItemButton onClick={() => signOut()}>
                        Log Out
                      </MenuItemButton>
                    </MenuItemsContent>
                    <div className="flex items-center gap-4 rounded-b bg-secondary px-4 py-3">
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
                        className="block w-full rounded border border-secondary bg-primary py-1.5 text-xs shadow-sm"
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
              </div>
            )
          }
        </header>
      </div>
      <main className="py-12 md:py-20">{children}</main>
      <div className="py-20">
        <Footer />
      </div>
    </>
  );
};
