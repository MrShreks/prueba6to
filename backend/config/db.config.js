import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import typeorm from 'typeorm';
import User from '../user/model/user.model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carga explícita del .env desde la carpeta backend
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const { DataSource } = typeorm;

if (!process.env.DATABASE_URL) {
  console.error('CRÍTICO: No se encontró DATABASE_URL en las variables de entorno.');
}

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  synchronize: true,
  entities: [User]
});