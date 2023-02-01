import { useEffect, useState } from "react";
import { MdArrowDownward, MdArrowUpward, MdTrendingFlat } from "react-icons/md";

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
  }, [data.trend]);

  return (
    <div className="flex h-full w-full items-center gap-2 rounded-2xl bg-white p-2 pl-16 shadow md:justify-center md:p-4">
      <div className="h-max rounded-lg bg-primary-600 p-2 text-2xl text-primary-contrast md:text-[32px]">
        {data.icon}
      </div>
      <div>
        <div className="text-md text-text-secondary md:text-lg">
          {data.name}
        </div>
        <div className="flex items-end gap-2">
          <div className="text-xl font-bold md:text-3xl">
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
