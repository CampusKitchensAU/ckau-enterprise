import type { AvatarStatData } from "./StatsTypes";

const AvatarStat = ({ data }: { data: AvatarStatData }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-2xl bg-white py-2 shadow sm1:p-0">
      <div className="flex flex-col items-center">
        <div className="text-text-secondary md:text-xl">{data.name}</div>
        <div className="hidden text-sm text-text-secondary lg:block">
          {data.frame}
        </div>
      </div>
      <div>{data.avatar}</div>
    </div>
  );
};
export default AvatarStat;
