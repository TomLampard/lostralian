import { classNames } from "@utils/classStringify";
import { forwardRef,type HTMLAttributes } from "react";

interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  placeholder?: string;
}


export const TextAreaInput = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, placeholder, name, className, ...props }: TextAreaProps, ref) => {
    return (
      <>
          <label className="mb-2 block font-semibold">
            {label}
          </label>
        
        <textarea
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...props}
          className={classNames(
            "bg-secondary border-secondary focus-ring block w-full rounded shadow-sm",
            className
          )}
        />
      </>
    );
  }
);

TextAreaInput.displayName = "TextAreaInput";