import {
  Header,
  Footer,
  ScrollToTopButton,
  DonationHero,
  ImageGallery,
  DonationGrid,
  DonationInfo,
  QuoteSection,
} from "./components";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <DonationHero />
      <ImageGallery />
      <DonationGrid />
      <DonationInfo />
      <QuoteSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
