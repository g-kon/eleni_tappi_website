---
name: Clinical Vitality
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#554334'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#887361'
  outline-variant: '#dbc2ad'
  surface-tint: '#8c5000'
  primary: '#8c5000'
  on-primary: '#ffffff'
  primary-container: '#ff9500'
  on-primary-container: '#643700'
  inverse-primary: '#ffb874'
  secondary: '#4658ac'
  on-secondary: '#ffffff'
  secondary-container: '#92a3fd'
  on-secondary-container: '#223589'
  tertiary: '#006970'
  on-tertiary: '#ffffff'
  tertiary-container: '#52bec7'
  on-tertiary-container: '#004a4f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcbf'
  primary-fixed-dim: '#ffb874'
  on-primary-fixed: '#2d1600'
  on-primary-fixed-variant: '#6a3b00'
  secondary-fixed: '#dee1ff'
  secondary-fixed-dim: '#b9c3ff'
  on-secondary-fixed: '#001258'
  on-secondary-fixed-variant: '#2d3f93'
  tertiary-fixed: '#8af3fc'
  tertiary-fixed-dim: '#6cd6df'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 1.5rem
  margin-mobile: 1rem
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 3rem
  section-padding: 5rem
---

## Brand & Style
The brand personality is **Professional, Clinical, and Approachable**. This design system balances medical authority with the warmth of personal wellness. It targets individuals seeking expert nutritional guidance, requiring a UI that feels safe, organized, and scientifically backed yet easy to navigate.

The aesthetic follows a **Corporate / Modern** style with a focus on high-quality whitespace and precision. It avoids the coldness of traditional medical software by utilizing soft shadows and the vibrant, citrus-inspired primary orange to evoke health and energy. The visual mood is crisp, airy, and trustworthy.

## Colors
The palette is rooted in medical professionalism and nutritional vitality.
- **Primary (Orange):** Derived from the citrus logo, used for primary calls-to-action, success states, and key highlights. It represents health and energy.
- **Secondary (Dark Blue):** Sourced from the GeSY logo to establish authority, trust, and clinical expertise. Used for headings and primary navigation.
- **Tertiary (Teal):** A secondary accent to provide a calming, hygienic feel. Used for supporting UI elements and links.
- **Neutral (Slate/Off-white):** A range of cool grays provides a clean backdrop, ensuring the orange and blue pop without overwhelming the user.

## Typography
The system uses a pairing of **Montserrat** for headlines to provide a confident, modern structure, and **Inter** for body text to ensure maximum legibility, especially for scientific or nutritional data.

As the site is bilingual (Greek/English), these fonts were chosen for their excellent character support across both alphabets. Headlines use a tighter letter-spacing for a professional, "editorial" look. Body text maintains a generous line height (1.6) to prevent eye fatigue during long-form reading of dietary plans or articles.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a max-width container to maintain readability on ultra-wide monitors.
- **Desktop:** 12-column grid with 24px gutters.
- **Mobile:** Single column with 16px side margins.

A "Vertical Rhythm" is established using a base-8 scale. Sections are separated by significant padding (80px+) to emphasize the clinical, "airy" feel. Information-heavy pages (like meal plans) should use nested spacing to group related data points clearly.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Ambient Shadows**. Surfaces should feel like clean, white paper or clinical glass.
- **Elevation 0:** Background neutral (#F8F9FA).
- **Elevation 1:** White cards with a subtle 1px border (#E9ECEF) or a very soft, diffused 10% opacity shadow.
- **Elevation 2:** Used for hover states or modals, featuring a slightly deeper shadow with a hint of the secondary blue tint to ground the element.
Shadows are never harsh; they are extra-diffused to maintain the "approachable" aspect of the brand.

## Shapes
The design system utilizes **Rounded** shapes (0.5rem) to soften the clinical edge of the site. This makes the UI feel friendly and inviting.
- **Standard UI:** 8px radius for buttons, inputs, and cards.
- **Large Components:** 16px radius for hero sections or main containers.
- **Interactive Elements:** Buttons use the standard radius; pill-shaped buttons are reserved exclusively for "Language Toggle" or "Quick Filters" to differentiate them from primary actions.

## Components
- **Buttons:** Primary buttons are Solid Orange with White text. Secondary buttons use the Dark Blue outline with Blue text. All buttons have an 8px radius and a slight lift on hover.
- **Cards:** White background, 8px radius, subtle 1px border. Cards for "Services" feature a top-accent border in either Orange or Teal.
- **Input Fields:** Minimalist style with a light gray background and a 2px blue bottom border on focus. Labels sit above the field in Montserrat Bold (Small).
- **Language Switcher:** A clean, pill-shaped toggle in the top-right navigation. The active language is highlighted in the primary orange.
- **Chips/Badges:** Used for nutritional categories (e.g., "Gluten-Free," "High Protein"). These use light tinted backgrounds of the primary or tertiary colors with dark text.
- **Lists:** Bullet points are replaced with custom "Orange Check" icons to reinforce a sense of health and achievement.