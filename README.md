# Akwaaba Car Rental - Complete Booking Management System

A comprehensive car rental service website and booking management system built with Next.js, TypeScript, Tailwind CSS, PostgreSQL, and SMTP email integration.

## Features

### Public-Facing Website
- **Home Page**: Modern landing page with company introduction and services
- **Fleet Page**: Display available vehicles with images, pricing, and descriptions
- **Booking Page**: Simple booking request form with validation
- **About Us Page**: Company story, mission, and core values
- **Contact Page**: Contact form and multiple communication channels
- **Terms & Conditions Page**: Rental policies and requirements
- **WhatsApp Integration**: Floating chat button for direct communication
- **SEO Optimized**: Meta tags, clean URLs, and fast loading

### Admin Management Panel
- **Secure Authentication**: JWT-based admin login system
- **Dashboard**: Statistics overview (total bookings, pending, confirmed, completed, cancelled)
- **Booking Management**: View all bookings with filtering by status
- **Status Updates**: Change booking status (Pending → Confirmed → Completed → Cancelled)
- **Booking Details**: Detailed view of individual bookings
- **Email Notifications**: Automatic email alerts for new booking submissions
- **CSV Export**: Export all bookings to CSV/Excel format

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **Email**: Nodemailer (SMTP)
- **Authentication**: JWT (JSON Web Tokens)
- **UI Components**: Lucide React Icons
- **Notifications**: React Hot Toast

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18+ and npm/yarn
- PostgreSQL database
- SMTP email account (Gmail, SendGrid, etc.)

## Installation

1. **Clone or download the project**
   ```bash
   cd "untitled folder"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and fill in your configuration:
   - Database connection string
   - SMTP email settings
   - Admin credentials
   - Public contact information
   - JWT secret key

4. **Set up the database**
   ```bash
   # Run migrations to create tables
   npm run db:migrate
   
   # Seed initial data (admin user and fleet)
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

### Required Variables

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# JWT Secret (use a strong random string)
JWT_SECRET=your-secret-key

# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@gmail.com

# Admin Account
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=secure-password
ADMIN_NAME=Admin User

# Public Information
NEXT_PUBLIC_WHATSAPP_NUMBER=233XXXXXXXXX
NEXT_PUBLIC_PHONE=+233XXXXXXXXX
NEXT_PUBLIC_CONTACT_EMAIL=info@example.com
NEXT_PUBLIC_LOCATION=Your City, Country
```

### Gmail SMTP Setup

If using Gmail, you'll need to:
1. Enable 2-Factor Authentication
2. Generate an App Password: [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Use the app password in `SMTP_PASSWORD`

## Database Schema

The system uses the following main tables:

- **admins**: Admin user accounts
- **bookings**: Customer booking requests
- **fleet**: Available vehicles/services

See `lib/db-schema.sql` for the complete schema.

## Project Structure

```
├── app/
│   ├── api/              # API routes
│   │   ├── admin/        # Admin endpoints
│   │   └── bookings/     # Booking endpoints
│   ├── admin/            # Admin panel pages
│   ├── booking/          # Booking pages
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── fleet/            # Fleet page
│   ├── terms/            # Terms page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── WhatsAppButton.tsx
├── lib/                  # Utility functions
│   ├── auth.ts           # Authentication
│   ├── db.ts             # Database connection
│   ├── db-schema.sql     # Database schema
│   └── email.ts          # Email service
├── scripts/              # Database scripts
│   ├── migrate.js
│   └── seed.js
└── middleware.ts         # Route protection
```

## Usage

### Admin Access

1. Default admin credentials (after seeding):
   - Email: `admin@akwaabacarrental.com` (or your `ADMIN_EMAIL`)
   - Password: `admin123` (or your `ADMIN_PASSWORD`)

2. Access admin panel: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

3. **Important**: Change the default password after first login!

### Booking Flow

1. Customer visits the website and navigates to the Booking page
2. Fills out the booking form with all required details
3. Submits the form
4. System creates a booking record with "pending" status
5. Admin receives an email notification
6. Admin can view, confirm, or manage the booking from the dashboard

### Managing Bookings

1. Log in to the admin panel
2. View all bookings on the Bookings page
3. Filter by status (Pending, Confirmed, Completed, Cancelled)
4. Click "View" to see booking details
5. Update status as needed
6. Export bookings to CSV if needed

## Deployment

### Vercel Deployment (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Database Setup (Production)

For production, use a managed PostgreSQL service:
- **Vercel Postgres**
- **Supabase**
- **Railway**
- **AWS RDS**
- **Heroku Postgres**

Update `DATABASE_URL` in your production environment.

### Environment Variables for Production

Make sure to set all environment variables in your hosting platform:
- Use strong, unique values for `JWT_SECRET`
- Use production SMTP credentials
- Update public contact information
- Set `NODE_ENV=production`

## Security Considerations

1. **Change Default Admin Password**: Immediately after first deployment
2. **Use Strong JWT Secret**: Generate a random, secure string
3. **Secure Database**: Use connection pooling and SSL in production
4. **Environment Variables**: Never commit `.env.local` to version control
5. **HTTPS**: Always use HTTPS in production
6. **Rate Limiting**: Consider adding rate limiting for API endpoints

## Customization

### Styling
- Edit `tailwind.config.ts` to customize colors and theme
- Modify component files in `components/` directory

### Email Templates
- Edit email HTML in `lib/email.ts`

### Fleet Data
- Update fleet items in `app/fleet/page.tsx` or fetch from database
- Add fleet management to admin panel if needed

## Troubleshooting

### Database Connection Issues
- Verify `DATABASE_URL` is correct
- Check PostgreSQL is running
- Ensure database exists

### Email Not Sending
- Verify SMTP credentials
- Check spam folder
- For Gmail, ensure App Password is used (not regular password)
- Check SMTP port and security settings

### Admin Login Not Working
- Run `npm run db:seed` to create admin user
- Check JWT_SECRET is set
- Verify database connection

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review environment variables
3. Check database connection
4. Verify all dependencies are installed

## License

This project is proprietary software for Akwaaba Car Rental.

## Credits

Built with Next.js, TypeScript, and Tailwind CSS.

---

**Note**: This is a complete, production-ready system. Make sure to:
- Change all default passwords
- Use secure environment variables
- Test thoroughly before going live
- Set up proper backup procedures for your database

