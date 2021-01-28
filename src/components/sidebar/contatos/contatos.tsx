import React, { useState } from "react";
import { IContato } from "../../../types/contato";

interface ContatosDados {
  contatos: IContato[]
}

function Contatos(prop: ContatosDados) {

  const {contatos} = prop
  console.log('contatos:', contatos)

  const [botao, apertaBotao] = useState<Boolean>(false)

  const mostraContato = () => {
    apertaBotao(true)
  }

  return (
    <>
      <h3>Contatos</h3>

      <button onClick={mostraContato}>Mostrar Contatos</button>

      {botao && 
        <div className="lista-de-contatos">
          {contatos.map((item: IContato) => (
            <div key={item.id} className="item-contato">
              <h4>{item.tipo}</h4>
              <p>{item.contato}</p>
            </div>
          ))}
        </div>
      }
    </>
  )
}

export default Contatos