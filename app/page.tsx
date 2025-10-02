"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/app/_components/sidebar";
import ResumeBody from "@/app/_components/resume-body";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <Sidebar />
      <ResumeBody />
    </>
  );
}
