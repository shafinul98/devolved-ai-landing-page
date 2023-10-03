import Mailchimp from "@mailchimp/mailchimp_transactional";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const { email } = data;

  const api_key = process.env.MAILCHIMP_TRANSACTIONAL_EMAILS_API_KEY as string;

  const client = Mailchimp(api_key);

  try {
    const res = await client.messages.sendTemplate({
      template_name: "welcome-email",
      template_content: [],
      message: {
        html: "",
        text: "",
        subject:
          "Welcome Aboard, New Argonaut! 🚀 Your Journey Into Decentralized AI Begins Now",
        from_email: "no-reply@devolvedai.com",
        to: [
          {
            email: email,
            type: "to",
          },
        ],
        from_name: "Devolved AI",
      },
    });
    return NextResponse.json({ message: res, status: 200 });
  } catch (error) {
    return NextResponse.json({ error, status: 400 });
  }
}
