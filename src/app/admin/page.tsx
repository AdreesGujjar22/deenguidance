"use client"
import AdminLayout from "../../components/layout/AdminLayout";
import BlogList from "../../components/admin/BlogList";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const token = localStorage.getItem('token');

  if (!token) {
    router.push("/login");
    return
  }

  return (
    <AdminLayout>
      <BlogList />
    </AdminLayout>
  );
}
