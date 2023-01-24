import ShiftCard from "./ShiftCard";

type shiftData = {
  id: number;
  name: string;
  type: number;
  day: string;
  time: string;
};

const ShiftGridView = ({ data }: { data: shiftData[] }) => {
  return (
    <div className="grid grid-cols-25 gap-6">
      {data.map((shift, index) => (
        <div key={index} className="col-span-5 h-72">
          <ShiftCard data={shift} />
        </div>
      ))}
    </div>
  );
};
export default ShiftGridView;
