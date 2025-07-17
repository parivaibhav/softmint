# SoftMint

A modern, full-stack business dashboard and website built with Next.js 15 (App Router), React 19, and Tailwind CSS. Features authentication, role-based admin/user dashboards, dynamic blog and services, and a beautiful, responsive UI.

---

## 🚀 Features

- **Next.js 15 App Router**: Modern file-based routing, layouts, and server/client component separation
- **React 19**: Latest React features and performance
- **Tailwind CSS 4**: Utility-first, fully responsive design
- **JWT Authentication**: Secure login, signup, and role-based access
- **Role-Based Dashboards**: Separate admin and user areas with custom layouts and redirects
- **Dynamic Routing**: Blogs and services use dynamic `[slug]` and `[id]` routes
- **Admin Dashboard**: Analytics widgets, tabbed interface, badges for unread items, and more
- **User Dashboard**: Personalized user area with access to services, blogs, and contact
- **Modern UI**: Pill-shaped tabs, animated loaders, sticky nav, and beautiful gradients
- **SEO Optimized**: Semantic HTML, meta tags, and fast performance
- **Accessibility**: Keyboard navigation and color contrast

---

## 🏗️ Project Structure

```
softmint/
├── public/                  # Static assets (images, icons, manifest)
├── src/
│   └── app/
│       ├── admin/           # Admin dashboard, blog/services/contact management
│       ├── user/            # User dashboard, services, blog, contact
│       ├── blog/            # Public blog pages
│       ├── services/        # Public services pages (dynamic [slug])
│       ├── components/      # Navbar, Footer, Loader, etc.
│       ├── api/             # API routes for auth, blogs, users, etc.
│       ├── globals.css      # Tailwind and global styles
│       ├── layout.js        # Root layout (with conditional Navbar)
│       ├── loading.js       # Global loading spinner
│       └── page.js          # Home page
├── lib/                     # Auth, database, and models
├── package.json             # Dependencies and scripts
├── next.config.mjs          # Next.js config
├── postcss.config.mjs       # PostCSS config
└── README.md                # This file
```

---

## 🔐 Authentication & Roles
- **JWT-based** authentication with secure cookies
- **Admin**: Access to `/admin` and all admin subpages (blog, services, contact, messages)
- **User**: Access to `/user` and all user subpages (services, blog, contact)
- **Public**: Access to home, about, blog, services, contact, etc.
- **Role-based redirects**: Unauthenticated users are redirected to `/signin`, users to `/user`, admins to `/admin`

---

## ✨ UI/UX Highlights
- **Modern, responsive design** with Tailwind CSS
- **Animated Loader**: Shown globally during page loads
- **Conditional Navbar**: Hidden on admin/user dashboards, visible everywhere else
- **Pill-shaped, scrollable tabs** in admin dashboard
- **Badges** for unread messages/contacts
- **Not-found page**: Role-aware redirect on "Go Home"
- **Accessible**: Keyboard navigation, color contrast

---

## 📦 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd softmint
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   ```
4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🧩 Main Pages & Routes
- `/` — Home (public)
- `/about`, `/contact`, `/services`, `/blog` — Public info pages
- `/services/[slug]` — Dynamic public service detail pages
- `/blog/[slug]` — Dynamic public blog pages
- `/admin` — Admin dashboard (role-protected)
- `/admin/blog`, `/admin/services`, `/admin/contact`, `/admin/messages` — Admin tabs
- `/user` — User dashboard (role-protected)
- `/user/services`, `/user/blog`, `/user/contact` — User tabs
- `/signin`, `/signup`, `/forgot-password` — Auth pages

---

## 🎨 Design System
- **Colors**: Blue/purple gradients, white backgrounds, dark text
- **Typography**: Geist Sans/Mono, bold headings
- **Components**: Cards, pill tabs, animated buttons, Lucide/React-icons
- **Responsive**: Mobile-first, grid layouts, sticky nav

---

## 📝 Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License
MIT License — see [LICENSE](LICENSE)

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
