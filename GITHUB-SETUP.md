# GitHub Pages Setup Guide

This guide walks you through setting up your aviation website on GitHub Pages and connecting your custom domain.

## Step 1: Set Up GitHub Pages

1. Go to your repository's **Settings** tab
2. Scroll down to **Pages** in the left sidebar
3. Under **Source**, select "Deploy from a branch"
4. Choose **main** branch and **/ (root)** folder
5. Click **Save**
6. GitHub will give you a URL like: `https://yourusername.github.io/repository-name`
7. Wait 5-10 minutes for the site to build

## Step 2: Test Your Site

Visit the GitHub Pages URL to make sure everything works:
- All pages load correctly
- Navigation works
- Images appear (if you've uploaded them)
- Contact form opens

## Step 3: Get Your Domain Ready

### If you don't own your domain yet:
1. Buy `flycurrahee.net` (or your preferred domain) from a registrar like:
   - Namecheap
   - GoDaddy  
   - Google Domains
   - Cloudflare

### If you already own your domain:
Continue to Step 4.

## Step 4: Configure DNS Records

In your domain registrar's DNS settings, add these records:

### For the main domain (flycurrahee.net):
**A Records** pointing to these GitHub IP addresses:
- 185.199.108.153
- 185.199.109.153  
- 185.199.110.153
- 185.199.111.153

### For www subdomain:
**CNAME Record**: `www` pointing to `yourusername.github.io`

## Step 5: Add Custom Domain to GitHub

1. Back in your repository's **Settings > Pages**
2. In the **Custom domain** field, enter: `flycurrahee.net`
3. Click **Save**
4. This creates a `CNAME` file in your repository
5. Check **Enforce HTTPS** (wait for SSL certificate to be issued)

## Step 6: Wait for Everything to Work

- DNS changes can take up to 24-48 hours
- SSL certificate takes 10-30 minutes
- Your site will be live at your custom domain once DNS propagates

## Step 7: Update Config Files

Once your site is live, update your contact information in the config files:
1. Edit `Curahee-Aviation/config/contact-info.js`
2. Add your real phone number and email
3. Update any placeholder content

## Troubleshooting

### Site not loading?
- Check that DNS records are correct
- Wait longer (DNS can be slow)
- Make sure CNAME file exists in your repository

### Images not showing?
- Upload images to the correct folders:
  - `assets/images/carousel/` for homepage
  - `assets/images/aircraft/` for aircraft page
  - `assets/videos/` for landing video

### Contact form not working?
- The form opens your email client by default
- Make sure your email is correct in `contact-info.js`

## Your Website Structure

```
your-repository/
├── index.html (homepage)
├── aircraft.html  
├── pricing.html
├── schedule.html
├── contact.html
├── Curahee-Aviation/
│   ├── assets/
│   │   ├── css/styles.css
│   │   ├── images/
│   │   └── videos/
│   └── config/ (all your editable files)
└── CNAME (created automatically)
```

## Next Steps

1. Upload your aircraft photos
2. Record and upload your landing video
3. Update all placeholder content in config files
4. Test the contact form
5. Share your new website!

Your website will automatically update whenever you edit the config files. No need to redeploy or do anything technical.

## Need Help?

- GitHub Pages documentation: https://docs.github.com/en/pages
- DNS help: Contact your domain registrar's support
- Website content: Use the CLIENT-UPDATES.md guide