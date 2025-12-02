# Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/akwaaba_car_rental

# JWT Secret (change this to a random string in production)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# SMTP Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@gmail.com

# Admin Configuration
ADMIN_EMAIL=admin@akwaabacarrental.com
ADMIN_PASSWORD=admin123
ADMIN_NAME=Admin User

# Public Contact Information
NEXT_PUBLIC_WHATSAPP_NUMBER=233XXXXXXXXX
NEXT_PUBLIC_PHONE=+233XXXXXXXXX
NEXT_PUBLIC_CONTACT_EMAIL=info@akwaabacarrental.com
NEXT_PUBLIC_LOCATION=Accra, Ghana

# Node Environment
NODE_ENV=development
```

## Configuration Details

### Database URL
Format: `postgresql://username:password@host:port/database_name`

Example:
- Local: `postgresql://postgres:password@localhost:5432/akwaaba_car_rental`
- Production: Use your managed database connection string

### JWT Secret
Generate a strong random string for production:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### SMTP Configuration

#### Gmail Setup:
1. Enable 2-Factor Authentication on your Google account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate an app password for "Mail"
4. Use that password in `SMTP_PASSWORD`

#### Other Providers:
- **SendGrid**: `smtp.sendgrid.net`, port 587
- **Mailgun**: `smtp.mailgun.org`, port 587
- **AWS SES**: Use your region's SMTP endpoint

### Admin Credentials
These are used to create the initial admin user. Change the password immediately after first login!

### Public Information
These values are displayed on the public website:
- WhatsApp number: Format without + (e.g., `233XXXXXXXXX`)
- Phone: Include country code (e.g., `+233XXXXXXXXX`)
- Contact email: Public-facing email address
- Location: Your business location

## Security Notes

⚠️ **Important**:
- Never commit `.env.local` to version control
- Use different credentials for development and production
- Change default admin password immediately
- Use strong, unique JWT secret in production
- Rotate secrets periodically

