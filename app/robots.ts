export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://karandas.vercel.app/sitemap.xml",
  };
}