// import { EmailTemplate } from '../../components/EmailTemplate';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.MY_EMAIL;
export async function POST(req: NextRequest) {
  const { email, subject, message } = await req.json();
  const subjectLineBuilder = `${email} - ${subject}`;

  console.log('server is attempting to send email');

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [toEmail!],
      subject: subjectLineBuilder,
      text: message,
    });
    console.log('server sent the email');
    return NextResponse.json(data);
  } catch (error) {
    console.log('sorry the server had a problem');
    return NextResponse.json({ error });
  }
}
/*

import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email, subject, message } = await req.json();
  const subjectLineBuilder = `${email} - ${subject}`;

  console.log('server is attempting to send email');

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delanoigbinoba@gmail.com'],
      subject: subjectLineBuilder,
      text: message,
    });
    console.log('server sent the email');
    return NextResponse.json(data);
  } catch (error) {
    console.log('sorry the server had a problem');
    return NextResponse.json({ error });
  }
}
*/
