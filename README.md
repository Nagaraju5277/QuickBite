# QuickBite - Full Stack Food Ordering App

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

QuickBite is a **full-stack food ordering application** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It allows users to browse and order food, while admins can manage products, categories, and view orders.

---

## Features

### Customer Frontend

* Browse food items by category
* Add items to cart and place orders
* Secure user authentication (signup/login)
* Proceed to payment (Stripe integration)
* View order history

### Admin Dashboard

* Add, update, and delete food items
* Manage categories
* View all orders and update order status
* Responsive design

### Backend

* RESTful APIs built with Node.js and Express.js
* MongoDB database for storing users, orders, food items, and categories
* Secure authentication using **JWT**
* File upload support for food images
* CORS configured for Admin and Frontend URLs

---

## Technologies Used

* **Frontend:** React.js, React Router, Axios, Tailwind CSS, React-Toastify
* **Backend:** Node.js, Express.js, MongoDB, Mongoose
* **Payment:** Stripe API
* **Authentication:** JSON Web Tokens (JWT)
* **Deployment:** Render (Frontend + Backend)

---

## Folder Structure

```
QuickBite/
├─ backend/
│  ├─ controllers/
│  ├─ models/
│  ├─ routes/
│  ├─ config/
│  ├─ server.js
├─ frontend/
│  ├─ src/
│     ├─ components/
│     ├─ pages/
│     ├─ App.jsx
│     ├─ index.js
├─ .env
├─ package.json
└─ README.md
```

---

## Installation & Setup

### Backend

1. Clone the repository:

```bash
git clone https://github.com/Nagaraju5277/QuickBite.git
cd QuickBite/backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in `backend/` with the following variables:

```
PORT=4000
MONGO_URI=<Your MongoDB Connection URI>
JWT_SECRET=<Your JWT Secret Key>
STRIPE_SECRET_KEY=<Your Stripe Secret Key>
```

4. Start the backend server:

```bash
npm run dev
```

---

### Frontend

1. Navigate to frontend folder:

```bash
cd ../frontend
```

2. Install dependencies:

```bash
npm install
```

3. Update backend URL in `App.jsx`:

```js
const url = "https://<your-backend-render-url>";
```

4. Start the frontend:

```bash
npm start
```

---

## Deployment

* **Backend** and **Admin frontend** are deployed on [Render](https://render.com).
* Ensure CORS is configured properly for all deployed frontends in `server.js`.

Example CORS setup:

```js
app.use(cors({
  origin: [
    "https://quickbite-admin-82xc.onrender.com",
    "https://quickbite-frontend-o1i5.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
```

---

## API Endpoints

| Endpoint                | Method   | Description                  |
| ----------------------- | -------- | ---------------------------- |
| `/api/user/register`    | POST     | Register a new user          |
| `/api/user/login`       | POST     | Login a user                 |
| `/api/food`             | GET      | Get all food items           |
| `/api/food`             | POST     | Add a new food item (admin)  |
| `/api/order/list`       | GET      | Get all orders (admin)       |
| `/api/order/userorders` | POST     | Get orders of logged-in user |
| `/api/cart`             | GET/POST | Manage user cart             |
| `/api/category`         | GET/POST | Manage categories            |

> For more endpoints, check the `routes/` folder.

---

## Contributing

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/YourFeature
```

3. Commit your changes and push:

```bash
git commit -m "Add your feature"
git push origin feature/YourFeature
```

4. Create a Pull Request.

---

## License

This project is licensed under the MIT License.
