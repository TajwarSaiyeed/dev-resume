import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ResumeProvider } from "@/providers/resume-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Resume",
  description:
    "The Dev-Resume project is an open-source platform that allows developers to create and showcase their professional resumes in a developer-friendly format. With easy-to-use fields for essential information such as name, location, LinkedIn, GitHub, email, phone, and detailed sections for projects, live links, programming languages, skills, and tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-5 print:p-0`}>
        <ResumeProvider>{children}</ResumeProvider>
      </body>
    </html>
  );
}
