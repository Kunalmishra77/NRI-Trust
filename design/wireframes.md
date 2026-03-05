# NRI Trust - Design Blueprint & Wireframes

## Color System

### Primary Palette
```css
/* Deep Navy - Trust & Professionalism */
--primary: 222 47% 25%;        /* #1e3a5f - Main brand */
--primary-light: 222 47% 35%;  /* Hover states */
--primary-dark: 222 47% 18%;   /* Active states */

/* Golden Amber - Action & Warmth */
--accent: 38 95% 50%;          /* #f59e0b - CTAs */
--accent-light: 38 95% 60%;    /* Hover */
--accent-dark: 38 95% 40%;     /* Active */

/* Neutrals */
--background: 210 20% 98%;     /* Light warm gray */
--foreground: 222 20% 15%;     /* Near black */
--muted: 210 15% 45%;          /* Secondary text */
--border: 210 15% 88%;         /* Subtle borders */

/* Semantic */
--success: 142 76% 36%;        /* Green checkmarks */
--destructive: 0 84% 45%;      /* Red X marks */
```

## Typography Scale

### Font Family
- **Headings**: Inter (700 weight)
- **Body**: Inter (400, 500 weights)
- **Accent/Numbers**: DM Sans (500 weight)

### Size Scale (Desktop / Tablet / Mobile)
```
Hero H1:       72px / 56px / 40px
Section H2:    48px / 40px / 32px
Card H3:       24px / 22px / 20px
Body Large:    20px / 18px / 18px
Body:          16px / 16px / 16px
Small/Caption: 14px / 14px / 13px
Micro:         12px / 12px / 12px
```

### Line Heights
- Headings: 1.1 - 1.2
- Body: 1.5 - 1.7
- Tight: 1.3

## Spacing Tokens

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 96px;

/* Section Padding */
--section-y: 80px (mobile: 48px);
--section-x: 24px (desktop: 64px);
```

## CTA Hierarchy Rules

### Primary CTA (Golden/Amber)
- Background: gradient from accent to accent-dark
- Text: White, bold
- Size: Large (h-12, px-8)
- Shadow: Soft glow
- Usage: "Book Free Consultation", "Get Started"
- Limit: 1-2 per viewport

### Secondary CTA (Outline)
- Background: Transparent
- Border: Primary color
- Text: Primary color
- Size: Default (h-10, px-6)
- Usage: "Learn More", "Watch Video"

### Tertiary CTA (Ghost)
- Background: Transparent
- Text: Muted color
- Underline on hover
- Usage: Footer links, inline links

## Emotional UX Elements for NRIs

### Trust Signals
1. **Badge Bar** - Immediately below hero
   - FEMA Compliant (shield icon)
   - ₹5 Cr Insured (rupee icon)
   - 200+ Families (family icon)
   - Since 2020 (calendar icon)

2. **Testimonial Credibility**
   - Real names + City + Country
   - Specific outcomes mentioned
   - Star ratings prominent

3. **Security Indicators**
   - Lock icons near forms
   - "Your data is encrypted" message
   - Privacy policy link near submit

### Emotional Connection Points
1. **Pain Recognition** - "We understand the guilt..."
2. **Outcome Focus** - "Finally sleep peacefully..."
3. **Family Imagery** - Warm, authentic photos
4. **Cultural Sensitivity** - Festival mentions, Indian context

## Component Wireframes

### Header (Sticky)
```
┌──────────────────────────────────────────────────────────────┐
│  [Logo] NRI TRUST  │  Services  How It Works  Pricing  │ [CTA] │
├──────────────────────────────────────────────────────────────┤
│  ✓ 200+ Families  │  ⭐ 4.9 Rating  │  🔒 Fully Insured    │
└──────────────────────────────────────────────────────────────┘
```

### Hero Section
```
┌──────────────────────────────────────────────────────────────┐
│                    [Background Image]                        │
│                    Dark gradient overlay                     │
│                                                              │
│           You're Building Your Life Abroad.                 │
│        We're Protecting Your Legacy at Home.                │
│                                                              │
│    Complete parent care + asset management for NRIs          │
│                                                              │
│        [Book Free Consultation]  [Watch Video]               │
│                                                              │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐            │
│  │ FEMA   │  │₹5 Crore│  │ Since  │  │  200+  │            │
│  │Compliant│ │Insured │  │ 2020   │  │Families│            │
│  └────────┘  └────────┘  └────────┘  └────────┘            │
└──────────────────────────────────────────────────────────────┘
```

### Pain Points Section
```
┌──────────────────────────────────────────────────────────────┐
│        If You're an NRI, This Keeps You Up at Night...      │
│                                                              │
│  ┌─────────────────┐    ┌─────────────────┐                 │
│  │  Parent Worries │    │  Asset Worries  │                 │
│  │  ┌───────────┐  │    │  ┌───────────┐  │                 │
│  │  │ 😟 Health │  │    │  │ 🏠 Property│  │                 │
│  │  │ 😟 Safety │  │    │  │ 💰 Tenants │  │                 │
│  │  │ 😟 Lonely │  │    │  │ 📋 Legal   │  │                 │
│  │  └───────────┘  │    │  └───────────┘  │                 │
│  └─────────────────┘    └─────────────────┘                 │
└──────────────────────────────────────────────────────────────┘
```

### Services Section
```
┌──────────────────────────────────────────────────────────────┐
│         NRI Trust = One Trusted Partner For You              │
│                                                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐             │
│  │  ❤️ PARENT │  │ 🏠 ASSET   │  │ 🛡️ LEGACY  │             │
│  │    CARE    │  │ MANAGEMENT │  │ PROTECTION │             │
│  │            │  │            │  │            │             │
│  │ • Wellness │  │ • Tenant   │  │ • Estate   │             │
│  │ • Health   │  │ • Maintain │  │ • Wills    │             │
│  │ • Emergency│  │ • Rent     │  │ • Tax      │             │
│  └────────────┘  └────────────┘  └────────────┘             │
└──────────────────────────────────────────────────────────────┘
```

### Pricing Section
```
┌──────────────────────────────────────────────────────────────┐
│          Choose the Care Your Family Deserves                │
│                                                              │
│  ┌──────────┐  ┌──────────────┐  ┌──────────┐               │
│  │ ESSENTIAL│  │[MOST POPULAR]│  │  PREMIUM │               │
│  │          │  │COMPREHENSIVE │  │  LEGACY  │               │
│  │ ₹24,900  │  │   ₹49,900   │  │ ₹83,250  │               │
│  │  /month  │  │    /month    │  │  /month  │               │
│  │          │  │              │  │          │               │
│  │ ✓ Basic  │  │ ✓ Everything │  │ ✓ All +  │               │
│  │ ✓ Checks │  │ ✓ + Premium │  │ ✓ Estate │               │
│  │          │  │              │  │ ✓ Legal  │               │
│  │ [Select] │  │   [Select]   │  │ [Select] │               │
│  └──────────┘  └──────────────┘  └──────────┘               │
└──────────────────────────────────────────────────────────────┘
```

### Testimonials Section
```
┌──────────────────────────────────────────────────────────────┐
│         Real NRI Families. Real Peace of Mind.               │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  "Finally sleeping peacefully knowing Mom is cared for" │ │
│  │                                                         │ │
│  │  ⭐⭐⭐⭐⭐                                               │ │
│  │  [Photo] Priya K. • Software Engineer • San Francisco   │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   Rajesh S.  │  │   Anita M.   │  │   Vikram P.  │       │
│  │   Singapore  │  │    London    │  │    Dubai     │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
└──────────────────────────────────────────────────────────────┘
```

### Consultation Form
```
┌──────────────────────────────────────────────────────────────┐
│             Book Your Free Consultation                      │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  🔒 Your information is secure and confidential         ││
│  │                                                          ││
│  │  Full Name *        [_________________________]          ││
│  │  Email *            [_________________________]          ││
│  │  Phone *            [+91] [____________________]         ││
│  │  Country *          [Select country      ▼]             ││
│  │  Service Interest   [Select service      ▼]             ││
│  │  Message            [_________________________]          ││
│  │                     [_________________________]          ││
│  │                                                          ││
│  │  ☐ I agree to receive communications from NRI Trust     ││
│  │                                                          ││
│  │         [🗓️ Schedule My Free Consultation]               ││
│  │                                                          ││
│  │  ⏰ Average response time: Under 4 hours                 ││
│  └─────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────┘
```

### Footer
```
┌──────────────────────────────────────────────────────────────┐
│  [Logo] NRI TRUST                                           │
│  Your Parents. Your Assets. Our Promise.                     │
│                                                              │
│  Services        Company        Resources       Contact      │
│  • Parent Care   • About Us     • Blog          📞 +91 XXX  │
│  • Assets        • How It Works • FAQs          ✉️ hello@   │
│  • Legacy        • Careers      • Guides        📍 Mumbai   │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│  © 2024 NRI Trust  │  Privacy  │  Terms  │  [Social Icons]  │
│  FEMA Compliant • ₹5 Crore Insured • Serving Since 2020     │
└──────────────────────────────────────────────────────────────┘
```

---

## Implementation Priority

1. **Header/Footer** - Foundation for navigation
2. **Hero** - First impression, emotional hook
3. **Trust Bar** - Immediate credibility
4. **Pain Points** - Problem awareness
5. **Services** - Solution introduction
6. **How It Works** - Process clarity
7. **Pricing** - Decision enablement
8. **Testimonials** - Social proof
9. **Form** - Conversion point
10. **Why Us** - Final objection handling

---

**Design blueprint complete. Proceeding to implementation.**
