import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0
import { tryCatch } from "./tryCatch";

type MailgunResponse = {
  id?: string;
  message?: string;
  status: number;
};

export async function sendMailgun(to: string, subject: string, text: string) {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "API_KEY",
    // When you have an EU-domain, you must specify the endpoint:
    // url: "https://api.eu.mailgun.net"
  });

  return tryCatch<MailgunResponse>(
    mg.messages.create(process.env.MAILGUN_DOMAIN || "sandboxa0a8ce324f83402499f48e407cd82cf7.mailgun.org", {
      from: `${process.env.EMAIL_NAME} <${process.env.EMAIL}>`,
      to: [to],
      subject: subject,
      text: text,
    })
  );
}