import { IContato } from "./contato";
import { IEducacao } from "./educacao";
import { IExperiencia } from "./experiencia";

export interface Perfil {
  nome: string,
  ocupacao: string,
  resumo: string,
  perfilProfissional: string,
  contatos: IContato[],
  educacao: IEducacao[],
  experiencia: IExperiencia[]
}

export interface RespostaHeader {
  respostaHeader: Perfil
}

export interface respostaSidebar {
  respostaSidebar: Perfil
}

export interface respostaExperiencia {
  respostaExperiencia: Perfil
}