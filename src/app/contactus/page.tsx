// "use client"
// import React from 'react';
// import { Box, Typography, Button, Container, Card, CardContent, Stack } from '@mui/material';

import ContactSection from "@/components/sections/ContactSection";

// const BlogComponent = () => {
//   // Exact content from your images
//   const content = {
//     title: "IMPACT OF CHAT GPT ON THE TELECOM INDUSTRY",
//     subtitle: "Impact of Chat GPT on the Telecom Industry",
//     body: [
//       "The telecommunications industry is undergoing significant changes with the extent of AI throughout its ChatGPT. This article explores how AI is transforming the Internet sector, onboarding customer service, and driving innovation.",
//       "Transforming Customer Service",
//       "Our offer was significantly improved in ChatGPT on the Internet industry in the improvement of customer service. With the idea of ChatGPT, customer service opens up calls to quickly and successfully integrate its customer function, developing self treat and increasing forward satisfaction.",
//       "ChatGPT's impact on small amounts of data, which allows for precise accurate and reliable information or assessment, even in countries. This has resulted in faster resolution times and..."
//     ]
//   };

//   return (
//     <Container disableGutters maxWidth={false}>
//       {/* Hero Section - Exact match for 1.PNG */}
//       <Box sx={{
//         backgroundImage: 'url(/1-bg.png)', // Your first image background
//         backgroundSize: 'cover',
//         height: '60vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         textAlign: 'center',
//         position: 'relative',
//         '&::before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           backgroundColor: 'rgba(0, 0, 0, 0.6)'
//         }
//       }}>
//         <Box position="relative" zIndex={1}>
//           <Typography variant="h1" sx={{
//             color: '#C5A867', // Exact gold color from image
//             fontSize: '3.5rem',
//             fontWeight: 700,
//             lineHeight: 1.2,
//             textTransform: 'uppercase',
//             mb: 2
//           }}>
//             {content.title.split(' ').slice(0, 6).join(' ')}
//           </Typography>
//           <Typography variant="h1" sx={{
//             color: '#C5A867',
//             fontSize: '3.5rem',
//             fontWeight: 700,
//             textTransform: 'uppercase'
//           }}>
//             {content.title.split(' ').slice(6).join(' ')}
//           </Typography>
//         </Box>
//       </Box>

//       {/* Blog Content - Exact match for blogsingle.PNG */}
//       <Container maxWidth="md" sx={{ py: 8 }}>
//         <Card sx={{
//           borderRadius: 0,
//           boxShadow: 'none',
//           borderBottom: '2px solid #C5A867',
//           mb: 4
//         }}>
//           <CardContent sx={{ px: 0 }}>
//             <Typography variant="h2" sx={{
//               fontSize: '2.5rem',
//               fontWeight: 600,
//               color: '#2D2D2D',
//               mb: 4
//             }}>
//               {content.subtitle}
//             </Typography>

//             {content.body.map((text, index) => (
//               <Typography key={index} sx={{
//                 fontSize: '1.1rem',
//                 lineHeight: 1.8,
//                 mb: 4,
//                 fontWeight: text.startsWith('Transforming') ? 600 : 400,
//                 color: text.startsWith('Transforming') ? '#C5A867' : '#444',
//                 ...(text.startsWith('Transforming') && { 
//                   fontSize: '1.5rem',
//                   mt: 6 
//                 })
//               }}>
//                 {text}
//               </Typography>
//             ))}
//           </CardContent>
//         </Card>

//         {/* Navigation - Exact button styling */}
//         <Stack direction="row" justifyContent="space-between">
//           <Button variant="text" sx={{
//             color: '#C5A867',
//             fontSize: '1.1rem',
//             fontWeight: 600,
//             '&:hover': { backgroundColor: 'transparent' }
//           }}>
//             ← Previous Article
//           </Button>
//           <Button variant="text" sx={{
//             color: '#C5A867',
//             fontSize: '1.1rem',
//             fontWeight: 600,
//             '&:hover': { backgroundColor: 'transparent' }
//           }}>
//             Next Article →
//           </Button>
//         </Stack>
//       </Container>
//     </Container>
//   );
// };

// export default BlogComponent;

// export default BlogComponent;


// "use client";
// import React from "react";
// import {
//   Box,
//   Typography,
//   TextField,
// } from "@mui/material";
// import MainButton from "../../components/common/MainButton";
// import SendIcon from '@mui/icons-material/Send';
// import ContactSection from "@/components/sections/ContactSection";

// export default function ContactForm() {
//   return (
//     <Box sx={{
//       backgroundColor: "white"
//     }}>
//       <Box sx={{
//         padding: "24px",
//         paddingTop : "135px",
//         paddingBottom : "75px",
//         maxWidth: "900px",
//         margin: "auto",
//         display: "flex",
//         flexDirection: "column",
//         fontFamily: "Raleway",
//       }}>
//         <Typography
//           variant="h5"
//           gutterBottom
//           sx={{ fontSize: "1.25rem", fontWeight: "bold", fontFamily: "CinzelDecorative" }}
//         >
//           We’re here to answer your enquiries.
//         </Typography>
//         <Typography variant="body2" gutterBottom sx={{ fontSize: "0.875rem", color: "#555" }}>
//           Please fill in your details into our form below, and we will be in touch ASAP.
//         </Typography>
//         <Typography variant="body2" gutterBottom sx={{ fontSize: "0.875rem", color: "#555" }}>
//           We look forward to hearing from you!
//         </Typography>

//         <Box component="form" noValidate sx={{ mt: 3 }}>
//           <div style={{ marginBottom: "16px" }}>
//             <label htmlFor="firstName" style={{ fontSize: "0.875rem", fontWeight: "bold" }}>First Name :</label>
//             <TextField
//               id="firstName"
//               variant="outlined"
//               fullWidth
//               required
//               size="small"
//               sx={{ marginTop: "8px" }}
//             />
//           </div>
//           <div style={{ marginBottom: "16px" }}>
//             <label htmlFor="lastName" style={{ fontSize: "0.875rem", fontWeight: "bold" }}>Last Name :</label>
//             <TextField
//               id="lastName"
//               variant="outlined"
//               fullWidth
//               required
//               size="small"
//               sx={{ marginTop: "8px" }}
//             />
//           </div>
//           <div style={{ marginBottom: "16px" }}>
//             <label htmlFor="email" style={{ fontSize: "0.875rem", fontWeight: "bold" }}>Email :</label>
//             <TextField
//               id="email"
//               variant="outlined"
//               fullWidth
//               required
//               type="email"
//               size="small"
//               sx={{ marginTop: "8px" }}
//             />
//           </div>
//           <div style={{ marginBottom: "16px" }}>
//             <label htmlFor="phone" style={{ fontSize: "0.875rem", fontWeight: "bold" }}>Phone :</label>
//             <TextField
//               id="phone"
//               variant="outlined"
//               fullWidth
//               required
//               type="tel"
//               size="small"
//               sx={{ marginTop: "8px" }}
//             />
//           </div>
//           <div style={{ marginBottom: "16px" }}>
//             <label htmlFor="message" style={{ fontSize: "0.875rem", fontWeight: "bold" }}>Message :</label>
//             <TextField
//               id="message"
//               variant="outlined"
//               fullWidth
//               required
//               multiline
//               rows={4}
//               size="small"
//               sx={{ marginTop: "8px" }}
//             />
//           </div>
//           <MainButton content="Submit" endIcon={<SendIcon sx={{ ml: "15px" }} />} />
//         </Box>
//       </Box>
//     </Box>
//   );
// }


export default function ContactForm() {
  return (
    <ContactSection />
  )
}