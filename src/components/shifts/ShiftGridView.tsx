import ShiftCard from "./ShiftCard";
import type { shiftData } from "./shiftTypes";

const ShiftGridView = ({ data }: { data: shiftData[] }) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      {data.map((shift) => (
        <div
          key={shift.id}
          className="col-span-12 h-72 md:col-span-6 lg:col-span-4 xl:col-span-3"
        >
          <ShiftCard data={shift} />
        </div>
      ))}
    </div>
  );
};
export default ShiftGridView;
