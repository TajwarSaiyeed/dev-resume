"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  HeaderProps,
  ExperienceProps,
  Skill,
  Project,
  EducationProps,
  LanguageProps,
} from "@/types";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export interface GenerateResumeRequest {
  prompt: string;
}

export interface GenerateResumeResponse {
  success: boolean;
  data?: {
    header: HeaderProps;
    experience: ExperienceProps[];
    skills: Skill[];
    projects: Project[];
    education: EducationProps[];
    languages: LanguageProps[];
  };
  error?: string;
}

const createPrompt = (request: GenerateResumeRequest): string => {
  return `
You are a professional resume writer. Generate a complete, realistic, and professional resume based on the following user description.

User Description: "${request.prompt}"

Analyze the description and extract relevant information about:
- Professional background and experience level
- Technical skills and expertise
- Career achievements and responsibilities  
- Education background
- Project experience
- Location and contact preferences

Generate a JSON response with the following exact structure. Make sure all data is realistic, professional, and coherent with the user's description:

{
  "header": {
    "name": "Professional Full Name",
    "role": "Job Title/Role",
    "location": "City, Country",
    "phone": "+1 (555) 123-4567",
    "email": "professional@email.com",
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username",
    "portfolio": "https://portfolio-website.com"
  },
  "experience": [
    {
      "id": 1,
      "company": "Company Name",
      "role": "Job Title",
      "location": "City, Country",
      "startDate": "Month Year",
      "endDate": "Month Year",
      "description": "Detailed description of responsibilities and achievements with bullet points separated by newlines. Include specific technologies, metrics, and impact."
    }
  ],
  "skills": [
    {
      "id": 1,
      "name": "Languages",
      "value": "JavaScript, TypeScript, Python"
    },
    {
      "id": 2,
      "name": "Frameworks",
      "value": "React, Next.js, Node.js"
    },
    {
      "id": 3,
      "name": "Tools",
      "value": "Git, Docker, AWS"
    }
  ],
  "projects": [
    {
      "id": 1,
      "name": "Project Name",
      "live": "https://project-demo.com",
      "github": "https://github.com/username/project",
      "description": "Detailed project description explaining the problem solved, approach taken, and technologies used.",
      "technologies": "React, Node.js, MongoDB, AWS"
    }
  ],
  "education": [
    {
      "id": 1,
      "institute": "University/College Name",
      "degree": "Degree Type and Major",
      "academic_year": "Start-End Year"
    }
  ],
  "languages": [
    {
      "id": 1,
      "name": "English",
      "level": "Native/Fluent/Conversational"
    }
  ]
}

Requirements:
- Generate 2-3 work experiences
- Include 3-4 skill categories
- Create 2-4 relevant projects
- Add 1-2 education entries
- Include 1-3 languages
- Make all data cohesive and realistic
- Use professional language
- Include specific technologies and achievements
- Return ONLY the JSON, no additional text or markdown formatting
`;
};

export async function generateResume(
  request: GenerateResumeRequest
): Promise<GenerateResumeResponse> {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error(
        "GEMINI_API_KEY is not configured in environment variables"
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 8192,
      },
    });

    const prompt = createPrompt(request);

    const result = await model.generateContent(prompt);
    const response = await result.response;

    if (!response) {
      throw new Error("No response received from Gemini API");
    }

    const text = response.text();

    // Clean the response to extract JSON
    let jsonText = text.trim();

    // Remove markdown code blocks if present
    if (jsonText.startsWith("```json")) {
      jsonText = jsonText.replace(/```json\n?/, "").replace(/\n?```$/, "");
    } else if (jsonText.startsWith("```")) {
      jsonText = jsonText.replace(/```\n?/, "").replace(/\n?```$/, "");
    }

    // Parse the JSON response
    const parsedData = JSON.parse(jsonText);

    // Validate the structure
    if (
      !parsedData.header ||
      !parsedData.experience ||
      !parsedData.skills ||
      !parsedData.projects ||
      !parsedData.education ||
      !parsedData.languages
    ) {
      throw new Error("Invalid response structure from AI");
    }

    return {
      success: true,
      data: parsedData,
    };
  } catch (error) {
    console.error("Error generating resume:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An unexpected error occurred while generating the resume",
    };
  }
}
