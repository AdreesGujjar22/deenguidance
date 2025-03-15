# Deen Guidance

A comprehensive Islamic learning platform built with Next.js, TypeScript, and Material-UI.

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Setting up EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `from_name`: Sender's name
   - `from_email`: Sender's email
   - `subject`: Email subject
   - `message`: Email message
4. Copy your credentials and add them to `.env.local`

## Features

- 📧 Contact Form with EmailJS integration
- 🔔 Toast notifications for form submissions
- 📱 Responsive design for all screen sizes
- 🎨 Material-UI components and theming
- 🌐 Google Translate integration
- 📊 Google Analytics integration

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/         
│   ├── common/         # Shared components
│   ├── forms/          # Form components
│   ├── layout/         # Layout components
│   ├── providers/      # Context providers
│   └── ui/             # UI components
├── data/               # Static data and constants
├── hooks/              # Custom React hooks
├── styles/             # Global styles and theme
└── types/              # TypeScript types
```

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/getting-started/overview/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)