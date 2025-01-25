"use client";
import React from "react";
import { Box } from "@mui/material";

const Contruction = ({
}) => {

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection : "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor : 'red',

        }}
      >
        <small>The website is currently under contruction...</small>
        <small>ویب سائٹ پر فی الحال کام جاری ہے ۔۔۔</small>
      </Box>
    </>
  );
};

export default Contruction;
