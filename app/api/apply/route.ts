import { NextResponse } from "next/server";

// This route must run on the Node.js runtime so we can read the uploaded
// resume file into a Buffer before base64-encoding it for Resend.
export const runtime = "nodejs";

const TO_EMAIL = process.env.APPLICATIONS_TO_EMAIL || "webloom.in00@gmail.com";
// Resend's sandbox sender. Works out of the box with no domain setup, but
// only delivers to the email address tied to your Resend account until you
// verify a custom domain. See README for details.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "PostHire Careers <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = (formData.get("fullName") as string) || "";
    const email = (formData.get("email") as string) || "";
    const linkedin = (formData.get("linkedin") as string) || "";
    const portfolio = (formData.get("portfolio") as string) || "";
    const role = (formData.get("role") as string) || "";
    const hours = (formData.get("hours") as string) || "";
    const motivation = (formData.get("motivation") as string) || "";
    const resume = formData.get("resume") as File | null;

    if (!fullName || !email || !motivation) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return NextResponse.json(
        { ok: false, error: "Email is not configured on the server." },
        { status: 500 }
      );
    }

    const attachments = [];
    if (resume && resume.size > 0) {
      const arrayBuffer = await resume.arrayBuffer();
      attachments.push({
        filename: resume.name || "resume",
        content: Buffer.from(arrayBuffer).toString("base64"),
      });
    }

    const html = `
      <h2>New PostHire Application</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
        <tr><td><strong>Full name</strong></td><td>${escapeHtml(fullName)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>LinkedIn</strong></td><td>${escapeHtml(linkedin) || "—"}</td></tr>
        <tr><td><strong>Portfolio / GitHub</strong></td><td>${escapeHtml(portfolio) || "—"}</td></tr>
        <tr><td><strong>Role applying for</strong></td><td>${escapeHtml(role) || "—"}</td></tr>
        <tr><td><strong>Hours per week</strong></td><td>${escapeHtml(hours) || "—"}</td></tr>
        <tr><td valign="top"><strong>Why they want to join</strong></td><td>${escapeHtml(motivation).replace(/\n/g, "<br/>")}</td></tr>
        <tr><td><strong>Resume attached</strong></td><td>${attachments.length ? "Yes (see attachment)" : "No file uploaded"}</td></tr>
      </table>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New application: ${fullName}${role ? ` — ${role}` : ""}`,
        html,
        attachments,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text().catch(() => "");
      console.error("Resend API error:", resendRes.status, errBody);
      return NextResponse.json(
        { ok: false, error: "Something went wrong while sending your application." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send application email:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong while sending your application." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
