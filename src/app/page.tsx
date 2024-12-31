"use client"
import React,{useEffect} from 'react';
import './page.module.css';
import { useRouter } from 'next/navigation';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
const HomePageComponent:React.FC = () => {
  const router = useRouter();
  useEffect(()=>{
    router.push('/dashboard');
  },[])

  return (
    <Box sx={{
      display : "flex",
      justifyContent : "center",
      alignItems : "center"
    }}>
      <CircularProgress />
    </Box>
  );
};

export default HomePageComponent;
