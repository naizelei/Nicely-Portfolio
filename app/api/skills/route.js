import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Skill from '@/models/Skill';

export async function GET() {
  try {
    await dbConnect();
    
    const skills = await Skill.find().sort({ order: 1, name: 1 });
    
    return NextResponse.json(skills);
  } catch (error) {
    console.error('Skills GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    
    const data = await request.json();
    
    const skill = await Skill.create(data);
    
    return NextResponse.json(skill, { status: 201 });
  } catch (error) {
    console.error('Skills POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 