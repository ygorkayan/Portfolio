import React from "react";
import { Container, Titulo, Menu, Opcao } from "./Util";

const Header = () => {
  return (
    <Container>
      <Titulo>YK</Titulo>
      <Menu>
        <Opcao href="#portfolio">Portfolio</Opcao>
        <Opcao href="#contato">Contato</Opcao>
      </Menu>
    </Container>
  );
};

export default Header;
