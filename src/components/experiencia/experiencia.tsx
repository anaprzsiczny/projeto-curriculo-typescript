import React from "react";
import { IExperiencia } from "../../types/experiencia";
import { respostaExperiencia } from "../../types/perfil";
import ItemExperiencia from './item-experiencia/item-experiencia'

function Experiencia(props: respostaExperiencia) {

  const { experiencia } = props.respostaExperiencia

  return (
    <div className="experience">
      <h2>Experiência Profissional</h2>

      {experiencia.map((item: IExperiencia) => (
        <ItemExperiencia key={item.id} experiencia={item} />
      ))}
    </div>
  )
}

export default Experiencia