import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const { email_address, status } = data;

  console.log(email_address, status);

  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
  });

  try {
    const res = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID as string,
      {
        email_address,
        status,
        tags: ["early access"],
      }
    );
    return NextResponse.json({ message: res });
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}
