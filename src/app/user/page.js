"use client";

import { useEffect, useState } from "react";

export default function UserPanel() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/me")
      .then(res => res.ok ? res.json() : null)
      .then(data => setUser(data));
  }, []);

  if (!user) return <div>Loading...</div>;

  return <div>Welcome, {user.firstName}!</div>;
}
