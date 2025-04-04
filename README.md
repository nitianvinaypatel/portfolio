# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a sleek design, dark mode support, and interactive UI components.

![Portfolio Preview](public/preview.png)

## 🌟 Features

- **Modern UI/UX**

  - Responsive design for all devices
  - Smooth animations and transitions
  - Dark/Light mode support
  - Interactive skill cards and project showcases

- **Technical Stack**

  - Next.js 14 with App Router
  - TypeScript for type safety
  - Tailwind CSS for styling
  - Framer Motion for animations

- **Key Components**
  - Interactive Skills Showcase
  - Project Portfolio
  - Experience Timeline
  - Contact Form
  - Animated Testimonials
  - Achievement Highlights

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies

```bash
pnpm install
# or
npm install
```

3. Run the development server

```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Project Structure

```
portfolio/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── Skills.tsx      # Skills showcase
│   ├── Experience.tsx  # Experience section
│   ├── Projects.tsx    # Projects grid
│   └── ...            # Other components
├── public/             # Static assets
└── styles/            # Global styles
```

## 📱 Key Features Breakdown

### Skills Showcase

- Interactive skill cards with hover effects
- Categorized skill display
- Progress indicators and experience metrics
- Smooth animations

### Project Portfolio

- Project cards with live demos
- GitHub repository links
- Technology stack display
- Responsive grid layout

### Experience Timeline

- Professional experience showcase
- Educational background
- Interactive timeline
- Achievement highlights

### Contact Section

- Interactive contact form
- Social media links
- Professional email integration
- Real-time form validation

## 🎨 Customization

### Theme

Edit the theme in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {...},
        secondary: {...}
      }
    }
  }
}
```

### Content

Update your personal information in the respective component files:

- Skills: `components/Skills.tsx`
- Projects: `components/Projects.tsx`
- Experience: `components/Experience.tsx`

## 📦 Dependencies

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Next Themes
- Other UI components

## 🔧 Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🚀 Deployment

This project can be deployed on:

- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
