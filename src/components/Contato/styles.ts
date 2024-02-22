import styled from "styled-components";
import variavies from "../../styles/variavies";


export const Lista = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export const ContanainerContato = styled.div`
    margin-top: 64px;
    background-color: ${variavies.corContainerContato};
    max-width: 400px;
    padding: 16px;
    text-align: start;
    border-radius: 16px;
    font-size: 16px;
    border: 1px solid ${variavies.corDasBordas};

    h3 {
        border-bottom: 1px solid ${variavies.corDasBordas};
        margin: 16px auto;
        padding-bottom: 16px;
    }

    @media (max-width:768px) {
        max-width: 92%;
    }
`

export const SubTitulos = styled.p`
    font-weight: bold;
    margin-bottom: 32px;
    margin-top: 32px;
    
    span {
        font-weight: normal;
        margin-bottom: 16px;
        margin-left: 16px;
    }
`
export const Botao = styled.button`
    padding: 8px 16px;
    margin-right: 16px;
    border-radius: 16px;
    border: 1px solid ${variavies.corDasBordas};
    cursor: pointer;
`

export const BotaoEditar = styled(Botao)`
    background-color: ${variavies.corDeFundo};
    color: ${variavies.corDoTexto};
`
export const BotaoRemover = styled(Botao)`
    background-color: ${variavies.corBotaoRemover};
    color: ${variavies.corDoTexto};


    @media (max-width: 768px) {
        margin-left: 8px;
    }
`

export const BotaoSalvar = styled(Botao)`
    background-color: ${variavies.corBotaoSalvar};
    color: ${variavies.corDoTexto};
`

export const Input = styled.input`
  background-color: transparent;
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid ${variavies.corDasBordas};
  border-radius: 4px;

  @media (max-width:768px) {
        margin-top: 0;
    }
`;

export const BotaoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  
  @media (max-width:768px) {
        margin-top: 0px;

        button {
            margin: 6px auto;
        }
}
`

export const BotaoContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  
  @media (max-width:768px) {
        display: block;
        margin-top: 0px;

        button {
            margin: 6px auto;
        }
}
`;