import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, type } = await req.json()

    const isDemo = type === "demo"
    const subject = isDemo
      ? `Demo Request: ${name} from ${company}`
      : `New BookOS Interest: ${name}`

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
        <p>This user has requested access to BookOS.</p>
      `

    await resend.emails.send({
      from: "BookOS <noreply@updates.bookos.xyz>",
      to: "info@tws.dev",
      subject,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
