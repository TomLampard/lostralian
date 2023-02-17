import { classNames } from "@utils/classStringify";
import { forwardRef, type HTMLAttributes } from "react";



interface RadioInputProps extends HTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
  value: string;
  label: string;
  placeholder?: string;
}

export const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  ({ label, type="radio", value, name, className, placeholder, ...props }: RadioInputProps, ref) => {
    return (
      <>
        <label className="block mb-2 font-semibold">
          {label}
        </label>
        <input 
          type={type}
          name={name}
          value={value}
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

RadioInput.displayName = "RadioInput";