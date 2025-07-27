// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const authRouter = require("./routes/auth/auth-routes");
// const adminProductsRouter = require("./routes/admin/products-routes");
// const adminOrderRouter = require("./routes/admin/order-routes");

// const shopProductsRouter = require("./routes/shop/products-routes");
// const shopCartRouter = require("./routes/shop/cart-routes");
// const shopAddressRouter = require("./routes/shop/address-routes");
// const shopOrderRouter = require("./routes/shop/order-routes");
// const shopSearchRouter = require("./routes/shop/search-routes");
// const shopReviewRouter = require("./routes/shop/review-routes");

// const commonFeatureRouter = require("./routes/common/feature-routes");

// //create a database connection -> u can also
// //create a separate file for this and then import/use that file here

// mongoose
//   .connect("mongodb+srv://moinkhan18457:mo!N49khan@cluster0.hqub2oc.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0")
//   .then(() => console.log("MongoDB connected"))
//   .catch((error) => console.log(error));

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     allowedHeaders: [
//       "Content-Type",
//       "Authorization",
//       "Cache-Control",
//       "Expires",
//       "Pragma",
//     ],
//     credentials: true,
//   })
// );

// app.use(cookieParser());
// app.use(express.json());
// app.use("/api/auth", authRouter);
// app.use("/api/admin/products", adminProductsRouter);
// app.use("/api/admin/orders", adminOrderRouter);

// app.use("/api/shop/products", shopProductsRouter);
// app.use("/api/shop/cart", shopCartRouter);
// app.use("/api/shop/address", shopAddressRouter);
// app.use("/api/shop/order", shopOrderRouter);
// app.use("/api/shop/search", shopSearchRouter);
// app.use("/api/shop/review", shopReviewRouter);

// app.use("/api/common/feature", commonFeatureRouter);

// app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));



// require('dotenv').config(); // <--- ADD THIS LINE AT THE VERY TOP!

// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const authRouter = require("./routes/auth/auth-routes");
// const adminProductsRouter = require("./routes/admin/products-routes");
// const adminOrderRouter = require("./routes/admin/order-routes");

// const shopProductsRouter = require("./routes/shop/products-routes");
// const shopCartRouter = require("./routes/shop/cart-routes");
// const shopAddressRouter = require("./routes/shop/address-routes");
// const shopOrderRouter = require("./routes/shop/order-routes");
// const shopSearchRouter = require("./routes/shop/search-routes");
// const shopReviewRouter = require("./routes/shop/review-routes");

// const commonFeatureRouter = require("./routes/common/feature-routes");

// // Connect to MongoDB using the URI from your .env file
// mongoose
//   .connect(process.env.MONGO_URI) // <--- CHANGE THIS LINE TO USE process.env.MONGO_URI
//   .then(() => console.log("MongoDB connected"))
//   .catch((error) => console.error("MongoDB connection error:", error)); // <--- Changed console.log to console.error for better visibility of errors

// const app = express();
// const PORT = process.env.PORT || 5000; // PORT is already correctly using .env

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     allowedHeaders: [
//       "Content-Type",
//       "Authorization",
//       "Cache-Control",
//       "Expires",
//       "Pragma",
//     ],
//     credentials: true,
//   })
// );

// app.use(cookieParser());
// app.use(express.json());
// app.use("/api/auth", authRouter);
// app.use("/api/admin/products", adminProductsRouter);
// app.use("/api/admin/orders", adminOrderRouter);

// app.use("/api/shop/products", shopProductsRouter);
// app.use("/api/shop/cart", shopCartRouter);
// app.use("/api/shop/address", shopAddressRouter);
// app.use("/api/shop/order", shopOrderRouter);
// app.use("/api/shop/search", shopSearchRouter);
// app.use("/api/shop/review", shopReviewRouter);

// app.use("/api/common/feature", commonFeatureRouter);

// app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));



// --- START OF server.js ---

require('dotenv').config(); // <--- This loads variables from your .env file
console.log('--- SERVER START DEBUG: [1] Dotenv config loaded. ---');

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// Note: Errors in required files (like auth-routes, products-routes) can crash the server here.
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");
console.log('--- SERVER START DEBUG: [2] Core modules and Admin/Auth routers required. ---');

const shopProductsRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes"); // <-- Likely place for Stripe logic
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");
console.log('--- SERVER START DEBUG: [3] Shop routers required. ---');

const commonFeatureRouter = require("./routes/common/feature-routes");
console.log('--- SERVER START DEBUG: [4] Common feature router required. ---');

// Connect to MongoDB using the URI from your .env file
console.log('--- SERVER START DEBUG: [5] Attempting MongoDB connection... (Using MONGO_URI from .env)');
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully!")) // <-- Clear success message
  .catch((error) => {
    console.error("MongoDB connection ERROR:", error); // <-- Clear error message
    // If it's a critical error preventing server from starting, you might want to exit
    process.exit(1);
  });
console.log('--- SERVER START DEBUG: [6] MongoDB connection promise initiated (asynchronous). ---');

const app = express();
const PORT = process.env.PORT || 5000;
console.log(`--- SERVER START DEBUG: [7] Express app initialized on port ${PORT}. ---`);

app.use(
  cors({
    origin: "http://localhost:5173", // Assuming your frontend runs on this port
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json()); // Body parser for JSON
console.log('--- SERVER START DEBUG: [8] Middleware (CORS, CookieParser, JSON) configured. ---');

// Mount routes
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);
app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter); // <-- Likely place for Stripe operations
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);
app.use("/api/common/feature", commonFeatureRouter);
console.log('--- SERVER START DEBUG: [9] All API routes mounted. ---');

// Start listening for requests
app.listen(PORT, () => {
  console.log(`--- SERVER START DEBUG: [10] Server is now running on port ${PORT}! ---`);
});
console.log('--- SERVER START DEBUG: [11] App.listen command issued. ---'); // This will print almost immediately after app.listen


// --- END OF server.js ---