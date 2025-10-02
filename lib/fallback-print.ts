export const fallbackPrintToPDF = (): void => {
  const printStyle = document.createElement("style");
  printStyle.id = "fallback-print-style";
  printStyle.textContent = `
    @media print {
      body * {
        visibility: hidden;
      }
      
      #resume-content, #resume-content * {
        visibility: visible;
      }
      
      #resume-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background: white !important;
      }
      
      .print\\:hidden {
        display: none !important;
      }
      
      /* Force all colors to be print-safe */
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        color-adjust: exact !important;
      }
      
      /* Convert gradients to solid colors */
      .bg-gradient-to-r.from-blue-500.to-indigo-600 { background: #3b82f6 !important; }
      .bg-gradient-to-r.from-pink-500.to-rose-600 { background: #ec4899 !important; }
      .bg-gradient-to-r.from-green-500.to-emerald-600 { background: #10b981 !important; }
      .bg-gradient-to-r.from-purple-500.to-violet-600,
      .bg-gradient-to-r.from-purple-600.to-violet-700 { background: #8b5cf6 !important; }
      .bg-gradient-to-r.from-indigo-600.to-purple-600 { background: #6366f1 !important; }
    }
  `;

  document.head.appendChild(printStyle);

  window.print();

  setTimeout(() => {
    const styleElement = document.getElementById("fallback-print-style");
    if (styleElement) {
      document.head.removeChild(styleElement);
    }
  }, 1000);
};
