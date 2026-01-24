// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { nama, email, subjek, pesan } = body;

//     // Validasi input
//     if (!nama || !email || !subjek || !pesan) {
//       return NextResponse.json(
//         { success: false, message: "Semua field harus diisi" },
//         { status: 400 }
//       );
//     }

//     // Validasi format email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         { success: false, message: "Format email tidak valid" },
//         { status: 400 }
//       );
//     }

//     // Konfigurasi nodemailer
//     // Gunakan environment variables untuk keamanan
//     // SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST || "smtp.gmail.com",
//       port: parseInt(process.env.SMTP_PORT || "587"),
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     // Konten email
//     const mailOptions = {
//       from: process.env.SMTP_USER, // Pengirim (harus sesuai dengan akun SMTP)
//       to: "kamunaragroup@gmail.com", // Penerima
//       replyTo: email, // Email user untuk reply
//       subject: `[Website Kamunara] ${subjek}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//           <div style="background: linear-gradient(135deg, #0bf58cff, #06d9a1ff); padding: 20px; border-radius: 10px 10px 0 0;">
//             <h1 style="color: white; margin: 0; text-align: center;">Pesan Baru dari Website Kamunara</h1>
//           </div>
//           <div style="background: #1f2937; padding: 30px; border-radius: 0 0 10px 10px;">
//             <table style="width: 100%; border-collapse: collapse;">
//               <tr>
//                 <td style="padding: 10px 0; border-bottom: 1px solid #374151; color: #9ca3af; width: 100px;">Nama</td>
//                 <td style="padding: 10px 0; border-bottom: 1px solid #374151; color: white; font-weight: bold;">${nama}</td>
//               </tr>
//               <tr>
//                 <td style="padding: 10px 0; border-bottom: 1px solid #374151; color: #9ca3af;">Email</td>
//                 <td style="padding: 10px 0; border-bottom: 1px solid #374151; color: white;"><a href="mailto:${email}" style="color: #fbbf24;">${email}</a></td>
//               </tr>
//               <tr>
//                 <td style="padding: 10px 0; border-bottom: 1px solid #374151; color: #9ca3af;">Subjek</td>
//                 <td style="padding: 10px 0; border-bottom: 1px solid #374151; color: white;">${subjek}</td>
//               </tr>
//               <tr>
//                 <td style="padding: 10px 0; color: #9ca3af; vertical-align: top;">Pesan</td>
//                 <td style="padding: 10px 0; color: white; line-height: 1.6;">${pesan.replace(/\n/g, '<br>')}</td>
//               </tr>
//             </table>
//             <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #374151; text-align: center;">
//               <p style="color: #6b7280; font-size: 12px; margin: 0;">Dikirim dari website kamunara.com pada ${new Date().toLocaleString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
//             </div>
//           </div>
//         </div>
//       `,
//       text: `
// Nama: ${nama}
// Email: ${email}
// Subjek: ${subjek}

// Pesan:
// ${pesan}

// ---
// Dikirim dari website kamunara.com pada ${new Date().toLocaleString('id-ID')}
//       `,
//     };

//     // Kirim email
//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({
//       success: true,
//       message: "Pesan berhasil dikirim! Kami akan segera merespons.",
//     });
//   } catch (error: unknown) {
//     console.error("Error sending email:", error);
    
//     const errorMessage = error instanceof Error ? error.message : "Gagal mengirim pesan. Silakan coba lagi.";
    
//     return NextResponse.json(
//       { success: false, message: errorMessage },
//       { status: 500 }
//     );
//   }
// }

