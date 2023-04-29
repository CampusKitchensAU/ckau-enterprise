type BadgeColor =
  | "GRAY"
  | "RED"
  | "YELLOW"
  | "GREEN"
  | "BLUE"
  | "INDIGO"
  | "PURPLE"
  | "PINK";

export type BadgeProps = {
  color: BadgeColor;
  text: string;
};

const Badge = ({ data }: { data: BadgeProps }) => {
  switch (data.color) {
    case "GRAY":
      return (
        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          {data.text}
        </span>
      );
    case "RED":
      return (
        <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
          {data.text}
        </span>
      );
    case "YELLOW":
      return (
        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
          {data.text}
        </span>
      );
    case "GREEN":
      return (
        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          {data.text}
        </span>
      );
    case "BLUE":
      return (
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          {data.text}
        </span>
      );
    case "INDIGO":
      return (
        <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
          {data.text}
        </span>
      );
    case "PURPLE":
      return (
        <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
          {data.text}
        </span>
      );
    case "PINK":
      return (
        <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
          {data.text}
        </span>
      );
  }
};
export default Badge;
