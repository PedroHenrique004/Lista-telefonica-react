import styled from "styled-components";
import variavies from "../../styles/variavies";
import { Botao } from "../Contato/styles";

export const Cabecalho = styled.header`
    width: 100%;
    padding: 16px;
    color: ${variavies.corDoTexto};
` 
export const Titulo = styled.h1`
   margin-bottom: 32px; 
`

export const BotaoAdicionar = styled(Botao)`
    background-color: ${variavies.corBotaoSalvar}
`