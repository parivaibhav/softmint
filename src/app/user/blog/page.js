import { authenticateUser } from '@/lib/authenticateUser';
import { redirect } from 'next/navigation';

export default async function UserBlog() {
  const user = await authenticateUser('user');
  if (!user) redirect('/signin');

  return <div className="p-8 text-xl">User Blog Page</div>;
} 