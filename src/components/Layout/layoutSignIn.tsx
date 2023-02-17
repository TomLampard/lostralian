import Link from "next/link";
import { Logo } from "@components/icons";
import { Footer } from "@components/footer";

type LayoutSignInProps = {
  children: React.ReactNode;
};

export const LayoutSignIn = ({ children }: LayoutSignInProps) => {
  return (
    <>
      <div className="flex max-w-3xl items-center px-6">
        <header className="flex items-center gap-4 py-12 md:py-20">
          <Link href="/">
            <Logo className="h-[48px] w-auto text-red-light" />
          </Link>
        </header>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-primary py-12 sm:px-6 lg:px-8">
        <main className="py-12 md:py-20">{children}</main>
        <div className="py-20">
          <Footer />
        </div>
      </div>
    </>
  );
};
