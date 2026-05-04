import type { Metadata } from "next";
import { cookies } from "next/headers";
import localFont from "next/font/local";
import "./globals.css";

const montserratFont = localFont({
  src: [
    {
      path: "../public/portfolio/fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/portfolio/fonts/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Karan Das | Frontend Developer",
  description:
    "Portfolio of Karan Das, a frontend developer specializing in React, Next.js, TypeScript, and responsive UI.",
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
    theme === "dark" ? `${montserratFont.variable} dark` : montserratFont.variable;

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
      <body>{children}</body>
    </html>
  );
}
