import React from "react";
import { useResume } from "@/providers/resume-provider";
import DeveloperTemplate from "@/app/_components/templates/developer-template";
import GraphicDesignerTemplate from "@/app/_components/templates/graphic-designer-template";
import DigitalMarketerTemplate from "@/app/_components/templates/digital-marketer-template";
import BusinessAnalystTemplate from "@/app/_components/templates/business-analyst-template";

const TemplateRenderer = () => {
  const { state } = useResume();
  const { template } = state;

  switch (template) {
    case "developer":
      return <DeveloperTemplate />;
    case "graphic-designer":
      return <GraphicDesignerTemplate />;
    case "digital-marketer":
      return <DigitalMarketerTemplate />;
    case "business-analyst":
      return <BusinessAnalystTemplate />;
    default:
      return <DeveloperTemplate />;
  }
};

export default TemplateRenderer;
