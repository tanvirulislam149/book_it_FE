# BookIt: Experiences & Slots

A fullstack web application where users can **explore travel experiences**, **view available slots**, and **complete bookings** with promo code validation.  
This project demonstrates real-world fullstack workflows, including API integration, state management, and responsive UI design.

---

## Live Website

[Click here to visit the FRONTEND live site](https://book-it-fe-coral.vercel.app/)

[Click here to visit the BACKEND live site](http://127.0.0.1:8000//)

## 🚀 Project Overview

**BookIt** is designed to simulate an online experience booking platform.  
Users can:

- Browse a list of travel experiences
- View detailed information and available slots
- Apply promo codes
- Complete the booking process
- Receive confirmation feedback (success/failure)

---

## 🖥️ Tech Stack

### **Frontend**

- **Framework:** Next.js and TypeScript
- **Styling:** TailwindCSS
- **State Management:** Redux Toolkit and React Hooks

### **Backend**

- **Framework:** Node.js with Express
- **Database:** MongoDB
- **ORM:** Mongoose

---

## 📄 Features

### 🧭 Frontend

- **Home Page:** Displays all experiences fetched from backend.
- **Details Page:** Shows specific experience details and slot availability.
- **Checkout Page:** Collects user info, applies promo code, and displays price summary.
- **Result Page:** Shows booking confirmation or failure message.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Validation:** Simple form validation for user inputs (name, email, etc.).
- **Feedback States:** Loading, success, failure, and sold-out messages.

### ⚙️ Backend

- **RESTful APIs**
  - `GET /experiences` — Fetch all available experiences
  - `GET /experiences/:id` — Fetch details and available slots for a single experience
  - `POST /bookings` — Store booking details in database
  - `POST /promo/validate` — Validate and apply promo codes
    Demo Promo Code — WELCOME10, FLAT50, WINTER25

### Environment Variables

```bash
# For Backend only
PORT=your_PORT
DB_USERNAME=your_DB_USERNAME
DB_PASSWORD=your_DB_PASSWORD
```

**Deployment:**

- Vercel (Frontend)
- Render (Backend)
