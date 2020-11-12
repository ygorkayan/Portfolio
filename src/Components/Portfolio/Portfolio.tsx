import React from "react";
import {
  Container,
  Titulo,
  LinhaSeparatoria,
  ProjetosArea,
} from "./PortfolioUtil";
import Projeto from "./Projeto";

import CadastroReact from "./ImagesProjetos/CadastroReact.webp";
import CalculadoraReact from "./ImagesProjetos/CalculadoraReact.webp";
import FlappyBird from "./ImagesProjetos/FlappyBird.webp";
import PortfolioImg from "./ImagesProjetos/PortfolioImg.webp";

const Portfolio = () => {
  return (
    <Container id="portfolio">
      <Titulo>Portfolio</Titulo>
      <LinhaSeparatoria />
      <ProjetosArea>
        <Projeto
          link="https://github.com/ygorkayan/Cadastro-em-React-Native"
          descricao="Fiz esse app de Cadastro para estudar o react native, reducer e context api"
          img={CadastroReact}
        />
        <Projeto
          link="https://github.com/ygorkayan/Calculadora"
          descricao="Fiz essa calculadora no React Native usando o expo"
          img={CalculadoraReact}
        />
        <Projeto
          link="https://github.com/ygorkayan/flappy-bird"
          descricao="Esse jogo foi feito usando apenas JavaScript css e html"
          img={FlappyBird}
        />
        <Projeto
          link="https://github.com/ygorkayan/Portfolio"
          descricao="Esse site foi criado para mostrar meu Portfólio. Para sua construção estou
          usando React 17.0.1 e o Styled Components 5.1.4"
          img={PortfolioImg}
        />
      </ProjetosArea>
    </Container>
  );
};

export default Portfolio;
