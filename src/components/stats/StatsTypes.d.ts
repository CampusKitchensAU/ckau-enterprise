type trendData = { week?: string; pounds?: number };

type StatData = {
  name?: string;
  value?: number;
  trend?: number;
};

type IconStatData = {
  name: string;
  value: number;
  trend: number;
  icon: JSX.Element;
};

type AvatarStatData = {
  name: string;
  avatar: JSX.Element;
  frame: string;
};
