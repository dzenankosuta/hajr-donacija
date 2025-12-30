import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={scrollToTop}
        className={`p-3 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Povratak na vrh"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};
