import { EntityRepository, Repository } from 'typeorm';
import { Order_Item } from '../models/Order_Item';

@EntityRepository(Order_Item)
class Order_ItemRepository extends Repository<Order_Item> {

}

export { Order_ItemRepository };