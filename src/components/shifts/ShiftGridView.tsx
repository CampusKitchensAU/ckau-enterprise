import ShiftCard from "./ShiftCard";
import type { shiftData } from "./shiftTypes";

const ShiftGridView = ({ data }: { data: shiftData[] }) => {
  return (
    <div className="grid grid-cols-25 gap-6">
      {data.map((shift) => (
        <div key={shift.id} className="col-span-5 h-72">
          <ShiftCard data={shift} />
        </div>
      ))}
    </div>
  );
};
export default ShiftGridView;
