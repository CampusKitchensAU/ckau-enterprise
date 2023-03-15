import { useEffect, useState } from "react";
import type { StatData } from "./StatsTypes";

const Stat = ({ data }: { data: StatData }) => {
  const [trendColor, setTrendColor] = useState<string>("bg-gray-500");

  useEffect(() => {
    if (data.trend == 0) setTrendColor("bg-gray-300");
    else if (data.trend && data.trend > 0) setTrendColor("bg-green-300");
    else setTrendColor("bg-red-300");
  }, [data.trend]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-white p-4 shadow">
      <div className="text-text-secondary md:text-xl">{data.name}</div>
      <div className="flex items-center gap-2">
        <div className="text-xl font-bold md:text-3xl">
          {data.value &&
            data.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        <div className={`rounded-md px-3 ${trendColor}`}>
          {data.trend != undefined && data?.trend > 0 && "+"}
          {data.trend != 0
            ? data.trend &&
              data.trend.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : "--"}
        </div>
      </div>
    </div>
  );
};

export default Stat;
