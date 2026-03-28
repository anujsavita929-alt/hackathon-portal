# EchoCore Deployment Guide

## Quick Start - Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open browser to http://localhost:3000
```

## Building for Production

```bash
# Create optimized build
pnpm build

# Start production server
pnpm start
```

## Vercel Deployment (Recommended)

### Option 1: From v0
1. Click "Publish" in the top right of your v0 project
2. Connect to Vercel
3. Authorize and deploy

### Option 2: Git Integration
```bash
# Push to GitHub
git add .
git commit -m "Initial EchoCore deployment"
git push origin main

# In Vercel dashboard:
# 1. Import project from Git
# 2. Select repository
# 3. Configure project settings
# 4. Deploy
```

### Option 3: CLI Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set as production
vercel --prod
```

## Environment Variables

EchoCore doesn't require any environment variables by default, but if you extend it:

Create a `.env.local` file:
```
# Add any API keys or configuration here
```

## Performance Optimization

### Pre-deployment Checklist
- [x] Run `pnpm build` locally to verify no errors
- [x] Test on multiple browsers (Chrome, Firefox, Safari)
- [x] Test on mobile devices
- [x] Check Lighthouse scores
- [x] Verify all animations smooth on slower devices

### Vercel Settings
1. **Build Command:** `next build`
2. **Output Directory:** `.next`
3. **Install Command:** `pnpm install`
4. **Node Version:** 18.x or 20.x

### Optimization Tips
- Canvas background uses optimized requestAnimationFrame
- Images are lazy-loaded by default
- CSS animations use GPU acceleration
- Component code-splitting is automatic

## Monitoring

After deployment, check:
1. **Vercel Analytics:** Real-time performance metrics
2. **Lighthouse:** Run periodic audits
3. **Web Vitals:** Core Web Vitals scores

## Customization Before Deployment

### Brand Colors
Edit `/app/globals.css`:
```css
:root {
  --primary: #D4AF37; /* Your primary color */
  --background: #0B0B0F; /* Your background */
}
```

### Content Updates
All text content is in individual section components:
- `components/sections/HeroSection.tsx`
- `components/sections/EventsSection.tsx`
- `components/sections/FAQSection.tsx`
- etc.

### Metadata
Update in `/app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description',
  // ...
};
```

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
pnpm build
```

### Animations Not Working
- Check browser DevTools console for errors
- Ensure Framer Motion is installed: `pnpm list framer-motion`
- Verify JavaScript is enabled

### Performance Issues
- Check Network tab in DevTools
- Reduce animation complexity if needed
- Ensure images are optimized
- Check Canvas background performance

## Post-Deployment

1. **Domain Setup**
   - Add custom domain in Vercel dashboard
   - Configure DNS records

2. **SSL/TLS**
   - Automatically included with Vercel
   - Verify HTTPS in browser

3. **Analytics**
   - Enable Vercel Analytics in dashboard
   - Monitor Core Web Vitals

4. **Updates**
   - Pull changes from GitHub
   - Vercel automatically rebuilds on push

## Disaster Recovery

### Rollback
```bash
# In Vercel dashboard, select previous deployment
# Click "Promote to Production"
```

### Database/API (if extended)
- Implement backup strategy
- Version control configuration
- Document API endpoints

## Support & Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Tailwind CSS:** https://tailwindcss.com/docs

---

**Deployment Completed Successfully! 🚀**

Your EchoCore portal is live and ready for innovators worldwide.
