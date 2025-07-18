import { authenticateUser } from '@/lib/authenticateUser';
import UserHeader from '../components/UserHeader';
import { redirect } from 'next/navigation';

export default async function UserLayout({ children }) {
  const user = await authenticateUser('user');
  if (!user) redirect('/signin');
  // Optionally, if userType is 'admin', redirect to /admin
  if (user?.userType === 'admin') redirect('/admin');
  return (
    <>
      <UserHeader />
      {children}
    </>
  );
} 