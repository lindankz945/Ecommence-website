import express from "express";
import { ENV } from "./config/env";
import {clerkMiddleware} from '@clerk/express';
import cors from 'cors';

import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import commentRoutes from "./routes/commentRoutes";

const app = express();

app.use(cors({origin: ENV.FRONTEND_URL}));
app.use(clerkMiddleware()); // auth obj will be attachached to the req
app.use(express.json()); //parses JSON request bodies.
app.use(express.urlencoded({ extended: true })); //parses form data (like HTML forms).

app.get("/", (req, res) => {
    res.json({
message:"welcome to Cash4Goods API Powered by PostgreSQL, Drizzle ORM & Clerk Auth",
endpoints: {
users:"/api/users",
products:"/api/products",
comments:"api/comments",
},
});
});

app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/comments",commentRoutes);


app.listen(ENV.PORT, () => console.log("Server is running on port:",ENV.PORT));