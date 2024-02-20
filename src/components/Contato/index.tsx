import { useEffect, useState } from "react";
import * as S from "./styles"

export type ContatoType = {
  nome: string;
  telefone: string;
  email: string;
  id: number;
};

type Props = {
  contato: ContatoType;
  apagar: () => void;
  salvar: (contato: ContatoType) => void;
}


const Contato = ({ contato, apagar, salvar }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState(contato.nome)
  const [telefone, setTelefone] = useState(contato.telefone)
  const [email, setEmail] = useState(contato.email)

  useEffect(() => {
    setNome(contato.nome);
    setTelefone(contato.telefone);
    setEmail(contato.email);
  }, [contato]);

  function handleSalvar() {
    salvar({ ...contato, nome, telefone, email })
    setEstaEditando(false)
  }

  function handleCancelar() {
    setNome(contato.nome)
    setTelefone(contato.telefone)
    setEmail(contato.email)
    setEstaEditando(false)
  }

  return (
    <S.ContanainerContato>
      {estaEditando ? (
        <>
          <S.Input value={nome} onChange={e => setNome(e.target.value)} />
          <S.Input value={telefone} onChange={e => setTelefone(e.target.value)} />
          <S.Input value={email} onChange={e => setEmail(e.target.value)} />
          <S.BotaoContainer>
            <S.BotaoSalvar onClick={handleSalvar}>Salvar</S.BotaoSalvar>
            <S.BotaoRemover onClick={handleCancelar}>Cancelar</S.BotaoRemover>
          </S.BotaoContainer>
        </>
      ) : (
        <>
          <h3>{nome}</h3>
          <S.SubTitulos>Telefone: <span>{telefone}</span> </S.SubTitulos> 
          <S.SubTitulos>E-mail: <span>{email}</span></S.SubTitulos> 
          <S.BotaoContainer>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>Editar</S.BotaoEditar>
            <S.BotaoRemover onClick={apagar}>Apagar</S.BotaoRemover>
          </S.BotaoContainer>
        </>
      )}
    </S.ContanainerContato>
  );
};

export default Contato;
