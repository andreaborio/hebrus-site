import type { Metadata } from "next";
import { Geist_Mono, Newsreader, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  weight: "variable",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"],
  axes: ["opsz"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://hebrus-studio.beepai.chatgpt.site";
const canonicalUrl = `${siteOrigin}${basePath}/`;
const socialImageUrl = `${siteOrigin}${basePath}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "Hebrus Studio — Local AI for Apple Silicon",
    template: "%s · Hebrus Studio",
  },
  description:
    "A native home for Hebrus: Metal-first local inference with adaptive SSD streaming on Apple Silicon.",
  applicationName: "Hebrus Studio",
  keywords: ["local AI", "Apple Silicon", "Metal", "SSD streaming", "GGUF", "open source"],
  alternates: { canonical: canonicalUrl },
  icons: {
    icon: `${basePath}/media/hebrus-mark.png`,
    apple: `${basePath}/media/hebrus-mark.png`,
  },
  openGraph: {
    title: "Hebrus Studio",
    description: "Metal first. SSD when memory ends.",
    type: "website",
    url: canonicalUrl,
    images: [{ url: socialImageUrl, width: 1732, height: 907, alt: "Hebrus Studio — Metal first. SSD when memory ends." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hebrus Studio",
    description: "Metal first. SSD when memory ends.",
    images: [socialImageUrl],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${geistMono.variable} ${newsreader.variable}`}>
        {children}
      </body>
    </html>
  );
}
