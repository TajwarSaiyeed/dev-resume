import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export interface PDFDownloadOptions {
  filename?: string;
  quality?: number;
  scale?: number;
  format?: "a4" | "letter";
}

export const downloadResumeAsPDF = async (
  elementId: string = "resume-content",
  options: PDFDownloadOptions = {}
): Promise<void> => {
  try {
    const {
      filename = "resume.pdf",
      quality = 2,
      scale = 2,
      format = "a4",
    } = options;

    // Get the resume element
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with id "${elementId}" not found`);
    }

    // Show loading state
    const originalCursor = document.body.style.cursor;
    document.body.style.cursor = "wait";

    // Temporarily remove print styles for better PDF generation
    const printStyles = document.querySelectorAll("style[data-pdf-ignore]");
    printStyles.forEach(style => style.remove());

    // Add PDF-specific styles
    const pdfStyle = document.createElement("style");
    pdfStyle.setAttribute("data-pdf-style", "true");
    pdfStyle.textContent = `
      #${elementId} {
        transform: scale(1) !important;
        box-shadow: none !important;
        margin: 0 !important;
        padding: 20px !important;
        background: white !important;
        min-height: auto !important;
      }
      .print\\:hidden {
        display: none !important;
      }
      .shadow-lg, .shadow-xl, .shadow-2xl {
        box-shadow: none !important;
      }
    `;
    document.head.appendChild(pdfStyle);

    // Generate canvas from HTML
    const canvas = await html2canvas(element, {
      scale: scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      width: element.scrollWidth,
      height: element.scrollHeight,
      scrollX: 0,
      scrollY: 0,
    });

    // Calculate PDF dimensions
    const imgWidth = format === "a4" ? 210 : 216; // A4: 210mm, Letter: 216mm
    const pageHeight = format === "a4" ? 297 : 279; // A4: 297mm, Letter: 279mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Create PDF
    const pdf = new jsPDF({
      orientation: imgHeight > pageHeight ? "portrait" : "portrait",
      unit: "mm",
      format: format,
    });

    let heightLeft = imgHeight;
    let position = 0;
    const pageData = canvas.toDataURL("image/jpeg", quality);

    // Add first page
    pdf.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add additional pages if content is too long
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Clean up styles
    document.head.removeChild(pdfStyle);
    document.body.style.cursor = originalCursor;

    // Download the PDF
    pdf.save(filename);
  } catch (error) {
    console.error("Error generating PDF:", error);
    document.body.style.cursor = "default";
    throw new Error("Failed to generate PDF. Please try again.");
  }
};

export const getOptimizedFilename = (
  name: string = "Resume",
  template: string = "professional"
): string => {
  const cleanName = name.replace(/[^a-zA-Z0-9]/g, "_");
  const timestamp = new Date().toISOString().split("T")[0];
  return `${cleanName}_${template}_${timestamp}.pdf`;
};
