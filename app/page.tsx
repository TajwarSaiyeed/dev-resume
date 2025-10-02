"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Palette } from "lucide-react";
import { useResume } from "@/providers/resume-provider";
import { TemplateType } from "@/types";
import Sidebar from "@/app/_components/sidebar";
import TemplateRenderer from "@/components/template-renderer";
import AIGenerateModal from "@/components/ai-generate-modal";
import TemplateSelectorModal from "@/components/template-selector-modal";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const { state, dispatch } = useResume();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleSelectTemplate = (templateId: TemplateType) => {
    dispatch({ type: "SET_TEMPLATE", payload: templateId });
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <div className="print:hidden fixed top-4 right-4 z-40 flex gap-3">
        <Button
          onClick={() => setIsTemplateModalOpen(true)}
          variant="outline"
          className="bg-white hover:bg-gray-50 border-gray-300 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          size="lg"
        >
          <Palette className="h-4 w-4 mr-2" />
          Templates
        </Button>
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
      <TemplateRenderer />
      <AIGenerateModal
        isOpen={isAIModalOpen}
        onClose={() => setIsAIModalOpen(false)}
      />
      <TemplateSelectorModal
        isOpen={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
        onSelectTemplate={handleSelectTemplate}
        currentTemplate={state.template}
      />
    </>
  );
}
