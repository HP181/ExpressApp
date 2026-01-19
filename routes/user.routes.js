import { Router } from "express";

const UserRouter = Router();

UserRouter.get('/', (req, res) => {
   res.json({title: "GET ALL USERS"});
});
UserRouter.get('/:id', (req, res) => {
   res.json({title: "GET USER BY ID"});
});
UserRouter.post('/', (req, res) => {
   res.json({title: "CREATE A USER"});
});
UserRouter.put('/:id', (req, res) => {
   res.json({title: "UPDATE USER"});
});
UserRouter.delete('/:id', (req, res) => {
   res.json({title: "DELETE USER"});
});

export default UserRouter;