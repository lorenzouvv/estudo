import { Request, Response } from "express";
import { mensagem } from "../services/saudacaoService";

export const saudar = (req: Request, res: Response) => {
  const { nome } = req.params;

  // Validação adicional recomendada
  if (!nome || typeof nome !== "string") {
    return res.status(400).send("Nome inválido");
  }

  // Versão correta sem parêntese extra
  res.send(mensagem(nome));
};
