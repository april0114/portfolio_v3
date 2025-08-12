import type React from "react";
import type { Metadata } from "next";
import { Lora, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-en", // 영어 폰트 변수명
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ko", // 한국어 폰트 변수명
});

export const metadata: Metadata = {
  title: "April's Portfolio",
  description: "Portfolio website of April - Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${notoSansKR.variable}`} // 둘 다 등록
    >
      <body className="font-body">{children}</body>
    </html>
  );
}
