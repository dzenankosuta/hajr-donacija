import { Check } from "lucide-react";

// ============================================
// KONFIGURACIJA - OVDJE AŽURIRATI BROJ DONACIJA
// ============================================
const TOTAL_DONATIONS = 300;
const FILLED_DONATIONS = 0; // <- PROMIJENI OVAJ BROJ KADA NEKO UPLATI
const DONATION_AMOUNT = 100; // EUR
// ============================================

const COLS_DESKTOP = 30;
const COLS_TABLET = 20;
const COLS_MOBILE = 15;

export const DonationGrid = () => {
  const progressPercentage = (FILLED_DONATIONS / TOTAL_DONATIONS) * 100;
  const totalCollected = FILLED_DONATIONS * DONATION_AMOUNT;
  const totalGoal = TOTAL_DONATIONS * DONATION_AMOUNT;

  return (
    <section className="py-8 sm:py-12 px-3 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Slogan */}
        <div className="text-center mb-6">
          <p className="text-lg sm:text-xl md:text-2xl font-elegant text-primary italic">
            "Budite dio vakufa, ugradite sebe u trajno dobro"
          </p>
        </div>

        {/* Donation amount badge */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full shadow-lg">
            <span className="text-xl sm:text-2xl font-bold">
              {DONATION_AMOUNT}€
            </span>
            <Check className="w-5 h-5" />
            <span className="text-sm">po donaciji</span>
          </div>
        </div>

        {/* Grid */}
        <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 border border-gray-200">
          {/* Desktop grid (30 columns) */}
          <div
            className="hidden lg:grid gap-[2px]"
            style={{ gridTemplateColumns: `repeat(${COLS_DESKTOP}, 1fr)` }}
          >
            {Array.from({ length: TOTAL_DONATIONS }).map((_, index) => {
              const isFilled = index < FILLED_DONATIONS;
              return (
                <div
                  key={index}
                  className={`aspect-square rounded-[2px] flex items-center justify-center ${
                    isFilled
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 border border-gray-200"
                  }`}
                >
                  {isFilled && <Check className="w-4 h-4" strokeWidth={3} />}
                </div>
              );
            })}
          </div>

          {/* Tablet grid (20 columns) */}
          <div
            className="hidden sm:grid lg:hidden gap-[2px]"
            style={{ gridTemplateColumns: `repeat(${COLS_TABLET}, 1fr)` }}
          >
            {Array.from({ length: TOTAL_DONATIONS }).map((_, index) => {
              const isFilled = index < FILLED_DONATIONS;
              return (
                <div
                  key={index}
                  className={`aspect-square rounded-[2px] flex items-center justify-center ${
                    isFilled
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 border border-gray-200"
                  }`}
                >
                  {isFilled && <Check className="w-4 h-4" strokeWidth={3} />}
                </div>
              );
            })}
          </div>

          {/* Mobile grid (15 columns) */}
          <div
            className="sm:hidden grid gap-[1px]"
            style={{ gridTemplateColumns: `repeat(${COLS_MOBILE}, 1fr)` }}
          >
            {Array.from({ length: TOTAL_DONATIONS }).map((_, index) => {
              const isFilled = index < FILLED_DONATIONS;
              return (
                <div
                  key={index}
                  className={`aspect-square rounded-[1px] flex items-center justify-center ${
                    isFilled
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 border border-gray-200"
                  }`}
                >
                  {isFilled && <Check className="w-4 h-4" strokeWidth={3} />}
                </div>
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="mt-4 space-y-2">
            <div className="h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary-dark rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-1 text-sm">
              <p className="text-secondary font-medium">
                <span className="text-xl sm:text-2xl font-bold text-primary">
                  {FILLED_DONATIONS}
                </span>
                <span className="text-gray-500">/{TOTAL_DONATIONS} donacija</span>
              </p>
              <p className="text-secondary">
                <span className="font-bold text-primary">
                  {totalCollected.toLocaleString()}€
                </span>
                <span className="text-gray-500">
                  {" "}od {totalGoal.toLocaleString()}€ cilja
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
