import { Request, Response } from 'express';
import { mensagem } from '../services/saudacaoService';

export const saudar = (req: Request, res: Response) => {
  if (!req.params.nome) {
    return res.status(400).json({ error: 'Nome é obrigatório' });
  }
  
  const resultado = mensagem(req.params.nome);
  res.send(resultado);
};