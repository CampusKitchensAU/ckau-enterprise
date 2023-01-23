type AvatarStatData = {
  name: string;
  avatar: JSX.Element;
  frame: string;
};

const AvatarStat = ({ data }: { data: AvatarStatData }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-2xl bg-white shadow">
      <div className="flex flex-col items-center">
        <div className="text-xl text-text-secondary">{data.name}</div>
        <div className="text-sm text-text-secondary">{data.frame}</div>
      </div>
      <div>{data.avatar}</div>
    </div>
  );
};
export default AvatarStat;
