'use client';

import { useState } from 'react';
import { CalendarCheck2, Users, Mail, Menu, X, Car } from 'lucide-react';

const stats = [
  { label: 'Total Bookings', value: '128', change: '+12% this week' },
  { label: 'Active Users', value: '54', change: '+5 new today' },
  { label: 'Pending Approvals', value: '7', change: 'Action required' },
];

type TabKey = 'bookings' | 'users' | 'emails' | 'fleet';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>('bookings');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100 flex">
      {/* Sidebar (desktop) */}
      <aside className="hidden md:flex w-64 flex-col border-r border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="px-6 py-5 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-lime-400/10 border border-lime-400/40 flex items-center justify-center">
              <span className="text-lg font-semibold text-lime-400">A</span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">Akwaaba Admin</p>
              <p className="text-xs text-slate-400">Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
              activeTab === 'bookings'
                ? 'bg-lime-400/10 text-lime-300 border border-lime-400/40'
                : 'text-slate-300 hover:bg-slate-900/70'
            }`}
          >
            <CalendarCheck2 className="h-4 w-4" />
            <span>Bookings</span>
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
              activeTab === 'users'
                ? 'bg-lime-400/10 text-lime-300 border border-lime-400/40'
                : 'text-slate-300 hover:bg-slate-900/70'
            }`}
          >
            <Users className="h-4 w-4" />
            <span>Users</span>
          </button>
          <button
            onClick={() => setActiveTab('emails')}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
              activeTab === 'emails'
                ? 'bg-lime-400/10 text-lime-300 border border-lime-400/40'
                : 'text-slate-300 hover:bg-slate-900/70'
            }`}
          >
            <Mail className="h-4 w-4" />
            <span>Email Alerts</span>
          </button>
          <button
            onClick={() => setActiveTab('fleet')}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
              activeTab === 'fleet'
                ? 'bg-lime-400/10 text-lime-300 border border-lime-400/40'
                : 'text-slate-300 hover:bg-slate-900/70'
            }`}
          >
            <Car className="h-4 w-4" />
            <span>Fleet Management</span>
          </button>
        </nav>

        <div className="px-4 py-4 border-t border-slate-800/80 text-xs text-slate-500">
          Signed in as <span className="text-slate-200 font-medium">Admin</span>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <div className="md:hidden fixed inset-x-0 top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-lime-400/10 border border-lime-400/40 flex items-center justify-center">
              <span className="text-lg font-semibold text-lime-400">A</span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">Akwaaba Admin</p>
              <p className="text-[11px] text-slate-400">Dashboard</p>
            </div>
          </div>
          <button
            className="inline-flex items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/80 p-2 text-slate-200 hover:bg-slate-800/80"
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {sidebarOpen && (
          <div className="bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/80 px-3 py-3 space-y-1">
            <button
              onClick={() => {
                setActiveTab('bookings');
                setSidebarOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                activeTab === 'bookings'
                  ? 'bg-lime-400/10 text-lime-300 border border-lime-400/40'
                  : 'text-slate-300 hover:bg-slate-900/70'
              }`}
            >
              <CalendarCheck2 className="h-4 w-4" />
              <span>Bookings</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('users');
                setSidebarOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                activeTab === 'users'
                  ? 'bg-lime-400/10 text-lime-300 border border-lime-400/40'
                  : 'text-slate-300 hover:bg-slate-900/70'
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Users</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('emails');
                setSidebarOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                activeTab === 'emails'
                  ? 'bg-lime-400/10 text-lime-300 border border-lime-400/40'
                  : 'text-slate-300 hover:bg-slate-900/70'
              }`}
            >
              <Mail className="h-4 w-4" />
              <span>Email Alerts</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('fleet');
                setSidebarOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                activeTab === 'fleet'
                  ? 'bg-lime-400/10 text-lime-300 border border-lime-400/40'
                  : 'text-slate-300 hover:bg-slate-900/70'
              }`}
            >
              <Car className="h-4 w-4" />
              <span>Fleet Management</span>
            </button>
          </div>
        )}
      </div>

      {/* Main content */}
      <main className="flex-1 flex flex-col md:ml-0 md:pl-0">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-8 pb-10 md:pb-12">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 mt-6 md:mt-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-50">
                Admin Dashboard
              </h1>
              <p className="mt-1 text-sm text-slate-400 max-w-xl">
                Monitor bookings, manage users, and stay on top of important email alerts for Akwaaba Car Rental.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 border border-emerald-500/30">
                ● All systems operational
              </span>
            </div>
          </header>

          {/* Stats */}
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-950/80 via-slate-950/60 to-slate-900/60 px-4 py-4 shadow-xl shadow-black/40"
              >
                <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-lime-400/5 via-transparent to-slate-900/0 pointer-events-none" />
                <div className="relative flex flex-col gap-1">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-semibold text-slate-50">{stat.value}</p>
                  <p className="text-[11px] font-medium text-lime-300/90">{stat.change}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Tab content */}
          <section className="rounded-2xl border border-slate-800/80 bg-slate-950/80 backdrop-blur-xl shadow-xl shadow-black/40 overflow-hidden">
            <div className="border-b border-slate-800/80 bg-slate-950/80 px-4 pt-3">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setActiveTab('bookings')}
                  className={`flex items-center gap-2 border-b-2 px-1 pb-2 text-xs font-medium tracking-wide uppercase ${
                    activeTab === 'bookings'
                      ? 'border-lime-400 text-lime-300'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <CalendarCheck2 className="h-3.5 w-3.5" />
                  <span>Bookings</span>
                </button>
                <button
                  onClick={() => setActiveTab('users')}
                  className={`flex items-center gap-2 border-b-2 px-1 pb-2 text-xs font-medium tracking-wide uppercase ${
                    activeTab === 'users'
                      ? 'border-lime-400 text-lime-300'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Users className="h-3.5 w-3.5" />
                  <span>Users</span>
                </button>
                <button
                  onClick={() => setActiveTab('emails')}
                  className={`flex items-center gap-2 border-b-2 px-1 pb-2 text-xs font-medium tracking-wide uppercase ${
                    activeTab === 'emails'
                      ? 'border-lime-400 text-lime-300'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Email Alerts</span>
                </button>
                <button
                  onClick={() => setActiveTab('fleet')}
                  className={`flex items-center gap-2 border-b-2 px-1 pb-2 text-xs font-medium tracking-wide uppercase ${
                    activeTab === 'fleet'
                      ? 'border-lime-400 text-lime-300'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Car className="h-3.5 w-3.5" />
                  <span>Fleet</span>
                </button>
              </div>
            </div>

            <div className="px-4 py-4 sm:px-6 sm:py-6">
              {activeTab === 'bookings' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h2 className="text-sm font-semibold tracking-tight text-slate-50">
                        Recent Bookings
                      </h2>
                      <p className="text-xs text-slate-400">
                        View and manage the latest reservations from customers.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button className="inline-flex items-center rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-100 hover:bg-slate-800/80">
                        Filter
                      </button>
                      <button className="inline-flex items-center rounded-xl border border-lime-400/40 bg-lime-400/10 px-3 py-1.5 text-xs font-medium text-lime-200 hover:bg-lime-400/20">
                        Export
                      </button>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 overflow-hidden">
                    <div className="grid grid-cols-4 gap-2 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 border-b border-slate-800/80">
                      <span>Customer</span>
                      <span>Vehicle</span>
                      <span>Date</span>
                      <span className="text-right">Status</span>
                    </div>
                    <div className="divide-y divide-slate-800/80">
                      {[
                        { name: 'Kwame Boateng', car: 'Toyota Corolla', date: 'Dec 3, 2025', status: 'Confirmed' },
                        { name: 'Ama Mensah', car: 'Hyundai Elantra', date: 'Dec 4, 2025', status: 'Pending' },
                        { name: 'Joseph Owusu', car: 'Kia Sportage', date: 'Dec 6, 2025', status: 'Completed' },
                      ].map((booking) => (
                        <div
                          key={booking.name + booking.date}
                          className="grid grid-cols-4 gap-2 px-3 py-2.5 text-xs text-slate-200"
                        >
                          <span className="truncate">{booking.name}</span>
                          <span className="truncate text-slate-300">{booking.car}</span>
                          <span className="truncate text-slate-400">{booking.date}</span>
                          <span className="truncate text-right">
                            <span
                              className={`inline-flex items-center justify-end rounded-full px-2 py-0.5 text-[10px] font-medium ${
                                booking.status === 'Confirmed'
                                  ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                                  : booking.status === 'Pending'
                                  ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                                  : 'bg-slate-500/10 text-slate-200 border border-slate-500/30'
                              }`}
                            >
                              {booking.status}
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'users' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h2 className="text-sm font-semibold tracking-tight text-slate-50">
                        User Management
                      </h2>
                      <p className="text-xs text-slate-400">
                        View verified users, manage access, and monitor account activity.
                      </p>
                    </div>
                    <button className="inline-flex items-center rounded-xl border border-lime-400/40 bg-lime-400/10 px-3 py-1.5 text-xs font-medium text-lime-200 hover:bg-lime-400/20">
                      Add New Admin
                    </button>
                  </div>

                  <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 overflow-hidden">
                    <div className="grid grid-cols-4 gap-2 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 border-b border-slate-800/80">
                      <span>Name</span>
                      <span>Email</span>
                      <span>Role</span>
                      <span className="text-right">Status</span>
                    </div>
                    <div className="divide-y divide-slate-800/80">
                      {[
                        { name: 'Admin User', email: 'admin@akwaaba.com', role: 'Admin', status: 'Active' },
                        { name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Verified' },
                        { name: 'Sarah Agyeman', email: 'sarah@example.com', role: 'User', status: 'Pending' },
                      ].map((user) => (
                        <div
                          key={user.email}
                          className="grid grid-cols-4 gap-2 px-3 py-2.5 text-xs text-slate-200"
                        >
                          <span className="truncate">{user.name}</span>
                          <span className="truncate text-slate-300">{user.email}</span>
                          <span className="truncate text-slate-400">{user.role}</span>
                          <span className="truncate text-right">
                            <span
                              className={`inline-flex items-center justify-end rounded-full px-2 py-0.5 text-[10px] font-medium ${
                                user.status === 'Active' || user.status === 'Verified'
                                  ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                                  : 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                              }`}
                            >
                              {user.status}
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'emails' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h2 className="text-sm font-semibold tracking-tight text-slate-50">
                        Email Alerts
                      </h2>
                      <p className="text-xs text-slate-400">
                        Monitor verification emails, booking notifications, and system alerts.
                      </p>
                    </div>
                    <button className="inline-flex items-center rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-100 hover:bg-slate-800/80">
                      Email Settings
                    </button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 space-y-3">
                      <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
                        Recent Email Activity
                      </h3>
                      <ul className="space-y-2">
                        {[
                          'Verification email sent to john@example.com',
                          'Password reset email sent to ama@example.com',
                          'Booking confirmation email sent to sarah@example.com',
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-slate-200"
                          >
                            <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-lime-400/80" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 space-y-3">
                      <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
                        Alert Rules
                      </h3>
                      <p className="text-xs text-slate-300">
                        Configure when Akwaaba should send you alerts about bookings, user
                        activity, and system issues.
                      </p>
                      <ul className="space-y-2 text-xs text-slate-200">
                        <li>• Notify admin for every new booking</li>
                        <li>• Alert when email delivery fails repeatedly</li>
                        <li>• Send daily summary of new users and bookings</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'fleet' && (
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h2 className="text-sm font-semibold tracking-tight text-slate-50">
                        Fleet Management
                      </h2>
                      <p className="text-xs text-slate-400 max-w-md">
                        Coming soon: centrally manage your entire vehicle fleet, maintenance schedules,
                        availability, and pricing for Akwaaba Car Rental.
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-lime-400/30 bg-gradient-to-br from-lime-500/10 via-slate-950/90 to-slate-950/100 px-5 py-6 sm:px-7 sm:py-8 shadow-[0_0_60px_rgba(190,242,100,0.15)]">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lime-400/10 blur-3xl" />
                    <div className="relative max-w-xl space-y-3">
                      <p className="inline-flex items-center rounded-full bg-slate-950/70 border border-lime-400/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-lime-200">
                        Coming Soon · Premium Feature
                      </p>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
                        Unlock powerful Fleet Management for Akwaaba
                      </h3>
                      <p className="text-sm text-lime-100/90">
                        Upgrade to <span className="font-semibold text-lime-300">Akwaaba Premium</span> to unlock
                        Fleet Management and many more advanced features, including detailed vehicle
                        analytics, maintenance reminders, and smart availability rules.
                      </p>
                      <ul className="mt-3 space-y-1.5 text-xs text-lime-100/90">
                        <li>• Central dashboard for all vehicles</li>
                        <li>• Maintenance & service tracking</li>
                        <li>• Dynamic pricing & availability controls</li>
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <button className="inline-flex items-center rounded-xl bg-lime-400 text-slate-950 px-4 py-1.5 text-xs font-semibold shadow-lg shadow-lime-400/30 hover:bg-lime-300">
                          Upgrade to Premium
                        </button>
                        <button className="inline-flex items-center rounded-xl border border-lime-400/40 bg-slate-950/70 px-4 py-1.5 text-xs font-medium text-lime-200 hover:bg-slate-900/90">
                          Learn more about Premium
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


