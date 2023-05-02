import type { Dispatch, SetStateAction } from "react";
import classNames from "../utils/classNames";

const TextArea = ({
  label,
  value,
  setValue,
  rows,
  className,
  disabled = false,
  id,
  description,
  optional = false,
}: {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  rows: number;
  className?: string;
  disabled?: boolean;
  id: string;
  description?: string;
  optional?: boolean;
}) => {
  return (
    <div className={classNames(className || "")}>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
        {optional && (
          <span className="ml-1 text-sm font-semibold text-gray-400">
            (optional)
          </span>
        )}
      </label>
      <div className="mt-2">
        <textarea
          id={id}
          name={id}
          rows={rows}
          className={classNames(
            disabled
              ? "bg-black/5 text-gray-700"
              : "bg-transparent text-gray-900",
            "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          )}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disabled}
        />
      </div>
      {description && (
        <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
      )}
    </div>
  );
};

export default TextArea;
