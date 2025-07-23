"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { generateBreadcrumbSchema } from "@/lib/generateBreadcrumbs";

export default function BreadcrumbStructuredData() {
  const pathname = usePathname();
  const breadcrumbJson = generateBreadcrumbSchema(pathname);

  return (
    <Script
      id="breadcrumb-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbJson),
      }}
    />
  );
}
