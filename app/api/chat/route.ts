import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  console.log("Loaded OPENAI_API_KEY:", apiKey ? "present" : "missing");
  try {
    const { messages } = await req.json()
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 })
    }

    if (!apiKey) {
      return NextResponse.json({ error: "Gemini API key not set" }, { status: 500 })
    }



    // Prepare messages for Gemini API
    const geminiMessages = messages.map((msg: any) => ({
      role: msg.sender === "user" ? "user" : "model",
      parts: [{ text: msg.message }],
    }))

    const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: geminiMessages,
        generationConfig: {
          maxOutputTokens: 300,
          temperature: 0.7,
        },
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error("Gemini API error:", error)
      return NextResponse.json({ error: error.error?.message || "Gemini API error" }, { status: 500 })
    }

    const data = await response.json()
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "Sorry, I couldn't generate a response."
    return NextResponse.json({ reply })
  } catch (err: any) {
    console.error("API route error:", err)
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 })
  }
}
