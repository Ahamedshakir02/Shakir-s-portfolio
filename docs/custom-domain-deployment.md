# Deploying Your Portfolio on a Custom Domain

## Overview

Currently, your portfolio is deployed on Vercel's free tier at `shakir-s-portfolio.vercel.app`. 

This guide shows you how to deploy on your own custom domain like `ahamedshakir.com` or `ahamed.dev`.

---

## Table of Contents
1. [Key Differences: Vercel vs. Custom Domain](#key-differences-vercel-vs-custom-domain)
2. [What You Need](#what-you-need)
3. [Step-by-Step: Cheapest Option (GitHub Pages)](#step-by-step-cheapest-option-github-pages)
4. [Step-by-Step: Recommended Option (Netlify)](#step-by-step-recommended-option-netlify)
5. [Step-by-Step: Most Control (Self-Hosted VPS)](#step-by-step-most-control-self-hosted-vps)
6. [Comparison Table](#comparison-table)
7. [Post-Deployment Checklist](#post-deployment-checklist)

---

## Key Differences: Vercel vs. Custom Domain

### **What You Have Now (Vercel)**
- Domain: `shakir-s-portfolio.vercel.app`
- Hosting: Free
- Deployment: Auto-deploys when you push to GitHub
- SSL/HTTPS: Automatic
- Speed: Global CDN
- Custom domain: Possible but less featured

### **What You'll Get (Custom Domain)**
- Domain: `yourname.com` or `yourname.dev`
- Hosting: Your choice (free → $100+/month)
- Deployment: Manual or auto (depends on platform)
- SSL/HTTPS: Free (Let's Encrypt)
- Speed: Depends on hosting choice
- Custom domain: Native support

---

## What You Need

### 1. **A Domain Name**
Examples:
- `ahamedshakir.com` — Traditional
- `ahamed.dev` — Tech-savvy
- `ahamedshakir.io` — Tech/startup feel

**Where to buy:**
- **Namecheap** — Affordable ($0.50-$2/year first year)
- **Google Domains** — Simple, trusted ($12/year)
- **GoDaddy** — Well-known but pricey ($17.99/year)

**Cost:** $5-20/year (one-time annual cost, very cheap)

---

### 2. **Hosting Platform**
Three popular options:

| Option | Cost | Effort | Best For |
|--------|------|--------|----------|
| **GitHub Pages** | FREE | Easy (10 min) | Static sites, complete control |
| **Netlify** | FREE → $19/month | Easy (5 min) | Modern deployments, great DX |
| **Vercel** | FREE → $20/month | Easy (5 min) | Next.js, React apps, already familiar |

**Recommendation:** Start with **Netlify Free** or **GitHub Pages Free**.

---

## Step-by-Step: Cheapest Option (GitHub Pages)

### **Why GitHub Pages?**
- ✅ Completely FREE
- ✅ No credit card needed
- ✅ GitHub handles hosting
- ✅ Works perfectly for static sites (your Vite build is static)
- ✅ Auto-deploy on push

### **Step 1: Build Your Portfolio for Production**

```bash
cd C:\Users\ahame\project\portfolio
npm run build
```

This creates a `dist/` folder with your optimized, minified site.

---

### **Step 2: Create a GitHub Repository**

If you don't already have one:
1. Go to https://github.com/new
2. Name it: `ahamedshakir.github.io` (IMPORTANT: must match this format)
3. Set to **Public**
4. Click **Create repository**

**Why this name?** GitHub Pages looks for a repo named `{username}.github.io` to serve at `https://{username}.github.io`.

---

### **Step 3: Push Your Code to GitHub**

```bash
cd C:\Users\ahame\project\portfolio

# Initialize git (if not already done)
git init

# Add GitHub remote
git remote add origin https://github.com/ahamedshakir/ahamedshakir.github.io.git

# Create main branch
git branch -M main

# Stage, commit, push
git add .
git commit -m "Initial commit: portfolio site"
git push -u origin main
```

---

### **Step 4: Configure GitHub Pages**

1. Go to your repo on GitHub: `https://github.com/ahamedshakir/ahamedshakir.github.io`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select `main` and `/root` folder
   - Click **Save**

GitHub will now deploy your site at `https://ahamedshakir.github.io` (live in 2-3 min)

---

### **Step 5: Buy a Custom Domain**

1. Go to **Namecheap**, **Google Domains**, or **GoDaddy**
2. Search for your desired domain (e.g., `ahamedshakir.com`)
3. Purchase it
4. In your domain provider's dashboard, find **DNS settings**

---

### **Step 6: Point Your Domain to GitHub Pages**

This is the tricky part. You need to change your domain's DNS records.

#### **Option A: Using GitHub's Nameservers (Easiest)**

1. In your domain provider, find **Nameservers** section
2. Set all nameservers to GitHub's:
   ```
   dns1.github.com
   dns2.github.com
   dns3.github.com
   dns4.github.com
   ```
3. Wait 24-48 hours for DNS to propagate

**Or in your domain provider, add these DNS records:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |
| CNAME | www | ahamedshakir.github.io | 3600 |

---

### **Step 7: Enable HTTPS**

1. Go back to your repo's **Settings** → **Pages**
2. Under "Custom domain", enter: `ahamedshakir.com`
3. Check **"Enforce HTTPS"**
4. GitHub will automatically provision an SSL certificate (takes a few min)

---

### **Step 8: Test Your Site**

1. Visit `https://ahamedshakir.com` in your browser
2. Should see your portfolio!
3. Test on mobile, light/dark theme, all sections

---

### **Step 9: Auto-Deploy on Every Push**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm install
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/download-artifact@v3
        with:
          name: dist
          path: dist
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Now every time you push to `main`, GitHub automatically builds and deploys!

---

## Step-by-Step: Recommended Option (Netlify)

### **Why Netlify?**
- ✅ FREE tier is generous
- ✅ 5-minute setup
- ✅ Better deployment UI than GitHub Pages
- ✅ Preview deploys (test before going live)
- ✅ Built-in form handling (useful for contact form)
- ✅ Easy custom domain setup

### **Step 1: Connect Your GitHub Repo to Netlify**

1. Go to https://app.netlify.com
2. Sign up with GitHub (easier)
3. Click **"New site from Git"**
4. Choose **GitHub**, authorize Netlify
5. Select your portfolio repo

---

### **Step 2: Configure Build Settings**

Netlify will auto-detect your settings, but verify:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- Click **Deploy site**

Netlify deploys your site to a temporary domain like `mystifying-elephant-abc123.netlify.app`

---

### **Step 3: Add Your Custom Domain**

1. In Netlify, go to **Domain settings**
2. Click **Add custom domain**
3. Enter your domain: `ahamedshakir.com`
4. Netlify will show you DNS records to add at your domain provider

---

### **Step 4: Configure DNS**

In your domain provider's dashboard, add these records:

```
Type: A
Name: @
Value: 75.2.60.5 (or Netlify's IP)

Type: CNAME
Name: www
Value: ahamedshakir.netlify.app
```

Wait 24-48 hours for DNS propagation.

---

### **Step 5: Enable HTTPS**

Netlify automatically provisions an SSL certificate from Let's Encrypt. Just wait a few minutes.

---

### **Step 6: Test Your Site**

Visit `https://ahamedshakir.com` — should show your portfolio!

---

## Step-by-Step: Most Control (Self-Hosted VPS)

### **Why Self-Hosted?**
- ✅ Complete control
- ✅ No restrictions
- ✅ Potential for dynamic features (backend)
- ✅ Learn server administration

### **But:**
- ❌ Costs $5-20/month (DigitalOcean, Linode, AWS)
- ❌ You manage security, updates, backups
- ❌ Takes 1-2 hours to set up
- ❌ Overkill for a static portfolio

### **If You Want to Try:**

1. **Rent a VPS:**
   - DigitalOcean Droplet ($5/month)
   - Linode ($5/month)
   - AWS EC2 (free tier for 12 months)

2. **SSH into your server:**
   ```bash
   ssh root@your_server_ip
   ```

3. **Install Node.js:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install nodejs
   ```

4. **Clone your GitHub repo:**
   ```bash
   git clone https://github.com/ahamedshakir/portfolio.git
   cd portfolio
   npm install
   npm run build
   ```

5. **Install Nginx (web server):**
   ```bash
   sudo apt install nginx
   ```

6. **Copy your build to Nginx:**
   ```bash
   sudo cp -r dist/* /var/www/html/
   ```

7. **Point your domain's DNS to server IP:**
   ```
   A record: @ → your_server_ip
   A record: www → your_server_ip
   ```

8. **Install SSL certificate (free):**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d ahamedshakir.com
   ```

9. **Test:** Visit `https://ahamedshakir.com`

**This is complex — I'd recommend GitHub Pages or Netlify instead.**

---

## Comparison Table

| Feature | GitHub Pages | Netlify | Vercel | Self-Hosted VPS |
|---------|---|---|---|---|
| **Cost** | FREE | FREE | FREE | $5-20/mo |
| **Setup time** | 30 min | 5 min | 5 min | 2 hours |
| **Ease** | Medium | Easy | Easy | Hard |
| **Custom domain** | Yes | Yes | Yes | Yes |
| **Auto-deploy** | With GitHub Actions | Yes (auto) | Yes (auto) | Manual |
| **HTTPS/SSL** | Automatic | Automatic | Automatic | Manual (free Let's Encrypt) |
| **Preview deploys** | No | Yes | Yes | No |
| **Scalability** | Static only | Generous | Generous | Depends on server |
| **Maintenance** | None | None | None | You manage server |

---

## Post-Deployment Checklist

After deploying on your custom domain:

```
✅ Domain Setup
[ ] Domain purchased and registered
[ ] DNS records configured
[ ] Domain resolves to your site (nslookup ahamedshakir.com)
[ ] HTTPS works (padlock icon in browser)

✅ Site Testing
[ ] Homepage loads correctly
[ ] All sections visible (About, Skills, Projects, etc.)
[ ] Dark/light theme toggle works
[ ] Responsive on mobile (375px)
[ ] All external links work (GitHub, LinkedIn, g.dev)
[ ] Download buttons work (Resume, CV)
[ ] Contact links work (email, social)
[ ] Animations smooth (scroll reveals, counters)

✅ SEO & Indexing
[ ] Update Google Search Console with new domain
[ ] Resubmit sitemap.xml to new domain
[ ] Update robots.txt (if needed)
[ ] Update meta tags with new domain
[ ] Test Open Graph preview (Twitter, LinkedIn)

✅ Analytics
[ ] Update Google Analytics property to new domain
[ ] Verify tracking code has new domain
[ ] Test analytics in real-time

✅ Optional Cleanup
[ ] Keep Vercel deployment for backup (or delete)
[ ] Keep old domain redirect to new domain (if purchased)
[ ] Update LinkedIn to point to new domain
[ ] Update GitHub README with new domain
[ ] Update g.dev profile with new domain
```

---

## What Changes in Your Code?

**Your code doesn't change much.** But you should update:

### `index.html` — Update meta tags with new domain:

```html
<!-- Before -->
<meta property="og:url" content="https://shakir-s-portfolio.vercel.app/" />

<!-- After -->
<meta property="og:url" content="https://ahamedshakir.com/" />
```

### `public/sitemap.xml` — Update domain:

```xml
<!-- Before -->
<loc>https://shakir-s-portfolio.vercel.app/</loc>

<!-- After -->
<loc>https://ahamedshakir.com/</loc>
```

### `src/styles/theme.css` — No changes needed (CSS is domain-agnostic)

### `VITE_API_URL` or similar env vars — Update if you use any:

```bash
# .env.production
VITE_API_URL=https://ahamedshakir.com
```

---

## Migration Path (Vercel → Custom Domain)

If you want to move off Vercel:

**Week 1:**
1. Buy domain + set up new host (GitHub Pages, Netlify, etc.)
2. Update code with new domain
3. Deploy to new host
4. Test thoroughly

**Week 2:**
1. Update Google Search Console (add new property)
2. Update Google Analytics
3. Update LinkedIn to point to new domain
4. Update g.dev profile
5. Keep Vercel deployment as backup

**After verification:**
1. Delete Vercel deployment (or keep for redundancy)
2. Set up domain redirect from old to new (if desired)

---

## Recommendation: Start with This

If you're just deploying a **static portfolio**:

### **Option 1: GitHub Pages (Cheapest)**
```
Domain: $12/year
Hosting: FREE
Total: $12/year
Setup: 30 min
```

### **Option 2: Netlify (Recommended)**
```
Domain: $12/year
Hosting: FREE
Total: $12/year
Setup: 5 min
```

**I recommend Netlify** because:
- ✅ Faster setup (5 min vs 30 min)
- ✅ Better deployment UI
- ✅ Preview deploys (test before going live)
- ✅ Future-proof (if you add a backend later, easier to upgrade)
- ✅ Still completely free for your static portfolio

---

## Questions?

Once you choose a platform, I can walk you through the exact steps with your specific domain. Just let me know:

1. What domain do you want? (e.g., `ahamedshakir.com`)
2. Which platform? (GitHub Pages, Netlify, or something else)
3. Ready to start?

Good luck! 🚀
