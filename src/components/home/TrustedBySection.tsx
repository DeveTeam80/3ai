import React, { useEffect } from "react";

interface HeroProps {
  isDarkMode: boolean;
}

// 1. Define logos that you know look the same or don't have dark/light variants
// This prevents unnecessary "theme" requests for brands like Barclays or Pepsi.
const brandsWithSingleLogo = [
  "barclays.com",
  "abb.com",
  "americanexpress.com",
  "bosch.com",
  "carrier.com",
  "dupont.com",
  "ebay.com",
  "pepsi.com",
  "visa.com",
  "mastercard.com",
  "jpmorganchase.com",
  "fidelity.com"
];

const partnerList = [
  { name: "ABB", domain: "abb.com" },
  // { name: "ABInBev", domain: "ab-inbev.com" },
  { name: "Advance Auto Parts", domain: "advanceautoparts.com" },
  { name: "American Express", domain: "americanexpress.com" },
  { name: "Applied Materials", domain: "appliedmaterials.com" },
  { name: "Barclays", domain: "barclays.com" },
  { name: "Bosch", domain: "bosch.com" },
  { name: "Carrier", domain: "carrier.com" },
  { name: "Chubb", domain: "chubb.com" },
  { name: "Citi", domain: "citi.com" },
  { name: "DuPont", domain: "dupont.com" },
  { name: "eBay", domain: "ebay.com" },
  { name: "Epsilon", domain: "epsilon.com" },
  { name: "Equifax", domain: "equifax.com" },
  { name: "Ericsson", domain: "ericsson.com" },
  { name: "Falabella", domain: "falabella.com" },
  { name: "Fidelity Investments", domain: "fidelity.com" },
  { name: "General Electric", domain: "ge.com" },
  { name: "Giant Eagle", domain: "gianteagle.com" },
  { name: "Honeywell", domain: "honeywell.com" },
  { name: "HSBC", domain: "hsbc.com" },
  { name: "JCPenney", domain: "jcpenney.com" },
  { name: "JPMorgan Chase & Co.", domain: "jpmorganchase.com" },
  { name: "Kimberly-Clark", domain: "kimberly-clark.com" },
  { name: "Koch Industries", domain: "kochind.com" },
  { name: "Lowe's", domain: "lowes.com" },
  { name: "Mastercard", domain: "mastercard.com" },
  { name: "MetLife", domain: "metlife.com" },
  { name: "Michelin", domain: "michelin.com" },
  { name: "Neiman Marcus", domain: "neimanmarcus.com" },
  { name: "Nomura", domain: "nomura.com" },
  { name: "Northern Tool", domain: "northerntool.com" },
  { name: "PayPal", domain: "paypal.com" },
  { name: "Pepsi", domain: "pepsi.com" },
  { name: "Pernod Ricard", domain: "pernod-ricard.com" },
  { name: "Philips", domain: "philips.com" },
  { name: "Rakuten", domain: "rakuten.com" },
  { name: "Schneider Electric", domain: "se.com" },
  { name: "Siemens", domain: "siemens.com" },
  { name: "Societe Generale", domain: "societegenerale.com" },
  { name: "Standard Chartered", domain: "sc.com" },
  { name: "Swiss Re", domain: "swissre.com" },
  { name: "Telstra", domain: "telstra.com" },
  { name: "Tesco", domain: "tesco.com" },
  { name: "UnitedHealth Group", domain: "unitedhealthgroup.com" },
  { name: "Unilever", domain: "unilever.com" },
  { name: "Visa", domain: "visa.com" },
  { name: "Walmart", domain: "walmart.com" },
  { name: "Wells Fargo", domain: "wellsfargo.com" },
];

const TrustedBySection: React.FC<HeroProps> = ({ isDarkMode }) => {
  const getLogoUrl = (domain: string) => {
    const baseUrl = `https://cdn.brandfetch.io/${domain}/w/400/h/30`;
    const suffix = "?c=1iderWt-xdd8cP9uNSp";

    if (isDarkMode && !brandsWithSingleLogo.includes(domain)) {
      return `${baseUrl}/theme/light/logo${suffix}`;
    }
    return `${baseUrl}/logo${suffix}`;
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="relative flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex animate-infinite-scroll [animation-duration:50s] whitespace-nowrap py-4 min-w-full items-center">
          {[...partnerList, ...partnerList].map((company, i) => (
            <div
              key={`${company.domain}-${i}`}
              className="mx-2 flex items-center justify-center min-w-[140px]"
            >
              <img
                src={getLogoUrl(company.domain)}
                alt={company.name}
                loading="lazy"
                className="h-8 w-auto object-contain transition-all duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;