import express from 'express';
import dotenv from 'dotenv';
import AuthRouter from './routes/auth.routes.js';
import UserRouter from './routes/user.routes.js';
import SubscriptionRouter from './routes/subscription.route.js';
import connectDB from './config/Db.js';
import ErrorMiddleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';

dotenv.config({path: './config.env'});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/auth", AuthRouter)
app.use("/api/v1/users", UserRouter)
app.use("/api/v1/subscriptions", SubscriptionRouter)

app.use(ErrorMiddleware)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectDB();
});