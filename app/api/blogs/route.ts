import mongoose from "mongoose";
import Blog from "../../../models/Blog";
import { NextResponse } from "next/server";

export async function POST(): Promise<Response> {
  const MONGODB_URI = process.env.MONGO_DB_URI as any;

  let client;

  try {
    client = await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.log("There was an error connection to the DB", error);
  }

  try {
    const blogs = (await Blog.find({})).reverse();

    if (blogs) {
      return NextResponse.json(
        { data: blogs },
        {
          status: 200,
        }
      );
    } else {
      return Response.json({ error: "No blogs found" }, { status: 404 });
    }
  } catch (error) {
    return Response.json(
      { message: "Error in retrieving blogs" },
      {
        status: 500,
      }
    );
  }
}
