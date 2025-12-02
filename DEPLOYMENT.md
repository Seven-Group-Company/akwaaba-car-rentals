# Deployment Guide - Akwaaba Car Rental

This guide will help you deploy the Akwaaba Car Rental system to production.

## Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Database migrated and seeded
- [ ] Default admin password changed
- [ ] SMTP email configured and tested
- [ ] Public contact information updated
- [ ] WhatsApp number configured
- [ ] Test booking flow end-to-end
- [ ] Test admin login and functionality

## Deployment Options

### Option 1: Vercel (Recommended for Next.js)

Vercel is the easiest way to deploy Next.js applications.

#### Steps:

1. **Prepare your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**
   - Create a new repository on GitHub
   - Push your code:
     ```bash
     git remote add origin https://github.com/yourusername/akwaaba-car-rental.git
     git push -u origin main
     ```

3. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables (see below)
   - Deploy

4. **Set up Database**
   - Use Vercel Postgres (recommended) or external PostgreSQL
   - Add `DATABASE_URL` to Vercel environment variables
   - Run migrations: Use Vercel CLI or connect directly

5. **Run Database Migrations**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Link project
   vercel link
   
   # Run migrations (you may need to set DATABASE_URL)
   npm run db:migrate
   npm run db:seed
   ```

#### Vercel Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

```
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@gmail.com
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=secure-password
ADMIN_NAME=Admin User
NEXT_PUBLIC_WHATSAPP_NUMBER=233XXXXXXXXX
NEXT_PUBLIC_PHONE=+233XXXXXXXXX
NEXT_PUBLIC_CONTACT_EMAIL=info@example.com
NEXT_PUBLIC_LOCATION=Accra, Ghana
NODE_ENV=production
```

### Option 2: Railway

Railway provides easy PostgreSQL and deployment.

1. **Sign up** at [railway.app](https://railway.app)
2. **Create New Project**
3. **Add PostgreSQL** service
4. **Add Node.js** service from GitHub
5. **Set environment variables** (same as above)
6. **Deploy**

### Option 3: DigitalOcean App Platform

1. **Create account** at [digitalocean.com](https://digitalocean.com)
2. **Create App** from GitHub
3. **Add PostgreSQL** database
4. **Configure environment variables**
5. **Deploy**

### Option 4: Self-Hosted (VPS)

For VPS deployment (Ubuntu/Debian):

1. **Install Node.js and PostgreSQL**
   ```bash
   # Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # PostgreSQL
   sudo apt-get install postgresql postgresql-contrib
   ```

2. **Set up PostgreSQL**
   ```bash
   sudo -u postgres psql
   CREATE DATABASE akwaaba_car_rental;
   CREATE USER akwaaba_user WITH PASSWORD 'your-password';
   GRANT ALL PRIVILEGES ON DATABASE akwaaba_car_rental TO akwaaba_user;
   \q
   ```

3. **Clone and deploy**
   ```bash
   git clone your-repo-url
   cd akwaaba-car-rental
   npm install
   npm run build
   ```

4. **Use PM2 for process management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "akwaaba" -- start
   pm2 save
   pm2 startup
   ```

5. **Set up Nginx reverse proxy**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Set up SSL with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## Database Setup for Production

### Using Managed PostgreSQL

**Vercel Postgres:**
- Add Postgres addon in Vercel dashboard
- Connection string automatically added to `DATABASE_URL`

**Supabase:**
- Create project at [supabase.com](https://supabase.com)
- Get connection string from Settings → Database
- Add to environment variables

**Railway Postgres:**
- Add PostgreSQL service
- Connection string in service variables

### Running Migrations in Production

```bash
# Set DATABASE_URL
export DATABASE_URL=your-production-database-url

# Run migrations
npm run db:migrate

# Seed initial data
npm run db:seed
```

## Post-Deployment Steps

1. **Verify Deployment**
   - Visit your production URL
   - Test public pages
   - Test booking form

2. **Admin Access**
   - Go to `/admin/login`
   - Login with seeded admin credentials
   - **Immediately change the password**

3. **Test Email Notifications**
   - Submit a test booking
   - Verify admin receives email
   - Check spam folder if needed

4. **Configure Domain (if applicable)**
   - Add custom domain in hosting platform
   - Update DNS records
   - Wait for propagation

5. **Set up Monitoring**
   - Enable error tracking (Sentry, etc.)
   - Set up uptime monitoring
   - Configure backup for database

## Security Hardening

1. **Change Default Credentials**
   - Admin email and password
   - Database passwords
   - JWT secret

2. **Enable HTTPS**
   - Most platforms do this automatically
   - Verify SSL certificate is valid

3. **Database Security**
   - Use strong passwords
   - Enable SSL connections
   - Restrict database access

4. **Environment Variables**
   - Never commit `.env.local`
   - Use platform secrets management
   - Rotate secrets periodically

## Backup Strategy

### Database Backups

**Automated Backups:**
- Most managed PostgreSQL services offer automated backups
- Configure backup retention policy

**Manual Backup:**
```bash
pg_dump DATABASE_URL > backup.sql
```

**Restore:**
```bash
psql DATABASE_URL < backup.sql
```

## Monitoring and Maintenance

1. **Error Tracking**
   - Set up Sentry or similar
   - Monitor application errors

2. **Performance Monitoring**
   - Use Vercel Analytics
   - Monitor database performance

3. **Regular Updates**
   - Keep dependencies updated
   - Security patches
   - Feature updates

## Troubleshooting Production Issues

### Database Connection Errors
- Verify `DATABASE_URL` is correct
- Check database is accessible
- Verify SSL settings

### Email Not Working
- Check SMTP credentials
- Verify firewall allows SMTP ports
- Test with different email provider

### Build Errors
- Check Node.js version (18+)
- Verify all environment variables set
- Check build logs

### Performance Issues
- Enable caching
- Optimize images
- Database query optimization
- Use CDN for static assets

## Support Resources

- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- PostgreSQL Docs: [postgresql.org/docs](https://www.postgresql.org/docs)

---

**Important**: Always test in a staging environment before deploying to production!

