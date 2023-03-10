import type { ReactNode } from "react";
import { Fragment } from "react";
import { classNames } from "@utils/classStringify";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import Link from "next/link";

export const Menu = ({ children }: { children: ReactNode }) => {
  return (
    <HeadlessMenu as="div" className="relative inline-flex">
      {children}
    </HeadlessMenu>
  );
};

export const MenuButton = HeadlessMenu.Button;

export const MenuItems = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <HeadlessMenu.Items
        className={classNames(
          "bg-primary divide-primary absolute right-0 top-full z-10 mt-2 origin-top-right divide-y rounded border shadow-lg focus:outline-none",
          className
        )}
      >
        {children}
      </HeadlessMenu.Items>
    </Transition>
  );
};

export const MenuItemsContent = ({ children }: { children: ReactNode }) => {
  return <div className="py-2">{children}</div>;
};

const menuItemClasses = ({
  active,
  className,
}: {
  active: boolean;
  className?: string;
}) => {
  return classNames(
    active && "bg-secondary",
    "bg-primary block w-full text-left px-4 py-2 text-sm text-primary transition-colors",
    className
  );
};

export const MenuItemLink = ({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children: ReactNode;
}) => {
  return (
    <HeadlessMenu.Item>
      {({ active }) => (
        <Link
          href={href}
          className={menuItemClasses({ active, className })}
        >
          {children}
        </Link>
      )}
    </HeadlessMenu.Item>
  );
};

export const MenuItemButton = ({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <HeadlessMenu.Item>
      {({ active }) => (
        <button
          type="button"
          className={menuItemClasses({ active, className })}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </HeadlessMenu.Item>
  );
};
