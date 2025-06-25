# My Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS. This is a static website with all content hardcoded for easy deployment and maintenance.

## 🚀 Features

- **Fully Static**: No database or API calls required
- **Responsive Design**: Works perfectly on all devices
- **Dark Mode Support**: Automatic dark/light mode switching
- **Modern UI**: Beautiful animations and smooth transitions
- **Easy to Customize**: All content is in simple JavaScript objects

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with your intro
│   │   ├── About.jsx         # About section with your info
│   │   ├── Skills.jsx        # Skills section with your tech stack
│   │   ├── Projects.jsx      # Projects section with your work
│   │   ├── Contact.jsx       # Contact section with your details
│   │   ├── Footer.jsx        # Footer with links and info
│   │   └── Navbar.jsx        # Navigation bar
│   ├── globals.css           # Global styles
│   ├── layout.js             # Root layout
│   └── page.js               # Main page
├── assets/                   # Images and icons
└── public/                   # Static files
```

## ✏️ How to Edit Content

### 1. Personal Information (Hero & About Sections)

Edit `app/components/Hero.jsx`:
```javascript
const profile = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio description",
  resume: "/path-to-your-resume.pdf",
  nicely: assets.nicely
};
```

Edit `app/components/About.jsx`:
```javascript
const profile = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your detailed bio",
  email: "your.email@example.com",
  phone: "+1 234 567 8900",
  location: "Your City, Country",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername"
};
```

### 2. Skills Section

Edit `app/components/Skills.jsx`:
```javascript
const skills = [
  {
    _id: '1',
    name: 'Skill Name',
    category: 'frontend', // frontend, backend, database, devops, design, other
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/skill/skill-original.svg',
    proficiency: 90, // 1-100
    color: '#HEXCODE'
  },
  // Add more skills...
];
```

**Available Categories:**
- `frontend` - Frontend technologies
- `backend` - Backend technologies  
- `database` - Database technologies
- `devops` - DevOps tools
- `design` - Design tools
- `other` - Other skills

**Icon URLs:** You can find technology icons at [Devicon](https://devicon.dev/) or use any image URL.

### 3. Projects Section

Edit `app/components/Projects.jsx`:
```javascript
const projects = [
  {
    _id: '1',
    title: 'Project Title',
    shortDescription: 'Brief project description',
    longDescription: 'Detailed project description',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    image: '/work-1.png', // Image in public folder
    liveUrl: 'https://project-demo.com', // or null if no live demo
    githubUrl: 'https://github.com/yourusername/project',
    category: 'web', // web, mobile, design, other
    featured: true // true for featured projects
  },
  // Add more projects...
];
```

**Available Categories:**
- `web` - Web applications
- `mobile` - Mobile applications
- `design` - Design projects
- `other` - Other projects

### 4. Contact Information

Edit `app/components/Contact.jsx`:
```javascript
const profile = {
  email: "your.email@example.com",
  phone: "+1 234 567 8900",
  location: "Your City, Country",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername"
};
```

### 5. Footer Information

Edit `app/components/Footer.jsx`:
```javascript
const profile = {
  name: "Your Name",
  bio: "Your short bio for footer",
  email: "your.email@example.com",
  phone: "+1 234 567 8900",
  location: "Your City, Country"
};
```

## 🖼️ Adding Images

1. **Project Images**: Place images in the `public/` folder
2. **Profile Images**: Update the image path in the Hero and About components
3. **Icons**: Use CDN URLs or place custom icons in `assets/`

## 🚀 Deployment

This is a static website that can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Deploy to Vercel:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Tips for Customization

1. **Colors**: Update the color scheme in `app/globals.css`
2. **Fonts**: Change fonts in the Tailwind config
3. **Animations**: Modify animation classes in components
4. **Layout**: Adjust grid layouts and spacing in components

## 🔧 Technologies Used

- **Next.js 15** - React framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🎉**
