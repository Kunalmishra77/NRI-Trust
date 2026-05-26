import nodemailer from "nodemailer";

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

// SMTP Configuration for Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail
    pass: process.env.GMAIL_PASS, // Your App Password
  },
});

export async function sendEmail({ to, subject, html }: SendEmailParams) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error("Email skip: GMAIL credentials missing");
    return;
  }

  try {
    const info = await transporter.sendMail({
      from: `"NRI Trust Advisory" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      html,
    });
    console.log("Email sent: %s", info.messageId);
  } catch (error) {
    console.error("Email send failed:", error);
  }
}

// --- TEMPLATES ---

export function getUserTemplate(name: string, summary: string) {
  return `
    <div style="font-family: serif; color: #1A1A1A; padding: 40px; background-color: #FDFCFB;">
      <h1 style="color: #CFA052;">Confidential Advisory Brief</h1>
      <p>Dear ${name},</p>
      <p>Thank you for initiating your family protection assessment. Our intelligence engine has analyzed your structural readiness in India.</p>
      <div style="padding: 20px; border-left: 4px solid #CFA052; background: #FFF; margin: 20px 0;">
        <i>${summary.replace(/\n\n/g, '<br/><br/>').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')}</i>
      </div>
      <p>Your senior advisor is reviewing these findings and will contact you within 4 hours to discuss the next steps.</p>
      <p>Stay Protected,<br/><b>NRI Trust Advisory Team</b></p>
    </div>
  `;
}

export function getAdvisorTemplate(data: any) {
  return `
    <div style="font-family: sans-serif; padding: 30px; border: 2px solid #CFA052;">
      <h2 style="background: #0A0F0D; color: #FFF; padding: 10px;">NEW INTAKE: ${data.persona} ZONE</h2>
      <p><b>Client:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Country:</b> ${data.country}</p>
      <hr/>
      <h3>Summary Analysis:</h3>
      <p>${data.summary}</p>
      <hr/>
      <h3>Raw Logic Flags:</h3>
      <ul>${data.flags.map((f: string) => `<li>${f}</li>`).join('')}</ul>
    </div>
  `;
}
