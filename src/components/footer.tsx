import { Logo } from "../components/icons";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 text-sm text-secondary md:flex-row md:gap-4">
      <div className="inline-flex items-center gap-1 font-roboto text-ml">
        <span>Lostralian Footer to go here!</span>
        <Logo className="h-4 w-4" />
        <span></span>
      </div>
    </footer>
  );
}
