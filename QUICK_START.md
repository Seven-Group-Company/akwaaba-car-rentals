# Quick Start Guide

Get the Akwaaba Car Rental system up and running in minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Environment Variables

1. Copy the example environment file:
   ```bash
   cp ENV_SETUP.md .env.local
   ```

2. Edit `.env.local` and fill in your configuration:
   - Database connection string
   - SMTP email settings
   - Admin credentials
   - Public contact information

See `ENV_SETUP.md` for detailed configuration instructions.

## Step 3: Set Up Database

1. **Create PostgreSQL database:**
   ```bash
   # Using psql
   createdb akwaaba_car_rental
   
   # Or using PostgreSQL client
   psql -U postgres
   CREATE DATABASE akwaaba_car_rental;
   ```

2. **Run migrations:**
   ```bash
   npm run db:migrate
   ```

3. **Seed initial data:**
   ```bash
   npm run db:seed
   ```

This creates:
- Database tables
- Default admin user
- Sample fleet data

## Step 4: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 5: Access Admin Panel

1. Go to [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. Login with:
   - Email: `admin@akwaabacarrental.com` (or your `ADMIN_EMAIL`)
   - Password: `admin123` (or your `ADMIN_PASSWORD`)
3. **Change the password immediately!**

## Testing the System

### Test Booking Flow:
1. Visit the homepage
2. Click "Book Now" or go to `/booking`
3. Fill out the booking form
4. Submit the form
5. Check admin email for notification
6. View booking in admin panel

### Test Admin Features:
1. Login to admin panel
2. View dashboard statistics
3. Go to Bookings page
4. Filter by status
5. View booking details
6. Update booking status
7. Export bookings to CSV

## Common Issues

### Database Connection Error
- Verify PostgreSQL is running
- Check `DATABASE_URL` is correct
- Ensure database exists

### Email Not Sending
- Verify SMTP credentials
- For Gmail, use App Password (not regular password)
- Check spam folder

### Admin Login Fails
- Run `npm run db:seed` again
- Check `JWT_SECRET` is set
- Verify database connection

## Next Steps

- Customize the website content
- Add your actual fleet images
- Configure production environment
- Set up domain and hosting
- See `DEPLOYMENT.md` for production deployment

## Need Help?

- Check `README.md` for detailed documentation
- Review `ENV_SETUP.md` for environment configuration
- See `DEPLOYMENT.md` for production setup

---

**Ready to go!** 🚀

