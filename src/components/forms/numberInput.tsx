import { classNames } from "@utils/classStringify";
import { forwardRef, type HTMLAttributes } from "react";



interface NumberInputProps extends HTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
  label: string;
  placeholder?: string;
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ label, type="number", name, className, placeholder, ...props }: NumberInputProps, ref) => {
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

NumberInput.displayName = "NumberInput";