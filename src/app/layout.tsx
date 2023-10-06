"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Stats from "@/components/Stats";
import WeAre from "@/components/WeAre";
import "tailwindcss/tailwind.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div>
          <Hero />
        </div>
        <div className="flex items-center">
          <div className="flex item relative right-90 translate-x-[35%]">
            <iframe
              src="https://www.youtube.com/embed/kdPSpUR9BLY"
              width={800}
              height={500}
              title="Youtube video player"
            ></iframe>
          </div>
          <div>
            <WeAre />
          </div>
        </div>
        <div>
          <Stats />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <Solutions />
        </div>
        <div>
          <Footer />
        </div>
        {children}
      </body>
    </html>
  );
}
