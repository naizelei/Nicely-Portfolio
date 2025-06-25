import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Profile from '@/models/Profile';

export async function GET() {
  try {
    await dbConnect();
    
    let profile = await Profile.findOne();
    
    if (!profile) {
      // Create default profile if none exists
      profile = await Profile.create({
        name: 'Your Name',
        title: 'Full Stack Developer',
        bio: 'Passionate developer with expertise in modern web technologies.',
        email: 'your.email@example.com',
        phone: '+1 234 567 8900',
        location: 'Your City, Country',
        github: 'https://github.com/yourusername',
        linkedin: 'https://linkedin.com/in/yourusername',
        twitter: 'https://twitter.com/yourusername',
        website: 'https://yourwebsite.com',
      });
    }
    
    return NextResponse.json(profile);
  } catch (error) {
    console.error('Profile GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await dbConnect();
    
    const data = await request.json();
    
    let profile = await Profile.findOne();
    
    if (profile) {
      profile = await Profile.findByIdAndUpdate(profile._id, data, { new: true });
    } else {
      profile = await Profile.create(data);
    }
    
    return NextResponse.json(profile);
  } catch (error) {
    console.error('Profile PUT error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 