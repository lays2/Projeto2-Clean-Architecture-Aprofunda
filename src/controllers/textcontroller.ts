import { Text } from './../models/text';
import { Request, Response } from 'express';
import { service } from '../services/TextService';
import { v4 as uuidv4 } from 'uuid';

export const criarTextoHandler = (req: Request, res: Response) => {
  const { titulo, conteudo, status, autor } = req.body;

  if (!titulo || !conteudo || !status || !autor) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  const novoTexto = service.criarTexto({ titulo, conteudo, status, autor });
  return res.status(201).json(novoTexto);
};

export const listarTextosHandler = (req: Request, res: Response) => {
  const textos = service.listarTextos();
  return res.status(200).json(textos);
};
