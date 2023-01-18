import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const TableFooter = ({ amount }: { amount: number }) => {
  const [rangeStart, setRangeStart] = useState<number>(1);
  const [rangeEnd, setRangeEnd] = useState<number>(10);

  useEffect(() => {
    if (rangeEnd > amount) setRangeEnd(amount);
    else if (rangeEnd != amount && rangeStart == 1) setRangeEnd(10);
  }, [amount, rangeEnd, rangeStart]);

  return (
    <div className="flex h-auto w-full items-center justify-end gap-4 px-4 py-1 font-medium">
      <div className="text-text-secondary">
        {rangeStart} - {rangeEnd} of {amount}
      </div>
      <button
        className={`cursor-pointer rounded-full p-3 transition-all duration-200 hover:bg-gray-100 ${
          rangeStart == 1 && "pointer-events-none opacity-50"
        }`}
        onClick={() => {
          if (rangeStart > 10) setRangeStart(rangeStart - 10);
          else setRangeStart(1);
          if (rangeEnd > 10) setRangeEnd(rangeEnd - 10);
          else if (rangeEnd != amount) setRangeEnd(10);
        }}
      >
        <MdKeyboardArrowLeft fontSize={24} />
      </button>
      <button
        className={`cursor-pointer rounded-full p-3 transition-all duration-200 hover:bg-gray-100 ${
          rangeEnd == amount && "pointer-events-none opacity-50"
        }`}
        onClick={() => {
          if (rangeEnd < amount) setRangeStart(rangeStart + 10);
          if (rangeEnd + 10 < amount) setRangeEnd(rangeEnd + 10);
          else setRangeEnd(amount);
        }}
      >
        <MdKeyboardArrowRight fontSize={24} />
      </button>
    </div>
  );
};

export default TableFooter;
