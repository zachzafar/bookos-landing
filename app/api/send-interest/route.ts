import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, type } = await req.json()

    const isDemo = type === "demo"
    const subject = isDemo
      ? `Demo Request: ${name} from ${company}`
      : `New BookOS Interest: ${name} from ${company}`

    const html = isDemo
      ? `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p>This user has requested a demo of BookOS.</p>
      `
      : `
        <h2>New Waitlist Signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p>This user has requested access to BookOS.</p>
      `

    // Send notification to team
    await resend.emails.send({
      from: "BookOS <noreply@updates.bookos.xyz>",
      to: "info@tws.dev",
      subject,
      html,
    })

    // Send confirmation to user
    const userSubject = isDemo
      ? "Thanks for requesting a demo of BookOS"
      : "Thanks for your interest in BookOS"

    const userHtml = isDemo
      ? `
        <h2>Thanks for requesting a demo, ${name}!</h2>
        <p>We've received your demo request and one of our team members will be in touch within 1-2 business days to schedule a personalized walkthrough of BookOS.</p>
        <p>In the meantime, if you have any questions, feel free to reply to this email.</p>
        <br/>
        <p>Best regards,</p>
        <p>The BookOS Team</p>
      `
      : `
        <h2>Thanks for your interest, ${name}!</h2>
        <p>We've added you to the BookOS waitlist. We're excited to have you on board and will notify you as soon as your account is ready.</p>
        <p>If you have any questions, feel free to reply to this email.</p>
        <br/>
        <p>Best regards,</p>
        <p>The BookOS Team</p>
      `

    await resend.emails.send({
      from: "BookOS <noreply@updates.bookos.xyz>",
      to: email,
      subject: userSubject,
      html: userHtml,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
