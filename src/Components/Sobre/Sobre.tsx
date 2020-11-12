import React from "react";
import {
  Container,
  Banner,
  Eu,
  EuImagem,
  AreaTexto,
  EuTexto,
  RedesSociais,
  ImgRedeSocial,
} from "./Util";

import BannerImage from "../../Assets/banner.webp";
import MinhaImg from "../../Assets/eu.webp";
import GitHub from "../../Assets/github.svg";
import Linkedin from "../../Assets/linkedin.svg";

const Sobre = () => {
  return (
    <Container>
      <Banner src={BannerImage} alt="banner" />
      <Eu className="eu-responsivo">
        <EuImagem src={MinhaImg} alt="Eu" />
        <AreaTexto>
          <EuTexto>
            Ola, meu nome é ygor e sou programador, desenvolvo minhas aplicações
            usando, React, React Native, e Node, porém trânsito também pelo
            mundo php
          </EuTexto>
        </AreaTexto>
      </Eu>
      <RedesSociais className="redes-sociais-responsivo">
        <a target="_blank" rel="noreferrer" href="https://github.com/ygorkayan">
          <ImgRedeSocial src={GitHub} />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ygorkayan/"
        >
          <ImgRedeSocial src={Linkedin} />
        </a>
      </RedesSociais>
    </Container>
  );
};

export default Sobre;
