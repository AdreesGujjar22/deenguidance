"use client"
import React,{useEffect} from 'react';
import './page.module.css';
import { useRouter } from 'next/navigation';

const HomePageComponent:React.FC = () => {
  const router = useRouter();

  useEffect(()=>{
    router.push('/dashboard');
  },[])

  return (
    <h1>Loading ... </h1>
  );
};

export default HomePageComponent;
