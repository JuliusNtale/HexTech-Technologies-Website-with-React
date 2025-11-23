# ⚡ NEURALTALE - Technology Solutions Provider

> **Lightning-Fast. Enterprise-Grade. Africa-Focused.**

A high-performance corporate website for NEURALTALE, showcasing custom software development, AI integration, M-Pesa payment systems, and enterprise IT solutions for businesses in Tanzania and across Africa.

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy%20to-Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

---

## 🏢 About NEURALTALE

**Founded:** 2025  
**Headquarters:** Msimbazi Street, Dar es Salaam, Tanzania  
**Founder & CEO:** Julius Peter Ntale  
**Contact:** +255 653 520 829 | helpdesk@neuraltale.com

### 🎯 What We Do
- **Custom Software Development** - Enterprise solutions, mobile apps, automation tools
- **AI Integration** - Machine learning, data analytics, intelligent systems
- **M-Pesa Payment Systems** - Mobile money integration for East African markets
- **IoT Solutions** - Smart devices, sensor networks, automation
- **Cloud Infrastructure** - AWS, Azure, Google Cloud deployment
- **Network Solutions** - TP-Link Omada, UniFi for hotels & businesses
- **Enterprise IT Equipment** - Dell, HP, Lenovo workstations & servers

---

## ⚡ Performance Optimizations

This website is optimized for **lightning-fast** performance:

✅ **Static Site Generation** - Pre-rendered at build time  
✅ **Cloudflare CDN** - 300+ edge locations worldwide  
✅ **Code Splitting** - Dynamic imports for minimal bundle size  
✅ **Image Optimization** - WebP format, lazy loading  
✅ **CSS Optimization** - Tailwind purged, critical CSS inlined  
✅ **Tree Shaking** - Unused code eliminated  
✅ **Compression** - Brotli/Gzip enabled  
✅ **Caching Headers** - 1-year cache for static assets  

**Lighthouse Score:** 95+ Performance | 100 Accessibility | 100 Best Practices | 100 SEO

---

## 🛠️ Tech Stack

```
Frontend:        Next.js 16 + React 19 + TypeScript
Styling:         Tailwind CSS + Framer Motion
Deployment:      Cloudflare Pages (Primary)
CDN:             Cloudflare Global Network
Analytics:       Vercel Analytics
Email:           EmailJS
Package Manager: pnpm
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone repository
git clone https://github.com/neuraltaletechnologies/Neuraltale-Website-with-React.git
cd Neuraltale-Website-with-React

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Add your EmailJS credentials to .env.local

# Start development server
pnpm dev

# Build for production
pnpm build
```

The site will be available at `http://localhost:3001`

---

## 📁 Project Structure

```
NEURALTALE-WEBSITE/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout with SEO
│   │   ├── about/             # About page
│   │   ├── services/          # Services page
│   │   ├── contact/           # Contact page
│   │   └── blog/              # Blog section
│   ├── components/
│   │   ├── sections/          # Page sections (Hero, About, etc.)
│   │   ├── ui/                # Reusable UI components
│   │   ├── layout/            # Navbar, Footer
│   │   └── SEO/               # Structured data, meta tags
│   ├── lib/                   # Utilities, SEO configs
│   ├── hooks/                 # Custom React hooks
│   ├── styles/                # Global CSS
│   └── types/                 # TypeScript definitions
├── public/                    # Static assets
├── out/                       # Build output (generated)
├── wrangler.toml             # Cloudflare configuration
└── next.config.js            # Next.js configuration
```

---

## 🌐 Deployment to Cloudflare Pages

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy to Cloudflare Pages"
   git push origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
   - Click "Create a project" → "Connect to Git"
   - Select your repository: `Neuraltale-Website-with-React`
   - Configure build settings:
     ```
     Build command:    npm run build
     Build output:     out
     Node.js version:  18
     ```

3. **Add Environment Variables:**
   - In Cloudflare Pages settings → Environment Variables
   - Add EmailJS credentials:
     ```
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
     ```

4. **Deploy:**
   - Cloudflare automatically builds and deploys on every push
   - View logs for build status
   - Site available at: `https://neuraltale-website.pages.dev`

### Method 2: Direct Upload with Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build project
pnpm build

# Deploy to Cloudflare Pages
wrangler pages deploy out --project-name=neuraltale-website
```

### Custom Domain Setup

1. **In Cloudflare Pages Dashboard:**
   - Go to your project → Custom domains
   - Click "Set up a custom domain"
   - Add: `neuraltale.com` and `www.neuraltale.com`

2. **DNS Configuration:**
   - Cloudflare automatically configures DNS
   - SSL certificate provisioned automatically
   - Both domains will point to Cloudflare Pages

---

## 📧 EmailJS Configuration

### Setup Steps:

1. **Create account at [EmailJS.com](https://www.emailjs.com/)**

2. **Configure Email Service:**
   - Add Gmail service
   - Email: `juliusntale30@gmail.com`
   - Get Service ID

3. **Create Email Template:**
   - Use variables: `{{from_name}}`, `{{message}}`, `{{email}}`
   - Get Template ID

4. **Get Public Key:**
   - Go to Account → API Keys
   - Copy Public Key

5. **Add to Environment:**
   ```env
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_wtujr1c
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   ```

---

## 🎨 Key Features

### 🌐 SEO Optimized
- Comprehensive meta tags
- Structured data (Organization, LocalBusiness, Product schemas)
- Sitemap.xml generation
- OpenGraph & Twitter cards
- 90+ targeted keywords for Tanzania market

### ⚡ Performance
- Static site generation for instant page loads
- Code splitting with dynamic imports
- Optimized images with lazy loading
- Minimal JavaScript bundle (< 200KB)
- Cached assets for repeat visits

### 🎭 UI/UX
- Responsive design (mobile-first)
- Smooth animations with Framer Motion
- 3D card-flip service cards with particle effects
- Glass-morphism effects
- Interactive navigation
- Professional gradient themes

### 📱 Forms & Contact
- Multi-step quote form
- Contact form with validation
- EmailJS integration
- Real-time form feedback

---

## 🔧 Scripts

```bash
pnpm dev          # Start development server (port 3001)
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # TypeScript type checking
```

---

## 📊 Performance Metrics

### Bundle Sizes (Production)
- **First Load JS:** ~180KB
- **Page JS:** ~15KB average
- **CSS:** ~8KB (purged)

### Core Web Vitals
- **LCP:** < 1.5s (Largest Contentful Paint)
- **FID:** < 50ms (First Input Delay)
- **CLS:** < 0.1 (Cumulative Layout Shift)

### Cloudflare CDN Performance
- **Global Edge Network:** 300+ locations
- **Average Response Time:** 50-100ms (Africa)
- **Cache Hit Ratio:** 95%+

---

## 🌍 Target Markets

### Primary
- **Tanzania** - Dar es Salaam, Arusha, Mwanza
- **Kenya** - Nairobi, Mombasa
- **Uganda** - Kampala

### Services
- M-Pesa integration for East African businesses
- Hotel WiFi solutions (TP-Link Omada, UniFi)
- Enterprise IT infrastructure
- Custom software for African markets

---

## 📝 License

Copyright © 2025 NEURALTALE Technologies. All rights reserved.

---

## 👨‍💻 Developer

**Julius Peter Ntale**  
Founder & CEO, NEURALTALE  
📧 juliusntale@neuraltale.com  
📞 +255 653 520 829

---

## 🤝 Support

For technical support or business inquiries:
- **Email:** helpdesk@neuraltale.com
- **Phone:** +255 653 520 829 (Airtel) | +255 746 520 819 (Vodacom)
- **Website:** [neuraltale.com](https://neuraltale.com)
- **Location:** Msimbazi Street, Dar es Salaam, Tanzania

---

**Built with ❤️ in Tanzania 🇹🇿**
- **Before:** 221 kB First Load JS
- **After:** 213 kB First Load JS
- **Improvement:** 8 kB reduction (4% improvement)

### **Optimization Techniques**
- ✅ **Removed Heavy Dependencies** (150 packages removed)
- ✅ **Dynamic Imports** for code splitting  
- ✅ **Lazy Loading** for below-the-fold content
- ✅ **Image Optimization** with Next.js Image
- ✅ **Bundle Analysis** and tree shaking
- ✅ **Static Generation** for better performance

### **Performance Monitoring**
```bash
npm run analyze     # Analyze bundle size
npm run optimize    # Run optimization scripts
```

---

## 🛡️ Security Features

### **Cookie Security**
- **SameSite=Strict** for CSRF protection
- **Secure flag** for HTTPS-only cookies
- **HttpOnly flag** where applicable
- **Path restrictions** for cookie scope

### **Content Security Policy**
- Strict CSP headers configured
- XSS protection enabled
- Frame options configured

### **Email Security**
- Environment variables for API keys
- Rate limiting for form submissions
- Input validation and sanitization

---

## 📊 Analytics & Tracking

### **Google Tag Manager Setup**
1. **Install GTM container** on all pages
2. **Configure conversion tracking**
3. **Set up Google Analytics 4**
4. **Monitor user interactions**

### **Performance Tracking**
- Core Web Vitals monitoring
- Page load time analysis
- User interaction tracking
- Error monitoring and reporting

---

## 🧪 Testing

### **Manual Testing Checklist**

#### **Contact Forms**
- ✅ Form validation works correctly
- ✅ Success/error messages display
- ✅ Email delivery confirmed
- ✅ Responsive design on all devices

#### **Performance**
- ✅ Page load times under 3 seconds
- ✅ Lighthouse scores above 90
- ✅ Mobile performance optimized
- ✅ Bundle size within limits

#### **Browser Compatibility**
- ✅ Chrome/Chromium browsers
- ✅ Firefox
- ✅ Safari
- ✅ Edge

---

## 🤝 Contributing

### **Development Workflow**
1. Create feature branch from `main`
2. Make changes and test locally
3. Run linting and type checking
4. Submit pull request with description
5. Code review and merge

### **Code Standards**
- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Conventional commits

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

**NEURALTALE Technology Solutions**  
📍 Dar es Salaam, Tanzania  
📧 juliusntale30@gmail.com  
🌐 [Website](https://neuraltale.com)

For technical support or business inquiries, please use our contact form on the website or email directly.

---

**Built with ❤️ by the NEURALTALE Team**
