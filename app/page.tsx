"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Sidebar from "@/app/_components/sidebar";
import ResumeBody from "@/app/_components/resume-body";
import AIGenerateModal from "@/components/ai-generate-modal";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <div className="print:hidden fixed top-4 right-4 z-40">
        <Button
          onClick={() => setIsAIModalOpen(true)}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 animate-pulse hover:animate-none"
          size="lg"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          Generate with AI
        </Button>
      </div>
      <Sidebar />
      <ResumeBody />
      <AIGenerateModal
        isOpen={isAIModalOpen}
        onClose={() => setIsAIModalOpen(false)}
      />
    </>
  );
}
