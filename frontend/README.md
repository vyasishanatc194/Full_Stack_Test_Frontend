# **Full Stack Test - Frontend**

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Pre Requisite
Make sure you have node version as `v18.17.0`.

### Third Party Libraries
 - ## Ant Design (antd)
    We use Ant Design (antd) as our primary UI component library for this project. Ant Design provides a comprehensive set of ready-to-use components that help in building a modern and responsive user interface.

## Overview
This project is a frontend application that includes three main screens: Signup, Login, and Dashboard. The application allows users to register with an email and password, log in using their registered credentials, and access a Dashboard page after successful authentication.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Next.js

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start adding your page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

You need to create `.env` file from `.env.sample` file and add relevant data of your convenience 


## Features
- **Signup Page:**
  - Allows new users to register with their email and password.
  - Validates input fields and handles errors gracefully.

- **Login Page:**
  - Allows registered users to log in using their email and password.
  - Validates credentials and provides appropriate feedback.

- **Dashboard Page:**
  - Accessible only to registered users after successful login.
  - Displays job listing after user search from search box.