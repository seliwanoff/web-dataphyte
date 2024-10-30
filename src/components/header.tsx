const Header = () => {
  return (
    <div className="w-full">
      <header className=" h-[98px] justify-center flex w-full items-center bg-white max-w-[1519px] mx-auto px-[100px] border-2 border-[#d6d6d6]">
        <div className="w-full  flex justify-between items-center">
          <h2 className="text-[#7F55DA]  text-2xl leading-6 font-semibold font-Poppins">
            Dataphyte
          </h2>
          <nav>
            <ul className="flex gap-8 items-center text-[#525252] text-[16px] leading-6 font-normal font-Poppins list-none cursor-pointer">
              <li>Interactive Map</li>
              <li>Country Overview</li>
              <li>Regulation & Policies</li>
              <li>Licenses</li>
              <li>Investigations & Reports</li>
              <li>Data & Visualization</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
