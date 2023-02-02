import { useEffect, useState } from "react";

//TODO: These should come from database
type Role =
  | "President"
  | "VP of Operations"
  | "VP of Outreach"
  | "VP of Events"
  | "VP of Campus Relations"
  | "VP of Communications"
  | "VP of Finance"
  | "VP of Nutritional Programs"
  | "VP of Technology"
  | "Shift Leader"
  | "Advisor";

const RoleChip = ({ role }: { role: Role }) => {
  const [color, setColor] = useState("bg-gray-300");

  useEffect(() => {
    if (role === "President") setColor("bg-surface-secondaryLight");
    else if (role.substring(0, 3) === "VP ")
      setColor("bg-surface-primaryLight");
    else if (role === "Shift Leader") setColor("bg-gray-300");
    else if (role === "Advisor") setColor("bg-alt-purpleChip");
  }, [role]);

  return (
    <div className={`${color} w-fit rounded-2xl px-4 text-sm md:text-base`}>
      {role}
    </div>
  );
};

export default RoleChip;
