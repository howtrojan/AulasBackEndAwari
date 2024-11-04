import { Router } from "express";
import userController from "./controllers/user/user.controller.js";
import paymentController from "./controllers/payment/payment.controller.js";

const routes = Router();


/*Rotas de usuários*/
routes.get("/users", userController.list);
routes.post("/users", userController.create);
routes.put("/users/:id", userController.update); 
routes.patch("/users/:id", userController.update);
routes.delete("/users/:id", userController.delete);

/*Rotas de pagamentos*/

routes.post("/payment", paymentController.payment);

export default routes;