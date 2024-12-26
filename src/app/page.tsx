"use client"
import React,{useEffect} from 'react';
import './page.module.css';
import { useRouter } from 'next/navigation';
import CircularProgress from '@mui/material/CircularProgress';
const HomePageComponent:React.FC = () => {
  const router = useRouter();
  useEffect(()=>{
    router.push('/dashboard');
  },[])

  return (
    <CircularProgress />
  );
};

export default HomePageComponent;
