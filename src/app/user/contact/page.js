import { authenticateUser } from "@/lib/authenticateUser";
import { redirect } from "next/navigation";
import UserContactForm from "./UserContactForm";

export default async function UserContactPage() {
  const user = await authenticateUser("user");
  if (!user) redirect("/signin");

  return <UserContactForm />;
}
