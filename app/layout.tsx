import type { Metadata } from "next";
import { cookies } from "next/headers";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const googleFont = localFont({
  src: [
    {
      path: "../public/portfolio/fonts/GoogleSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/portfolio/fonts/GoogleSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/portfolio/fonts/GoogleSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/portfolio/fonts/GoogleSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-google",
});

export const metadata: Metadata = {
  title: "Karan Das | Frontend Developer",
  description:
    "Frontend developer specializing in React, Next.js, and responsive UI.",
};

const themeInitScript = `
  (function() {
    try {
      var saved = localStorage.getItem('theme');
      document.documentElement.classList.toggle('dark', saved === 'dark');
    } catch (e) {}
  })();
`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = (await cookies()).get("theme")?.value;
  const htmlClassName =
    theme === "dark" ? `${googleFont.variable} dark` : googleFont.variable;

  return (
    <html
      lang="en"
      className={htmlClassName}
      suppressHydrationWarning
    >
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className="h-screen relative
     transition-colors duration-300 ">
        <div className="aurora-bg h-screen fixed inset-0 -z-10">
        </div>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
