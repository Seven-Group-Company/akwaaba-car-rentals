# Project Structure

This document explains the organization of the Akwaaba Car Rental codebase.

```
akwaaba-car-rental/
├── app/                          # Next.js App Router directory
│   ├── api/                      # API routes
│   │   ├── admin/                # Admin API endpoints
│   │   │   ├── login/            # Admin login endpoint
│   │   │   ├── logout/           # Admin logout endpoint
│   │   │   ├── stats/            # Dashboard statistics
│   │   │   └── export/           # CSV export endpoint
│   │   └── bookings/             # Booking API endpoints
│   │       ├── route.ts          # GET all, POST new booking
│   │       └── [id]/             # Individual booking operations
│   │           └── route.ts      # GET, PATCH booking by ID
│   ├── admin/                    # Admin panel pages
│   │   ├── login/                # Admin login page
│   │   ├── dashboard/            # Admin dashboard
│   │   └── bookings/             # Booking management
│   │       ├── page.tsx          # List all bookings
│   │       └── [id]/             # Individual booking details
│   │           └── page.tsx      # Booking detail page
│   ├── about/                    # About Us page
│   ├── booking/                  # Public booking pages
│   │   ├── page.tsx              # Booking form
│   │   └── success/              # Booking success page
│   ├── contact/                  # Contact page
│   ├── fleet/                    # Fleet/vehicles page
│   ├── terms/                    # Terms & Conditions page
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/                   # Reusable React components
│   ├── Footer.tsx                # Site footer
│   ├── Navbar.tsx                # Navigation bar
│   └── WhatsAppButton.tsx        # WhatsApp chat button
├── lib/                          # Utility libraries
│   ├── auth.ts                   # Authentication functions
│   ├── db.ts                     # Database connection
│   ├── db-schema.sql             # Database schema
│   └── email.ts                  # Email service
├── scripts/                      # Database scripts
│   ├── migrate.js                # Database migration script
│   └── seed.js                   # Database seeding script
├── middleware.ts                 # Next.js middleware (route protection)
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── next.config.js                # Next.js configuration
├── postcss.config.js             # PostCSS configuration
├── README.md                     # Main documentation
├── QUICK_START.md                # Quick start guide
├── DEPLOYMENT.md                 # Deployment instructions
├── ENV_SETUP.md                  # Environment variables guide
└── .gitignore                    # Git ignore rules
```

## Key Directories

### `/app`
Next.js 14 App Router directory. All pages and API routes are defined here.

**Public Pages:**
- `page.tsx` - Homepage
- `fleet/page.tsx` - Vehicle fleet display
- `booking/page.tsx` - Booking form
- `about/page.tsx` - About Us
- `contact/page.tsx` - Contact page
- `terms/page.tsx` - Terms & Conditions

**Admin Pages:**
- `admin/login/page.tsx` - Admin authentication
- `admin/dashboard/page.tsx` - Dashboard with statistics
- `admin/bookings/page.tsx` - Booking list view
- `admin/bookings/[id]/page.tsx` - Booking details

**API Routes:**
- `api/bookings/` - Booking CRUD operations
- `api/admin/` - Admin authentication and management

### `/components`
Reusable React components used across the application.

### `/lib`
Core utility functions:
- `auth.ts` - JWT authentication, password hashing
- `db.ts` - PostgreSQL connection pool
- `email.ts` - SMTP email service
- `db-schema.sql` - Database table definitions

### `/scripts`
Node.js scripts for database management:
- `migrate.js` - Creates database tables
- `seed.js` - Seeds initial data (admin user, fleet)

## File Naming Conventions

- **Pages**: `page.tsx` (App Router convention)
- **API Routes**: `route.ts` (App Router convention)
- **Components**: PascalCase (e.g., `Navbar.tsx`)
- **Utilities**: camelCase (e.g., `auth.ts`)
- **Config**: kebab-case or specific names (e.g., `next.config.js`)

## Data Flow

### Booking Submission Flow:
1. User fills form on `/booking`
2. Form submits to `POST /api/bookings`
3. API creates database record
4. API sends email notification
5. User sees success page
6. Admin receives email and can view in dashboard

### Admin Authentication Flow:
1. Admin visits `/admin/login`
2. Submits credentials to `POST /api/admin/login`
3. Server validates and returns JWT token
4. Token stored in HTTP-only cookie
5. Middleware protects admin routes
6. Admin accesses dashboard and bookings

## Database Schema

See `lib/db-schema.sql` for complete schema. Main tables:

- **admins** - Admin user accounts
- **bookings** - Customer booking requests
- **fleet** - Available vehicles/services

## Environment Variables

All environment variables are documented in `ENV_SETUP.md`. Key variables:

- `DATABASE_URL` - PostgreSQL connection
- `JWT_SECRET` - Authentication secret
- `SMTP_*` - Email configuration
- `ADMIN_*` - Admin credentials
- `NEXT_PUBLIC_*` - Public-facing config

## Adding New Features

### Add a New Page:
1. Create `app/your-page/page.tsx`
2. Add navigation link in `components/Navbar.tsx`
3. Add metadata export if needed

### Add a New API Endpoint:
1. Create `app/api/your-endpoint/route.ts`
2. Export `GET`, `POST`, `PATCH`, or `DELETE` functions
3. Use `lib/db.ts` for database access

### Add a New Component:
1. Create file in `components/`
2. Export default component
3. Import where needed

## Security Considerations

- Admin routes protected by middleware
- JWT tokens in HTTP-only cookies
- Password hashing with bcrypt
- SQL injection prevention via parameterized queries
- Environment variables for sensitive data

## Performance

- Server-side rendering for SEO
- API routes for data operations
- Database connection pooling
- Optimized images (when added)
- Tailwind CSS for minimal bundle size

---

For more details, see the main `README.md` file.

