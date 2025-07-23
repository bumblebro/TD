export function generateBreadcrumbSchema(pathname: string): any {
  const segments = pathname.split("/").filter(Boolean); // remove empty strings

  const itemListElement = segments.map((segment, index) => {
    const name = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, c => c.toUpperCase()); // Capitalize
    const item = `https://teraboxstream.com/${segments.slice(0, index + 1).join("/")}`;

    return {
      "@type": "ListItem",
      position: index + 1,
      name,
      item,
    };
  });

  // Always add Home as position 1
  itemListElement.unshift({
    "@type": "ListItem",
    position: 1,
    name: "Home",
    item: "https://teraboxstream.com",
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}
