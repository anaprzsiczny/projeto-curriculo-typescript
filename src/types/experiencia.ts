export interface IExperiencia {
  id: number,
  cargo: string,
  periodo: string,
  empresa: string,
  local: string,
  conteudo: string
}

export interface ExperienciaDados {
  experiencia: IExperiencia
}