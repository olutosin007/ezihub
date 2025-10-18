# Full Colour Palette - ézíhub Website

## Current Template Colors (GoStartup)

### Primary Brand Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Primary Blue** | `#4a6cf7` | rgb(74, 108, 247) | Primary brand color, buttons, links, hover states |
| **White** | `#ffffff` | rgb(255, 255, 255) | Background (light mode), text on dark backgrounds |

---

### Dark Mode Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Dark Background** | `#111722` | rgb(17, 23, 34) | Main dark background |
| **Dark Card/Section** | `#1D232D` | rgb(29, 35, 45) | Card backgrounds, form containers in dark mode |
| **Dark Secondary** | `#2C3443` | rgb(44, 52, 67) | Secondary elements, submenu backgrounds, borders |
| **Dark Tertiary** | `#222C40` | rgb(34, 44, 64) | Sign up button, accent elements |

---

### Text & Neutral Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Dark Text** | `#79808a` | rgb(121, 128, 138) | Secondary text, muted text |
| **Stroke/Border** | `#e5e7eb` | rgb(229, 231, 235) | Borders, dividers (light mode) |

---

### Border & Divider Colors (Dark Mode)

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Dark Border 1** | `#2E333D` | rgb(46, 51, 61) | Section dividers, horizontal rules |
| **Dark Border 2** | `#414652` | rgb(65, 70, 82) | Form checkboxes, input borders |
| **Dark Border 3** | `#4B4E56` | rgb(75, 78, 86) | Tab borders, navigation borders |
| **Dark Border 4** | `#1F2633` | rgb(31, 38, 51) | Search input borders |

---

### Accent & Overlay Colors

| Color Name | Hex Code | RGB/RGBA | Usage |
|------------|----------|----------|-------|
| **Light Overlay** | `#EEF1FDEB` | rgba(238, 241, 253, 0.92) | Overlay backgrounds (light mode) |
| **Dark Overlay** | `#1D232DD9` | rgba(29, 35, 45, 0.85) | Overlay backgrounds (dark mode) |
| **Subtle Gray** | `#d9d9d9` | rgb(217, 217, 217) | Footer text, secondary information |
| **Slate Divider** | `#e9e9e9` | rgb(233, 233, 233) | Subtle dividers (30% opacity) |
| **Light Gray BG** | `#f8f8f8` | rgba(248, 248, 248, 0.15) | Social media icon backgrounds |

---

### Gradients

#### Primary Gradient (Title Effect)
```css
background: linear-gradient(
  180deg,
  rgba(74, 108, 247, 0.4) 0%,
  rgba(74, 108, 247, 0) 100%
);
```
- **Usage**: Background text effect for large titles
- **Note**: Has commented dark mode variant with white gradient

#### Dark Mode Title Gradient (Commented)
```css
/* .dark .title {
  background: linear-gradient(
    180deg, 
    rgba(255, 255, 255, 0.4) 0%, 
    rgba(255, 255, 255, 0) 100%
  );
} */
```

---

### Shadow & Effects

| Effect Name | CSS Value | Usage |
|-------------|-----------|-------|
| **Light Drop Shadow** | `drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.1))` | Subtle shadows |
| **Inset Border Shadow** | `inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)` | Sticky header bottom border |

---

## Color Usage by Context

### Buttons
- **Primary CTA**: `#4a6cf7` (Primary Blue)
- **Secondary CTA**: `#222C40` (Dark Tertiary)
- **Hover States**: Primary with 90% opacity or full white

### Forms
- **Input Borders (Light)**: Default browser gray
- **Input Borders (Dark)**: `#2C3443`
- **Focus State**: `#4a6cf7` (Primary) or white in dark mode
- **Placeholder Text**: `#79808a` (Dark Text)

### Navigation
- **Header Background (Light)**: White/Transparent
- **Header Background (Dark)**: `#111722` (Dark Background)
- **Menu Text**: `#79808a` with hover to `#4a6cf7`
- **Submenu Background (Dark)**: `#2C3443`

### Cards & Sections
- **Light Mode**: White background
- **Dark Mode**: `#1D232D` for cards, `#111722` for sections

---

## ézíhub Brand Colors

> **Brand Philosophy**: "Our colour palette visually and tangibly expresses our values. We are: trustworthy, professional and secure. We are also human, helpful and aspirational."

### Primary Palette

| Color Name | Hex Code | RGB | Brand Value | Suggested Usage |
|------------|----------|-----|-------------|-----------------|
| **Trusted Blue** | `#1f6db5` | rgb(31, 109, 181) | Trustworthy, Professional | Primary CTA buttons, main brand elements |
| **Sensei Blue** | `#0f315b` | rgb(15, 49, 91) | Secure, Authority | Dark sections, headers, navigation |

### Secondary Palette

| Color Name | Hex Code | RGB | Brand Value | Suggested Usage |
|------------|----------|-----|-------------|-----------------|
| **Parchment** | `#f7f5f2` | rgb(247, 245, 242) | Clean, Neutral | Light backgrounds, cards |
| **Crème Latte** | `#f7e5cc` | rgb(247, 229, 204) | Warm, Human | Accent backgrounds, highlights |
| **Craft Brown** | `#d0ad7b` | rgb(208, 173, 123) | Authentic, Crafted | Secondary buttons, borders |
| **Success Gold** | `#ce9d08` | rgb(206, 157, 8) | Achievement, Success | Success states, achievements |

### Extended Palette

| Color Name | Hex Code | RGB | Brand Value | Suggested Usage |
|------------|----------|-----|-------------|-----------------|
| **Minted Green** | `#e3f2e6` | rgb(227, 242, 230) | Fresh, Growth | Success backgrounds, checkmarks |
| **Growth Green** | `#89cd98` | rgb(137, 205, 152) | Prosperity, Progress | Growth indicators, positive feedback |
| **Evergreen** | `#28a745` | rgb(40, 167, 69) | Stability, Success | Success buttons, confirmations |
| **Cool Slate** | `#e9ecef` | rgb(233, 236, 239) | Neutral, Modern | Subtle borders, dividers |
| **Graphite** | `#343a40` | rgb(52, 58, 64) | Professional, Serious | Dark text, secondary elements |
| **Insight Lavender** | `#ebe6f9` | rgb(235, 230, 249) | Wisdom, Insight | Feature highlights, tips |
| **Aspiration Purple** | `#8f7cc4` | rgb(143, 124, 196) | Aspirational, Premium | Premium features, special offers |
| **Mastery Indigo** | `#4d309f` | rgb(77, 48, 159) | Expertise, Mastery | Expert content, advanced features |

### Neutral Colors

| Color Name | Hex Code | RGB | Brand Value | Suggested Usage |
|------------|----------|-----|-------------|-----------------|
| **White** | `#ffffff` | rgb(255, 255, 255) | Clean, Pure | Primary backgrounds, contrast |
| **Black** | `#000000` | rgb(0, 0, 0) | Authority, Bold | Primary text, strong contrast |

---

## Color Harmony Analysis

### Template vs ézíhub Brand Colors

**Template Characteristics:**
- **Primary**: Bright blue (#4a6cf7) - Tech-focused, energetic
- **Dark Theme**: Deep navy/charcoal range - Modern, sophisticated
- **Temperature**: Cool palette (blues, grays) - Professional and calming

**ézíhub Brand Characteristics:**
- **Primary**: Deeper blues (#1f6db5, #0f315b) - More trustworthy, professional
- **Secondary**: Warm earth tones (browns, golds) - Human, authentic
- **Extended**: Full spectrum (greens, purples) - Comprehensive, versatile
- **Temperature**: Balanced warm/cool - Professional yet approachable

### Recommended Color Mapping

**Primary Brand Colors:**
- Replace template `#4a6cf7` with ézíhub `#1f6db5` (Trusted Blue)
- Use `#0f315b` (Sensei Blue) for dark mode headers/navigation

**Accent Colors:**
- Use `#ce9d08` (Success Gold) for achievements/success states
- Use `#d0ad7b` (Craft Brown) for secondary buttons/borders
- Use `#f7e5cc` (Crème Latte) for warm highlights

**State Colors:**
- Success: `#28a745` (Evergreen) or `#89cd98` (Growth Green)
- Warning: `#ce9d08` (Success Gold)
- Info: `#1f6db5` (Trusted Blue)
- Error: Keep red from standard palette

**Background Variations:**
- Light: `#f7f5f2` (Parchment) for subtle warmth
- Neutral: `#e9ecef` (Cool Slate) for borders
- Dark: `#0f315b` (Sensei Blue) or `#343a40` (Graphite)

---

## Implementation Reference

### CSS Custom Properties (Current)
```css
--color-current: currentColor;
--color-transparent: transparent;
--color-white: #ffffff;
--color-primary: #4a6cf7;
--color-dark-text: #79808a;
--color-dark: #111722;
--color-stroke: #e5e7eb;
```

### Recommended Extended Variables (ézíhub Brand)
```css
/* Primary Brand Colors */
--color-trusted-blue: #1f6db5;
--color-sensei-blue: #0f315b;

/* Secondary Brand Colors */
--color-parchment: #f7f5f2;
--color-creme-latte: #f7e5cc;
--color-craft-brown: #d0ad7b;
--color-success-gold: #ce9d08;

/* Extended Brand Colors */
--color-minted-green: #e3f2e6;
--color-growth-green: #89cd98;
--color-evergreen: #28a745;
--color-cool-slate: #e9ecef;
--color-graphite: #343a40;
--color-insight-lavender: #ebe6f9;
--color-aspiration-purple: #8f7cc4;
--color-mastery-indigo: #4d309f;

/* Neutral Colors */
--color-white: #ffffff;
--color-black: #000000;
```

---

## Next Steps

1. ✅ Document all existing colors from template
2. ✅ Receive and analyze brand color image
3. ✅ Add brand colors to this palette
4. ✅ Create color harmony analysis
5. ✅ Define usage guidelines for new colors
6. ✅ Update CSS custom properties with extended palette
7. ⏳ Apply brand colors to website (replace template colors)
8. ⏳ Test color contrast ratios for accessibility
9. ⏳ Create component-specific color usage guidelines

---

*Document Created: October 11, 2025*  
*Last Updated: October 11, 2025*  
*Status: Ready for implementation*

