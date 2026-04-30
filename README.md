[README.md](https://github.com/user-attachments/files/27235781/README.md)
# Portfolio - Refactored to Professional Standards

A clean, semantic, and modular frontend portfolio built with HTML5, CSS3, and vanilla JavaScript.

## 📁 Project Structure

```
Portfolio/
├── index.html                 # Home page (entry point)
├── pages/                     # All other pages
│   ├── about.html
│   ├── skills.html
│   ├── projects.html
│   └── contact.html
├── assets/
│   ├── assets/               # All images go here
│   ├── styles/
│   │   ├── main.css          # ⭐ MAIN IMPORT FILE - link only this in HTML
│   │   ├── variables.css     # Design tokens (colors, spacing, fonts, etc.)
│   │   ├── reset.css         # Global base styles
│   │   ├── layout/
│   │   │   ├── header.css    # Header and navigation
│   │   │   ├── footer.css    # Footer styles
│   │   │   └── responsive.css # Main layout and responsive utilities
│   │   └── components/
│   │       ├── buttons.css   # Button styles
│   │       └── cards.css     # Card component styles
│   └── js/
│       ├── main.js           # Main entry point
│       └── modules/
│           ├── navigation.js # Hamburger menu handler
│           └── projects.js   # Project interactions
├── assets/                   # Old images folder (will move to assets/images)
└── README.md                # This file
```

## 🎯 Key Improvements

### HTML

- ✅ **Semantic HTML5**: Uses `<nav>`, `<article>`, `<section>`, `<main>`, `<header>`, `<footer>`
- ✅ **Accessibility**: Includes ARIA labels, alt text, proper heading hierarchy
- ✅ **No Duplication**: Same header/footer structure on all pages (maintained consistently)
- ✅ **Clean Structure**: Organized with clear sections and semantic meaning
- ✅ **Event-Driven**: Replaced inline `onclick` with JavaScript event listeners

### CSS

- ✅ **Single Entry Point**: Link only `assets/styles/main.css` in HTML
- ✅ **Design System**: All colors, spacing, and typography defined in `variables.css`
- ✅ **Modular Organization**: Separated by responsibility (layout, components)
- ✅ **No Duplication**: Resets and base styles defined once
- ✅ **Easy Theming**: Change a variable once, updates everywhere
- ✅ **Responsive**: Mobile-first approach with proper breakpoints
- ✅ **Naming Convention**: Consistent, semantic class names

**CSS Variables Available:**

```css
/* Colors */
--color-primary, --color-secondary, --color-accent, --color-text, --color-text-light

/* Shadows */
--shadow-sm, --shadow-md, --shadow-lg, --shadow-xl, --shadow-inner

/* Spacing */
--spacing-xs through --spacing-3xl (predefined values)

/* Typography */
--font-primary, --font-display, --font-mono
--font-size-sm through --font-size-6xl

/* Transitions */
--transition-fast, --transition-normal, --transition-slow
```

### JavaScript

- ✅ **Modular**: Separate modules for different features
- ✅ **Event Handlers**: Proper event listeners instead of inline JS
- ✅ **Clean Code**: Well-organized, maintainable structure
- ✅ **Accessible**: Handles keyboard and mouse interactions

## 🚀 How to Maintain

### Changing Colors

Edit `assets/styles/variables.css`:

```css
--color-primary: #1e1e1e; /* Change this */
--color-accent: #4cc9f0; /* Updates everywhere! */
```

### Adding New Styles

1. **For new components**: Create a new file in `assets/styles/components/`
2. **For layout changes**: Update `assets/styles/layout/responsive.css`
3. **Always import in `main.css`**:

```css
@import url("components/my-new-component.css");
```

### Moving Images

1. Place images in `assets/` instead of `assets/`
2. Update image paths to `../assets/filename.jpg`
3. Remember to use relative paths based on file location

### Adding New Pages

1. Create HTML in `pages/` folder
2. Use consistent header/footer structure (copy from another page)
3. Update navigation links in all pages if adding new nav item
4. Link to `../assets/styles/main.css`
5. Include JavaScript modules as needed

## 📱 Responsive Breakpoints

```css
Mobile First (< 600px)   - Single column, full width
Tablet (600px - 900px)   - 2 columns where applicable
Desktop (900px+)         - 3 columns for cards
Large (1200px+)          - Full layout with max-width
```

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels (`aria-label`, `aria-labelledby`)
- Alt text for all images
- Proper heading hierarchy (h1 → h6)
- Focus states on buttons and links
- Keyboard navigation support
- Color contrast compliant

## 🔧 Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Variables, Grid, Flexbox, Media Queries
- **JavaScript (Vanilla)**: No dependencies, lightweight
- **Icons**: Font Awesome, Devicons
- **Font**: Roboto (imported from system)

## 📝 Best Practices Applied

1. **DRY (Don't Repeat Yourself)**: Variables and imports eliminate duplication
2. **Separation of Concerns**: HTML, CSS, JS properly separated
3. **Performance**: Single CSS import, lazy loading on images
4. **Maintainability**: Clear structure, easy to find and modify code
5. **Scalability**: Easy to add new components and pages
6. **Accessibility**: WCAG compliance in mind

## 🎓 Learning Resources

This refactored portfolio demonstrates:

- Semantic HTML5 best practices
- CSS custom properties (variables)
- Modular CSS organization
- Responsive design patterns
- Vanilla JavaScript module pattern
- Accessibility standards (ARIA, semantic markup)

---

**Last Updated**: April 2025
**Status**: Professional-grade structure
