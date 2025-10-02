declare module "pdf-parse/lib/pdf-parse.js";

declare module "jspdf" {
  export interface jsPDF {
    save(filename: string): void;
    addImage(
      imageData: string | HTMLImageElement | HTMLCanvasElement,
      format: string,
      x: number,
      y: number,
      width: number,
      height: number
    ): void;
  }
}

declare module "html2canvas" {
  interface Html2CanvasOptions {
    scale?: number;
    useCORS?: boolean;
    allowTaint?: boolean;
    backgroundColor?: string;
    width?: number;
    height?: number;
    scrollX?: number;
    scrollY?: number;
  }

  function html2canvas(
    element: HTMLElement,
    options?: Html2CanvasOptions
  ): Promise<HTMLCanvasElement>;

  export = html2canvas;
}
