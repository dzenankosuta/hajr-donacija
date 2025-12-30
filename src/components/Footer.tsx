import logo from "../assets/medzlis-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t-4 border-primary py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img
            src={logo}
            alt="Medžlis IZ Sjenica logo"
            className="h-10 sm:h-12 w-auto brightness-0 invert opacity-80"
          />
          <div className="text-left">
            <h3 className="text-lg sm:text-xl font-bold text-primary font-elegant">
              DŽEMAT ALIVEROVIĆE
            </h3>
            <p className="text-xs text-white/50">
              Mešihat IZ u Srbiji • Medžlis IZ Sjenica
            </p>
          </div>
        </div>

        <div className="w-32 h-0.5 bg-primary/30 mx-auto mb-4 rounded-full"></div>

        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} Medžlis Islamske zajednice Sjenica. Sva
          prava zadržana.
        </p>
      </div>
    </footer>
  );
};
