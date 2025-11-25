// src/app/api/send-appointment-email/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const RECIPIENT_EMAIL = 'wedigitalmonk@gmail.com';

export async function POST(request) {
  try {
    const formData = await request.json();

    const email = await resend.emails.send({
      from: 'Appointment Form <onboarding@nazmulsamrat.com>',
      to: [RECIPIENT_EMAIL],
      replyTo: formData.email,
      subject: `NEW Appointment Request from ${formData.name} for ${formData.service}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    });

    console.log('Resend API Response:', email);

    return new Response(JSON.stringify({ success: true, data: email }), {
      status: 200,
    });
  } catch (error) {
    console.error('Resend API Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Failed to send email',
      }),
      { status: 500 }
    );
  }
}
