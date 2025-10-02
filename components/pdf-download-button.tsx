"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2, FileText, Check } from "lucide-react";
import { useResume } from "@/providers/resume-provider";
import { downloadResumeAsPDF, getOptimizedFilename } from "@/lib/pdf-download";
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
      // You could add a toast notification here
      alert("Download failed. Please try again.");
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
