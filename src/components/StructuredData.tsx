interface StructuredDataProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function StructuredData({ data }: StructuredDataProps) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

// === Schema Generators ===

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Limanex Studio",
    url: "https://limanexstudio.com",
    logo: "https://limanexstudio.com/android-chrome-512x512.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: "limanexsoftware@outlook.com",
      contactType: "customer support",
    },
    sameAs: [
      "https://twitter.com/limanex",
      "https://linkedin.com/company/limanex",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Limanex Studio",
    url: "https://limanexstudio.com",
    description:
      "Apps & Games Designed for the Future. Precision-engineered for performance, crafted with an obsession for detail.",
  };
}

export function getSoftwareApplicationSchema(app: {
  name: string;
  short_description: string;
  playstore_link: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    description: app.short_description,
    url: `https://limanexstudio.com/apps/${app.slug}`,
    applicationCategory: "HealthApplication",
    operatingSystem: "Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    installUrl: app.playstore_link,
    author: {
      "@type": "Organization",
      name: "Limanex Studio",
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
