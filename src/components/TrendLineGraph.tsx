import { useEffect, useState } from "react";
import { MdTrendingDown, MdTrendingFlat, MdTrendingUp } from "react-icons/md";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TrendLineGraph = ({ data }: { data: any }) => {
  const [trend, setTrend] = useState(<MdTrendingFlat fontSize={24} />);

  useEffect(() => {
    const count = data[data.length - 1].pounds - data[0].pounds;
    if (count == 0)
      setTrend(<MdTrendingFlat fontSize={24} className="text-gray-500" />);
    else if (count > 0)
      setTrend(<MdTrendingUp fontSize={24} className="text-green-600" />);
    else setTrend(<MdTrendingDown fontSize={24} className="text-red-600" />);
  }, [data]);

  return (
    <div className="flex h-64 w-full flex-col gap-3 rounded-2xl bg-white p-4 shadow">
      <div className="flex items-center">
        <div className="flex grow items-center gap-2">
          <h6 className="text-2xl font-semibold">Pickups</h6>
          {trend}
        </div>
        <div className="text-base text-text-secondary">4 Week Trend</div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pounds"
            stroke="#F36416"
            dot={false}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendLineGraph;
