import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // In production, integrate with Nodemailer or your email service
    // For now, we'll simulate success - add your SMTP config in .env
    const emailConfig = process.env.SMTP_HOST
    if (emailConfig) {
      // TODO: Send email via Nodemailer when SMTP is configured
      // const transporter = nodemailer.createTransport({...})
      // await transporter.sendMail({...})
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
