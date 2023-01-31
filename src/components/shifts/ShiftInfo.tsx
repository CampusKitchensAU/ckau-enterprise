const ShiftInfo = ({ tab, data }: { tab: number; data: fullShiftData }) => {
  switch (tab) {
    case 0:
      return (
        <div className="flex flex-col gap-6">
          <h6 className="text-xl font-medium">Shift Summary</h6>
          <p className="whitespace-pre-line text-text-secondary">
            {data.summary}
          </p>
        </div>
      );
    case 1:
      return <>Stats</>;
    case 2:
      return <>Logs</>;
    default:
      return <div>Error</div>;
  }
};

export default ShiftInfo;
