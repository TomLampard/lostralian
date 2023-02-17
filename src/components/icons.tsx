import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export const SearchIcon = (props: IconProps) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.333 12.667A5.333 5.333 0 107.333 2a5.333 5.333 0 000 10.667zM14 14l-2.9-2.9"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const HeartIcon = (props: IconProps) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 4.004c-.907 1.411-.686 3.31.5 4.496l4.793 4.793a1 1 0 001.414 0L13.5 8.5c1.186-1.186 1.407-3.085.5-4.496-1.38-2.147-4.584-2.123-6 0-1.416-2.123-4.62-2.147-6 0z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const HeartFilledIcon = (props: IconProps) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 4.004c-.907 1.411-.686 3.31.5 4.496l4.793 4.793a1 1 0 001.414 0L13.5 8.5c1.186-1.186 1.407-3.085.5-4.496-1.38-2.147-4.584-2.123-6 0-1.416-2.123-4.62-2.147-6 0z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MessageIcon = (props: IconProps) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5 2.513a1 1 0 011 1V11.5a1 1 0 01-1 1H5.37a1 1 0 00-.65.24l-1.57 1.345a1 1 0 01-1.65-.76V3.514a1 1 0 011-1h11z"
        stroke="currentColor"
      />
    </svg>
  );
};

export const SpinnerIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        className="opacity-25"
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={4}
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

export const DotsIcon = (props: IconProps) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 8a1 1 0 11-2 0 1 1 0 012 0zM9 8a1 1 0 11-2 0 1 1 0 012 0zM14 8a1 1 0 11-2 0 1 1 0 012 0z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ChevronLeftIcon = (props: IconProps) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.5 4.5L6.35355 7.64645C6.15829 7.84171 6.15829 8.15829 6.35355 8.35355L9.5 11.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronRightIcon = (props: IconProps) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.5 11.5l3.146-3.146a.5.5 0 000-.708L6.5 4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EditIcon = (props: IconProps) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.333 2A1.886 1.886 0 0114 4.667l-9 9-3.667 1 1-3.667 9-9z"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TrashIcon = (props: IconProps) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 4h12M5.333 4V2.667a1.333 1.333 0 011.334-1.334h2.666a1.333 1.333 0 011.334 1.334V4m2 0v9.333a1.333 1.333 0 01-1.334 1.334H4.667a1.334 1.334 0 01-1.334-1.334V4h9.334z"
        stroke="currentColor"
        strokeWidth={1.41667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LinkIcon = (props: IconProps) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.667 8.667a3.333 3.333 0 005.026.36l2-2A3.334 3.334 0 008.98 2.313l-1.147 1.14"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.333 7.333a3.334 3.334 0 00-5.026-.36l-2 2a3.333 3.333 0 004.713 4.714l1.14-1.14"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CloseIcon = (props: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 7l-11 11M6.5 7l11 11"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Logo = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 698.5 666.3"
      {...props}
    >
      <path
        fill="#f7df8d"
        fillRule="evenodd"
        d="M833 564.4s16-29.5-8.8-64.3c-20.6-29-30.2-41.6-35.3-47.6S759.6 422 750.8 407s-11.5-46.1-10.9-64.1 2.5-37.6-8.1-59.5S700 217 686 205.3s-39.7-19.5-67.4-26-48.5-2.6-56.8-3.5-26-8.7-28.6-8.7-8 3.5-11.3 6.2-7.7 2.5-16 2.3-7.6 5.7-9.7 4.6-9.8-9.4-19.4-11.7-14.4 4.6-27 6.5-34-1.5-53.8.2-55.6 19.8-73 31.7-29.5 16.7-42.5 43.3-19.8 54-17.7 83.5 3.1 43.4-.4 76-30.1 52-59.7 74.7-29.9 66.2-29.9 66.2-11.3 3-15.9 9.4c-9 12.8-9 26.3 17.2 65.8s56.7 63.2 77.2 78.5 35 29.4 54.7 49.4 53.4 48.7 71.6 62 37.8 9.8 54.7 6 51.4-13 56.2-13 14.4 1.5 33 8 44.7 15.5 59 16.3 23.4-5 36.4-14.8 50.5-41.6 66.4-53.9 64.5-38.6 90.8-56.4 53.9-32.3 55.5-44.6 4.4-17.8 8.8-32.8 9-30.7 11.3-46.4c2.6-17.7-16.7-19.7-16.7-19.7zm-97.3 15.2c-3.8 14.4-8 29.2-12 36s-5 10.3-6.2 11.2-3.1 1.9-.6 5a84.5 84.5 0 015.4 8.1 65.8 65.8 0 00-9.4 0c-3.1.4-6.7.9-6.5 2s6.3 9.3 6.3 9.3l-8.2 1c-4.2.6-9.1 2.5-8 4.8s9.3 13.4 9.3 13.4a73 73 0 00-11-.3c-4.9.5-9.7 3.2-9 4.4s9.5 12 9.5 12-2.7 4.1-5.4 4.5-15 .4-21.7 1.3-13.6 2.3-13.8 3.3 5.2 4.2 8.8 8.8 7.3 13.3 7.3 14.8-6.5-3.1-10.2-5.8-15.3-10-17.4-10-1.6 1.8.7 5 11.7 24 11.7 24-8.4-5.9-10.3-6.5-8.1.2-10.8-1.3-12.6-10.4-15.9-11.4-5.8-1.7-4.8 4l5.8 36.7-6.8.6s-7.3-15.6-11.3-23-9.8-14.2-15-17.5-6.7-2.3-8.1.8-7.8 23.2-10.7 29.3-3.4 14.6-3.4 14.6l-10.2.4s-6-12.9-11.5-22.7-12-19.2-13.8-19.4-4.5 7.5-7.5 10-10.7 7.1-11.9 10.2-5.8 20-5.8 20l-22-1a234.6 234.6 0 00-8.1-23.4c-4.4-10.2-11-20.8-13.3-20.8s-6.3 11.7-12.6 20.9-18.5 25.5-18.5 25.5h-4s-2.5-14-5.9-27.6-9.1-31.9-14-31.3c-1.9.2-2.3 3.3-4.6 7.3s-15.9 18-19 22.3-9.8 16.5-10.4 17.8-3.2-.2-3.4-2.7-.5-13.2 6.1-26.2 11.5-19.4 10-19.4-14.8 3.1-20.8 5.4-14.2 7.7-18.6 4.4-2.5-7.3-1.3-12.7 3.2-9.9.9-9.6a32.5 32.5 0 00-10.9 3.3c-4 2-7.5 4.6-7.5 2.3s.4-7.3 1.7-10.2 3.5-5.3 1.2-5.9a41.7 41.7 0 00-9.8-1c-1.9.2-3 .6-2.7-1s2.3-14.2 1.7-15.7-8.6 1-8.6 1 2.7-10.6 1.7-11-10.5 0-10.5 0 3.9-9.1 3.4-11.5c-.2-1-7.1-.2-7.1-.2l2-3.8-4.1-.4s3.7-5 4.4-6-8.6-5-8.6-5 2.3-2.2 1.5-2.6-9.6-3.5-10.7-4.6-7-17-11-28.2-7.6-20-7.6-20 5.5-9.6 5-18.7 2.1-24.3 4.6-38.5 4-29 7.1-29.8 7.8-2.5 6.5-4-12.1-16.3-8.6-17a98 98 0 0111.1-1.2c1.7 0 .6-1.2-1.3-3.1s-4.5-5.4-2.5-5.8 8.4-1.3 7.8-2.8l-4.2-11s9.6 2.9 11 3.5 2.4-.6 1.5-4.6l-3.5-15.8c-1.2-5.4-3.8-13.2-3.8-13.2s11.7 2.5 14.2 3.4 2.1-2 1-7.4-3.5-14-5-19.2-2.7-8.5-2.7-8.5l16.7 3.7c3.3.8 3.1-1 2-4.8s-10-30.4-10-30.4 19.3 4.1 21.6 4.8 2-2 1.7-5.3-1.7-13-3-21-3.7-20.9-3.7-20.9 19.2 15.2 23.4 18 9.4 4.1 10.4 4 1.1-5 0-13-2.9-18-2.9-18a15 15 0 004.6-4.4c1.5-2.5 3.6-7 3.6-7l12.5 10.6c4.4 3.8 8 4.6 8.8 4.4s1.4-5.7 1.4-5.7l8.2 3.8c3.2 1.5 3.7.8 4.6-1.3l5-13s4.1 4.8 7.7 8.4 5.4 5.8 6.2 5.4 4.4-8.6 6.3-13.4 5-14 5-14a89.8 89.8 0 007 12.4c3.2 4.6 6.6 7.9 7.4 7.7s10.9-10.7 10.9-10.7 5.4 8 7.7 10.5 4.8 4.6 5.6 4.6 7.3-9 10.7-14.8 8.3-15.3 8.3-15.3a131.2 131.2 0 009 17.5c5.5 8.8 11.1 16.5 12.1 16.5s12.1-17.5 12.1-17.5 6.1 8.8 9.9 12.3 5.8 4.6 6.9 4.6 7.5-10.4 9.3-14.4 4.4-8.3 4.4-8.3 4.6 10.2 7.1 15 3.8 6.8 4.6 6.8 7.5-5.4 10-8.3a57.5 57.5 0 003.8-4.8s3.1 9.6 4.2 12.3 2.7 1.5 5.4-.8 11.5-10.7 14-13.6 4.8-6 4.8-6 3.7 10 5.4 10.4 13-7.7 13-7.7 2 8.7 3 8.7 12.6-5.6 12.6-5.6-7.5 21.5-8.1 24.2 5 3.3 8.5 3.1 8.2-1 8.2-1-1.5 12.4-.9 13.6 25.3-14 25.3-14-4.2 10.7-6.9 20.9a162.4 162.4 0 00-4.2 21.5c0 .8 12 3.1 12 3.1s-1.7 5.7-.9 5.2 24.8-10 24.8-10-11.4 35.7-12 38.7.6 2.5 2.4 1.4 13.6-6.4 14.7-6.6-2 27.3-1.7 29.6 2.7 2.3 5 2.3l9.6-.2s-2.7 23.4-2.5 25.3 2 2.3 4.8 1.6 6.5-1 6.5 1.3 3.7 49.5 6.2 69.7 5.7 38.6 11.1 46.8a79.6 79.6 0 0010.9 13.2 20.4 20.4 0 00-17 15.6z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        d="M254.5 556.9a3.2 3.2 0 001.3 3.4 7.7 7.7 0 01-.6-.7 5.7 5.7 0 01-.7-2.7zm5.4 5.4a9.2 9.2 0 01-2.9-1 1 1 0 01-.6 1.5l1 2.4a1 1 0 01.3-.4 13.3 13.3 0 002.2-2.5zm-9.2 3.5v-.1c0-.1 0 0 0 0zm.1-.4l.8-1a3.1 3.1 0 00-1 1.3 1.3 1.3 0 01.2-.3zm582.1-1.2s16-29.5-8.8-64.3c-20.6-29-30.2-41.6-35.2-47.6s-29.5-30.5-38.3-45.5-11.4-46.2-10.8-64.1 2.5-37.6-8.2-59.5S700 216.8 686 205s-39.6-19.4-67.4-25.9-48.4-2.7-56.8-3.5-25.9-8.8-28.6-8.8-8 3.5-11.3 6.2-7.7 2.5-16 2.3-7.6 5.7-9.7 4.6-9.8-9.4-19.4-11.7-14.4 4.6-27 6.5-34-1.4-53.8.2-55.5 19.9-73 31.8-29.5 16.7-42.4 43.2-19.9 54-17.8 83.5 3.2 43.4-.4 76-30 52-59.7 74.7-29.9 66.2-29.9 66.2-11.2 3-15.8 9.4c-9.1 12.8-9 26.3 17.1 65.8s56.8 63.2 77.3 78.5 35 29.4 54.6 49.4 53.5 48.7 71.7 62 37.7 9.9 54.7 6.1 51.3-13 56.1-13 14.4 1.5 33 8 44.7 15.4 59.1 16.2 23.4-5 36.3-14.8 50.6-41.5 66.4-53.9 64.5-38.6 90.8-56.3 54-32.4 55.6-44.7 4.4-17.8 8.7-32.8 9-30.7 11.3-46.3c2.6-17.8-16.7-19.8-16.7-19.8zm3.3 63.9c-2.5 8.7-10.4 40.9-12.7 43.2S759.2 715 753 719s-38.8 24-45.5 27.8-14 4.1-7.5-7.6 12.5-20.4 15.7-24 4-6.4.4-4-3.1-1.2-.6-6.6 8.5-19.2 5.6-14.2-15.9 27.3-26.7 43-30.5 35.3-50.5 53-37.8 29-61.6 32.7-75-17-93.2-15.6-31.5 9.9-45.3 13.2-42.2 10.6-56.4 1.7c-16.3-10.3-78.3-58.9-86.6-73.7s-33.4-86.2-40.5-124c-6.8-36.4-10.8-51.6-9.6-55-.7 2 .1 4.6-1 2.5-1.4-2.6-.2-5.4 1.1-6.1s2.4-.9 2.1-3.2c-.2-1.8 1.2-3 1.6-2.9 0-3.5.7-8.6 1-11.8.5-4.5-1.8-1.8-2.3 5s-.6 9.9-3.3 10-12.7-1-19-1.4-16.5.6-2.7 3 14 10.8 17.1 24 7.3 33.3 9.6 42.5-6 3.1-13.2-5-13.5-14.8-16.6-18.4-13.6-10.4 3.5 13.6 25.7 43 31.7 60.3-11.9 14.9-21.7 7.3-51.7-43-69.5-77.4-9.4-45.7-3.3-50.1 16.2-7.3 28.8 9 25.4 33.6 20.8 23.1-16.5-25.8-16-29.6 7.7-1.5 11.9-1.2 5.4-.9-1.3-2.1-27.8-2.9-25.7-25.7 22.4-51 35.5-51.1 1.7 7-1.6 11-12 15.7-12 15.7 15-15.9 21.8-21.1 25.4-28.4 29.6-27.8 1.3 21.5-.2 38.6-1.9 41.8.4 26.6c0 0 11.3-72.3 15-100.3s-1.6-101.4 20.5-150.7 66.8-77.7 80.2-84.3 29.2-9.6 55-9.2 41-5 52.3-.9 19.6 8.2 21.5 9.9a8.8 8.8 0 013.3 7.3l.2 19.4-.1 9.5h.3l2 .1-.3-20c0-6.7-.4-11.5.6-14s8-9.5 9.2-9.7 1.3 2.1 1.3 3.6v5.6c0 1.9 1.4 0 1.6-3.5s-.6-5.9 1.3-8.6 10.2-9.4 15-6.9 25.9 10.7 32.3 10.7 32.8-2.5 59.1 5.2 46.4 10.8 74.5 62.6 30.4 66.2 31.9 92.1-2.8 46.1 9.8 77.3 15 37.7 12.5 69.9-1.7 40.5.2 51.4 3.4 16 3.4 16-7.6-8-12.2-23.8-5.8-32.3-6.4-38.8a71.7 71.7 0 00-3.2-14.4 35.6 35.6 0 01-1-7.4l-2 5.5c-1.4 5.9-.3 18.2.7 29.1s4.8 31.3 10.3 41.3 11.7 15 14.2 16a35 35 0 006.6 1.8s-4.5.4-8.8 1c.6 2.2 1 6.6-1.2 14.4-3.5 13.1-13.8 36.3-18.2 47.1s-6.8 31.4-9 40.5 3 4.4 6.7-10.8 4.2-21.5 7.8-29 13.5-36 23-46.2 12.7-12.9 17.3-13.1 8.3 2.7 7.3 8.6-4.8 16.2-8.8 21.5 4.8-2.3 9.8-10.3 7.3-14.6 11.7-17.3 5.2-4.2-3.5-4.8-32 .8-35.5-5.6-9.4-30.3-8.1-51.6 6.2-55.3 9.6-58 9.1-3 29.2 22.5 33.4 39.4 36.3 65.5-17.8 27.4-20.9 27.4 6 1.2 8.8 4-3.6 5.8-9 8-6.3 6.8-8 12.2a108.6 108.6 0 01-5.8 13.6 3.7 3.7 0 01-2.5-3.4c-.2-2.7-1.9-2.3-1.5 1.3s-.8 10-3.3 13-18.6 19.2-25.9 28.2-26.5 25.9-33.2 33.6-14.8 34.6-10.4 29.8 32-34.9 43.4-48.2 39.7-59.7 45.5-68 22.6-23.9 28.2-10 .5 38.5-2 47.3zM560 761.3a4 4 0 00-1 .4 22.6 22.6 0 014 0h.3a4 4 0 00-3.3-.4zm-77.5-537.8c-5.6.2-5.4 1.6-.1 1.7a71.8 71.8 0 019.3.8 38.8 38.8 0 01-.4 9.5l1.3-4.1s-1 19.8-10.2 34.6-13.6 19.7-13.6 19.7l-6.7-8a4.5 4.5 0 002 1 79.7 79.7 0 01-14.6-27.6c-2.6-10.7-2.2-23.7-2.2-23.7l18-1.5c1.5-.1 2-.8.8-.8s-19 .5-25.5 1a129 129 0 00-16.7 2.6c-2.6.7-2.2 3 .3 2.3a51 51 0 016.7-1s-.9 20.8-3.1 31.1-8.5 24-9.2 24-10.1-9.5-14.2-14.3-15.8-19.8-18.6-24.3-3.5-5.8-6.2-4 0 4.3 1 7.8 4.4 23 4.6 27.3 0 13-1.2 12.5-23.8-20.9-27-24.4-5.7-5.2-7.1-4.4-8.2 7-10.5 9.2.6 3.3 1.7 2.5 4-3.8 4.9-4.5 2.4 4.5 4.7 11.7c1 3 2.2 8.3 3.3 13.8l-1.5-15.4L359 317a4.2 4.2 0 01-3.5.6c-2-.6-9.2-5.6-9.2-5.6a10 10 0 003.9.5c-7.4-5.4-22.7-17.7-23.7-18.4-1.3-.8-.5-2.8 1.6-6s.4-5.3-.8-4a45.7 45.7 0 00-6.5 9.5c-2.3 4.6-6.3 13-7.3 15.4s1.4 3.4 1.9 2.5l2.9-5.6c1.9-3.8 4-7.3 4-7.3s1.7 11.3 3.5 21.7 3.4 20.9 3.4 20.9l-21.7-5.9 2-6.6c.7-1.8-1.6-3.2-2.7-.9s-4.4 10.5-5.8 13 1.5 3.3 2 2a14.8 14.8 0 013-3l5.3 16.3-1-6.8 8.2 24.2-16.3-4.1a35.9 35.9 0 004-.2 137 137 0 00-7-1.7c-2.6-.4-1.7-1.9-1.1-3.8s-.4-5-1.5-5-1.4 1.7-1.7 5.2-2.2 10.3-3 13.4 1.6 3.8 2 3 2.1-5.3 3-7.8 2.2 4.8 4.3 12.1l.2.6c-.4-5.2-1-10.2-1-10.2l7.6 30.1-16-4.2-1.5-1.9 1.1.1c-1.3-.8-.9-2.7-.7-5.5.2-3.4-2-3.2-2.7-.2s-1.5 10.8-1.9 13.8 3.8 1.4 3.8 1.4l6.7 24.8s-9-3.7-10.9-4.1-1.5-2.7-1-5.2.2-6.7-1.3-6.5-2.5 4-3 8.7 2.2 5.7 3.5 6.3 4.1 10.7 4.1 10.7-7.3 1.4-9.1 2.7 5.2 8.1 5.2 8.1l-9 .6c-7.7.6 4.6 18.6 5.2 19.5s-3.1.8-6 1.2-1 3.6 0 3.6-5.3 25.6-7 36.7-3 29.6-3.7 36.3a21.8 21.8 0 01-3.9 10.2l1.2.3c1.9.4-1.3 6.5-2.3 5.2a9.5 9.5 0 01-1.4-2.5c-.5 1.2 1.3 3.7 3.1 5.4 2.1 2 3.2 5.4 7.4 16.3s9.5 25.8 11 29.8 2 8.5 3.5 10.6 3.5 1.5 3.2 4-1 5.1.8 6.1a4 4 0 012.5 4c0 2-1.2 4.9.3 6.5s1.5 3.5 1.2 6.3 3.8 3.2 5.2 3.3-.1 5.3-.1 8 5.7 1.8 6.8 1.8 1.6.3 1.6 2.2.2 6.6.5 10 2 1.4 1.8.4a41.6 41.6 0 01-.2-6.5c.2-3 1.8-7.8 1.1-8.5s-4.7-.7-7.2-.7-1.7-3-1.5-4.6.4-3.3-1-3.7-4.6-1.3-4.5-2.6.9-3.4-.1-4.1-1.7-3.6-1.4-5.9.4-4.8-.3-5.5a30.2 30.2 0 00-3.6-2.4l1-6.1c.5-3-2.2-2.1-3.2-3s-2.5-5.8-3-7.7 2.7-.2 4.2.4 1.9.4.7 2.3 1.9 3.8 5 4.5 2.3 1.1-.5 5 .4 3.3 2 3.3-.5 1.3-1.5 3.1 6 1.3 7.6 1.4-2.1 5.4-4.8 10.3 8.8 2 10.4 1.7-.7 4.1-2 7.6 1 5.3 2.5 5 8.3-3.2 9.1-3.2-1.6 6.5-2.3 10.3-2 7.4-3.2 8.5.4 7.6 3.5 15.3 9.6 15.4 12.6 18 1-1 1-1a92.6 92.6 0 01-7.5-10.3c-3.3-5.4-5-12.8-6-17.1s.6-5.2 2.6-5.7 5.5-.3 7.4-.3.6 1.8-.3 4.9.6 10 .6 13 3.5 4.8 3 3.1a10 10 0 010-3.5l5-2.2c2.3-1 9.5-4.2 10.5-4.2s-4.4 19.1-4.9 24.7 2.5 3.4 2.8-.2 1.1-4.3 3-1.6 1 8.2 1 8.2 7.5-7.8 13.9-11.2 19.9-6 19-5.5-9.4 18.9-10.8 22.4-2.4 13.3-2.3 16.5-10.8-6-10.8-6 5.7 7.1 9.6 9.2c3.2 1.8 6 5.9 8 6.3l-5.6-5.4c-1-.8 7.3 4.2 9.2.9.2-.4.3-.4.5-.2 1.5-2.4 3.3-5.4 4.7-8.1 2.7-5 8.4-11.3 13.5-17.4s12.7-15.7 13.5-16 5.7 10.5 8.1 21.1 5.6 26.3 6.1 30.6l.1.8a6.8 6.8 0 00.5-2.9c0-2 3 4.2 4.8 4.6s17 4.2 14.2 3.8a31.3 31.3 0 00-4.1-.3l8.6 1.2c4.5.5 1.4-1-.8-1.3s-11.3-2-11.3-3 6.4-8.8 12.5-17.7 13.7-21.6 15.4-24.4 5.5 6.8 9.1 15.3c3 6.8 5 12.6 6.2 16.1.2-2 .8-1.7 2 .9 1.4 3.3 1.9 6.7 4.4 6.9s23.8-1 24.2 2l.1 1.4a7.8 7.8 0 00.2-1c.4-4.4 3.3-15.4 5-19.9s9.7-7.7 12.2-10.7 3.6-9 5.3-8 18.7 32 21 36.8a26.6 26.6 0 00-.8-3.3c-.8-2.8 4.8 6.2 6.9 6.4s9.4-2.3 10.6-.8l.7.7v-.2a53 53 0 011.3-10.6c.8-4.2 4.6-13.6 7-19s6-14.7 7.4-15.2 6 4 11.2 10.3 12 23.5 13.5 27.5a6.9 6.9 0 001 1.9 15.6 15.6 0 00-.3-1.7c-.6-2.7 3.7 2.1 3.7 2.1v1.3a28 28 0 004 0c1.5 0 3-.1 4.4-.3.9-3 3-5 3-2.5a13.6 13.6 0 000 1.7.6.6 0 00.3-.5c-.1-1.2-1.2-12.2-2.6-21.6s-4.2-17.7-3.2-17.3 15.2 10.2 17.5 11.2 7.7 0 9.2.8 9 8.4 11.7 10.5a16 16 0 00-1.3-3c-1-1.6 1.5.5 2.3 2.6l.4.9c1.7-.2 2.3-4 3.6-4.9 1.5-1.1 2-2.8 1.1-2.3s-2.6 1.3-3.3.6-1.7-4-3.4-7.2-5-10.1-6.8-13-3.5-5.4-1.7-4.5 18.1 12 20.5 13.5 2.8 2.3 2 3.3-.2 2.8 1 1.8 6.8-4.1 8.2-5.5.2-2.5-1.1-1.4a39 39 0 01-3.8 2.5 94.5 94.5 0 00-4.3-13.4c-2.4-5.3-9.8-11.7-10.7-12.7s8-1.5 15.1-2l17.3-1s-2.4 10.2-2.7 13.2 1 2.6 1.4 1.5 1.8-7.3 2.7-11.3 1.2-5 3.3-6.8 3.6-4.5 1.7-6.3-8.2-8.6-7.7-9.6 5.7-1 9.5-1 8.6.2 9.6-1.2-1.4-4.5-3.5-7.2-7-8.4-5.7-8.8 8.8-1.3 12.7-1.7 5.7-1.2 4.6-2.5-5-5.6-6.6-7.8 2.3-2.3 5.2-2.2c2.2 0 5.7.4 8.2.7l.5-.2a8.7 8.7 0 001.8-1 35.1 35.1 0 00-2.6-4.3c-2-3-5.4-7.3-5-8.1s2.4-1.4 5.2-1.4 3.4-.1 2.9-2.6.5-7 2.6-11.6c1.8-4 4.8-13.5 7.7-25 .3-6.5 1.1-13.1 3.9-15.5a24.7 24.7 0 014.7-3 15.2 15.2 0 015-2.2 58.2 58.2 0 016.6-2l-1 .8 2-.4a5 5 0 00-1-2s-6.3-3.6-12.4-12.6-12.3-52.6-12.7-62.4 5-24.2 5-22l.1 4.3 4.4-12c1.2-3.9 1.5-8.8.2-8.9l-11-.3c-1.4-.2 1.4-12 2.6-16.5s1.6-5.6-1.2-6-10 1-11.8 1 .8-11.8 2.2-18.3 4.4-10.2-.8-10.7-14.3 3.3-15 1.5c-.6-1.4 4.4-15.8 7.7-24.6-1 1.7-1.7 3.4-2.2 4.5-1 2-1.5-8.8.6-13.4a21 21 0 001.4-3.9c-2.1 2.1-16.9 7.4-18.8 8.2s3.2-8.6 6-16.7c2.3-6.5 5.7-18.5 7-23l-.4-1.3c-4.3 2.2-22 11.5-29.8 14.1-2.7.9.7-9 3.9-18.6s9.4-20.4 11-23.7c1-2.1 1.7-3.4 2.6-3.3a17 17 0 00-3.1-4s2.7-4 4.8-.3l1.3 2.6c-1.4-3.3-3.5-7.6-4.5-9.8-1.4-3-3.2-2-3.2-2s-6.6-8.4-9.6-11 1.2 3.1 3.5 5.6a36.2 36.2 0 014.1 6.3s-7.2 5-19.9 12.5-19.3 10.6-19.3 10.6 2-11.7 4.4-20.2 8.3-21.2 10.3-25.9c-2.2.2-3.6-10.4 1.2-6.4l.1.1a10.2 10.2 0 00-1.7-1.5c-3.6-2.6-9.4-5.5-12-7s-3.6-.8-1.2.8l6.4 4.3s-3.8 3.2-6.8 6-13 8.5-16 10.4-5.7 4.8-6.6 2.2-3.7-25.4-4.4-32.7a12 12 0 00-.6-3 9.4 9.4 0 01.4 2.2c.4 4.7-1.3-.7-4.8-3a9.7 9.7 0 00-1.6 2.4c-2 4.5-12.9 26.8-18 33.2s-15 14.2-15 14.2-.8-4-2-8.1-6.4-20.5-8.8-28.8a96.7 96.7 0 01-3-18 3.9 3.9 0 001.3-.8 361.6 361.6 0 01-12.5-1c.7.5-1.2 7.7-6 23.3a153.4 153.4 0 01-13.7 31.8c-2.5 4.2-4.6 2.1-7.7-1.5s-6.8-8-11.8-23.7-6.2-33.5-6.2-33.5l5.2-.1c3 0 3.7-.4 1.9-.6-1.6-.1-7-.7-13-1v1c.2 3.2-2.7.2-2.5-.6v-.5c-6.8-.3-17.6-.4-23.1-.3zm26.8 67.6c1 0 12.1-17.5 12.1-17.5s6 8.7 9.8 12.3 5.9 4.6 7 4.6 7.4-10.5 9.3-14.4 4.4-8.4 4.4-8.4 4.6 10.2 7 15 3.8 6.9 4.7 6.9 7.5-5.4 10-8.4a57.5 57.5 0 003.7-4.8s3.2 9.7 4.2 12.4 2.7 1.4 5.4-.9 11.5-10.6 14-13.5 4.8-6 4.8-6 3.8 10 5.5 10.4 13-7.7 13-7.7 2 8.7 3 8.7 12.6-5.6 12.6-5.6-7.5 21.5-8.2 24.2 5 3.4 8.6 3.1a80 80 0 008.1-1s-1.4 12.4-.8 13.6 25.3-14 25.3-14-4.2 10.7-7 20.9a162.1 162.1 0 00-4.1 21.5c0 .8 11.9 3.1 11.9 3.1s-1.7 5.7-.8 5.3l24.8-10s-11.5 35.7-12.1 38.6.6 2.5 2.5 1.4 13.6-6.4 14.6-6.6-1.9 27.3-1.7 29.6 2.8 2.3 5 2.3l9.6-.2s-2.7 23.4-2.5 25.3 2.1 2.3 4.8 1.6 6.5-1 6.5 1.3 3.8 49.5 6.3 69.7 5.6 38.6 11 46.8a79.6 79.6 0 0010.9 13.1 20.4 20.4 0 00-17 15.7c-3.7 14.4-7.8 29.2-11.8 36s-5 10.3-6.3 11.2-3.1 1.9-.6 5a82.5 82.5 0 015.4 8.1 65.8 65.8 0 00-9.4 0c-3.1.4-6.7.9-6.4 1.9s6.2 9.4 6.2 9.4l-8.1 1c-4.1.6-9.2 2.5-8.2 4.8s9.4 13.4 9.4 13.4a73 73 0 00-11-.3c-4.8.5-9.6 3.2-9 4.4s9.6 12 9.6 12-2.7 4.1-5.5 4.5-15 .4-21.7 1.3-13.5 2.3-13.7 3.3 5.2 4.2 8.7 8.8 7.3 13.3 7.3 14.8-6.4-3.1-10.2-5.9-15.2-10-17.3-10-1.7 2 .6 5 11.7 24 11.7 24-8.3-5.8-10.2-6.4-8.1.2-10.8-1.3-12.6-10.4-16-11.5-5.8-1.7-4.7 4 5.8 36.7 5.8 36.7l-6.9.7s-7.3-15.7-11.2-23-9.9-14.2-15-17.6-6.7-2.3-8.2.9-7.7 23.2-10.6 29.2-3.4 14.6-3.4 14.6l-10.2.5s-6-13-11.5-22.8-12.1-19.2-13.8-19.4-4.6 7.5-7.5 10-10.7 7.1-12 10.2-5.8 20-5.8 20l-21.9-1a234.6 234.6 0 00-8.1-23.4c-4.4-10.2-11-20.8-13.4-20.8s-6.3 11.7-12.5 20.9-18.6 25.4-18.6 25.4h-4s-2.5-14-5.8-27.5l-14-31.4c-2 .2-2.3 3.4-4.6 7.3s-15.9 18-19 22.4-9.9 16.5-10.5 17.7-3.1-.2-3.3-2.7-.6-13.1 6-26 11.5-19.5 10-19.5-14.8 3.1-20.9 5.4-14.2 7.8-18.6 4.4-2.5-7.3-1.2-12.7 3.1-9.8.8-9.6a32.5 32.5 0 00-10.9 3.3c-4 2.1-7.5 4.6-7.5 2.3s.5-7.3 1.7-10.2 3.6-5.2 1.3-5.9a41.7 41.7 0 00-9.9-1c-1.8.2-2.9.7-2.7-1s2.3-14.2 1.7-15.6-8.6 1-8.6 1 2.8-10.7 1.7-11-10.4 0-10.4 0 3.8-9.2 3.3-11.6c-.2-1-7-.2-7-.2l2-3.7-4.2-.4s3.8-5 4.4-6.1-8.6-5-8.6-5 2.4-2 1.5-2.5-9.6-3.6-10.6-4.6-7.1-17.1-11.1-28.2-7.5-20-7.5-20 5.4-9.6 5-18.8 2-24.2 4.6-38.4 4-29 7-29.8 7.8-2.6 6.5-4-12-16.3-8.5-17a98 98 0 0111.2-1.3c1.7 0 .6-1.2-1.3-3s-4.5-5.5-2.5-6 8.4-1.2 7.8-2.6l-4.2-11.1 11 3.5c1.5.5 2.4-.6 1.5-4.5l-3.5-16c-1.2-5.4-3.8-13-3.8-13s11.7 2.4 14.2 3.3 2-2 1-7.3-3.5-14-5-19.3-2.7-8.5-2.7-8.5l16.7 3.8c3.3.7 3.1-1 2-4.9s-10-30.4-10-30.4 19.3 4.1 21.6 4.8 2-2 1.6-5.3-1.6-12.9-2.9-21-3.7-21-3.7-21 19.2 15.3 23.4 18 9.4 4.2 10.4 4 1-5 0-13-3-17.9-3-17.9a15.1 15.1 0 004.7-4.3c1.4-2.5 3.5-7.1 3.5-7.1l12.6 10.6c4.4 3.8 7.9 4.6 8.7 4.4s1.5-5.6 1.5-5.6l8.1 3.7c3.1 1.5 3.8.8 4.6-1.2l5-13s4.2 4.8 7.7 8.3 5.5 5.9 6.3 5.4 4.4-8.5 6.3-13.3 5-14 5-14a89.2 89.2 0 006.9 12.3c3.3 4.6 6.7 8 7.5 7.7s10.9-10.6 10.9-10.6 5.4 8 7.7 10.4 4.8 4.6 5.6 4.6 7.3-9 10.7-14.8 8.3-15.2 8.3-15.2a131.4 131.4 0 009 17.5 73 73 0 0012.1 16.5zM251.6 564.4c2.2-1.8 3.4-2.5 4.3-1.8a.6.6 0 00.4.2v-.3c-1-1.8-3-.2-4.7 2zm3-7.7c.1-.4 0-.6-.1-.6V556.7zm1.8 4a5.3 5.3 0 01-.5-.4 6 6 0 001.2 1 1.8 1.8 0 00-.8-.7zm50-156.9l-5-18.5a81.5 81.5 0 01.4 10.6c-.4 3.5-7.4 3.4-10.2 3.2a2.8 2.8 0 001 .4c2.5.4 13.8 4.4 13.8 4.4zm4.9-47.6a82.4 82.4 0 011 10.3c-.2 1.7-3.4 2.5-6 2.7l10.1 2.7zm46-44a325 325 0 00-3.3-18.3c.4 4 .7 8.3.8 11.6.3 5.3-2.2 6.7-4.6 7a30.8 30.8 0 003.7 2.5c3 1.2 3.9 1.8 3.3-2.8zm124.5-48.9c4.5-9 8-19 9.2-26l.3-1.8c-2.6 7.8-9.1 25.2-18.7 38-3.5 4.8-6.5 5.4-8.4 5 2.6 3.5 4.6 5.5 4.6 5.5s8.6-11.6 13-20.7zM580 230a73.2 73.2 0 00-15-2.7c-7.5-.6-29.3-2.1-24.6-.8 5.2 1.4 12.4 2.2 19.2 2.8-.9-.1-5.3-2.3 5.8-1.5 7 .5 7.3 1.7 6.6 2.5 5.9.4 10.8.5 8-.3zm37.1 3.4c-3.3-.9-14.6-2.3-17-2.1-2.4.2-1.8.8 1 1.2s12.2 1.7 16.6 3.2a5.9 5.9 0 011.2.6c1.6-1.8 3.4-2 4.4.8-.9-3-3.4-3-6.2-3.7zm53 36.5c2.5 3.3 3.8-.2 3-2.3s-4-7.6-6.8-10c1.3 1.5.2 2.5-1.3 6.1a1.5 1.5 0 010 .2c2-.2 2.7 2.7 5.1 6zm48.4 102.5c3.2-1.9 4.4 5.7 7 12.1s5 4.8-.5-12.3-10.8-32.6-14.4-45.3a192.3 192.3 0 00-11.4-29.2l1.2 2.9c1 2.6-.4 2.4-2.4 0-.7-.8-1.3-1.3-1.8-1.3a51.9 51.9 0 014.9 10.3l7.5 21.3 1-.5-.6 1.8c1.6 4.8 3 9.6 4.2 14.1a36.4 36.4 0 011.6 17.4.9.9 0 00.2-.2c1.3-2 1-6.8 2-5.3s6 16.2 6.6 17.7-.2 2-1.4-1-2.6-9.6-5.2-3.6l-2 5.2a11.3 11.3 0 013.6-4zM751 567.5a45 45 0 00-5 2.2c-2.9 2-5.5 5.6-7.3 13l-1.4 5.5c-.3 7 0 13.8-.5 15.6-1 3.6-7.5 16.6-4.1 11.3s10.8-17.7 13.5-30.9c2.2-10.4 8-16 10.3-18l-3.3.7-2.2.6zm-24.8 75.4a18.3 18.3 0 00-2-.4c-1.4.7-3 2-2 3.5 1 1.7-.4 4.8-1.9 7s-4.2 3.7-3.1 6.4.4-.6 2-2.7 5.7-6 5.5-8.6a5.3 5.3 0 012.5-5c1.4-1 3-3.3 2.5-5s1.7-2.5 2.3-4.6-.4-5-.8-2.9c-.3 1.2-.3 4-2.1 4.8s-1.3 2.3-1.3 3.8a2.7 2.7 0 01-1.3 2c.6 1.2.7 2-.3 1.7zm-14 25.5c-1 2 0 5 1.6 1.2s.1-4.8-1.6-1.2zm-6 11.7a14.9 14.9 0 01-6.8 7.3c-1.8 1-.6 3 2.3 1a19.2 19.2 0 006.7-9.2c1.5-4 .5-4.8-2.2.9zm-49.3 59.3l-.4-.3a31.8 31.8 0 011.2 4.2c.4 2.1-5.4 3.6-9.2 5.2s0 2.8 3.6.7 4.4-3 6.7-3c2 0 .1-4.1-.9-6.6a1.6 1.6 0 01-1-.3zm-36.7 20.2c0 4.4 1.6 3.5 5.8 1s13-9 9.6-7.5l-8.4 4.2c-2.5 1.1-3.4.7-3.6-1.3a8 8 0 01-3 .8 10 10 0 00-.4 2.8zm-11.4-4.2c.2 2.2-.3 4.2-4.3 5-5 1-13.6 3.1-10.2 3a92.5 92.5 0 0012.5-1.8c2-.6 5.4 2 5.4-.2v-4.3a4.8 4.8 0 01-3.4-1.7zm-58.5 2.7l-.2-.4c.3 1.9.1 3.7-1.6 5-2.7 2-13.3 3.1-11.2 3.1s16.3.6 18.1-.2c1.6-.7 1.9-2.8 3.6-4l-5.2.8c-1.3.2-2.3-1.6-3.5-4.3zm13 3.5a3 3 0 011.5 3.2c-.4 2.5.9 3.1 9 3.8s5.5-1.5.9-1.9-7-1.9-3.2-1.7 5.3-1.2 2-1.4a9 9 0 01-6-2.9c-.1 1.5-1.4 1.2-4.1 1zm-60.5-.3c-1-.7.2-1.5-2.5-1.5s-16.7-1.1-19.2-1-9.3 2.1-6.4-.4 2.4-4 1.5-7l-.6-2.1-.1 2.3c0 4.4-3.2 7-6.5 8.4s-7.3 3-3.3 4 7.9.8 13.1 0 15.2-.6 19.8-.8 2 4 6.5 4.8 7.7-1.3 4.4-1.7c-2.9-.4-3-3-3.2-5.8-.6 3.1-2.5 1.5-3.5.8zm-82.3-3.4a2.8 2.8 0 01-1.8 1.5c-2.1.6-2.3-.2-8-1s-7.3 1-3.3 1.5 6.9.8 9.4 3 9.8 2.8 12.3 1.3c1.6-.9 4.3-1.1 6.8-1.1l-9.8-1.4c-2.7-.5-4.9-.3-5.6-3.8zm-50.2-6.3a28.4 28.4 0 003 2.6 41.5 41.5 0 0013.2 5.4c5.5 1.3 4.8-.8 3.4-.8s-4.2-.9-9.6-3.2c-4.5-1.9-5.1-7.7-5.8-8.7a32 32 0 01-3.2 4.4 1 1 0 01-1 .3z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M506.2 758.8c.5 3.2 0 6.7 3.3 7.1s.2 2.5-4.4 1.7-1.9-5-6.5-4.8-14.6 0-19.8.8-9.2 1-13.1 0 0-2.5 3.3-4 6.3-4 6.5-8.3c0-3.6 1-3.8 2-1.5 1.7 3.3 2.6 7 4.5 7 2.5-.1 24 1 24.2 2z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M440 763.4c-2.7-.5-8.3-.7-10.8.8s-9.9 1-12.4-1.3-5.4-2.7-9.4-3-2.3-2.4 3.4-1.5 5.8 1.6 8 1 2.2-2.3 2.2-4.4 3 4.2 4.8 4.6 16.9 4.2 14.2 3.8z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M374 747c1-1.8.8 6.3 6.3 8.6s8.1 3.2 9.6 3.2 2 2-3.4.8a41.5 41.5 0 01-13.1-5.4c-2.7-2-7.5-7.1-8.6-8s7.3 4.2 9.2.9z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M657.5 738.7c.9 2.1 3.6 7.5 1.3 7.5s-3.1.9-6.7 3-7.3 1-3.5-.7 9.6-3.1 9.1-5.2a26.3 26.3 0 00-2.5-7c-1-1.8 1.5.3 2.3 2.4z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M635.6 753.1l-8.4 4.2c-3.2 1.5-3 .4-3.6-1.8-.2-.8-3.4-.3-3.4 4.1s1.6 3.5 5.8 1 13-9 9.6-7.5z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M612.2 755.8v5.7c0 2-3.3-.4-5.4.2a92.5 92.5 0 01-12.5 1.7c-3.4.2 5.2-2 10.2-3s4.7-4 4-6.6c-.3-.9 3.7 2 3.7 2z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M566.7 760a9.4 9.4 0 006.7 3.5c3.3.2 1.9 1.7-1.9 1.5s-1.5 1.3 3.1 1.7 7.3 2.5-.8 1.9-9.4-1.3-9-3.8-2-4.4-4.8-3.5-2.7 3.5-4.6 4.3-16 .2-18.2.2 8.6-1 11.3-3 1.5-5.7.6-8.4 4.8 6.2 7 6.4 9.4-2.3 10.6-.8z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M731.2 630.6c-.2 1.2-.2 4-2 4.8s-1.3 2.3-1.3 3.7-1.7 2.5-3.1 3.2-3.6 2-2.5 3.7-.5 4.8-2 7-4.1 3.7-3 6.4.4-.6 2-2.7 5.7-6 5.5-8.6a5.3 5.3 0 012.5-5c1.4-1 2.9-3.3 2.5-5s1.6-2.5 2.3-4.6-.5-5-.9-3z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M757.5 565.4s-8.5 5.7-11.2 18.8-10.3 25.7-13.6 31 3.1-7.8 4.2-11.4-1.2-27.5 4.4-32.3 16.2-6 16.2-6z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M697.8 295a188.9 188.9 0 0112.8 31.8c3.5 12.7 9 28.2 14.4 45.3s2.9 18.8.4 12.3-3.8-14-7-12-4.7 6.4-5.8 8.5-1.4-8.8.7-13.4 2.9-9.2-.2-21.3-8.2-25.7-12.2-36.7-7.9-14.2-7.9-14.2 2.7-4 4.8-.2z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M666 257.3c3 2.3 6 8.1 7 10.2s-.4 5.6-3 2.3-3-6.3-5.2-6-3.5-10.5 1.3-6.5z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M600.1 231.2c2.3-.2 13.6 1.2 17 2s6.2.7 6.6 6-1.7-2.2-6-3.6-13.6-2.7-16.5-3.2-3.6-1-1-1.2z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M540.2 226.4c-4.6-1.3 17.1.2 24.6.8a73.2 73.2 0 0115 2.7c4 1-7 .5-15-.2s-18-1.4-24.6-3.3z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M462.1 277.7s4.5 4 10.4-4.1c12.8-17.2 20-42.2 20-42.2s-1 19.8-10.2 34.6-13.6 19.7-13.6 19.7z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M346.2 312s9 3.3 8.6-6.5-2.3-26.9-2.3-26.9L359 317a4.2 4.2 0 01-3.5.6c-2-.6-9.3-5.6-9.3-5.6z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M290.5 399s10.8 1.3 11.3-3.1-1.5-20.9-1.5-20.9l7.7 30.1-16-4.2"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M302.2 369.4s9.8.2 10-3-1.9-17-1.9-17l8.1 24.2z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M254.5 553.7s.1 6.8 3.6 8 3.8-.3 3.8-.3l.4 2.7-1.3 3.2-1.8 1.1a5.1 5.1 0 01-1.7-1.9c-.6-1.2-.7-4.4-2.4-4.2s-5.4 2-4.4 8.2-3.2-1.6-2.8-4.8 3.6-5.6 4.3-7.5 1.2-6.3 1.6-6.5.7 2 .7 2z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M757.5 556s-9.7-10.5-12.9-25-7.8-46.2-7.4-51.7l1.5-18s-5.5 6.7-7 10.2-.7 29.8.6 35.5 7.8 37.2 12 44.8a44.6 44.6 0 0012.2 13.6c1.1.7 8 1.1 10.8 1.6s0-4.2-3-6a54.8 54.8 0 01-6.8-5z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#fdc681"
        fillRule="evenodd"
        d="M510.7 225.9l-3.3-2.4-1.9.3-.7 3.5 4.2.9c1.7.5 1.7-2.3 1.7-2.3z"
        transform="translate(-151.4 -166.9)"
      />
      <path
        fill="#653919"
        fillRule="evenodd"
        d="M832.9 564.2s16-30-8.8-64.3c-29.6-41.2-64.1-78.2-73.5-93.1-8-13-11.5-48.7-10.8-64.1.7-17.9 2.5-37.6-8.2-59.5S700 216.8 686 205s-39.7-19.4-67.4-25.9-48.4-2.7-56.8-3.5-25.9-8.8-28.6-8.8-8 3.5-11.3 6.2-7.7 2.5-16 2.3-7.6 5.7-9.7 4.6-9.8-9.4-19.4-11.7-14.4 4.6-27 6.5-34-1.4-53.8.2-55.5 19.9-73 31.8-29.5 16.7-42.4 43.2-19.9 54-17.8 83.5 3.2 43.4-.4 76-30 52-59.7 74.7-29.9 66.2-29.9 66.2-11.2 3-15.8 9.4c-9.1 12.8-9 26.3 17.1 65.8s56.8 63.2 77.3 78.5 35 29.4 54.6 49.4 53.5 48.7 71.7 62 37.7 9.9 54.7 6.1 51.3-13 56.1-13 14.4 1.5 33 8 44.7 15.4 59.1 16.2 23.4-5 36.3-14.8 50.6-41.5 66.4-53.9 64.5-38.6 90.8-56.3 54-31.3 55.6-44.7c1.4-12.4 4.5-18.3 8.9-33.3s8.8-30.1 11.1-45.8c2.6-17.8-16.7-19.8-16.7-19.8zm11.5 32.1c-4 17.4-11.4 36-14.2 47.2s-2.7 22.7-8.4 26.7c-4 2.9-28 21.2-47.2 33.4-19.8 12.8-82.2 50-92.4 57.2s-46.6 39.3-59.1 49.3-29.9 23.4-49.3 18.8-71.2-23.4-84-23-59.8 14.4-74.3 15.2-24.4.7-45.9-15.8-59.7-50.5-66.8-61.4-17.7-39.9-24-57-11.9-38-13.8-44.7-5.8-6 7 33.4 21.4 60.6 21.4 60.6-21.9-23.4-40.9-37-55.3-49-70.8-73.2-25.6-45.7-21-57.2 11.6-15.9 23.7-15.4c9 .3 12.3.6 13.5.7-3.2-.6-19.6-5-10.5-34.8 10-33 30.4-37.4 52-59.7s28-31.5 29.4-68.7-8.6-81.6 5.6-117.1 17.8-42.8 43.3-59.7 62.2-35.7 82.6-36.1 52.8 1.6 60.8-2.5 14.8-9 26.3.8 18.4 16.5 24.6 9.8 19-17.1 22.1-15.7 22.8 9 31.4 8.6 38.6-2.7 71.8 7.5 46.8 18.4 56 32.2a460.8 460.8 0 0133.6 61.6c10.8 24.2 9.1 49.6 9.1 65.5s.2 36 8.6 55.3 23 32.6 29.6 40.1 21.3 24.7 33.6 41.6 25 34 26.3 51.1-2 25.2-7.5 30.7c-2.5 2.5 3.1 2 11.5 4s10.3 10.4 6.3 27.7zm-646.5-42.2a4 4 0 00.5 0h-.5zm548.6-7c-5.5-10-9.3-30.5-10.3-41.3s-2-23.3-.7-29.1c.8-3.3 5.2-13.7 6.4-17.6s1.6-8.7.3-8.9-9.7-.1-11.1-.3 1.5-12 2.6-16.5 1.7-5.6-1-6-10 1-12 1 1-11.7 2.3-18.3 4.3-10.1-.8-10.7-14.4 3.3-15 1.5 7.2-23.8 9.7-29.8 4 .7 5.2 3.6 2 2.6 1.4 1-5.6-16.1-6.6-17.6-.7 3.3-2 5.3-17 7.5-19 8.3 3.2-8.6 6-16.7 7.5-24.8 7.5-24.8-21.9 11.8-30.8 14.7c-2.6.9.7-9 4-18.6s9.4-20.4 11-23.7 2.4-4.5 4.4-2.1 3.3 2.6 2.3 0-4.3-9.7-5.7-12.7-3.2-2-3.2-2-7-8.8-10-11.2c-2.4-1.9 8 12.1 8 12.1s-7.2 5-19.8 12.5-19.4 10.6-19.4 10.6 2.1-11.7 4.5-20.2 8.3-21.4 10.3-26 3.2-5-.4-7.6-9.5-5.6-12.2-7.1-3.4-.7-1 .8l6.3 4.3-6.8 6c-3 2.8-13 8.5-16 10.5s-5.7 4.7-6.5 2.2-3.8-25.5-4.5-32.7-4.4-5.9-6.5-1.4-13 26.7-18.1 33.1-14.9 14.2-14.9 14.2-.8-3.9-2-8-6.5-20.5-8.9-28.9a96.7 96.7 0 01-2.9-18s5.7-2.4-5.4-3.3-6.7 1.4-5.9 1.6-1 7.4-6 23.2a153 153 0 01-13.7 31.9c-2.6 4.2-4.6 2-7.7-1.5s-6.8-8.1-11.8-23.7-6.1-33.6-6.1-33.6l5.2-.1c3 0 3.7-.4 1.9-.6s-8.3-.8-15.2-1-17.8-.5-23.4-.4-5.4 1.6-.1 1.7a71.8 71.8 0 019.3.8 40.5 40.5 0 01-.7 11.3c-1.2 7-4.7 17-9.1 26S468.8 284 468.8 284s-15-16.1-19.2-33c-2.7-10.6-2.3-23.6-2.3-23.6l18-1.5c1.5-.2 2-.9.8-.9s-19 .6-25.5 1.1a129 129 0 00-16.7 2.5c-2.6.7-2.2 3.1.3 2.4a51 51 0 016.7-1.1s-.8 20.9-3 31.2-8.6 24-9.2 24-10.2-9.6-14.2-14.3-16-19.8-18.7-24.3-3.5-5.8-6.2-4 0 4.3 1 7.8 4.4 23 4.6 27.3 0 13-1.2 12.5-23.8-20.9-27-24.4-5.7-5.3-7.1-4.4-8.2 7-10.5 9.2.6 3.3 1.7 2.5 4-3.8 4.9-4.5 2.4 4.5 4.7 11.7 6 27.4 6.6 32-.5 4-3.4 2.8-26.1-20-27.4-20.9-.5-2.8 1.6-5.9.4-5.4-.8-4a45.7 45.7 0 00-6.5 9.4c-2.3 4.6-6.3 13-7.3 15.4s1.5 3.4 1.9 2.6l2.9-5.7c1.9-3.7 4-7.3 4-7.3s1.7 11.3 3.5 21.7 3.4 20.9 3.4 20.9l-21.7-5.8 2-6.7c.7-1.8-1.6-3.2-2.7-.9s-4.3 10.5-5.8 13 1.5 3.3 2.1 2a14.5 14.5 0 013-3l10.4 32s-14.9-4-17.4-4.3-1.6-1.9-1-3.8-.4-5-1.5-5-1.4 1.7-1.7 5.3-2.2 10.2-3 13.3 1.6 3.8 2 3 2.1-5.3 3-7.8 2.2 4.8 4.3 12.1 5.2 19.2 5.2 19.2-11.2-4-13.7-4.3-2-2.6-1.7-5.9-2.1-3.1-2.7-.2-1.5 10.9-2 13.8 3.8 1.4 3.8 1.4l6.7 24.9s-9-3.8-10.8-4.2-1.5-2.7-1-5.2.1-6.7-1.3-6.5-2.5 4-3.2 8.8 2.3 5.6 3.6 6.3 4.2 10.6 4.2 10.6-7.3 1.5-9.2 2.7 5.2 8.2 5.2 8.2l-9 .6c-7.7.6 4.6 18.6 5.2 19.4s-3.1.8-6 1.2-1 3.6 0 3.6-5.2 25.7-7 36.7-3 29.7-3.7 36.4a21.3 21.3 0 01-6 12.7c-1.3 1 .7 4 2.8 5.9s3.2 5.4 7.3 16.2 9.5 25.8 11 29.8 2 8.5 3.5 10.6 3.5 1.5 3.2 4-1 5.2.8 6.1a4 4 0 012.6 4c0 2-1.3 5 .2 6.6s1.6 3.5 1.3 6.2 3.7 3.2 5.1 3.4-.1 5.3-.1 8 5.7 1.7 6.8 1.7 1.7.3 1.7 2.3.1 6.5.4 10 2 1.3 1.8.4a41.6 41.6 0 01-.1-6.6c.1-3 1.8-7.8 1-8.5s-4.7-.7-7.2-.7-1.6-2.9-1.5-4.6.4-3.3-1-3.7-4.6-1.3-4.4-2.5.8-3.5-.2-4.2-1.7-3.6-1.4-5.8.4-4.9-.3-5.6a30.2 30.2 0 00-3.6-2.4l1-6c.4-2.9-2.2-2.2-3.2-3.2s-2.5-5.7-3-7.6 2.8-.1 4.3.4 1.8.4.7 2.4 1.8 3.7 5 4.4 2.2 1.1-.6 5 .4 3.4 2 3.4-.4 1.2-1.4 3 6 1.3 7.5 1.4-2.1 5.4-4.8 10.3 8.8 2 10.4 1.7-.6 4.1-2 7.6 1 5.3 2.5 5 8.3-3.2 9.1-3.2-1.6 6.5-2.3 10.3-2 7.4-3.2 8.5.4 7.6 3.5 15.3 9.6 15.4 12.6 18 1-1 1-1a92.6 92.6 0 01-7.5-10.3c-3.3-5.4-5-12.8-6-17.1s.6-5.2 2.6-5.7 5.5-.3 7.4-.3.6 1.8-.3 4.9.6 10 .6 13 3.5 4.8 3 3.1a10 10 0 010-3.5l5-2.2c2.3-1 9.5-4.2 10.5-4.2s-4.4 19.1-4.9 24.7 2.5 3.4 2.8-.2 1.1-4.3 3-1.6 1 8.2 1 8.2 7.5-7.8 13.9-11.2 19.9-6 19-5.5-9.4 18.9-10.8 22.4-2.4 13.3-2.3 16.5-10.8-6-10.8-6 5.7 7.1 9.6 9.2 7.2 7.7 8.9 6 5.3-7.5 8-12.5 8.3-11.3 13.4-17.4 12.7-15.7 13.5-16 5.7 10.6 8.1 21.1 5.6 26.3 6.1 30.7 2.8 4 5.7 4.4l18.4 2.7c4.4.6 1.4-1-.8-1.3s-11.3-2-11.3-3 6.4-8.8 12.5-17.7 13.7-21.6 15.3-24.4 5.6 6.8 9.2 15.3a179.2 179.2 0 016.8 18.3c.9 2.9 1.4 4.4-1.5 7s4 .5 6.4.3 16.6 1 19.2 1 1.4.9 2.5 1.6 3.2 2.6 3.6-1.9 3.4-15.4 5-19.9 9.8-7.6 12.3-10.7 3.6-9 5.3-7.9 20 34.5 21.3 37.2 2.2 4.4 3.5 4.3 6.2-1.1 9.3-.9 4.4.7 4.3-1a53 53 0 011.3-10.7c.8-4.1 4.5-13.6 7-19s6-14.6 7.4-15.2 6 4 11.2 10.3 12 23.5 13.5 27.6 4.4 3.7 8.3 3.6 8-.6 7.8-1.7-1.3-12.1-2.6-21.6-4.2-17.6-3.2-17.2 15.1 10.1 17.5 11.1 7.6.1 9.2.8 9.6 9.2 12 10.8 3.1-3.5 4.7-4.6 2-2.8 1.1-2.4-2.7 1.4-3.3.7-1.7-4-3.4-7.2-5-10.2-6.8-13.1-3.5-5.3-1.7-4.5 18.1 12.1 20.5 13.5 2.8 2.4 2 3.4-.2 2.7 1 1.8 6.7-4.2 8.1-5.6.3-2.5-1-1.4a39 39 0 01-3.8 2.5 94.5 94.5 0 00-4.4-13.3c-2.3-5.3-9.7-11.7-10.7-12.7s8.1-1.5 15.2-2l17.3-1.1s-2.4 10.3-2.7 13.2 1 2.7 1.4 1.5 1.8-7.2 2.7-11.2 1.2-5 3.3-6.9 3.6-4.4 1.7-6.2-8.2-8.7-7.7-9.6 5.7-1.1 9.5-1.1 8.6.2 9.6-1.2-1.4-4.4-3.5-7.2-7.1-8.3-5.7-8.8 8.8-1.2 12.7-1.6 5.7-1.3 4.6-2.5-5-5.6-6.6-7.8 2.2-2.4 5.2-2.3a67.4 67.4 0 0110.1 1.2c2 .5-.1-3-2.2-6s-5.4-7.3-5-8.1 2.4-1.4 5.1-1.4 3.5-.1 3-2.7.5-7 2.6-11.5 5.7-16.7 9-30.6 9.9-14.5 14.5-15.8 14-1.9 14-1.9a35 35 0 01-6.6-1.8c-2.4-1.1-8.5-6-14-16zm-10.9 32.3c-3.8 14.4-8 29.2-11.9 35.9s-5 10.4-6.3 11.3-3 1.8-.6 5a82.5 82.5 0 015.5 8.1 65.8 65.8 0 00-9.4 0c-3.2.4-6.7.8-6.5 1.9s6.2 9.4 6.2 9.4l-8.1 1c-4.1.6-9.2 2.5-8.1 4.8s9.4 13.3 9.4 13.3a73 73 0 00-11.1-.2c-4.8.4-9.6 3.2-9 4.4s9.6 12 9.6 12-2.7 4-5.4 4.5-15 .4-21.7 1.3-13.6 2.3-13.8 3.3 5.2 4.2 8.7 8.8 7.4 13.3 7.4 14.8-6.5-3-10.3-5.8-15.2-10-17.3-10-1.7 2 .6 5 11.7 24 11.7 24-8.3-5.8-10.2-6.4-8.1.2-10.8-1.3-12.6-10.4-16-11.5-5.8-1.7-4.7 4 5.8 36.7 5.8 36.7l-6.9.7s-7.3-15.7-11.2-23-9.9-14.2-15-17.6-6.7-2.3-8.2.9-7.7 23.2-10.6 29.2-3.4 14.6-3.4 14.6l-10.2.5s-6-13-11.5-22.8-12.1-19.2-13.8-19.4-4.6 7.5-7.5 10-10.7 7.1-12 10.2-5.8 20-5.8 20l-21.9-1a234.6 234.6 0 00-8.1-23.4c-4.4-10.2-11-20.8-13.4-20.8s-6.3 11.7-12.5 20.9-18.6 25.4-18.6 25.4h-4s-2.5-14-5.8-27.5-9.2-31.9-14-31.4c-2 .2-2.3 3.4-4.6 7.3s-15.9 18-19 22.4-9.8 16.5-10.5 17.7-3.1-.2-3.3-2.7-.6-13.1 6-26 11.5-19.5 10-19.5-14.8 3.1-20.9 5.4-14.2 7.8-18.6 4.4-2.5-7.3-1.2-12.7 3.1-9.8.8-9.6a32.5 32.5 0 00-10.8 3.3c-4 2.1-7.6 4.6-7.6 2.3s.5-7.3 1.7-10.2 3.6-5.2 1.3-5.9a41.7 41.7 0 00-9.8-1c-2 .2-3 .7-2.8-1s2.3-14.2 1.7-15.6-8.5 1-8.5 1 2.7-10.7 1.6-11-10.4 0-10.4 0 3.8-9.2 3.3-11.6c-.2-1-7-.2-7-.2l2-3.7-4.2-.4s3.8-5 4.4-6.1-8.5-5-8.5-5 2.3-2 1.4-2.5-9.6-3.6-10.6-4.6-7.1-17.1-11-28.2-7.6-20-7.6-20 5.4-9.6 5-18.8 2-24.2 4.6-38.4 4-29 7-29.8 7.8-2.6 6.6-4-12.1-16.3-8.6-17a98 98 0 0111.2-1.3c1.7 0 .6-1.2-1.3-3s-4.5-5.5-2.4-6 8.3-1.2 7.7-2.6l-4.2-11.1 11 3.5c1.5.5 2.4-.6 1.5-4.5l-3.5-16c-1.2-5.4-3.8-13-3.8-13s11.7 2.4 14.2 3.3 2-2 1-7.3-3.5-14-5-19.3-2.7-8.5-2.7-8.5l16.7 3.8c3.3.7 3.1-1 2-4.9s-10-30.4-10-30.4 19.3 4.1 21.6 4.8 2-2 1.6-5.3-1.6-12.9-2.9-21-3.7-21-3.7-21 19.2 15.3 23.4 18 9.4 4.2 10.4 4 1-5 0-13-3-17.9-3-17.9a15 15 0 004.7-4.3c1.4-2.5 3.5-7.1 3.5-7.1l12.6 10.6c4.4 3.8 7.9 4.6 8.7 4.4s1.5-5.6 1.5-5.6l8.1 3.7c3.1 1.5 3.8.8 4.6-1.2l5-13s4.2 4.8 7.7 8.3 5.5 5.9 6.3 5.4 4.4-8.5 6.3-13.3 5-14 5-14a89.8 89.8 0 006.9 12.3c3.3 4.6 6.7 8 7.5 7.7s10.9-10.6 10.9-10.6 5.4 8 7.7 10.4 4.8 4.6 5.6 4.6 7.3-9 10.7-14.8 8.3-15.3 8.3-15.3a131.2 131.2 0 009 17.6c5.4 8.8 11 16.5 12.1 16.5s12.1-17.6 12.1-17.6 6 8.8 9.8 12.4 5.9 4.6 7 4.6 7.4-10.5 9.3-14.5 4.4-8.3 4.4-8.3 4.6 10.2 7.1 15 3.8 6.9 4.6 6.9 7.5-5.4 10-8.4a57.5 57.5 0 003.8-4.8s3 9.6 4.1 12.3 2.8 1.5 5.5-.8 11.4-10.6 14-13.6 4.8-6 4.8-6 3.7 10 5.4 10.5 13-7.8 13-7.8 2 8.8 3 8.8 12.6-5.6 12.6-5.6-7.5 21.5-8.1 24.2 5 3.3 8.5 3.1 8.1-1 8.1-1-1.4 12.3-.8 13.6 25.3-14 25.3-14-4.2 10.6-7 20.9a162.4 162.4 0 00-4 21.5c0 .8 11.8 3.1 11.8 3.1s-1.7 5.6-.8 5.2l24.8-10s-11.5 35.7-12 38.7.5 2.5 2.4 1.4 13.6-6.4 14.6-6.7-1.9 27.4-1.6 29.7 2.7 2.3 5 2.3l9.6-.2s-2.8 23.4-2.5 25.2 2 2.3 4.8 1.7 6.4-1 6.4 1.3 3.8 49.4 6.3 69.7 5.6 38.6 11 46.8a79.6 79.6 0 0011 13.1 20.4 20.4 0 00-17 15.6zm-479.3-18.8a3.3 3.3 0 01-1.8-3.9c.6-1.5-2-.1-1.7 2.3s-.7 2.5-2 3.2-2.5 3.5-1.2 6-.2-2 2-3.8 3.5-2.5 4.3-1.8 2.2-1 .4-2z"
        transform="translate(-151.4 -166.9)"
      />

      <filter id="noiseFilter01">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
    </svg>
  );
};
