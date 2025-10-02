"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";
import { TemplateType } from "@/types";
import { TEMPLATES } from "@/lib/templates";

interface TemplateSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (templateId: TemplateType) => void;
  currentTemplate: TemplateType;
}

const TemplateSelectorModal = ({
  isOpen,
  onClose,
  onSelectTemplate,
  currentTemplate,
}: TemplateSelectorModalProps) => {
  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateType>(currentTemplate);

  const handleSelectTemplate = (templateId: TemplateType) => {
    setSelectedTemplate(templateId);
  };

  const handleConfirm = () => {
    onSelectTemplate(selectedTemplate);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex items-center justify-between p-6 border-b border-gray-100"
              >
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Choose Your Resume Template
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Select a template that best matches your profession
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="rounded-full h-8 w-8 p-0 hover:bg-gray-100"
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.div>

              {/* Template Grid */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="p-6 max-h-[calc(90vh-200px)] overflow-y-auto"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.values(TEMPLATES).map((template, index) => (
                    <motion.div
                      key={template.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={`relative cursor-pointer rounded-xl border-2 transition-all duration-200 ${
                        selectedTemplate === template.id
                          ? "border-indigo-500 bg-indigo-50 shadow-md"
                          : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                      }`}
                      onClick={() => handleSelectTemplate(template.id)}
                    >
                      {selectedTemplate === template.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center"
                        >
                          <Check className="h-3 w-3 text-white" />
                        </motion.div>
                      )}

                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${template.color} flex items-center justify-center text-2xl`}
                          >
                            {template.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">
                              {template.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {template.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-2">
                              Perfect for:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {template.suitableFor
                                .slice(0, 3)
                                .map((role, roleIndex) => (
                                  <span
                                    key={roleIndex}
                                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                                  >
                                    {role}
                                  </span>
                                ))}
                              {template.suitableFor.length > 3 && (
                                <span className="text-xs text-gray-500">
                                  +{template.suitableFor.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="flex justify-end gap-3 p-6 border-t border-gray-100 bg-gray-50"
              >
                <Button variant="outline" onClick={onClose} className="px-6">
                  Cancel
                </Button>
                <Button
                  onClick={handleConfirm}
                  className="px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                  disabled={selectedTemplate === currentTemplate}
                >
                  {selectedTemplate === currentTemplate
                    ? "Current Template"
                    : "Apply Template"}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TemplateSelectorModal;
