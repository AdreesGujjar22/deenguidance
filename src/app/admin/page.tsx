import AdminLayout from "../../components/layout/AdminLayout";
import BlogList from "../../components/admin/BlogList";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <BlogList />
    </AdminLayout>
  );
}
