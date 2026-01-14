# Sigmatrix LLC - InterEx Healthcare Platform

> Official website for Sigmatrix LLC, showcasing the InterEx healthcare interoperability platform that simplifies CMS data exchange and compliance workflows.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Development](#development)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Contact](#contact)

## 🏥 About

Sigmatrix LLC develops healthcare technology platforms that simplify complex data exchange and compliance workflows. InterEx is our flagship product that helps healthcare providers interact with CMS systems securely and efficiently.

### Key Highlights

- **HIPAA Compliant** - Built with healthcare security standards
- **FHIR & HL7 Ready** - Standards-based interoperability
- **Enterprise Scale** - Multi-tenant architecture
- **Modern Interface** - Clean, intuitive provider-facing UI
- **Secure by Design** - End-to-end encryption and audit logging

## ✨ Features

- 🏠 **Home** - Hero section with company overview
- ℹ️ **About Us** - Mission, vision, and company values
- 🛠️ **Services** - InterEx platform capabilities and workflow
- 🎯 **Why Sigmatrix** - Key differentiators and benefits
- 📞 **Contact** - Multi-channel contact form
- 🔒 **Security** - Comprehensive security and compliance information

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher

> **Tip:** Use [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sigmatrix-LLC/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   
   Navigate to `http://localhost:8080`

## 💻 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run build:dev` | Build with development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm test` | Run test suite once |
| `npm run test:watch` | Run tests in watch mode |

### Development Workflow

```bash
# Start development
npm run dev

# In another terminal, run tests in watch mode
npm run test:watch

# Check code quality
npm run lint

# Build for production
npm run build
```

## 📁 Project Structure

```
interex-healthcare-simplified-main/
├── public/                 # Static assets
│   ├── favicon.png        # Site favicon (Sigmatrix logo)
│   ├── placeholder.svg    # Placeholder images
│   └── robots.txt         # SEO robots file
├── src/
│   ├── assets/            # Images and media files
│   │   ├── hero-bg.jpg
│   │   ├── logo-big.png
│   │   ├── logo-small.png
│   │   └── logo-with-text.png
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui component library
│   │   ├── About.tsx
│   │   ├── CompanyOverview.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── InterExOverview.tsx
│   │   ├── Security.tsx
│   │   └── WhySigmatrix.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Route page components
│   │   ├── AboutUs.tsx
│   │   ├── ContactUs.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── Services.tsx
│   │   └── WhySigmatrixPage.tsx
│   ├── test/              # Test configuration and files
│   ├── App.tsx            # Root application component
│   ├── index.css          # Global styles and Tailwind
│   └── main.tsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── vitest.config.ts       # Vitest test configuration
```

## 🛠️ Technology Stack

### Core

- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React Router 6](https://reactrouter.com/)** - Client-side routing

### UI & Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library

### State & Data

- **[TanStack Query](https://tanstack.com/query)** - Powerful data synchronization
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### Development Tools

- **[Vitest](https://vitest.dev/)** - Fast unit test framework
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS transformations
- **[Testing Library](https://testing-library.com/)** - Testing utilities

### Fonts

- **Inter** - Body text
- **Plus Jakarta Sans** - Headings and display text

## 📦 Deployment

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Deploy to Static Hosting

The built application can be deployed to any static hosting service:

- **Vercel** - `vercel --prod`
- **Netlify** - Drag and drop `dist/` folder or use CLI
- **AWS S3** - Upload `dist/` contents to S3 bucket
- **GitHub Pages** - Use GitHub Actions workflow
- **Cloudflare Pages** - Connect repository for automatic deployments

### Environment Variables

Currently, the application doesn't require environment variables. If needed in the future, create a `.env` file:

```bash
VITE_API_URL=https://api.example.com
```

Access in code: `import.meta.env.VITE_API_URL`

## 📧 Contact

**Sigmatrix LLC**

- **Email:** support@sigmatrixllc.com
- **Phone:** (443) 788-1596
- **Hours:** Monday - Friday, 9:00 AM – 5:00 PM EST
- **Website:** https://sigmatrix.com

## 📄 License

© 2026 Sigmatrix LLC. All rights reserved.

---

Built with ❤️ for healthcare interoperability
