"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { X, Sparkles, Loader2, Wand2 } from "lucide-react";
import { generateResume } from "@/lib/actions/generate-resume";
import { useResume } from "@/providers/resume-provider";

interface AIGenerateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIGenerateModal = ({ isOpen, onClose }: AIGenerateModalProps) => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { dispatch } = useResume();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please describe yourself and your professional background");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await generateResume({ prompt });

      if (result.success && result.data) {
        dispatch({ type: "SET_HEADER", payload: result.data.header });
        dispatch({ type: "SET_EXPERIENCE", payload: result.data.experience });
        dispatch({ type: "SET_SKILL", payload: result.data.skills });
        dispatch({ type: "SET_PROJECT", payload: result.data.projects });
        dispatch({ type: "SET_EDUCATION", payload: result.data.education });
        dispatch({ type: "SET_LANGUAGE", payload: result.data.languages });

        onClose();
        setPrompt("");
      } else {
        setError(result.error || "Failed to generate resume");
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error("Generation error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      onClose();
      setPrompt("");
      setError(null);
    }
  };

  const examplePrompts = [
    "I'm a Full Stack Developer with 5 years of experience in React, Node.js, and AWS. I've worked at tech startups building scalable web applications.",
    "I'm a Frontend Developer specializing in React and TypeScript. I have 3 years of experience creating responsive web applications with modern UI frameworks.",
    "I'm a Backend Developer with expertise in Python, Django, and database design. I've built APIs and microservices for enterprise applications.",
    "I'm a DevOps Engineer with experience in Docker, Kubernetes, and CI/CD pipelines. I help teams deploy and scale applications efficiently.",
  ];

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
            onClick={handleClose}
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
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg"
                  >
                    <Sparkles className="h-5 w-5 text-white" />
                  </motion.div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      AI Resume Generator
                    </h2>
                    <p className="text-sm text-gray-600">
                      Describe yourself and let AI create your resume
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClose}
                  disabled={isLoading}
                  className="rounded-full h-8 w-8 p-0 hover:bg-gray-100"
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="p-6 space-y-6 max-h-[calc(90vh-200px)] overflow-y-auto"
              >
                {/* Main Input */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Wand2 className="h-4 w-4" />
                    Tell us about yourself
                  </label>
                  <Textarea
                    placeholder="Describe your professional background, skills, experience, and career goals. For example: 'I'm a Full Stack Developer with 5 years of experience in React, Node.js, and AWS. I've worked at tech startups building scalable web applications, led development teams, and have expertise in cloud architecture...'"
                    value={prompt}
                    onChange={e => setPrompt(e.target.value)}
                    className="min-h-[120px] resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    disabled={isLoading}
                  />
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>Be as detailed as possible for better results</span>
                    <span>{prompt.length} characters</span>
                  </div>
                </div>

                {/* Example Prompts */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-700">
                    Need inspiration? Try these examples:
                  </h3>
                  <div className="grid gap-2 max-h-32 overflow-y-auto">
                    {examplePrompts.map((example, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        onClick={() => setPrompt(example)}
                        disabled={isLoading}
                        className="text-left p-3 text-xs bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-transparent hover:border-indigo-200 disabled:opacity-50"
                      >
                        {example}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Error Display */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200"
                    >
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="flex justify-end gap-3 p-6 border-t border-gray-100 bg-gray-50"
              >
                <Button
                  variant="outline"
                  onClick={handleClose}
                  disabled={isLoading}
                  className="px-6"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleGenerate}
                  disabled={isLoading || !prompt.trim()}
                  className="px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Loader2 className="h-4 w-4" />
                      </motion.div>
                      Generating...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      Generate Resume
                    </div>
                  )}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AIGenerateModal;
