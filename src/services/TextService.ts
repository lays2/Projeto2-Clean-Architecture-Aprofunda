import { textos } from "../storage/textstorage";
import { Text } from "../models/text";
import { v4 as uuidv4 } from "uuid";
// Removed duplicate import and fixed casing

export function criarTexto(data: Omit<Text, "id" | "criadoEm">): Text {
  const novoTexto: Text = {
    ...data,
    id: uuidv4(),
    criadoEm: new Date()
  };
  textos.push(novoTexto);
  return novoTexto;
}

export function listarTextos(): Text[] {
  return textos;
}

export const service = {
  criarTexto,
  listarTextos
};

