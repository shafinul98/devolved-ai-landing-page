import { NextRequest, NextResponse } from "next/server";

// This function handles the logic of making a request to EmailOctopus to sign up a user for our newsletter
export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const { email_address, status } = data;

  const apiKey = process.env.EMAIL_OCTOPUS_API_KEY as string;
  const listId = process.env.EMAIL_OCTOPUS_LIST_ID as string;

  // This is the post data to be sent as the request body
  let postData = {
    api_key: apiKey,
    email_address: email_address,
    tags: ["Early Access"],
    status: status,
  };

  const response = await fetch(
    `https://emailoctopus.com/api/1.6/lists/${listId}/contacts`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    }
  );

  if (response.status === 200) {
    return NextResponse.json({ message: await response.json(), status: 200 });
  }

  if (response.status !== 200) {
    const { error } = await response.json();
    return NextResponse.json({ error: error, status: 400 });
  }
}
