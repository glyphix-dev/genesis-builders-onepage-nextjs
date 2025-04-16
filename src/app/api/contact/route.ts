import { tryCatch } from "@/lib/tryCatch";
import { sendMailgun } from "@/lib/sendMailgun";

export async function POST(req: Request) {
  const data = await req.json();

  // Email to admins
  const adminEmailText = `
    Name: ${data.firstName} ${data.lastName}
    Email: ${data.email}
    Message: ${data.message}
    This is an automated email. This data is not stored. Please copy to your records.
    Please do not reply directly to this email.
  `;

  // Email to client
  const clientEmailText = `
    Hi ${data.firstName} ${data.lastName},

    Thank you for reaching out to us. We have received your message and will get back to you shortly.

    Best regards,
    Your Company Name
  `;

  // Send admin email
  const adminResult = await tryCatch(
    sendMailgun(
      process.env.ADMIN_EMAIL || "admin@example.com",
      "New Contact Form Submission",
      adminEmailText
    )
  );

  // Send client email
  const clientResult = await tryCatch(
    sendMailgun(
      data.email,
      "Thank you for contacting us",
      clientEmailText
    )
  );

  if (adminResult.error) {
    return new Response(JSON.stringify({ data, error: 'Admin message failed to send' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  if (clientResult.error) {
    return new Response(JSON.stringify({ data, error: 'Client message failed to send' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  console.log({ adminResult, clientResult });
  return new Response(JSON.stringify({ adminResult, clientResult, error: null }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}