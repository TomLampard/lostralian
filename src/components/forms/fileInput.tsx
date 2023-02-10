import { classNames } from "../../utils/classStringify";
import { forwardRef, type HTMLAttributes } from "react";


interface FileInputProps extends HTMLAttributes<HTMLInputElement> {
  type?: string;
  label: string;
  name: string;
  placeholder?: string;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ label, type="file", name, className, placeholder, ...props }: FileInputProps, ref) => {
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

FileInput.displayName = "FileInput"