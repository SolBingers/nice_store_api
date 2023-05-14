import nodemailer, { TransportOptions } from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'nice.shop.solbingers@gmail.com', // generated ethereal user
    pass: 'npqftkmnpgpokbnh', // generated ethereal password
  },
} as TransportOptions);

interface SendParams {
  email: string,
  subject: string,
  html: string
}

export function send({ email, subject, html }: SendParams) {
  return transporter.sendMail({
    from: 'Nice Shop',
    to: email,
    subject,
    text: '',
    html
  });
}

export function sendActivationLink(email: string, token: string) {
  const link = `https://solbingers.github.io/nice_store/activate/${token}`;
  return send({
    email,
    subject: 'Account activation',
    html: `
      <h1>Account activation</h1>
      <a href="${link}">${link}</a>
    `
  });
}
