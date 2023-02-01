const PageHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <header className="flex flex-col items-start">
      <h1 className="text-xl font-semibold sm1:text-2xl sm2:text-3xl lg:text-[40px]">
        {title}
      </h1>
      <h2 className="text-base text-text-secondary sm2:text-lg md:text-xl">
        {subtitle}
      </h2>
    </header>
  );
};

export default PageHeader;
