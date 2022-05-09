import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'eaf99e97af2c52',
    pass: '53c772b8c0d2e2',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Alos Feedget <alos@mailinator.com>',
      to: 'Alex Rossi <alex@mailinator.com>',
      subject,
      html: body,
    });
  }
}
