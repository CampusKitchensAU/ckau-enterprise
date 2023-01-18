import { useRef, useState } from "react";
import { MdSearch } from "react-icons/md";

const SearchFilter = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <div
      id="search-filter-wrapper"
      className={`flex h-10 w-full items-center gap-2 rounded-md border-2 px-2 transition-all duration-200 ${
        isFocused
          ? "border-primary-500 text-primary-500"
          : "border-gray-300 text-text-secondary hover:border-gray-400"
      }`}
      onClick={() => inputEl.current?.focus()}
    >
      <MdSearch fontSize={20} className="mt-[2px]" />
      <input
        ref={inputEl}
        type="text"
        id="search-filter"
        placeholder="Search..."
        className="w-full font-medium text-primary-900 outline-none focus:h-full"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
