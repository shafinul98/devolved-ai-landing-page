import React from "react";
import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";
import Message from "../../../models/Message";

export async function POST(req: NextRequest, res: NextResponse) {
	const MONGODB_URI = process.env.MONGO_DB_URI as any

	let client;

	try {
		client = await mongoose.connect(MONGODB_URI);
		console.log("DB connected");
	} catch (error) {
		console.log("There was an error connection to the DB", error);
	}

	const data = await req.json();

	const { firstName, lastName, email, phoneNumber, message } = data;

	const newData = {
		...data,
		date: new Date(),
	};

	try {
		await Message.create(newData);
		return NextResponse.json(
			{ message: "Message sent" },
			{
				status: 201,
			}
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Error sending the message" },
			{
				status: 500,
			}
		);
	}
}