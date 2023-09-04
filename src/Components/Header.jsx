import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-center gap-2 mt-5 text-2xl font-medium tracking-wide text-orange-500 uppercase font-Karla md:text-5xl">
          <span className="text-3xl md:text-5xl">- </span>
          Fast React Biriyani Co.
          <span className="text-3xl md:text-5xl">-</span>
        </div>
        <div className="inline-flex items-center justify-center max-w-xs py-2 mx-auto font-bold border border-t-2 border-b-2 border-l-0 border-r-0 font-NotoSans border-t-black border-b-black text-md md:text-3xl">
          OUR MENU
        </div>
        <div className="mx-8 font-mono text-center text-md md:max-w-xl md:mx-auto md:text-xl">
          Authentic Indian cusine, 6 creative dishes to choose from. All from
          our special way of cooking the food with ember coals and tradional
          methods.
        </div>
      </div>
    </>
  );
};

export default Header;
