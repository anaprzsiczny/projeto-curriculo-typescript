import React from "react";
import { RespostaHeader } from "../../types/perfil";

function Header(prop: RespostaHeader) {

  const { nome, ocupacao, resumo } = prop.respostaHeader
  console.log(nome)

  return (
    <>
      <div className="perfil">
        <img src="images/20201231_232712.jpg" alt="Perfil" />
      </div>
      <div className="biografia">
        <h1>
          {nome}
        </h1>
        <div className="ocupacao">{ocupacao}</div>
        <p>{resumo}</p>
      </div>
    </>
  )
}

export default Header