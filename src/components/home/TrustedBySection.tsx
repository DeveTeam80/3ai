import React from "react";

const partnerList = [
  { name: "ABB", domain: "abb.com" },
  { name: "ABInBev", domain: "ab-inbev.com" },
  { name: "Advance Auto Parts", domain: "advanceautoparts.com" },
  { name: "American Express", domain: "americanexpress.com" },
  { name: "Anko", domain: "anko.com" },
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

const TrustedBySection: React.FC = () => {
  const TOKEN = "pk_WL6c2wU0TCeVlYlSMW4org";

  return (
    <section className="py-20 overflow-hidden">
      <div className="relative flex overflow-hidden group [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        {/* Added [animation-duration:20s] 
           Adjust this number: 
           - 15s = Faster
           - 60s = Slower
        */}
        <div className="flex animate-infinite-scroll [animation-duration:20s] whitespace-nowrap py-4 min-w-full items-center">
          {[...partnerList, ...partnerList].map((company, i) => (
            <div
              key={`${company.name}-${i}`}
              className="mx-14 flex items-center justify-center min-w-[160px]"
            >
              <img
                src={`https://img.logo.dev/${company.domain}?token=${TOKEN}&format=png`}
                alt={company.name}
                loading="lazy"
                className="h-auto w-auto object-contain transition-all duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;