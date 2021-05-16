import { Router } from 'express';
import { Order_ItemsController } from './controllers/Order_ItemsController';

const routes = Router();

const order_ItemsController = new Order_ItemsController();

routes.get('/order_items', order_ItemsController.show);
/* routes.get('/order_items/:startDate/:endDate', order_ItemsController.findBetweenDates); */
routes.get('/order_items/', order_ItemsController.findBetweenDates);

routes.post('/order_items', order_ItemsController.create);

export { routes };