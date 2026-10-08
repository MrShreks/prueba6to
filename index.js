import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './backend/config/db.config.js';
import userRoutes from './backend/user/routes/user.route.js';

const app = express();
app.use(express.json());

app.use(userRoutes);

const PORT = process.env.PORT || 3000;

// Inicializar la base de datos antes de escuchar peticiones
AppDataSource.initialize()
  .then(() => {
    console.log('¡Conexión exitosa a Neon PostgreSQL con TypeORM!');
    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });