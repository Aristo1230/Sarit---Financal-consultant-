import { GoogleGenAI } from "@google/genai";

// Initialize the client only if the key exists to prevent immediate errors on load
const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getProductivityTip = async (topic: string): Promise<string> => {
  if (!ai) {
    return "נא להגדיר מפתח API כדי לקבל טיפים.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `User asks about: ${topic}`,
      config: {
        systemInstruction: `
          את שרית אלטלף, מנהלת חשבונות בכירה וחשבת שכר עם ניסיון של מעל 20 שנה בחברות ענק (כמו אל-על, iDigital).
          המטרה שלך: לתת עצה פיננסית או חשבונאית חדה, מקצועית וקצרה לבעל/ת עסק.
          התחומים שלך: תזרים מזומנים, גבייה, סדר בניירת, עבודה מול רשויות, וייעול תהליכים כספיים.
          הטון שלך: מקצועי, סמכותי, שקול ואחראי.
          אורך התשובה: עד 3 משפטים. פרקטי בלבד.
          עני בעברית.
        `,
        temperature: 0.5,
      },
    });

    return response.text || "לא הצלחתי לייצר טיפ כרגע, נסה שוב מאוחר יותר.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "אופס, יש בעיה בתקשורת כרגע. נסה שוב מאוחר יותר.";
  }
};