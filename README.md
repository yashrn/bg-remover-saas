🖼️ AI Background Remover – Full Stack SaaS App
An AI-powered background remover built with React, Tailwind CSS, Spring Boot, and Clerk Authentication. This SaaS application allows users to upload images, remove backgrounds using the Clipdrop API, and pay via a credit-based system powered by Razorpay.

🚀 Features
🎯 AI-Powered Image Background Removal using Clipdrop API

📤 Upload images and convert to Base64 instantly

🔐 Authentication via Clerk (Sign-up / Sign-in modals)

💳 Razorpay Integration for seamless payments (credits-based system)

🧾 Credit System to track and manage image processing usage

🧑‍💻 User Dashboard (Coming soon)

⚙️ Full RESTful Spring Boot backend with Feign client and JWT support

📱 Fully responsive UI built with Tailwind CSS

🧠 Scalable and production-ready architecture

🧰 Tech Stack
Frontend:
React.js

Tailwind CSS

Axios

Clerk (Auth)

Clipdrop API (Image Background Removal)

Backend:
Spring Boot (Java)

Feign Client

JWT Authentication

MySQL (Database)

Razorpay API (Payment Gateway)

📁 Project Structure
css
Copy
Edit
ai-background-remover/
│
├── backend/
│   ├── src/
│   │   ├── main/java/com/yourcompany/backgroundremover/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── model/
│   │   └── config/
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── tailwind.config.js
│
├── .env
├── .gitignore
├── README.md
└── package.json / pom.xml

📌 TODO
 User dashboard for credit tracking

 Admin panel

 Drag-and-drop image upload

 Credit recharge from dashboard

 Email notifications

 Production deployment (Vercel + Render/EC2)

📸 Screenshots
Coming soon...

🙌 Author
Yash Ramnani
Made using React, Spring Boot & a pinch of caffeine.
