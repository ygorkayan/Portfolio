import React from "react";
import { AreaProjeto, Imagem, AreaTexto, Texto } from "./ProjetoUtil";

interface projeto {
  img: any;
  descricao: string;
  link: string;
}

const Projeto = (props: projeto) => {
  return (
    <AreaProjeto href={props.link} target="_blank">
      <div>
        <Imagem src={props.img} />
      </div>
      <AreaTexto>
        <Texto>{props.descricao}</Texto>
      </AreaTexto>
    </AreaProjeto>
  );
};

export default Projeto;
