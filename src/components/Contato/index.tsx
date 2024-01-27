import { useState } from "react";
import * as S from "./styles"

type Props = {
  nome: string;
  telefone: string;
  email: string;
  apagar: () => void;
}

const Contato = ({ nome, telefone, email, apagar}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.ContanainerContato>
      <h3>{nome}</h3>
      <S.SubTitulos>Telefone: <span>{telefone}</span> </S.SubTitulos> 
      <S.SubTitulos>E-mail: <span>{email}</span></S.SubTitulos> 

      {!estaEditando ? (
        <>
          <S.BotaoEditar onClick={evento => setEstaEditando(true)}>Editar</S.BotaoEditar>
          <S.BotaoRemover onClick={apagar}>Apagar</S.BotaoRemover>
        </>
      ) : (
        <>
          <S.BotaoSalvar onClick={evento => setEstaEditando(false)}>Salvar</S.BotaoSalvar>
          <S.BotaoRemover onClick={evento => setEstaEditando(false)}>Cancelar</S.BotaoRemover>
        </>
      )}
    </S.ContanainerContato>
  );
};

export default Contato;
