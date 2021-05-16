import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrderItems1621108538835 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'order_items',
                columns: [
                    {
                        name: 'order_id',
                        type: 'integer',
                        isPrimary: true,
                        isUnique: true,
                        isGenerated: true
                    },
                    {
                        name: 'order_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'product_sku',
                        type: 'varchar (100)'
                    },
                    {
                        name: 'SIZE',
                        type: 'char (5)'
                    },
                    {
                        name: 'color',
                        type: 'varchar (50)'
                    },
                    {
                        name: 'quantity',
                        type: 'varchar (5)'
                    },
                    {
                        name: 'price',
                        type: 'varchar (10)'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('order_items');
    }

}
