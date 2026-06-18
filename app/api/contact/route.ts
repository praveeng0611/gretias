import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Escape user-supplied values before interpolating into the HTML email body
function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  // Initialise inside the handler so it only runs at request-time (not build-time)
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { name, email, company, service, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeCompany = company ? escapeHtml(company) : ''
    const safeService = service ? escapeHtml(service) : ''
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>')

    const { error } = await resend.emails.send({
      from: 'Gretias Contact Form <noreply@gretiasconsulting.com>',
      to: ['business@gretiasconsulting.com'],
      reply_to: email,
      subject: `New enquiry from ${safeName}${safeService ? ` — ${safeService}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #D97706, #EA580C); padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">New Contact Enquiry</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px;">Gretias Consulting — gretiasconsulting.com</p>
          </div>
          <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; width: 140px;">
                  <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8;">Name</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="color: #0f172a; font-size: 15px;">${safeName}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8;">Email</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <a href="mailto:${safeEmail}" style="color: #D97706; text-decoration: none; font-size: 15px;">${safeEmail}</a>
                </td>
              </tr>
              ${safeCompany ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8;">Company</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="color: #0f172a; font-size: 15px;">${safeCompany}</span>
                </td>
              </tr>` : ''}
              ${safeService ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8;">Service</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="color: #0f172a; font-size: 15px;">${safeService}</span>
                </td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px 0;" colspan="2">
                  <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8;">Message</span>
                  <p style="color: #0f172a; font-size: 15px; line-height: 1.7; margin: 10px 0 0; background: #fff; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">${safeMessage}</p>
                </td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
              <a href="mailto:${safeEmail}" style="display: inline-block; background: linear-gradient(135deg, #D97706, #EA580C); color: #fff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 14px;">Reply to ${safeName}</a>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
