export type trendData = { week?: string; pounds?: number };

export type StatData = {
  name: string;
  value: number;
  trend: number;
};

export type IconStatData = {
  name: string;
  value: number;
  trend: number;
  icon: JSX.Element;
};

export type AvatarStatData = {
  name: string;
  avatar: JSX.Element;
  frame: string;
};
