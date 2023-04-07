import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import type { IconStatData } from "./StatsTypes";

const IconStat = ({
  data = {
    name: "",
    value: -1,
    trend: -1,
    icon: <MdArrowUpward />,
  },
  skeleton = false,
}: {
  data?: IconStatData;
  skeleton?: boolean;
}) => {
  const previousStat = data.value - data.trend;
  const changeType = data.trend > 0 ? "increase" : "decrease";

  return (
    <>
      <dt className="text-base font-semibold text-gray-900">
        {skeleton ? (
          <div className="h-4 animate-pulse rounded bg-slate-200" />
        ) : (
          data.name
        )}
      </dt>
      <dd className="mt-1 flex items-baseline justify-between md:block xl:flex">
        <div className="flex items-baseline text-2xl font-semibold text-secondary-500 sm:block lg:flex">
          {skeleton ? (
            <div className="mt-1 h-8 w-32 animate-pulse rounded bg-slate-200 lg:w-48" />
          ) : (
            data.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          )}
          <div className="ml-2 flex items-center gap-1 text-sm font-medium text-gray-500 sm:ml-0 lg:ml-2">
            from{" "}
            {skeleton ? (
              <div className="h-3 w-20 animate-pulse rounded bg-slate-200" />
            ) : (
              previousStat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            )}
          </div>
        </div>

        {skeleton ? (
          <div className="h-4 w-8 animate-pulse rounded bg-slate-200" />
        ) : (
          <div
            className={`
            ${
              changeType === "increase"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }
             inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0
          `}
          >
            {changeType === "increase" ? (
              <MdArrowUpward
                className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                aria-hidden="true"
              />
            ) : (
              <MdArrowDownward
                className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                aria-hidden="true"
              />
            )}

            <span className="sr-only">
              {" "}
              {changeType === "increase" ? "Increased" : "Decreased"} by{" "}
            </span>
            {data.trend}
          </div>
        )}
      </dd>
    </>
  );
};

export default IconStat;
