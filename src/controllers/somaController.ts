import { Request, Response } from 'express';
import { soma } from '../services/somaService';

export const calcularSoma = (req: Request, res: Response) => {
  const { a, b } = req.body;

  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Parâmetros inválidos' });
  }

  const resultado = soma(a, b);
  res.json({ resultado });
};