import ShiftRow from "./ShiftRow";
import TableFooter from "../TableFooter";
import type { shiftData } from "./shiftTypes";

const ShiftListView = ({ data }: { data: shiftData[] }) => {
  return (
    <div>
      <div
        id="columns"
        className="flex h-10 items-center gap-4 bg-surface-main p-4 font-medium text-text-secondary"
      >
        <div className="flex w-[368px] items-center gap-1 text-primary-900">
          Name
        </div>
        <div className="w-[240px]">Type</div>
        <div className="w-[240px]">Day</div>
        <div className="min-w-[304px] grow">Time</div>
      </div>
      <div id="rows" className="h-auto">
        {data.map((shift) => (
          <ShiftRow key={shift.id} data={shift} />
        ))}
      </div>
      <div
        id="list-footer"
        className="h-auto rounded-b-[20px] border-t border-solid border-alt-divider"
      >
        <TableFooter amount={55} />
      </div>
    </div>
  );
};

export default ShiftListView;
