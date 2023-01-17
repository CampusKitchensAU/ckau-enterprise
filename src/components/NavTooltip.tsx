const NavTooltip = ({ title }: { title: string }) => {
  return (
      <div
        id="tooltip"
        role="tooltip"
        className="absolute top-1 -right-6 hidden translate-x-full 
            rounded-lg bg-gray-700 px-2 py-1 text-center text-sm text-white
            before:absolute before:top-1/2 before:right-[100%] 
            before:-translate-y-1/2  before:border-8 before:border-y-transparent 
            before:border-l-transparent before:border-r-gray-700 
            before:content-[''] group-hover:flex"
      >
        {title}
      </div>
  );
};

export default NavTooltip;
