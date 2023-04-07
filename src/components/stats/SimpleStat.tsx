const SimpleStat = ({
  data = { name: "", value: 0 },
  skeleton = false,
}: {
  data?: { name: string; value: number };
  skeleton?: boolean;
}) => {
  return (
    <div
      key={data.name}
      className="flex h-full flex-col justify-center rounded-lg bg-white px-4 py-5 shadow sm:p-6"
    >
      <dt className="truncate text-sm font-medium text-gray-500">
        {skeleton ? (
          <div className="mt-1 h-3 w-20 animate-pulse rounded bg-slate-200" />
        ) : (
          data.name
        )}
      </dt>
      <dd className="mt-1 text-3xl font-semibold tracking-tight text-secondary">
        {skeleton ? (
          <div className="mt-1 h-8 w-32 animate-pulse rounded bg-slate-200 lg:w-48" />
        ) : (
          data.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        )}
      </dd>
    </div>
  );
};

export default SimpleStat;
