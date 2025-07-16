import { NextResponse } from 'next/server';

export async function POST() {
  // Destroy the 'token' cookie by setting it to empty and expired
  const response = NextResponse.json({ message: 'Logged out' });
  response.cookies.set('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: new Date(0), // Expire immediately
  });
  return response;
} 