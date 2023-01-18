import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Select = ({ title, options }: { title: string; options: string[] }) => {
  const [selected, setSelected] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className="relative w-full">
      <label
        htmlFor="select-wrapper"
        className="absolute -top-[10px] left-5 z-[1] inline-block bg-white px-1 text-sm font-medium text-primary-900"
      >
        {title}
      </label>
      <button
        id="select-wrapper"
        className="flex h-10 w-full justify-start rounded-md border-2 border-gray-300 px-4 
      py-[6px] font-medium text-primary-900 transition-all duration-200 
      focus:border-primary-500"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <div className="grow text-left">{options[selected]}</div>
        <MdKeyboardArrowDown
          fontSize={24}
          className={`${isFocused && "rotate-180"} transition-all`}
        />
      </button>
      <div
        className={`absolute right-0 z-10 h-auto w-full origin-top-right rounded-md 
        border border-gray-300 bg-white opacity-0 shadow-md transition-all 
        duration-75 ${
          isFocused ? "visible mt-1 opacity-100 duration-300" : "invisible"
        }`}
      >
        <div className="py-1">
          {options.map((option, index) => (
            <div
              key={index}
              className={`cursor-pointer px-3 py-2 font-medium text-primary-900
              transition-all hover:bg-gray-200 ${
                index == selected && "bg-gray-200"
              }`}
              onClick={() => setSelected(index)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;

{
  /* <div id="select-wrapper" className=" w-full">
      <select
        id="select"
        className="h-10 w-full font-medium text-primary-900 rounded-md border-2 border-gray-300 px-2"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div> */
}
