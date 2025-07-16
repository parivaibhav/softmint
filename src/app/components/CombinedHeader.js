import AdminHeader from "../admin/components/AdminHeader";
import UserHeader from "./UserHeader";
import Navbar from "./Navbar";

// Accept userType as a prop for now (can be replaced with context/auth)
export default function CombinedHeader({ userType }) {
  if (userType === "admin") return <AdminHeader />;
  if (userType === "user") return <UserHeader />;
  return <Navbar />;
} 