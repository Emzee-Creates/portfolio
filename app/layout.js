import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "Emmanuel's Portfolio",
    template: "%s | Emmanuel's Portfolio",
  },
  description:
    "Personal portfolio showcasing my projects, blogs, and skills in Python, React, Node.js, AWS, Docker, and more.",
  metadataBase: new URL("https://yourdomain.com"), // <-- replace with your real domain
  openGraph: {
    title: "Emmanuel's Portfolio",
    description:
      "Explore my projects and blogs on full-stack development, cloud, and DevOps.",
    url: "https://yourdomain.com",
    siteName: "Emmanuel's Portfolio",
    images: [
      {
        url: "/og-image.png", // put an image in /public (1200x630 recommended)
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel's Portfolio",
    description:
      "Explore my projects and blogs on full-stack development, cloud, and DevOps.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-brand-light`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
