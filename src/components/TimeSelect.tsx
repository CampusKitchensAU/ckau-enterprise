import type { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

type Time = {
  id: number;
  display: string;
  value: number;
};

const options: Time[] = [
  { id: 0, display: "12:00 AM", value: 0 },
  { id: 1, display: "12:15 AM", value: 15 },
  { id: 2, display: "12:30 AM", value: 30 },
  { id: 3, display: "12:45 AM", value: 45 },
  { id: 4, display: "1:00 AM", value: 60 },
  { id: 5, display: "1:15 AM", value: 75 },
  { id: 6, display: "1:30 AM", value: 90 },
  { id: 7, display: "1:45 AM", value: 105 },
  { id: 8, display: "2:00 AM", value: 120 },
  { id: 9, display: "2:15 AM", value: 135 },
  { id: 10, display: "2:30 AM", value: 150 },
  { id: 11, display: "2:45 AM", value: 165 },
  { id: 12, display: "3:00 AM", value: 180 },
  { id: 13, display: "3:15 AM", value: 195 },
  { id: 14, display: "3:30 AM", value: 210 },
  { id: 15, display: "3:45 AM", value: 225 },
  { id: 16, display: "4:00 AM", value: 240 },
  { id: 17, display: "4:15 AM", value: 255 },
  { id: 18, display: "4:30 AM", value: 270 },
  { id: 19, display: "4:45 AM", value: 285 },
  { id: 20, display: "5:00 AM", value: 300 },
  { id: 21, display: "5:15 AM", value: 315 },
  { id: 22, display: "5:30 AM", value: 330 },
  { id: 23, display: "5:45 AM", value: 345 },
  { id: 24, display: "6:00 AM", value: 360 },
  { id: 25, display: "6:15 AM", value: 375 },
  { id: 26, display: "6:30 AM", value: 390 },
  { id: 27, display: "6:45 AM", value: 405 },
  { id: 28, display: "7:00 AM", value: 420 },
  { id: 29, display: "7:15 AM", value: 435 },
  { id: 30, display: "7:30 AM", value: 450 },
  { id: 31, display: "7:45 AM", value: 465 },
  { id: 32, display: "8:00 AM", value: 480 },
  { id: 33, display: "8:15 AM", value: 495 },
  { id: 34, display: "8:30 AM", value: 510 },
  { id: 35, display: "8:45 AM", value: 525 },
  { id: 36, display: "9:00 AM", value: 540 },
  { id: 37, display: "9:15 AM", value: 555 },
  { id: 38, display: "9:30 AM", value: 570 },
  { id: 39, display: "9:45 AM", value: 585 },
  { id: 40, display: "10:00 AM", value: 600 },
  { id: 41, display: "10:15 AM", value: 615 },
  { id: 42, display: "10:30 AM", value: 630 },
  { id: 43, display: "10:45 AM", value: 645 },
  { id: 44, display: "11:00 AM", value: 660 },
  { id: 45, display: "11:15 AM", value: 675 },
  { id: 46, display: "11:30 AM", value: 690 },
  { id: 47, display: "11:45 AM", value: 705 },
  { id: 48, display: "12:00 PM", value: 720 },
  { id: 49, display: "12:15 PM", value: 735 },
  { id: 50, display: "12:30 PM", value: 750 },
  { id: 51, display: "12:45 PM", value: 765 },
  { id: 52, display: "1:00 PM", value: 780 },
  { id: 53, display: "1:15 PM", value: 795 },
  { id: 54, display: "1:30 PM", value: 810 },
  { id: 55, display: "1:45 PM", value: 825 },
  { id: 56, display: "2:00 PM", value: 840 },
  { id: 57, display: "2:15 PM", value: 855 },
  { id: 58, display: "2:30 PM", value: 870 },
  { id: 59, display: "2:45 PM", value: 885 },
  { id: 60, display: "3:00 PM", value: 900 },
  { id: 61, display: "3:15 PM", value: 915 },
  { id: 62, display: "3:30 PM", value: 930 },
  { id: 63, display: "3:45 PM", value: 945 },
  { id: 64, display: "4:00 PM", value: 960 },
  { id: 65, display: "4:15 PM", value: 975 },
  { id: 66, display: "4:30 PM", value: 990 },
  { id: 67, display: "4:45 PM", value: 1005 },
  { id: 68, display: "5:00 PM", value: 1020 },
  { id: 69, display: "5:15 PM", value: 1035 },
  { id: 70, display: "5:30 PM", value: 1050 },
  { id: 71, display: "5:45 PM", value: 1065 },
  { id: 72, display: "6:00 PM", value: 1080 },
  { id: 73, display: "6:15 PM", value: 1095 },
  { id: 74, display: "6:30 PM", value: 1110 },
  { id: 75, display: "6:45 PM", value: 1125 },
  { id: 76, display: "7:00 PM", value: 1140 },
  { id: 77, display: "7:15 PM", value: 1155 },
  { id: 78, display: "7:30 PM", value: 1170 },
  { id: 79, display: "7:45 PM", value: 1185 },
  { id: 80, display: "8:00 PM", value: 1200 },
  { id: 81, display: "8:15 PM", value: 1215 },
  { id: 82, display: "8:30 PM", value: 1230 },
  { id: 83, display: "8:45 PM", value: 1245 },
  { id: 84, display: "9:00 PM", value: 1260 },
  { id: 85, display: "9:15 PM", value: 1275 },
  { id: 86, display: "9:30 PM", value: 1290 },
  { id: 87, display: "9:45 PM", value: 1305 },
  { id: 88, display: "10:00 PM", value: 1320 },
  { id: 89, display: "10:15 PM", value: 1335 },
  { id: 90, display: "10:30 PM", value: 1350 },
  { id: 91, display: "10:45 PM", value: 1365 },
  { id: 92, display: "11:00 PM", value: 1380 },
  { id: 93, display: "11:15 PM", value: 1395 },
  { id: 94, display: "11:30 PM", value: 1410 },
  { id: 95, display: "11:45 PM", value: 1425 },
];

const TimeSelect = ({
  callback,
  reset,
}: {
  callback: Dispatch<SetStateAction<number>>;
  reset: boolean;
}) => {
  const [selected, setSelected] = useState<number>(-1);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    setSelected(-1);
  }, [reset]);

  return (
    <div className="relative w-full">
      <button
        id="select-wrapper"
        className=" flex h-9 w-full min-w-[148px] items-center justify-start rounded-md border-2 border-gray-300 
  py-[6px] pl-4 pr-2 font-medium text-primary-900 transition-all duration-200
  focus:border-primary-500"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={() => setIsFocused(true)}
      >
        <div className="grow text-left text-sm">
          {selected != -1 && options[selected]?.display}
        </div>
        <MdKeyboardArrowDown
          fontSize={24}
          className={`${isFocused && "rotate-180"} transition-all`}
        />
      </button>
      <div
        className={`absolute right-0 z-10 h-auto max-h-48 w-full origin-top-right 
    overflow-auto rounded-md border border-gray-300 bg-white opacity-0 
    shadow-md transition-all duration-75 ${
      isFocused ? "visible mt-1 opacity-100 duration-300" : "invisible"
    }`}
      >
        <div className="flex flex-col py-1">
          {options.map((option, index) => (
            <button
              key={index}
              className={`px-3 py-2 text-left font-medium text-primary-900
          transition-all hover:bg-gray-200 ${
            index == selected && "bg-gray-200"
          }`}
              onClick={() => {
                setSelected(index);
                callback(option.value);
                setIsFocused(false);
              }}
            >
              {option.display}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TimeSelect;
