import { DataSource } from 'typeorm';

const connectionSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'ecommerce',
  synchronize: true,
  logging: true,
  entities: ['src/entities/**.entity{.ts,.js}'],
});

