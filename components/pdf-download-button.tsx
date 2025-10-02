"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2, FileText, Check } from "lucide-react";
import { useResume } from "@/providers/resume-provider";
import { downloadResumeAsPDF, getOptimizedFilename } from "@/lib/pdf-download";
import { fallbackPrintToPDF } from "@/lib/fallback-print";
import { getTemplate } from "@/lib/templates";

interface PDFDownloadButtonProps {
  className?: string;
  variant?: "default" | "outline" | "secondary";
  size?: "sm" | "default" | "lg";
}

const PDFDownloadButton = ({
  className = "",
  variant = "default",
  size = "default",
}: PDFDownloadButtonProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const { state } = useResume();
  const template = getTemplate(state.template);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      setDownloadSuccess(false);

      const filename = getOptimizedFilename(
        state.header.name || "Resume",
        template.name.replace(/\s+/g, "_")
      );

      await downloadResumeAsPDF("resume-content", {
        filename,
        quality: 0.9,
        scale: 2,
        format: "a4",
      });

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (error) {
      console.error("Download failed:", error);

      const userChoice = window.confirm(
        "PDF generation failed due to browser compatibility issues. Would you like to use the browser's print function instead? (Click OK for print dialog, Cancel to abort)"
      );

      if (userChoice) {
        try {
          fallbackPrintToPDF();
          setDownloadSuccess(true);
          setTimeout(() => setDownloadSuccess(false), 3000);
        } catch (printError) {
          console.error("Print fallback also failed:", printError);
          alert(
            "Both PDF generation and print failed. Please try again or use a different browser."
          );
        }
      }
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      variant={variant}
      size={size}
      className={`
        transition-all duration-200 hover:scale-105 
        ${downloadSuccess ? "bg-green-600 hover:bg-green-700" : ""}
        ${className}
      `}
    >
      {isDownloading ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Generating PDF...
        </>
      ) : downloadSuccess ? (
        <>
          <Check className="h-4 w-4 mr-2" />
          Downloaded!
        </>
      ) : (
        <>
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </>
      )}
    </Button>
  );
};

export default PDFDownloadButton;
