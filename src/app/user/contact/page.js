import { authenticateUser } from '@/lib/authenticateUser';
import { redirect } from 'next/navigation';

export default function UserContact() {
  const user = authenticateUser('user');
  if (!user) redirect('/signin');

  return <div className="p-8 text-xl">User Contact Page</div>;
} 