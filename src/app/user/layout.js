'use client';

import UserHeader from '../components/UserHeader';


export default function UserLayout({ children }) {
  return (
    <>
      <UserHeader />
      {children}
    </>
  );
} 