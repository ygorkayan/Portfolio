import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: Open Sans, sans-serif;
    color: #e6e7e9;
    font-size: 1.2rem;
  }

  body {
    background-color: #0984e2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .componentes-responsivo {
    margin: 0 auto;
    width: 1200px;
  }

  @media(max-width: 1220px) {
    .componentes-responsivo {
      width: 100%;
    }
  }

  @media(max-width: 640px) {
    * {
      font-size: 1.1rem;
    }
    .eu-responsivo {
      flex-direction: column;
    }

    .eu-responsivo img {
      margin: 0 auto;
    }

    .eu-responsivo div {
      padding: 0px
    }
    .redes-sociais-responsivo {
      padding: 0px;
      margin: 0 auto;
    }
  }
`;
