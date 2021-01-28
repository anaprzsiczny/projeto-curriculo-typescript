import React from "react";
import { IExperiencia } from "../../../types/experiencia";

interface ExperienciaDados {
  experiencia: IExperiencia
}

function ItemExperiencia(prop: ExperienciaDados) {

  const {cargo, periodo, empresa, local, conteudo} = prop.experiencia

  return (
    <div className="experience-item">
      <div>
        <h4>{cargo}</h4>
        <span>{periodo}</span>

        <strong>{empresa}</strong>
        <span>{local}</span>
      </div>
      <p>
        {conteudo}
      </p>
    </div>
  )
}

export default ItemExperiencia