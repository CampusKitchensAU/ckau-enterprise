const PageHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <header className="flex flex-col items-start">
      <h1 className="text-3xl font-semibold md:text-[40px]">{title}</h1>
      <h2 className="text-lg text-text-secondary md:text-xl">{subtitle}</h2>
    </header>
  );
};

export default PageHeader;
