import ShiftRow from "./ShiftRow";
import TableFooter from "../TableFooter";
import type { shiftData } from "./shiftTypes";

const ShiftListView = ({ data }: { data: shiftData[] }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-surface-main">
              <thead id="columns" className="font-medium text-text-secondary">
                <tr className="min-w-full">
                  <th className="min-w-[368px] px-4 py-3 text-left text-primary-900">
                    Name
                  </th>
                  <th className="min-w-[240px] text-left">Type</th>
                  <th className="min-w-[240px] text-left">Day</th>
                  <th className="min-w-[304px] text-left">Time</th>
                </tr>
              </thead>
              <tbody id="rows" className="h-auto bg-white">
                {data.map((shift) => (
                  <ShiftRow key={shift.id} data={shift} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
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
