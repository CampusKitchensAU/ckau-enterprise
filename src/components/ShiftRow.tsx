import Link from "next/link";
import { useEffect, useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { BsBoxSeam, BsTruck } from "react-icons/bs";
import { GiMeal } from "react-icons/gi";

type shiftData = {
  id: number;
  name: string;
  type: number;
  day: string;
  time: string;
};

const ShiftRow = ({ data }: { data: shiftData }) => {
  const [shiftBg, setShiftBg] = useState<string>(
    "bg-alt-packageGreen bg-package-logo"
  );
  const [shiftType, setShiftType] = useState<string>("Packaging");
  const [shiftIcon, setShiftIcon] = useState<JSX.Element>(
    <GiMeal fontSize={24} />
  );

  useEffect(() => {
    switch (data.type) {
      case 0:
        setShiftBg("bg-alt-pickupYellow");
        setShiftType("Pickup");
        setShiftIcon(<BsBoxSeam fontSize={24} />);
        break;
      case 1:
        setShiftBg("bg-alt-packageGreen");
        setShiftType("Packaging");
        setShiftIcon(<GiMeal fontSize={24} />);
        break;
      case 2:
        setShiftBg("bg-alt-deliveryBlue");
        setShiftType("Delivery");
        setShiftIcon(<BsTruck fontSize={24} />);
        break;
    }
  }, [data]);

  return (
    <div className="flex items-center gap-4 p-4">
      <div id="name" className="flex w-[368px] items-center gap-3 font-medium">
        {/*TODO: Get user photo or avatar */}
        <div id="avatar" className={`rounded-full p-2 ${shiftBg} shadow-inner`}>
          {shiftIcon}
        </div>
        {/*TODO: link name to contact/name onClick */}
        <Link
          href={"/shifts/" + data.id}
          className="cursor-pointer underline-offset-2 hover:underline"
        >
          {data.name}
        </Link>
      </div>
      <div id="type" className="w-[240px]">
        {shiftType}
      </div>
      <div id="day" className="w-[240px]">
        {data.day}
      </div>
      <div id="time" className="min-w-[304px] grow">
        {data.time}
      </div>
      {/*TODO: Create menu for onClick of actions button */}
      <div
        id="actions"
        className="cursor-pointer rounded-full p-2 text-text-secondary transition-all duration-200 hover:bg-gray-100"
      >
        <MdMoreVert fontSize={24} />
      </div>
    </div>
  );
};

export default ShiftRow;
