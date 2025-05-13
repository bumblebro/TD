import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://teraboxstream.com";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/blog/how-to-download-terabox-links`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/blog/terabox-link-downloader-tutorial`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/blog/terabox-video-downloader-guide`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/blog/terabox-video-streaming-guide`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/supported-urls`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
    },
  ];
}
