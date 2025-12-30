export const QuoteSection = () => {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-0.5 bg-primary/30 mx-auto mb-6 rounded-full"></div>

        <blockquote className="relative">
          <p className="text-base sm:text-lg md:text-xl text-secondary/80 italic leading-relaxed font-arabic px-4">
            "Oni koji udjeljuju imanja svoja i noću i danju, tajno i javno,
            dobiće nagradu od Gospodara svoga; i ničega se oni neće bojati i ni
            za čim oni neće tugovati."
          </p>
          <footer className="mt-4">
            <cite className="text-primary font-bold not-italic text-sm sm:text-base">
              (El-Bekare, 274)
            </cite>
          </footer>
        </blockquote>

        <div className="w-16 h-0.5 bg-primary/30 mx-auto mt-6 rounded-full"></div>
      </div>
    </section>
  );
};
