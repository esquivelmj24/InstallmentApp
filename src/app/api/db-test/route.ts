import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';

export async function GET() {
  try {
    console.log('Attempting to connect to MongoDB...');
    const db = await dbConnect();
    
    // Get current database name
    const dbName = db.connection.name;
    const collections = await db.connection.db().listCollections().toArray();
    
    return NextResponse.json({ 
      status: 'Connected', 
      database: dbName, 
      collections: collections.map((c: any) => c.name),
      message: 'Connection successful! Your Vercel server can reach the database.'
    }, { status: 200 });

  } catch (error: any) {
    console.error('MongoDB Connection Error:', error);
    return NextResponse.json({ 
      status: 'Error', 
      error: error.message,
      suggestion: 'Check if your MongoDB Atlas IP Access List allows 0.0.0.0/0 (all IPs).'
    }, { status: 500 });
  }
}
