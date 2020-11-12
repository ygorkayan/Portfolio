import React from "react";
import { Container, Contato, ContatoImg } from "./Util";

import Email from "../../Assets/email.svg";
import Linkedin from "../../Assets/linkedin.svg";

const Footer = () => {
  return (
    <Container id="contato">
      <p>
        Gostou dos meus projetos ? <br />
        Entre em contato.
      </p>
      <Contato target="_blank" href="mailto:contato@ygorkayan.com.br">
        <ContatoImg src={Email} alt="Email" />
        <p>contato@ygorkayan.com.br</p>
      </Contato>
      <Contato target="_blank" href="https://www.linkedin.com/in/ygorkayan/">
        <ContatoImg src={Linkedin} alt="Linkedin" />
        <p>Ygor Kayan</p>
      </Contato>
    </Container>
  );
};

export default Footer;
