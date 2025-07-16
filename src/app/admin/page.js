import { redirect } from 'next/navigation';
import { authenticateUser } from '../../../lib/authenticateUser';

export default function AdminPage() {
  const user = authenticateUser('admin');
  if (!user) redirect('/signin');

  return (
    <div>
      <h1>Welcome, Admin {user.firstName || user.username}!</h1>
      {/* ... */}
    </div>
  );
} 