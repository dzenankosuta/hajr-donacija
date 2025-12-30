import React from "react";
import logo from "../assets/medzlis-logo.png";

export const Header: React.FC = () => {
  return (
    <header className="relative bg-white border-b-4 border-primary shadow-lg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-4 lg:py-5">
          <div
            className="flex items-center gap-3 sm:gap-4 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <img
              src={logo}
              alt="Medžlis IZ Sjenica logo"
              className="h-14 sm:h-16 lg:h-20 w-auto"
            />
            <div className="text-center sm:text-left">
              <p className="text-[10px] sm:text-xs text-secondary/60 tracking-wide font-body uppercase">
                Mešihat IZ u Srbiji • Muftijstvo Sandžačko
              </p>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary tracking-wide font-elegant">
                MEDŽLIS IZ SJENICA
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
    </header>
  );
};
