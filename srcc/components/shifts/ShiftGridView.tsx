import ShiftCard from "./ShiftCard";

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
