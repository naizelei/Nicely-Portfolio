# Personal Portfolio Website

A modern, dynamic portfolio website built with Next.js, featuring an admin panel for easy content management. You can dynamically update your skills, projects, and personal information without touching the code.

## Features

### Public Portfolio
- **Hero Section**: Dynamic introduction with your name, title, and bio
- **About Section**: Detailed personal information with contact details and social links
- **Skills Section**: Categorized skills with proficiency levels and visual progress bars
- **Projects Section**: Showcase your projects with images, descriptions, and links
- **Contact Section**: Contact form and contact information
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Dark Mode Support**: Automatic dark/light mode based on system preference

### Admin Panel
- **Secure Login**: Protected admin access
- **Profile Management**: Edit your personal information, bio, and contact details
- **Skills Management**: Add, edit, and delete skills with categories and proficiency levels
- **Projects Management**: Add, edit, and delete projects with images and descriptions
- **Real-time Updates**: Changes appear immediately on the public portfolio

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: Custom session-based auth with bcrypt
- **Icons**: Lucide React
- **Forms**: React Hook Form

## Prerequisites

- Node.js 18+ 
- MongoDB (local or cloud)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/portfolio
   # Or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

4. **Set up the database**
   ```bash
   node scripts/setup.js
   ```
   This will create:
   - An admin user (username: `admin`, password: `admin123`)
   - Sample profile data
   - Sample skills and projects

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Portfolio: http://localhost:3000
   - Admin Panel: http://localhost:3000/admin

## Usage

### Admin Panel Access
1. Go to http://localhost:3000/admin
2. Login with:
   - Username: `admin`
   - Password: `admin123`
3. **Important**: Change the default password after first login!

### Managing Content

#### Profile Management
- Click on the "Profile" tab in the admin dashboard
- Click "Edit Profile" to update your personal information
- Update your name, title, bio, contact details, and social links

#### Skills Management
- Click on the "Skills" tab in the admin dashboard
- Click "Add Skill" to add new skills
- For each skill, you can set:
  - Name
  - Category (Frontend, Backend, Database, DevOps, Design, Other)
  - Proficiency level (1-100%)
  - Icon (emoji or symbol)
  - Color
  - Display order

#### Projects Management
- Click on the "Projects" tab in the admin dashboard
- Click "Add Project" to add new projects
- For each project, you can set:
  - Title and descriptions
  - Category
  - Image URL
  - Technologies used
  - Live demo and GitHub links
  - Featured status
  - Display order

### Customization

#### Styling
- The website uses Tailwind CSS for styling
- You can customize colors, fonts, and layout in `app/globals.css`
- The design is fully responsive and supports dark mode

#### Images
- Place your images in the `public/` directory
- Update image paths in the admin panel
- Recommended image sizes:
  - Profile avatar: 400x400px
  - Project images: 800x600px

#### Content
- All content is stored in MongoDB
- You can update content anytime through the admin panel
- No code changes required for content updates

## File Structure

```
my-portfolio/
├── app/
│   ├── admin/                 # Admin panel pages
│   │   ├── dashboard/         # Main admin dashboard
│   │   ├── skills/           # Skill management
│   │   └── projects/         # Project management
│   ├── api/                  # API routes
│   │   ├── auth/             # Authentication endpoints
│   │   ├── profile/          # Profile management
│   │   ├── skills/           # Skills CRUD
│   │   └── projects/         # Projects CRUD
│   ├── components/           # React components
│   │   ├── Hero.jsx          # Hero section
│   │   ├── About.jsx         # About section
│   │   ├── Skills.jsx        # Skills display
│   │   ├── Projects.jsx      # Projects display
│   │   ├── Contact.jsx       # Contact section
│   │   ├── Footer.jsx        # Footer
│   │   └── Navbar.jsx        # Navigation
│   └── page.js               # Main portfolio page
├── models/                   # MongoDB models
│   ├── User.js              # Admin user model
│   ├── Profile.js           # Profile data model
│   ├── Skill.js             # Skills model
│   └── Project.js           # Projects model
├── lib/                     # Utility functions
│   └── mongodb.js           # Database connection
├── scripts/                 # Setup scripts
│   └── setup.js             # Database initialization
└── public/                  # Static assets
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `MONGODB_URI` environment variable in Vercel
4. Deploy!

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Security Notes

- Change the default admin password immediately after setup
- Use environment variables for sensitive data
- Consider implementing rate limiting for the admin panel
- Regularly update dependencies for security patches

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions:
1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information

## Roadmap

- [ ] Image upload functionality
- [ ] Blog section
- [ ] Analytics dashboard
- [ ] Email notifications
- [ ] Multi-language support
- [ ] SEO optimization
- [ ] Performance monitoring

---

Built with ❤️ using Next.js and Tailwind CSS
