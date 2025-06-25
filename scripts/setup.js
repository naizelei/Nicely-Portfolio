const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

// Define schemas inline to avoid import issues
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: 'admin',
  },
}, {
  timestamps: true,
});

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  location: {
    type: String,
  },
  github: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  twitter: {
    type: String,
  },
  website: {
    type: String,
  },
  avatar: {
    type: String,
  },
  resume: {
    type: String,
  },
}, {
  timestamps: true,
});

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['frontend', 'backend', 'database', 'devops', 'design', 'other'],
  },
  proficiency: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
  icon: {
    type: String,
  },
  iconUrl: {
    type: String,
  },
  color: {
    type: String,
    default: '#3B82F6',
  },
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  technologies: [{
    type: String,
  }],
  liveUrl: {
    type: String,
  },
  githubUrl: {
    type: String,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    default: 'web',
  },
}, {
  timestamps: true,
});

// Create models
const User = mongoose.models.User || mongoose.model('User', userSchema);
const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema);
const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema);
const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

async function setupDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB successfully!');

    // Create admin user
    console.log('Creating admin user...');
    const hashedPassword = await bcrypt.hash('YourNewPasswordHere', 10);
    
    const adminUser = await User.findOneAndUpdate(
      { username: 'admin' },
      {
        username: 'admin',
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'admin'
      },
      { upsert: true, new: true }
    );
    console.log('Admin user created:', adminUser.username);

    // Create default profile
    console.log('Creating default profile...');
    const profile = await Profile.findOneAndUpdate(
      {},
      {
        name: 'Your Name',
        title: 'Full Stack Developer',
        bio: 'Passionate developer with expertise in modern web technologies. I love creating beautiful, functional, and user-friendly applications that solve real-world problems.',
        email: 'your.email@example.com',
        phone: '+1 234 567 8900',
        location: 'Your City, Country',
        github: 'https://github.com/yourusername',
        linkedin: 'https://linkedin.com/in/yourusername',
        twitter: 'https://twitter.com/yourusername',
        website: 'https://yourwebsite.com',
        avatar: '/profile-img.png',
        resume: '/sample-resume.pdf'
      },
      { upsert: true, new: true }
    );
    console.log('Profile created:', profile.name);

    // Create sample skills
    console.log('Creating sample skills...');
    const sampleSkills = [
      {
        name: 'React',
        category: 'frontend',
        proficiency: 90,
        icon: '⚛️',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        color: '#61DAFB',
        order: 1
      },
      {
        name: 'Node.js',
        category: 'backend',
        proficiency: 85,
        icon: '🟢',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        color: '#339933',
        order: 2
      },
      {
        name: 'MongoDB',
        category: 'database',
        proficiency: 80,
        icon: '🍃',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        color: '#47A248',
        order: 3
      },
      {
        name: 'TypeScript',
        category: 'frontend',
        proficiency: 75,
        icon: '📘',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        color: '#3178C6',
        order: 4
      },
      {
        name: 'Next.js',
        category: 'frontend',
        proficiency: 85,
        icon: '⚡',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        color: '#000000',
        order: 5
      },
      {
        name: 'Tailwind CSS',
        category: 'frontend',
        proficiency: 90,
        icon: '🎨',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        color: '#06B6D4',
        order: 6
      },
      {
        name: 'Docker',
        category: 'devops',
        proficiency: 70,
        icon: '🐳',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        color: '#2496ED',
        order: 7
      },
      {
        name: 'Git',
        category: 'other',
        proficiency: 85,
        icon: '📚',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        color: '#F05032',
        order: 8
      }
    ];

    for (const skillData of sampleSkills) {
      await Skill.findOneAndUpdate(
        { name: skillData.name },
        skillData,
        { upsert: true, new: true }
      );
    }
    console.log('Sample skills created');

    // Create sample projects
    console.log('Creating sample projects...');
    const sampleProjects = [
      {
        title: 'E-commerce Platform',
        shortDescription: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
        description: 'A comprehensive e-commerce solution featuring user authentication, product management, shopping cart functionality, payment integration, and admin dashboard. Built with modern technologies and best practices.',
        image: '/work-1.png',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
        liveUrl: 'https://ecommerce-demo.com',
        githubUrl: 'https://github.com/username/ecommerce',
        featured: true,
        order: 1,
        category: 'web'
      },
      {
        title: 'Task Management App',
        shortDescription: 'A collaborative task management application with real-time updates.',
        description: 'A feature-rich task management application that allows teams to collaborate on projects. Features include real-time updates, drag-and-drop functionality, file attachments, and progress tracking.',
        image: '/work-2.png',
        technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
        liveUrl: 'https://task-app-demo.com',
        githubUrl: 'https://github.com/username/task-app',
        featured: false,
        order: 2,
        category: 'web'
      },
      {
        title: 'Weather Dashboard',
        shortDescription: 'A beautiful weather dashboard with location-based forecasts.',
        description: 'A responsive weather application that provides current weather conditions and forecasts for any location. Features include location detection, weather maps, and customizable widgets.',
        image: '/work-3.png',
        technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
        liveUrl: 'https://weather-demo.com',
        githubUrl: 'https://github.com/username/weather-app',
        featured: false,
        order: 3,
        category: 'web'
      },
      {
        title: 'Portfolio Website',
        shortDescription: 'A modern portfolio website built with Next.js and Tailwind CSS.',
        description: 'A responsive portfolio website showcasing projects, skills, and contact information. Features include dark mode, smooth animations, and a dynamic admin panel for content management.',
        image: '/work-4.png',
        technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Admin Panel'],
        liveUrl: 'https://portfolio-demo.com',
        githubUrl: 'https://github.com/username/portfolio',
        featured: true,
        order: 4,
        category: 'web'
      }
    ];

    for (const projectData of sampleProjects) {
      await Project.findOneAndUpdate(
        { title: projectData.title },
        projectData,
        { upsert: true, new: true }
      );
    }
    console.log('Sample projects created');

    console.log('\n✅ Database setup completed successfully!');
    console.log('\n📋 Login Credentials:');
    console.log('Username: admin');
    console.log('Password: admin123');
    console.log('\n🔗 Admin Panel: http://localhost:3000/admin');
    console.log('\n⚠️  Please change the default password after first login!');

  } catch (error) {
    console.error('Error setting up database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run the setup
setupDatabase(); 