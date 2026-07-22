import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://hebrus-studio.beepai.chatgpt.site";
const canonicalUrl = `${siteOrigin}${basePath}/`;
const socialImageUrl = `${siteOrigin}${basePath}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "Hebrus Studio — Local AI for Mac",
    template: "%s · Hebrus Studio",
  },
  description:
    "A polished Mac app for private local AI with Hebrus, Metal-first execution and SSD-assisted large models.",
  applicationName: "Hebrus Studio",
  keywords: ["local AI", "Mac", "Apple Silicon", "Metal", "SSD streaming", "GGUF", "open source"],
  alternates: { canonical: canonicalUrl },
  icons: {
    icon: `${basePath}/media/hebrus-mark.png`,
    apple: `${basePath}/media/hebrus-mark.png`,
  },
  openGraph: {
    title: "Hebrus Studio — Local AI for Mac",
    description: "Private local AI for Apple Silicon. Metal first, SSD assisted.",
    type: "website",
    url: canonicalUrl,
    images: [{ url: socialImageUrl, width: 1732, height: 908, alt: "Hebrus Studio — Metal first. SSD when memory ends." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hebrus Studio — Local AI for Mac",
    description: "Private local AI for Apple Silicon. Metal first, SSD assisted.",
    images: [socialImageUrl],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
