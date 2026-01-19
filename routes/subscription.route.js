import { Router } from "express";

const SubscriptionRouter = Router();

SubscriptionRouter.get('/', (req, res) => {
   res.json({ title: "GET ALL SUBSCRIPTIONS" });
});

SubscriptionRouter.get('/:id', (req, res) => {
   res.json({ title: "GET SUBSCRIPTION BY ID" });
});

SubscriptionRouter.post('/', (req, res) => {
   res.json({ title: "CREATE A SUBSCRIPTION" });
});

SubscriptionRouter.put('/:id', (req, res) => {
   res.json({ title: "UPDATE SUBSCRIPTION" });
});

SubscriptionRouter.delete('/:id', (req, res) => {
   res.json({ title: "DELETE SUBSCRIPTION" });
});

SubscriptionRouter.get('/user/:id', (req, res) => {
   res.json({ title: "GET SUBSCRIPTIONS BY USER ID" });
});

SubscriptionRouter.get('/:id/cancel', (req, res) => {
   res.json({ title: "CANCEL SUBSCRIPTION" });
});

SubscriptionRouter.get('/upcoming-renewals', (req, res) => {
   res.json({ title: "GET UPCOMING RENEWALS" });
});

export default SubscriptionRouter;