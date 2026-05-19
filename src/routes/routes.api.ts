import { Router, Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

// Rota de Registro
router.post('/register', async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;
  const user = await User.create({ nome, email, senha });
  res.status(201).json({ message: "Usuário criado com sucesso!", id: user.id });
});

// Rota de Login
router.post('/login', async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user && await bcrypt.compare(senha, user.senha)) {
    const payload = { id: user.id, email: user.email };
    const token = jwt.sign(payload, process.env.SECRET_KEY as string, { expiresIn: '30d' });
    return res.json({ auth: true, token });
  }
  res.status(401).json({ message: "Credenciais inválidas" });
});

// Rota de Perfil (protegida)
router.get('/perfil', authMiddleware, (req: Request, res: Response) => {
  res.json({
    message: "Acesso autorizado",
    userId: req.user?.id
  });
});

// Rota de Atualização
router.put('/user', authMiddleware, async (req: Request, res: Response) => {
  const { nome, email } = req.body;
  const userId = req.user?.id;
  await User.update({ nome, email }, { where: { id: userId } });
  res.json({ message: "Dados atualizados com sucesso!" });
});

// Rota de Deleção
router.delete('/user', authMiddleware, async (req: Request, res: Response) => {
  const userId = req.user?.id;
  await User.destroy({ where: { id: userId } });
  res.json({ message: "Conta removida do sistema." });
});

export default router;