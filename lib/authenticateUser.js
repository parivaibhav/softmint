import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function authenticateUser(requiredType) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) return null;

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (!user.userType || user.userType !== requiredType) return null;
    return user;
  } catch {
    return null;
  }
} 