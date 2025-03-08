# Rabzhamel Portfolio Website

A sleek, modern, and minimalist one-page portfolio website showcasing professional experience in production, logistics, and creative solutions.

## Features

- Responsive design that works on all devices (mobile, tablet, desktop)
- Smooth scroll navigation
- Animated sections that appear as you scroll
- Interactive elements with hover effects
- Contact form
- Mobile-friendly navigation

## Technologies Used

- HTML5
- CSS3 (with CSS variables for easy customization)
- JavaScript (vanilla, no frameworks)
- Font Awesome for icons
- Google Fonts (Montserrat)

## Structure

The website consists of the following sections:

1. **Hero Section** - Full-screen introduction with a bold tagline
2. **About Section** - Information about professional background and key skills
3. **Services Section** - Grid layout of services offered
4. **Experience Section** - Highlights of past projects and achievements
5. **Showcase Section** - Brands worked with, displayed in a grid
6. **Contact Section** - Contact form and direct contact information

## Customization

### Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
    --primary-color: #000000;
    --secondary-color: #333333;
    --accent-color: #555555;
    --background-light: #ffffff;
    --background-dark: #1a1a1a;
    --text-light: #ffffff;
    --text-dark: #000000;
    --text-grey: #777777;
    /* ... other variables ... */
}
```

### Images

Replace the placeholder image in the hero section by changing the URL in the `.overlay` class in `styles.css`:

```css
.overlay {
    /* ... other properties ... */
    background: url('your-image-url-here') no-repeat center center;
    /* ... other properties ... */
}
```

## Browser Compatibility

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Setup

1. Clone or download the repository
2. Open `index.html` in your browser

## License

This project is available for personal and commercial use.

## Contact

For any questions or inquiries, please contact:
- Email: rabzhamel@gmail.com
- Phone: +77473130199 