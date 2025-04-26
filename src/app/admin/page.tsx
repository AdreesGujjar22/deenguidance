"use client";
import AdminLayout from "../../components/layout/AdminLayout";
import BlogList from "../../components/admin/BlogList";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

export default function AdminDashboard() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);

    if (!getToken) {
      router.push("/login");
    }
  }, [router]);

  if (token === null) {
    return <Box sx={{ width: "100%", height: "100vh", display : "flex", justifyContent : "center" , alignItems : "center" }}>
      <CircularProgress size={24} />
    </Box>
  }

  return (
    <AdminLayout>
      <BlogList />
    </AdminLayout>
  );
}
