import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://teraboxstream.com"; // Replace with your actual domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/how-to-download-terabox-links`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/terabox-link-downloader-tutorial`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/terabox-video-downloader-guide`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
    },
  ];
}
