export const DonationHero = () => {
  return (
    <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-white/70 mb-2">
          Budi Vakif
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-wide font-elegant leading-tight">
          IZGRADNJA DŽAMIJE
          <br />
          <span className="text-white/90">U SELU ALIVEROVIĆE</span>
        </h1>

        <div className="w-20 h-0.5 bg-white/40 mx-auto mb-4 rounded-full"></div>

        <p className="text-base sm:text-lg md:text-xl font-light">
          Akcija od{" "}
          <span className="font-bold text-accent">100€</span> za ukrovljenje
        </p>
      </div>
    </section>
  );
};
