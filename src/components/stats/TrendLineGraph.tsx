import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { trendData } from "./StatsTypes";

const TrendLineGraph = ({
  data,
  skeleton = false,
}: {
  data: trendData[];
  skeleton?: boolean;
}) => {
  return (
    <div className="flex h-64 w-full flex-col gap-3 overflow-hidden rounded-lg bg-white pt-4 shadow">
      <div className="flex items-center px-4">
        <div className="flex grow items-center gap-2">
          {skeleton ? (
            <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
          ) : (
            <h6 className="text-base font-semibold text-gray-900">Pickups</h6>
          )}
        </div>
        {skeleton ? (
          <div className="h-3 w-24 animate-pulse rounded bg-slate-200" />
        ) : (
          <div className="text-sm font-medium text-gray-500">4 Week Trend</div>
        )}
      </div>
      {skeleton ? (
        <div className="m-4 h-full w-[calc(100%_-_32px)] animate-pulse rounded bg-slate-200" />
      ) : (
        <div className="h-full w-full pr-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="week" fontSize={14} />
              <YAxis fontSize={14} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="pounds"
                stroke="#F36416"
                dot={false}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default TrendLineGraph;
