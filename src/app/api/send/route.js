// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
const resend = new Resend("re_aanrsSPN_4Bx7kJGXJNT6pd3hBvXcDAa9");
export async function POST(req, res){
    const body =  await req.json();
    const {email , subject , message } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: "Pallo <onboarding@resend.dev>",
      to: ['mahnooradnan479@gmail.com',email],
      subject: "hello world ",
      react: <>
      <h1>{subject}</h1>
      <p>Thank You ForContacting Us!</p>
      <p>New Message Sumbitted!</p>
      <p>{message}</p>

      </>
    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
