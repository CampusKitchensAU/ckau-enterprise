import { useEffect, useState } from "react";
import { MdArrowDownward, MdArrowUpward, MdTrendingFlat } from "react-icons/md";

type IconStatData = {
  name: string;
  value: number;
  trend: number;
  icon: JSX.Element;
};

const IconStat = ({ data }: { data: IconStatData }) => {
  const [trendIcon, setTrendIcon] = useState<JSX.Element>(
    <MdTrendingFlat fontSize={19} />
  );

  const [trendColor, setTrendColor] = useState<string>("text-gray-500");

  useEffect(() => {
    if (data.trend == 0) {
      setTrendIcon(<MdTrendingFlat fontSize={19} />);
      setTrendColor("text-gray-500");
    } else if (data.trend > 0) {
      setTrendIcon(<MdArrowUpward fontSize={19} />);
      setTrendColor("text-green-600");
    } else {
      setTrendIcon(<MdArrowDownward fontSize={19} />);
      setTrendColor("text-red-600");
    }
  }, [data]);

  return (
    <div className="flex h-full w-full items-center justify-center gap-2 rounded-2xl bg-white p-4 shadow">
      <div className="h-max rounded-lg bg-primary-600 p-2 text-primary-contrast">
        {data.icon}
      </div>
      <div>
        <div className="text-lg text-text-secondary">{data.name}</div>
        <div className="flex items-end gap-2">
          <div className="text-3xl font-bold">
            {data.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
          <div className={`flex ${trendColor} items-center`}>
            <div>{trendIcon}</div>
            <div>
              {data.trend.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconStat;
