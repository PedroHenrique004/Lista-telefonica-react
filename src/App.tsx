import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './Redux/store';
import { useState } from 'react';
import EstiloGlobal, { ContainerPagina, ContanainerContato } from './styles';
import Contato, { ContatoType } from './components/Contato';
import CardAdicionar from './components/CardAdicionar';

import Header from './components/Titulo';
import CardRemover from './components/CardRemover';

function App() {
    const [estaRemovendo, setEstaRemovendo] = useState(false)
    const [estaAdicionando, setEstaAdicionando] = useState(false)
    const contatos = useSelector((state: RootState) => state.contatos.contatos);
    const dispatch = useDispatch();
    const [idDoContatoASerRemovido, setIdDoContatoASerRemovido] = useState<number | null>(null);

    function funcaoApagar(id: number){
      setEstaRemovendo(true);
      setIdDoContatoASerRemovido(id);
    }

    function funcaoCancelar(){
      setEstaRemovendo(false)
    }

    function funcaoSalvar(contatoAtualizado: ContatoType) {
      dispatch({ type: 'UPDATE_CONTATO', payload: contatoAtualizado });
    }

    function funcaoRemover() {
      if (idDoContatoASerRemovido !== null) {
        dispatch({ type: 'REMOVE_CONTATO', payload: idDoContatoASerRemovido });
        setIdDoContatoASerRemovido(null);
        setEstaRemovendo(false);
      }
    }

    function handleAdicionar(contato: ContatoType) {
      dispatch({ type: 'ADD_CONTATO', payload: contato });
      setEstaAdicionando(false);
    }

    function handleAdicionarClick() {
      setEstaAdicionando(true);
    }

    return (
        <>
        <EstiloGlobal />
            <ContainerPagina>
                  <Header onAdicionarClick={handleAdicionarClick}/>
                  {estaRemovendo ? (
                    <CardRemover
                    cancelarRemover={funcaoCancelar}
                    remover={funcaoRemover} />
                  ) : estaAdicionando ? ( 
                    <CardAdicionar
                      cancelarAdicionar={() => setEstaAdicionando(false)}
                      adicionar={handleAdicionar} />
                  ) : (
                    <ContanainerContato>
                      {contatos.map(contato => (
                        <Contato
                          key={contato.id}
                          contato={contato}
                          apagar={() => funcaoApagar(contato.id)}
                          salvar={funcaoSalvar} />
                      ))}
                    </ContanainerContato>
                  )}
            </ContainerPagina></>
    ) 
}

export default App;
