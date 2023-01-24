import Link from "next/link";
import { useEffect, useState } from "react";
import { MdAccessTime, MdCalendarToday } from "react-icons/md";

type shiftData = {
  id: number;
  name: string;
  type: number;
  day: string;
  time: string;
};

const ShiftCard = ({ data }: { data: shiftData }) => {
  const [shiftType, setShiftType] = useState<string>(
    "bg-alt-packageGreen bg-package-logo"
  );

  useEffect(() => {
    switch (data.type) {
      case 0:
        setShiftType("bg-alt-pickupYellow bg-pickup-logo bg-[center_top_-80px]");
        break;
      case 1:
        setShiftType("bg-alt-packageGreen bg-package-logo");
        break;
      case 2:
        setShiftType("bg-alt-deliveryBlue bg-delivery-logo bg-[center_top_-80px]");
        break;
    }
  }, [data]);

  return (
    <div
      className={`flex h-full w-full flex-col rounded-lg bg-no-repeat shadow ${shiftType}`}
    >
      <div className="h-1/2 rounded-t-lg bg-gray-700 opacity-40 shadow-inner" />
      <div className="flex h-1/2 flex-col items-center justify-center gap-4 rounded-b-lg bg-white p-4">
        <div className="flex flex-col items-center gap-2">
          <Link
            href={"/shifts/" + data.id}
            className="text-center text-xl font-medium underline-offset-2 hover:underline"
          >
            {data.name}
          </Link>
          <div className="font-medium text-text-secondary">packaging</div>
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-1 font-medium">
            <MdCalendarToday fontSize={24} className="text-alt-packageGreen" />
            {data.day + "'s"}
          </div>
          <div className="flex items-center gap-1 font-medium">
            <MdAccessTime fontSize={24} className="text-alt-packageGreen" />
            {data.time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShiftCard;
