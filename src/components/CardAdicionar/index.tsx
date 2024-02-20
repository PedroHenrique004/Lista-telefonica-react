import { useState } from "react";
import * as P from "./styles"
import * as S from "../Contato/styles"
import { ContatoType } from "../Contato";

type Props = {
  cancelarAdicionar: () => void;
  adicionar: (contato: ContatoType) => void;
}

const CardAdicionar = ({cancelarAdicionar, adicionar}: Props) => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  function handleAdicionar() {
    adicionar({ nome, telefone, email, id: Date.now() });
    setNome("");
    setTelefone("");
    setEmail("");
  }

  return (
    <P.Container>
      <P.ContainerRemover>
        <P.Texto>Adicionar novo contato</P.Texto>
        <S.Input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" />
        <S.Input value={telefone} onChange={e => setTelefone(e.target.value)} placeholder="Telefone" />
        <S.Input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <S.BotaoContainer>
          <S.BotaoSalvar onClick={handleAdicionar}>Adicionar</S.BotaoSalvar>
          <S.BotaoRemover onClick={cancelarAdicionar}>Cancelar</S.BotaoRemover>
        </S.BotaoContainer>
      </P.ContainerRemover>
    </P.Container>  
  )
}

export default CardAdicionar;
