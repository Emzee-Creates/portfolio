import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata = {
  title: {
    default: "Emoruwa Emmanuel | AI & Blockchain Engineer",
    template: "%s | Emoruwa Emmanuel",
  },
  description: "Senior Software Engineer specializing in AI Systems and Blockchain Infrastructure.",
  // ... (keep your existing metadataBase and social tags)
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased bg-brand-surface dark:bg-brand-dark text-slate-900 dark:text-slate-100`}
      >
        {/* The Glow Effect & Grid Pattern background */}
        <div className="fixed inset-0 bg-glow" />
        <div className="fixed inset-0 bg-grid pointer-events-none" />
        
        <div className="relative z-10">
          <Layout>
            <main className="min-h-screen">
              {children}
            </main>
          </Layout>
        </div>
      </body>
    </html>
  );
}
