import { Router } from "express";
import userController from "./controllers/user/user.controller.js";
import paymentController from "./controllers/payment/payment.controller.js";

const routes = Router();


/*Rotas de usuários*/
routes.get("/users", userController.List);
routes.post("/users", userController.Create);
routes.put("/users/:id", userController.Update); 
routes.patch("/users/:id", userController.Update);
routes.delete("/users/:id", userController.Delete);

/*Rotas de pagamentos*/

routes.post("/payment", paymentController.payment);

export default routes;