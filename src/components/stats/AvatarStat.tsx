import { useMediaQuery } from "../../utils/useMediaQuery";

const AvatarStat = ({ data }: { data: AvatarStatData }) => {
  const isLg = useMediaQuery("lg");

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-2xl bg-white py-2 shadow sm1:p-0">
      <div className="flex flex-col items-center">
        <div className="text-text-secondary md:text-xl">{data.name}</div>
        {isLg && (
          <div className="text-sm text-text-secondary">{data.frame}</div>
        )}
      </div>
      <div>{data.avatar}</div>
    </div>
  );
};
export default AvatarStat;
