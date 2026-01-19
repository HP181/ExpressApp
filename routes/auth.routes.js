import {Router} from "express"

const AuthRouter = Router();

AuthRouter.post('/sign-in', (req, res) => {
  res.send('Login Page');
});

AuthRouter.post('/sign-up', (req, res) => {
  res.send('Register Page');
});

AuthRouter.post('/sign-out', (req, res) => {
  // Handle login logic here
  res.send('sign out successful');
});

export default AuthRouter;