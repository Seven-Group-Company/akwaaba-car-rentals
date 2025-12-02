import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export interface BookingEmailData {
  fullName: string;
  phoneNumber: string;
  email: string;
  carType: string;
  pickUpDate: string;
  dropOffDate: string;
  location: string;
  additionalNotes?: string;
  bookingId: number;
}

export async function sendBookingNotificationEmail(data: BookingEmailData) {
  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
    subject: `New Booking Request #${data.bookingId} - Akwaaba Car Rental`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #0284c7; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9fafb; padding: 20px; margin-top: 20px; }
            .detail-row { margin: 10px 0; padding: 10px; background-color: white; border-left: 3px solid #0284c7; }
            .label { font-weight: bold; color: #0284c7; }
            .footer { margin-top: 20px; padding: 20px; text-align: center; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Booking Request</h1>
            </div>
            <div class="content">
              <div class="detail-row">
                <span class="label">Booking ID:</span> #${data.bookingId}
              </div>
              <div class="detail-row">
                <span class="label">Full Name:</span> ${data.fullName}
              </div>
              <div class="detail-row">
                <span class="label">Phone Number:</span> ${data.phoneNumber}
              </div>
              <div class="detail-row">
                <span class="label">Email:</span> ${data.email}
              </div>
              <div class="detail-row">
                <span class="label">Car Type:</span> ${data.carType}
              </div>
              <div class="detail-row">
                <span class="label">Pick-up Date & Time:</span> ${data.pickUpDate}
              </div>
              <div class="detail-row">
                <span class="label">Drop-off Date & Time:</span> ${data.dropOffDate}
              </div>
              <div class="detail-row">
                <span class="label">Location:</span> ${data.location}
              </div>
              ${data.additionalNotes ? `
              <div class="detail-row">
                <span class="label">Additional Notes:</span> ${data.additionalNotes}
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>This is an automated notification from Akwaaba Car Rental System.</p>
              <p>Please log in to the admin panel to manage this booking.</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

