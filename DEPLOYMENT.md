# Cloudflare Pages Deployment Guide

## 🚀 Quick Deploy

### Step 1: Build Locally (Test)
```bash
pnpm install
pnpm build
```
✅ Verify `out/` directory is created with static files

### Step 2: Push to GitHub
```bash
git add .
git commit -m "Optimize for Cloudflare Pages"
git push origin main
```

### Step 3: Connect to Cloudflare Pages

1. **Login to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com
   - Navigate to: Workers & Pages → Pages

2. **Create New Project**
   - Click "Create application" → "Pages" → "Connect to Git"
   - Select GitHub repository: `Neuraltale-Website-with-React`
   - Click "Begin setup"

3. **Configure Build Settings**
   ```
   Framework preset:       Next.js (Static HTML Export)
   Build command:          npm run build
   Build output directory: out
   Root directory:         /
   ```

4. **Environment Variables**
   - Click "Add variable" for each:
   ```
   NODE_VERSION = 18
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = your_key_here
   NEXT_PUBLIC_EMAILJS_SERVICE_ID = service_wtujr1c
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = your_template_id
   ```

5. **Save and Deploy**
   - Click "Save and Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Site will be live at: `https://neuraltale-website.pages.dev`

---

## 🌐 Custom Domain Setup

### Add neuraltale.com and www.neuraltale.com

1. **In Cloudflare Pages Dashboard:**
   - Go to your project → "Custom domains" tab
   - Click "Set up a custom domain"

2. **Add Root Domain (neuraltale.com):**
   - Enter: `neuraltale.com`
   - Click "Continue"
   - If domain is on Cloudflare, DNS records are added automatically
   - Wait for SSL certificate (usually instant)

3. **Add WWW Subdomain:**
   - Click "Set up a custom domain" again
   - Enter: `www.neuraltale.com`
   - Click "Continue"
   - DNS CNAME record added automatically
   - SSL certificate provisioned

4. **Verify DNS:**
   ```bash
   ping neuraltale.com
   # Should show Cloudflare IP (172.x.x.x)
   
   ping www.neuraltale.com
   # Should show Cloudflare IP (172.x.x.x)
   ```

5. **Both domains now point to Cloudflare Pages! ✅**

---

## 📊 Performance Monitoring

### Check Build Logs
- Cloudflare Dashboard → Your Project → Deployments
- Click on latest deployment to see logs
- Verify: "✓ Build completed successfully"

### Test Website Speed
```bash
# Lighthouse test
npx lighthouse https://neuraltale.com --view

# Expected scores:
# Performance: 95+
# Accessibility: 100
# Best Practices: 100
# SEO: 100
```

### Monitor with Cloudflare Analytics
- Dashboard → Analytics & Logs
- View traffic, performance, caching stats
- Global CDN edge locations serving your site

---

## 🔧 Troubleshooting

### Build Fails
**Error: "Module not found"**
- Solution: Check package.json dependencies
- Run: `pnpm install` locally to verify

**Error: "Out of memory"**
- Solution: Reduce bundle size
- Check: Dynamic imports in page.tsx

### Custom Domain Issues
**Domain not resolving**
- Wait 5-10 minutes for DNS propagation
- Clear browser cache
- Check Cloudflare DNS settings

**SSL Certificate Pending**
- Usually provisions in 1-2 minutes
- If stuck, remove and re-add domain
- Ensure domain nameservers point to Cloudflare

### Site Not Loading
**404 on routes**
- Verify `trailingSlash: true` in next.config.js
- Check `out/` directory has all HTML files
- Cloudflare Pages supports trailing slashes

---

## 🚀 Deployment Workflow

### Automatic Deployments
```bash
# Every push to main branch triggers:
1. Cloudflare pulls latest code
2. Runs: npm run build
3. Deploys out/ directory to CDN
4. Site live in ~2 minutes
```

### Manual Deploy
```bash
# Using Wrangler CLI
wrangler pages deploy out --project-name=neuraltale-website
```

### Preview Deployments
- Every branch gets preview URL
- Test changes before merging to main
- Format: `https://abc123.neuraltale-website.pages.dev`

---

## ✅ Post-Deployment Checklist

- [ ] Site loads at neuraltale.com
- [ ] Site loads at www.neuraltale.com
- [ ] SSL certificate is active (https://)
- [ ] All pages accessible
- [ ] Contact form works (EmailJS)
- [ ] Images loading properly
- [ ] Mobile responsive
- [ ] Lighthouse score 95+
- [ ] Cloudflare Analytics enabled

---

## 🌍 Global CDN Performance

Your site is now served from **300+ Cloudflare edge locations**:

### Africa
- Tanzania (Dar es Salaam)
- Kenya (Nairobi)
- South Africa (Johannesburg, Cape Town)
- Egypt (Cairo)
- Nigeria (Lagos)

### Expected Response Times
- **Tanzania:** 20-50ms
- **East Africa:** 50-100ms
- **Europe:** 50-150ms
- **Global:** 100-200ms

---

## 📞 Support

**Deployment Issues:**
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Community: https://community.cloudflare.com/

**Site Issues:**
- Email: helpdesk@neuraltale.com
- Phone: +255 653 520 829

---

**Deployed with ⚡ Cloudflare Pages**
