import express from 'express';
import sequelize from './config/database';
import './models/User';
import apiRoutes from './routes/routes.api';

const app = express();
app.use(express.json());
app.use('/api', apiRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch((error: unknown) => {
    console.error('❌ Erro ao conectar com o banco de dados:', error);
  });

sequelize.sync({ alter: true })
  .then(() => {
    console.log('✅ Banco de dados sincronizado!');
  })
  .catch((error: unknown) => {
    console.error('❌ Erro ao sincronizar o banco de dados:', error);
  });

app.listen(3000, () => {
  console.log('✅ Servidor rodando na porta 3000');
});

export default app;