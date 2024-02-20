import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './Redux/store';
import { useState } from 'react';
import EstiloGlobal, { ContainerPagina, ContanainerContato } from './styles';
import Contato, { ContatoType } from './components/Contato';

import Header from './components/Titulo';
import CardRemover from './components/CardRemover';

function App() {
    const [estaRemovendo, setEstaRemovendo] = useState(false)
    const contatos = useSelector((state: RootState) => state.contatos.contatos);
    const dispatch = useDispatch();

    function funcaoApagar(){
      setEstaRemovendo(true)
    }

    function funcaoCancelar(){
      setEstaRemovendo(false)
    }

    function funcaoSalvar(contatoAtualizado: ContatoType) {
      dispatch({ type: 'UPDATE_CONTATO', payload: contatoAtualizado });
    }

    return (
        <>
        <EstiloGlobal />
            <ContainerPagina>
                  <Header />
                  {estaRemovendo ? (
                    <CardRemover
                      cancelarRemover={funcaoCancelar} />
                  ) : (
                    <ContanainerContato>
                      {contatos.map(contato => (
                        <Contato
                          key={contato.id}
                          contato={contato}
                          apagar={funcaoApagar}
                          salvar={funcaoSalvar} />
                      ))}
                    </ContanainerContato>
                  )}
            </ContainerPagina></>
    ) 
}

export default App;

