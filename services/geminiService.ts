
import { GoogleGenAI } from "@google/genai";

// Always initialize the client with a direct reference to process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getSmartCleaningAdvice(data: {
  industry: string;
  sqft: number;
  frequency: string;
  priority: string;
}) {
  try {
    // Correctly calling generateContent with both model name and prompt.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a professional cleaning recommendation for a ${data.industry} facility in New England. 
      Details: ${data.sqft} sq ft, cleaning ${data.frequency}, with a priority on ${data.priority}. 
      Return a concise, encouraging recommendation with 3 bullet points for a cleaning plan.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    // Access the .text property directly.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our team will provide a custom plan tailored specifically to your facility's unique regional requirements.";
  }
}

export async function getRegionalInsights(location: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a quick 2-sentence summary of commercial cleaning standards or specific challenges (like winter salt or humidity) for businesses in ${location}, New England.`,
    });
    // Access the .text property directly.
    return response.text;
  } catch (error) {
    return "New England's variable climate demands specialized floor care and seasonal maintenance to protect your investment.";
  }
}
