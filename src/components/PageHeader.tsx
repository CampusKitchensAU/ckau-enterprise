const PageHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <header className="flex flex-col items-start">
      <h1 className="text-[40px] font-semibold">{title}</h1>
      <h2 className="text-xl text-text-secondary">{subtitle}</h2>
    </header>
  );
};

export default PageHeader;
