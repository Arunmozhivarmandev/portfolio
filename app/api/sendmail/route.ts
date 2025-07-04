// /pages/api/sendMail.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'


export  async function POST(req: Request) {


    const { name, phone, message } = await req.json();

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // or your SMTP host
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER, // your email
                pass: process.env.EMAIL_PASS, // your app password (not actual password)
            },
        })

        await transporter.sendMail({
            from: `"${name}" <${phone}>`,
            to: process.env.EMAIL_TO, // your receiving email
            subject: 'New message from website',
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        })

        return NextResponse.json({
            message: "Mail sent successfully",
        });
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}
