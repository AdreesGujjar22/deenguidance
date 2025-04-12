"use client"
import AdminLayout from "../../components/layout/AdminLayout";
import BlogList from "../../components/admin/BlogList";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const router = useRouter();
  const [token , setToken] = useState<string | null>('');

  useEffect(()=>{
    const getToken = localStorage.getItem('token');
    setToken(getToken);
  },[]);

  if(typeof window !=='undefined'){
    if (!token) {
      router.push("/login");
      return
    }
  }

  return (
    <AdminLayout>
      <BlogList />
    </AdminLayout>
  );
}
