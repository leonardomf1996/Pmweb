import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { isAfter, isBefore } from 'date-fns';

import { Order_ItemRepository } from '../repositories/Order_ItemsRepository';

import * as yup from 'yup';

import { AppError } from '../errors/AppError';

class Order_ItemsController {
   async create(request: Request, response: Response) {
      const { order_date, product_sku, SIZE, color, quantity, price } = request.body;

      const schema = yup.object().shape({
         order_date: yup.date().required('Data obrigatória'),
         product_sku: yup.string().max(100).required('Product sku obrigatório'),
         SIZE: yup.string().max(5).required('Tamanho obrigatório'),
         color: yup.string().max(50).required('Cor(es) obrigatória(s)'),
         quantity: yup.string().max(5).required('Quantidade obrigatória'),
         price: yup.string().max(10).required('Preço obrigatório')
      });

      try {
         await schema.validate(request.body, {
            abortEarly: false
         });
      } catch (error) {
         throw new AppError(error);
      }

      const order_itemsRepository = getCustomRepository(Order_ItemRepository);

      const order_item = order_itemsRepository.create({
         order_date,
         product_sku,
         SIZE,
         color,
         quantity,
         price
      });

      await order_itemsRepository.save(order_item);

      return response.status(201).json(order_item);
   }

   async show(request: Request, response: Response) {
      const order_itemsRepository = getCustomRepository(Order_ItemRepository);

      const all = await order_itemsRepository.find();

      if (!all) {
         throw new AppError('Order_items not found!', 404)
      }

      return response.status(200).json(all);
   }

   async findBetweenDates(request: Request, response: Response) {
      const { startDate, endDate } = request.params; //YYYY-MM-DD

      const start = new Date(startDate);
      const end = new Date(endDate);

      const order_itemsRepository = getCustomRepository(Order_ItemRepository);

      const all = await order_itemsRepository.find();

      if (!all) {
         throw new AppError('Order_items not found!', 404)
      }

      const ordersBetweenDates = all.map(order => {
         if (isAfter(order.order_date, start) && isBefore(order.order_date, end)) {
            return order;
         }
      });

      let count = 0;
      let revenue = 0;
      let quantity = 0;
      let averageRetailPrice = 0;
      let averageOrderValue = 0;

      for (let i = 0; i < ordersBetweenDates.length; i++) {
         count += Number(ordersBetweenDates[i]?.product_sku);
         revenue += Number(ordersBetweenDates[i]?.price) * Number(ordersBetweenDates[i]?.product_sku);
         quantity += Number(ordersBetweenDates[i]?.quantity);
         averageRetailPrice += Number(ordersBetweenDates[i]?.price) * Number(ordersBetweenDates[i]?.product_sku);
         averageOrderValue += Number(ordersBetweenDates[i]?.price) * Number(ordersBetweenDates[i]?.product_sku);
      }

      averageRetailPrice = averageRetailPrice / quantity;
      averageOrderValue = averageOrderValue / count;

      const orders = {
         count,
         revenue,
         quantity,
         averageRetailPrice,
         averageOrderValue,
      };

      return response.status(200).json({
         success: true,
         data: {
            orders
         }
      });
   }

}

export { Order_ItemsController };