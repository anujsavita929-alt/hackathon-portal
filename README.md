# EchoCore - Premium Hackathon Portal

A next-generation hackathon platform with a luxury cyber-futuristic design system featuring glassmorphism, parallax depth, and premium micro-interactions.

## 🎨 Design System

**Color Palette:**
- **Primary Black:** #0B0B0F
- **Accent Gold:** #D4AF37
- **Foreground:** #F5F5F5
- **Secondary Dark:** #1a1a23
- **Neutral Muted:** #2a2a35

**Design Features:**
- Glassmorphism with backdrop blur effects
- Gold neon accents with soft glow effects
- Topology-based dynamic background
- Parallax scrolling depth effects
- Smooth micro-interactions and transitions
- Responsive mobile-first design

## 📦 Project Structure

```
components/
├── Header.tsx                 # Navigation header with scroll detection
├── TopologyBg.tsx            # Animated topology background
├── CursorEffect.tsx          # Custom cursor with glow
├── ScrollToTop.tsx           # Scroll-to-top button
├── GlassCard.tsx             # Reusable glassmorphic card
├── ParallaxSection.tsx       # Parallax scroll component
├── StaggerText.tsx           # Staggered text animation
├── PremiumButton.tsx         # Interactive button with effects
└── sections/
    ├── HeroSection.tsx       # Main hero with animated title
    ├── QuickAccessSection.tsx # 5-card grid dashboard
    ├── EventsSection.tsx     # Hackathon events grid
    ├── LeaderboardSection.tsx # Rankings with animations
    ├── RegistrationSection.tsx # Multi-step registration form
    ├── CommunitySection.tsx  # Community stats & activity
    ├── FAQSection.tsx        # Accordion FAQ
    └── ContactFooterSection.tsx # Contact form & footer
```

## 🚀 Features

### Interactive Components
- **Hero Section:** Animated title, gradient backgrounds, floating elements
- **Quick Access Grid:** 5 card dashboard with hover glow effects
- **Events Grid:** 6 featured hackathons with tags and CTAs
- **Leaderboard:** Top 5 performers with animated progress bars
- **Registration Stepper:** 4-step form with animated progress tracking
- **Community Hub:** Member stats, activity feed, avatar clusters
- **FAQ Accordion:** Smooth expand/collapse animations
- **Contact Form:** Glassmorphic input fields with validation

### Animations
- **Scroll-triggered reveals** with staggered timing
- **Hover effects** with scale, glow, and lift animations
- **Parallax depth** for background elements
- **Floating elements** with continuous motion
- **Progress animations** with easing transitions
- **Custom cursor** with gold glow tracking

### Performance
- GPU-accelerated animations
- Optimized scroll handlers
- Lazy-loaded components with viewport detection
- Canvas-based topology rendering

## 🛠️ Tech Stack

- **Framework:** Next.js 16 with React 19.2
- **Styling:** Tailwind CSS 4 with custom design tokens
- **Animation:** Framer Motion 11
- **Icons:** Lucide React
- **Canvas:** Native HTML5 for topology background

## 📋 Installation

```bash
# Install dependencies (automatic with v0)
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## 🎯 Key Sections Breakdown

### Hero Section
- Title animation with staggered text
- Dual CTA buttons (primary & secondary)
- Animated background with gold orbs
- Scroll indicator

### Quick Access
- 5 glassmorphic cards
- Icon glow effects
- Hover lift animation
- Responsive grid (1/2/5 columns)

### Events
- 3-column responsive grid
- Event cards with tags
- Prize pool display
- Learn More CTAs

### Leaderboard
- Top 5 rankings
- Avatar badges (gold for #1)
- Animated progress bars
- Score counters

### Registration
- 4-step form stepper
- Animated step indicators
- Form field transitions
- Submit & Previous navigation

### Community
- Live stats grid
- Avatar cluster animation
- Activity feed
- Social links

### FAQ
- Accordion-style Q&A
- Expand/collapse animations
- 5 pre-filled questions

### Contact & Footer
- Contact form with validation
- Social media links
- Quick navigation
- Legal & company info

## 🎨 Customization

### Colors
Edit `/app/globals.css`:
```css
:root {
  --primary: #D4AF37; /* Change gold */
  --background: #0B0B0F; /* Change black */
}
```

### Typography
Fonts are set to Geist (sans) and Geist Mono. Update in `/app/layout.tsx`:
```tsx
const _geist = Geist({ subsets: ["latin"] });
```

### Animation Speeds
Modify in component files or globally in `globals.css`:
```css
.transition-smooth {
  @apply transition-all duration-300 ease-in-out;
}
```

## 📱 Responsive Design

- **Mobile:** Single column layouts, collapsed header menu
- **Tablet:** 2-column grids, optimized spacing
- **Desktop:** Full 3-5 column layouts with hover effects

## ✨ Performance Tips

1. Canvas background (TopologyBg) uses `requestAnimationFrame`
2. Scroll listeners are debounced
3. Animations use Framer Motion's optimizations
4. Images use native browser lazy loading
5. CSS animations leverage GPU with `will-change`

## 🚀 Deployment

Deploy to Vercel with one click:
```bash
pnpm build
# Deploy the .next folder to Vercel
```

## 📝 License

Built with v0 - Vercel's AI assistant

---

**Built with ❤️ and gold accents for the EchoCore community**
