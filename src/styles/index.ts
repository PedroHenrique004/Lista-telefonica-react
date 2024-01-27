import styled, { createGlobalStyle } from "styled-components";
import variavies from "./variavies";

const EstiloGlobal = createGlobalStyle`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
      color: ${variavies.corDoTexto}
    }  

    body {
        background-color: ${variavies.corDeFundo}
    }
`

export const ContainerPagina = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0px auto;
    text-align: center;
`

export const ContanainerContato = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 32px;
`

export default EstiloGlobal
