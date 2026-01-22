
import { GoogleGenAI } from "@google/genai";

// Lazy initialization - only create client when needed and if API key exists
let ai: GoogleGenAI | null = null;

function getAI() {
  if (!ai) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("Gemini API key not configured");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
}

export async function getSmartCleaningAdvice(data: {
  industry: string;
  sqft: number;
  frequency: string;
  priority: string;
}) {
  try {
    const client = getAI();
    // Correctly calling generateContent with both model name and prompt.
    const response = await client.models.generateContent({
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
    const client = getAI();
    const response = await client.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a quick 2-sentence summary of commercial cleaning standards or specific challenges (like winter salt or humidity) for businesses in ${location}, New England.`,
    });
    // Access the .text property directly.
    return response.text;
  } catch (error) {
    return "New England's variable climate demands specialized floor care and seasonal maintenance to protect your investment.";
  }
}
