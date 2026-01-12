export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Abal Gym Management Software",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "ETB",
        },
        "description": "Ethiopia's leading gym management system for membership tracking, payments, and access control.",
      },
      {
        "@type": "Organization",
        "name": "Wovera Solutions",
        "url": "https://abal.et",
        "logo": "https://abal.et/images/abal-logo.png",
        "sameAs": [
          "https://twitter.com/abal_et",
          "https://linkedin.com/company/wovera-solutions",
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+251-91-042-8013",
          "contactType": "sales",
          "areaServed": "ET",
          "availableLanguage": ["en", "am"],
        },
      },
      {
        "@type": "LocalBusiness",
        "name": "Abal Gym Management",
        "image": "https://abal.et/images/abal-logo.png",
        "telephone": "+251910428013",
        "email": "info@woverasolutions.com",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "ET",
          "addressLocality": "Addis Ababa",
        },
        "priceRange": "0 - 9999 ETB",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
