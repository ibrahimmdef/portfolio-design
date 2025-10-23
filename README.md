# Photography Portfolio Website 📸

A minimalist, elegant photography portfolio website built as a frontend development project. Features modern design patterns, smooth animations, and responsive layouts using pure HTML, CSS, and JavaScript.

## 🚀 Features

- ✅ Responsive design that works on all devices
- ✅ Smooth scroll animations and fade-in effects
- ✅ Modern mobile navigation menu
- ✅ Elegant masonry-style photo gallery
- ✅ Hover effects on gallery images
- ✅ Fixed header with gradient overlay
- ✅ Smooth scrolling between sections
- ✅ Professional dark theme aesthetic
- ✅ Optimized for performance

## 📸 Preview

A photography portfolio website featuring:
- Hero section with striking typography
- 12-image responsive gallery with hover effects
- About section with photographer bio
- Contact section with social media links
- Mobile-friendly navigation

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with animations, gradients, and grid layout
- **Vanilla JavaScript** - Scroll animations and mobile menu functionality

## 📦 Installation

### Quick Start

1. Clone the repository:
```bash
git clone https://github.com/ibrahimmdef/portfolio-design.git
cd photography-portfolio
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

3. Navigate to `http://localhost:8000` in your browser

## 📁 Project Structure

```
portfolio-design/
├── src/
│   ├── images/          # Gallery photographs
│   │   ├── Land1.jpg
│   │   ├── Land2.jpg
│   │   ├── Land3.JPG
│   │   └── ... (12 images total)
│   ├── app.js          # JavaScript functionality
│   ├── style.css       # Styling and animations
│   └── index.html      # Main HTML structure
└── README.md           # This file
```

## 🎨 Customization

### Adding Your Own Photos

Replace the images in the `src/images/` folder with your own photographs. Update the image references in `index.html`:

```html
<div class="gallery-item fade-in">
  <img src="./images/your-photo.jpg" alt="Photo description" />
</div>
```

### Changing Colors

Edit the color scheme in `style.css`:

```css
body {
  background-color: #000;  /* Change background */
  color: #fff;             /* Change text color */
}
```

### Updating Content

Modify the about section in `index.html`:

```html
<section id="about" class="about fade-in">
  <h2>ABOUT</h2>
  <p>Your bio text here...</p>
</section>
```

### Contact Links

Update social media links in the contact section:

```html
<a href="mailto:your-email@example.com">EMAIL</a>
<a href="https://instagram.com/your-handle" target="_blank">INSTAGRAM</a>
<a href="https://behance.net/your-profile" target="_blank">BEHANCE</a>
```

## 🎯 Features Breakdown

### Responsive Navigation
- Desktop: Horizontal menu in header
- Mobile: Hamburger menu with slide-in panel
- Auto-close on link click

### Scroll Animations
- Fade-in effects on gallery items
- Smooth scrolling between sections
- Trigger animations at 80% viewport height

### Gallery Grid
- Auto-fit layout adapts to screen size
- Minimum column width: 350px
- Hover zoom effect on images
- Gradient overlay on hover

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Learning Resources

This project demonstrates:
- CSS Grid for responsive layouts
- CSS animations and transitions
- JavaScript DOM manipulation
- Intersection Observer API patterns
- Mobile-first responsive design
- Modern CSS techniques (gradients, transforms)

## 👤 Developer

- GitHub: [@ibrahimmdef](https://github.com/ibrahimmdef)


## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you have suggestions for improvements:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## ⭐ Support

If you found this portfolio template helpful, please give it a star on GitHub!

---

**Portfolio Tip**: Keep your portfolio updated with your best work. Quality over quantity - showcase only your finest photographs that represent your unique style and vision! 🌟
