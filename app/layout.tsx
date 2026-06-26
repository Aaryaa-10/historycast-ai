import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Mic } from "lucide-react";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "HistoryCast AI",
  description: "AI-powered historical debates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav
  className="
    sticky
    top-0
    z-50
    border-b
    border-[#F2B1AB]
    bg-[#FAF7F4]/95
    backdrop-blur-md
    shadow-sm
  "
>
          <div
            className="
              max-w-6xl
              mx-auto
              px-6
              py-4
              flex
              justify-between
              items-center
            "
          >
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <Mic
                size={32}
                className="text-[#A32025]"
              />

              <h1
                className="
                  text-2xl
                  font-bold
                  text-[#A32025]
                "
              >
                HistoryCast AI
              </h1>
            </Link>

            <div className="flex gap-8">
              <Link
                href="/"
               className="
  font-semibold
  text-[#5B3A29]
  hover:text-[#A32025]
  transition
"
              >
                Create Debate
              </Link>

              <Link
                href="/history"
                className="
  font-semibold
  text-[#5B3A29]
  hover:text-[#A32025]
  transition
"
              >
                History
              </Link>
            </div>
          </div>
        </nav>

       <>
  {children}

  <Toaster
    richColors
    position="top-right"
    closeButton
    duration={3000}
  />
</>
      </body>
    </html>
  );
}