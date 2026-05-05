import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_KEY,
  },
})

export async function POST(req: NextRequest) {
  const { firstname, lastname, email, phone, message } = await req.json()

  if (!firstname || !email) {
    return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
  }

  try {
    await transporter.sendMail({
      from: '"Fluo Coaching" <floriane@fluocoaching.com>',
      to: 'floriane@fluocoaching.com',
      replyTo: email,
      subject: `Nouveau message de ${firstname} ${lastname || ''}`.trim(),
      text: [
        `Prénom : ${firstname}`,
        `Nom : ${lastname || '—'}`,
        `Email : ${email}`,
        phone ? `Téléphone : ${phone}` : null,
        '',
        `Message :`,
        message || '(aucun message)',
      ]
        .filter((l) => l !== null)
        .join('\n'),
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Erreur envoi e-mail:', err)
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 })
  }
}
