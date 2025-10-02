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

    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with id "${elementId}" not found`);
    }

    const originalCursor = document.body.style.cursor;
    document.body.style.cursor = "wait";

    const printStyles = document.querySelectorAll("style[data-pdf-ignore]");
    printStyles.forEach(style => style.remove());

    const colorMap = {
      "oklch(1 0 0)": "#ffffff",
      "oklch(0.141 0.005 285.823)": "#1f2937",
      "oklch(0.985 0 0)": "#ffffff",
      "oklch(0.21 0.006 285.885)": "#374151",
      "oklch(0.723 0.219 149.579)": "#10b981",
      "oklch(0.982 0.018 155.826)": "#f0fdf4",
      "oklch(0.967 0.001 286.375)": "#f9fafb",
      "oklch(0.552 0.016 285.938)": "#6b7280",
      "oklch(0.92 0.004 286.32)": "#e5e7eb",
      "oklch(0.577 0.245 27.325)": "#ef4444",
      "oklch(0.646 0.222 41.116)": "#f59e0b",
      "oklch(0.6 0.118 184.704)": "#3b82f6",
      "oklch(0.398 0.07 227.392)": "#6366f1",
      "oklch(0.828 0.189 84.429)": "#84cc16",
      "oklch(0.769 0.188 70.08)": "#eab308",
      "oklch(0.696 0.17 162.48)": "#10b981",
      "oklch(0.393 0.095 152.535)": "#065f46",
      "oklch(0.274 0.006 286.033)": "#4b5563",
      "oklch(0.705 0.015 286.067)": "#9ca3af",
      "oklch(0.704 0.191 22.216)": "#dc2626",
      "oklch(0.527 0.154 150.069)": "#059669",
      "oklch(0.488 0.243 264.376)": "#8b5cf6",
      "oklch(0.627 0.265 303.9)": "#a855f7",
      "oklch(0.645 0.246 16.439)": "#dc2626",
    };

    const pdfStyle = document.createElement("style");
    pdfStyle.setAttribute("data-pdf-style", "true");

    const colorFallbacks = Object.entries(colorMap)
      .map(
        ([oklch, rgb]) =>
          `--color-fallback-${btoa(oklch).replace(/[^a-zA-Z0-9]/g, "")}: ${rgb};`
      )
      .join("\n");

    pdfStyle.textContent = `
      :root {
        ${colorFallbacks}
        --background: #ffffff !important;
        --foreground: #1f2937 !important;
        --card: #ffffff !important;
        --card-foreground: #1f2937 !important;
        --popover: #ffffff !important;
        --popover-foreground: #1f2937 !important;
        --primary: #10b981 !important;
        --primary-foreground: #ffffff !important;
        --secondary: #f9fafb !important;
        --secondary-foreground: #374151 !important;
        --muted: #f9fafb !important;
        --muted-foreground: #6b7280 !important;
        --accent: #f9fafb !important;
        --accent-foreground: #374151 !important;
        --destructive: #ef4444 !important;
        --border: #e5e7eb !important;
        --input: #e5e7eb !important;
        --ring: #10b981 !important;
      }
      
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
      
      .shadow-lg, .shadow-xl, .shadow-2xl, .shadow-md {
        box-shadow: none !important;
      }
      
      /* Fix gradient backgrounds for PDF */
      .bg-gradient-to-r, .bg-gradient-to-l, .bg-gradient-to-t, .bg-gradient-to-b,
      .bg-gradient-to-br, .bg-gradient-to-bl, .bg-gradient-to-tr, .bg-gradient-to-tl {
        background-image: none !important;
      }
      
      /* Template-specific color fixes */
      .from-blue-500.to-indigo-600, .bg-gradient-to-r.from-blue-500.to-indigo-600 {
        background: #3b82f6 !important;
        background-image: none !important;
      }
      
      .from-pink-500.to-rose-600, .bg-gradient-to-r.from-pink-500.to-rose-600 {
        background: #ec4899 !important;
        background-image: none !important;
      }
      
      .from-green-500.to-emerald-600, .bg-gradient-to-r.from-green-500.to-emerald-600 {
        background: #10b981 !important;
        background-image: none !important;
      }
      
      .from-purple-500.to-violet-600, .bg-gradient-to-r.from-purple-500.to-violet-600,
      .from-purple-600.to-violet-700, .bg-gradient-to-r.from-purple-600.to-violet-700 {
        background: #8b5cf6 !important;
        background-image: none !important;
      }
      
      .from-indigo-600.to-purple-600, .bg-gradient-to-r.from-indigo-600.to-purple-600 {
        background: #6366f1 !important;
        background-image: none !important;
      }
    `;
    document.head.appendChild(pdfStyle);

    await new Promise(resolve => setTimeout(resolve, 100));

    const canvas = await html2canvas(element, {
      scale: scale,
      useCORS: true,
      allowTaint: false,
      backgroundColor: "#ffffff",
      width: element.scrollWidth,
      height: element.scrollHeight,
      scrollX: 0,
      scrollY: 0,
      ignoreElements: (element: HTMLElement) => {
        return element.classList?.contains("print:hidden") || false;
      },
      onclone: (clonedDoc: Document) => {
        const clonedElement = clonedDoc.getElementById(elementId);
        if (clonedElement) {
          const allElements = clonedElement.querySelectorAll("*");
          allElements.forEach((el: Element) => {
            const htmlEl = el as HTMLElement;
            if (htmlEl.style) {
              try {
                const computedStyle = window.getComputedStyle(htmlEl);
                if (
                  computedStyle.color &&
                  computedStyle.color.includes("oklch")
                ) {
                  htmlEl.style.color = "#000000";
                }
                if (
                  computedStyle.backgroundColor &&
                  computedStyle.backgroundColor.includes("oklch")
                ) {
                  htmlEl.style.backgroundColor = "#ffffff";
                }
              } catch (e) {
                console.warn("Could not process element styles:", e);
              }
            }
          });
        }
      },
    });

    const imgWidth = format === "a4" ? 210 : 216;
    const pageHeight = format === "a4" ? 297 : 279;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const pdf = new jsPDF({
      orientation: imgHeight > pageHeight ? "portrait" : "portrait",
      unit: "mm",
      format: format,
    });

    let heightLeft = imgHeight;
    let position = 0;
    const pageData = canvas.toDataURL("image/jpeg", quality);

    pdf.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    document.head.removeChild(pdfStyle);
    document.body.style.cursor = originalCursor;

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
