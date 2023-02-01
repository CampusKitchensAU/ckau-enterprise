import { useMediaQuery } from "../../utils/useMediaQuery";

const AvatarStat = ({ data }: { data: AvatarStatData }) => {
  const isMd = useMediaQuery("md");

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-2xl bg-white shadow">
      <div className="flex flex-col items-center">
        <div className="text-text-secondary md:text-xl">{data.name}</div>
        {isMd && (
          <div className="text-sm text-text-secondary">{data.frame}</div>
        )}
      </div>
      <div>{data.avatar}</div>
    </div>
  );
};
export default AvatarStat;
