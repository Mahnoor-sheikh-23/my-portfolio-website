import { NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend("re_aanrsSPN_4Bx7kJGXJNT6pd3hBvXcDAa9");
export async function POST(req: Request) {
  const body = await req.json();
  const { email, subject, message } = body;
  if (!email || !subject || !message) {
    return NextResponse.json({ error: "Missing required Property" }, { status: 400 })
  } else {

    try {
      const { data, error } = await resend.emails.send({
        from: `${email} <onboarding@resend.dev>`,
        to: ['mahnooradnan479@gmail.com'],
        replyTo:email , 
        subject: subject,
        html: `
        <h1>${subject}</h1>
        <p>${message}</p>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p> 
      `,
      });

      if (error) {
        // Return error response
        return NextResponse.json({ error }, { status: 500 });
      }
      return NextResponse.json(data)
    } catch (error) {
      // Catch any unexpected errors
      return NextResponse.json({ error }, { status: 500 })
    }
  }

}
