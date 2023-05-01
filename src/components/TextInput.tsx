import type { Dispatch, SetStateAction } from "react";
import classNames from "../utils/classNames";

const TextInput = ({
  label,
  value,
  setValue,
  id,
  className,
  disabled = false,
  optional = false,
}: {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  id: string;
  className?: string;
  disabled?: boolean;
  optional?: boolean;
}) => {
  return (
    <div className={classNames(className || "")}>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
        {optional && <span className="ml-1 text-sm font-semibold text-gray-400">(optional)</span>}
      </label>
      <div className="mt-2">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary">
          <input
            type="text"
            name={id}
            id={id}
            autoComplete={id}
            className={classNames(
              disabled
                ? "bg-black/5 text-gray-500"
                : "bg-transparent text-gray-900",
              "block flex-1 rounded-md border-0 py-1.5 pl-2 focus:ring-0 sm:text-sm sm:leading-6"
            )}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
