import { classNames } from "../../utils/classStringify";
import { forwardRef, type HTMLAttributes } from "react";



interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
  label: string;
  placeholder?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, type="text", name, className, placeholder, ...props }: TextInputProps, ref) => {
    return (
      <>
        <label className="block mb-2 font-semibold">
          {label}
        </label>
        <input 
          type={type}
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...props}
          className={classNames(
            "block w-full py-1 rounded shadow-sm bg-secondary border-secondary focus-ring",
            className,
          )}
        />
      </>
    )
  }
)

TextInput.displayName = "TextInput";