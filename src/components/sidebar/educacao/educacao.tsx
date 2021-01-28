import React from "react";
import { IEducacao } from "../../../types/educacao";

interface EducacaoDados {
  educacao: IEducacao[]
}

function Educacao(prop: EducacaoDados) {

  const { educacao } = prop
  console.log(educacao)

  return (
    <>
      <h3>Educação</h3>
      <div className="lista-de-formacao">
        {educacao.map((item: IEducacao) => (
          <li key={item.id}>
            <h4>{item.curso}</h4>
            <p>{item.instituicao}</p>
          </li>
        ))}          
      </div>
    </>
  )
}        

export default Educacao