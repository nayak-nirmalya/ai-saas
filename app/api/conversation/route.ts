import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) return new NextResponse("UnAuthorized", { status: 401 });

    if (!configuration.apiKey)
      return new NextResponse("OpenAI API Key Not Configured", { status: 500 });

    if (!messages)
      return new NextResponse("Messages Are Required", { status: 400 });

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages
    });

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.error("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
