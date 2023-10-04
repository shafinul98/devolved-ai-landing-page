import mongoose from "mongoose";
import Blog from "../../../../models/Blog";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const MONGODB_URI = process.env.MONGO_DB_URI as any;

  let client;

  const slug = params.slug;

  try {
    client = await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.log("There was an error connection to the DB", error);
  }

  try {
    const blog = await Blog.findOne({ slug: slug });

    if (blog) {
      return NextResponse.json(
        { data: blog },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json({ error: "No blog found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error in retrieving blog" },
      {
        status: 500,
      }
    );
  }
}
