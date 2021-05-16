import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order_items')
class Order_Item {
   @PrimaryGeneratedColumn('increment')
   readonly order_id: number;

   @Column()
   order_date: Date;

   @Column()
   product_sku: string;

   @Column()
   SIZE: string;

   @Column()
   color: string;

   @Column()
   quantity: string;

   @Column()
   price: string;

}

export { Order_Item };