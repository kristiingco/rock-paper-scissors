import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between border-4 border-slate-600 rounded-md m-6 p-4">
      <img src="/static/logo.svg" alt="Logo" className="w-28" />
      <div className="flex flex-col bg-light-cream items-center px-4 py-1 rounded-md">
        <span className="text-light-blue uppercase text-sm tracking-widest">
          Score
        </span>
        <span className="text-black text-5xl">0</span>
      </div>
    </header>
  );
};

export default Header;
