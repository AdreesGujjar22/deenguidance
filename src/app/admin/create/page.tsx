"use client"
import dynamic from "next/dynamic";
import AdminLayout from "../../../components/layout/AdminLayout";
const CreateBlogForm = dynamic(()=> import("../../../components/admin/CreateBlogForm"),{ssr:false});

export default function CreateBlogPage() {
  return (
    <AdminLayout>
      <CreateBlogForm />
    </AdminLayout>
  );
}