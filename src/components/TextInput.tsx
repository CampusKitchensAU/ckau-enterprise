import { type Dispatch, type SetStateAction } from "react";
import classNames from "../utils/classNames";
import { IoMdAlert } from "react-icons/io";

const TextInput = ({
  label,
  value,
  setValue,
  id,
  className,
  disabled = false,
  optional = false,
  validation,
  validationMessage,
  error = false,
  setError,
}: {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  id: string;
  className?: string;
  disabled?: boolean;
  optional?: boolean;
  validation?: (value: string) => boolean;
  validationMessage?: string;
  error?: boolean;
  setError?: Dispatch<SetStateAction<boolean>>;
}) => {
  const validateOnChange = (input: string) => {
    setValue(input);
    const timer = setTimeout(() => {
      if (validation && !validation(input)) {
        if (setError) setError(true);
      } else {
        if (setError) setError(false);
      }
    }, 1000);
    return () => clearTimeout(timer);
  };

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
        <div
          className={classNames(
            error
              ? "ring-red-300 focus-within:ring-red-500"
              : "ring-gray-300 focus-within:ring-primary",
            "flex rounded-md shadow-sm ring-1 ring-inset  focus-within:ring-2 focus-within:ring-inset "
          )}
        >
          <input
            type="text"
            name={id}
            id={id}
            autoComplete={id}
            className={classNames(
              disabled
                ? "bg-black/5 text-gray-700"
                : "bg-transparent text-gray-900",
              error
                ? "-mr-8 text-red-900 placeholder-red-300"
                : "border-gray-300 focus:border-primary focus:ring-primary",
              "block flex-1 rounded-md border-0 py-1.5 pl-2 focus:ring-0 sm:text-sm sm:leading-6"
            )}
            value={value}
            onChange={(e) => validateOnChange(e.target.value)}
            disabled={disabled}
          />
          {error && (
            <div className="pointer-events-none inset-y-0 right-0 flex items-center pr-3">
              <IoMdAlert className="h-5 w-5 text-red-500" aria-hidden="true" />
            </div>
          )}
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600" id="email-error">
            {validationMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextInput;
