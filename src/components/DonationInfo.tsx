import { Phone, MapPin, Building2, Globe, QrCode, Download } from "lucide-react";
import qrCode from "../assets/NBSIPSQR.png";

export const DonationInfo = () => {
  const handleDownloadQR = () => {
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "dzamija-aliverovice-qr.png";
    link.click();
  };

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Kontakt */}
          <div className="bg-gray-50 rounded-xl p-5 sm:p-6 shadow-md border border-gray-200">
            <h3 className="text-lg sm:text-xl font-bold text-secondary mb-4 font-elegant flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              KONTAKT
            </h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-secondary">Almir ef. Suljović</p>
                  <a
                    href="tel:+381623530021"
                    className="text-primary hover:underline font-medium text-sm sm:text-base"
                  >
                    +381 62 353 002
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-secondary">Adresa</p>
                  <p className="text-gray-600 text-sm">
                    Novi Pazar, ul. Aleksandra Dukića br. 103
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bankovni računi */}
          <div className="bg-gray-50 rounded-xl p-5 sm:p-6 shadow-md border border-gray-200">
            <h3 className="text-lg sm:text-xl font-bold text-secondary mb-4 font-elegant flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              UPLATE NA RAČUN
            </h3>

            <div className="space-y-4">
              {/* Dinarski račun sa QR kodom */}
              <div className="p-3 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-4 h-4 text-secondary" />
                  <span className="font-bold text-secondary text-sm">
                    Dinarski račun
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* QR kod */}
                  <div className="flex flex-col items-center">
                    <div className="bg-white p-2 rounded-lg border-2 border-primary/20 shadow-sm">
                      <img
                        src={qrCode}
                        alt="QR kod za plaćanje"
                        className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                      />
                    </div>
                    <button
                      onClick={handleDownloadQR}
                      className="gallery-nav mt-2 flex items-center gap-1 text-xs text-primary hover:text-primary-dark font-medium"
                    >
                      <Download className="w-3 h-3" />
                      Preuzmi QR
                    </button>
                  </div>

                  {/* Podaci */}
                  <div className="flex-1 space-y-1 text-sm">
                    <p>
                      <span className="text-gray-500">Banka:</span>{" "}
                      <span className="font-medium">Raiffeisen Banka AD</span>
                    </p>
                    <p>
                      <span className="text-gray-500">Račun:</span>{" "}
                      <span className="font-bold text-primary">
                        265-0000007178347-33
                      </span>
                    </p>
                    <div className="pt-2 mt-2 border-t border-gray-100">
                      <div className="flex items-start gap-2 p-2 bg-primary/5 rounded-md">
                        <QrCode className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Otvorite aplikaciju Vaše banke, izaberite opciju{" "}
                          <span className="font-semibold text-secondary">
                            "Skeniraj i plati"
                          </span>{" "}
                          i skenirajte QR kod za brzo i jednostavno plaćanje.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Devizni račun */}
              <div className="p-3 bg-white rounded-lg border border-primary/30">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="font-bold text-primary text-sm">
                    Devizni račun (IBAN)
                  </span>
                </div>
                <div className="space-y-1 text-sm">
                  <p>
                    <span className="text-gray-500">Banka:</span>{" "}
                    <span className="font-medium">
                      Raiffeisen Banka AD Beograd
                    </span>
                  </p>
                  <p>
                    <span className="text-gray-500">IBAN:</span>{" "}
                    <span className="font-bold text-primary">
                      RS35265090000000012288
                    </span>
                  </p>
                  <p>
                    <span className="text-gray-500">SWIFT/BIC:</span>{" "}
                    <span className="font-bold">RZBSRSBG</span>
                  </p>
                </div>
              </div>

              {/* Svrha uplate */}
              <div className="p-2 bg-primary/10 rounded-lg text-center">
                <p className="text-xs text-gray-600">
                  Obavezno naznačiti svrhu uplate:
                </p>
                <p className="font-bold text-primary text-sm">
                  ZA IZGRADNJU DŽAMIJE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
