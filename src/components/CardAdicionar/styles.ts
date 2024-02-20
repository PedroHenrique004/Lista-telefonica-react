import styled from "styled-components";
import variavies from "../../styles/variavies";

export const ContainerRemover = styled.div`
    position: fixed;
    top: 10%;
    left: 20%;
    margin-top: 10%;
    max-width: 1080px;
    width: 100%;
    background-color: ${variavies.corContainerRemover};
    border-radius: 16px;
    padding: 64px;
`

export const Texto = styled.h2`
    border-bottom: 1px solid ${variavies.corDoTexto};
    padding-bottom: 32px;
    margin-bottom: 64px;
`

export const Container = styled.div`
    width: 100%;
    justify-content:center;
    align-items: center;
`
