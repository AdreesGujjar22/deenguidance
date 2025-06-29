"use client";
import AdminLayout from "../../components/layout/AdminLayout";
import BlogList from "../../components/admin/BlogList";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { jwtDecode } from "jwt-decode";



type TokenPayload = {
  userId: string;
  exp: number;
};

export default function AdminDashboard() {
  const router = useRouter();
  const [token, setToken] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const decoded = jwtDecode<TokenPayload>(token);

      // Check if token is expired
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        localStorage.removeItem("token");
        router.push("/login");
        return;
      }

      // Token is valid
      setToken(true);
    } catch (err) {
      console.error("Err : ",err)
      localStorage.removeItem("token");
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
