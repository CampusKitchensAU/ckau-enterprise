import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";

const Tab = ({
  title,
  selected,
  index,
  callback,
}: {
  title: string;
  selected: boolean;
  index: number;
  callback: Dispatch<SetStateAction<number>>;
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <button
      id="tab-wrapper"
      className={`h-full cursor-pointer items-start border-b-2 px-3 text-sm font-semibold transition-all duration-200 sm2:text-base ${
        selected
          ? "border-solid border-primary-500 text-primary-900"
          : "text-text-secondary"
      } ${isHovered && !selected && "border-solid border-gray-400"}`}
      onClick={() => callback(index)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title}
    </button>
  );
};

export default Tab;
