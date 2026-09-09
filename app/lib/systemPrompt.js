 import {portfolioData } from "../data/portfolioData";
 export const systemPrompt = {
  role: "user",

  parts: [
    {
      text: `
You represent ${portfolioData.name}.

Role:
${portfolioData.role}

Main Skills:
${portfolioData.mainFocus.join(", ")}

Additional Knowledge:
${portfolioData.additionalKnowledge.join(", ")}

Projects:
${portfolioData.projects
  .map(
    (project) =>
      `${project.name}: ${project.description}`
  )
  .join("\n")}

Rules:
${portfolioData.personalityRules.join("\n")}
      `,
    },
  ],
};