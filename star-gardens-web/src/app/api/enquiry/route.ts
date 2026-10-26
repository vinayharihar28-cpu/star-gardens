import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, category, location, service, description } = body;

    // Field validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!email && !phone) {
      return NextResponse.json(
        { error: "Please provide either an email address or a phone number." },
        { status: 400 }
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address format." },
        { status: 400 }
      );
    }

    if (!category) {
      return NextResponse.json(
        { error: "Please select a project category." },
        { status: 400 }
      );
    }

    const newEnquiry = {
      id: `ENQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      receivedAt: new Date().toISOString(),
      name: name.trim(),
      email: email ? email.trim() : null,
      phone: phone ? phone.trim() : null,
      category,
      location: location ? location.trim() : "Not specified",
      service: service || "General Landscape Architecture",
      description: description ? description.trim() : "",
      status: "NEW_RECEIVED"
    };

    // Store in local JSON file for persistent inquiry retention
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "enquiries.json");

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let existing: any[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        existing = JSON.parse(fileContent);
      } catch (err) {
        existing = [];
      }
    }

    existing.unshift(newEnquiry);
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), "utf-8");

    return NextResponse.json(
      {
        success: true,
        message: "Your project brief has been received. Abhishek Suhas or a senior studio architect will review your site requirements and contact you within 24 business hours.",
        enquiryId: newEnquiry.id,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Enquiry API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your brief. Please reach out via WhatsApp or phone directly." },
      { status: 500 }
    );
  }
}
