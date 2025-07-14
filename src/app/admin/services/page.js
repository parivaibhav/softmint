import Link from "next/link";
import AdminHeader from "../components/AdminHeader";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with React, Next.js, and Node.js.",
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "User-centered design solutions for engaging experiences.",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps solutions.",
  },
];

export default function AdminServices() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AdminHeader />
      <div className="flex-1 max-w-5xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Manage Services</h1>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition">
            + Add Service
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-3 px-4 text-gray-700 font-semibold">Title</th>
                <th className="py-3 px-4 text-gray-700 font-semibold">Description</th>
                <th className="py-3 px-4 text-gray-700 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="border-t border-gray-100 hover:bg-gray-50 transition">
                  <td className="py-3 px-4 font-medium text-gray-900">{service.title}</td>
                  <td className="py-3 px-4 text-gray-600">{service.description}</td>
                  <td className="py-3 px-4 text-center">
                    <Link href={`/admin/services/edit/${service.id}`} className="text-blue-600 hover:underline font-semibold mr-4">Edit</Link>
                    <button className="text-red-500 hover:underline font-semibold">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 