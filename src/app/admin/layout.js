import { authenticateUser } from "../../../lib/authenticateUser";
import AdminHeader from "./components/AdminHeader";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }) {
  const user = await authenticateUser("admin");
  if (!user) redirect("/signin");
  if (user?.userType === "user") redirect("/user");
  return (
    <div>
      <AdminHeader />
      <main>{children}</main>
    </div>
  );
}
