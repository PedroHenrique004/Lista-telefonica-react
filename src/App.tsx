import Contato from "./components/Contato";
import Header from "./components/Titulo";
import EstiloGlobal, { ContainerPagina, ContanainerContato } from "./styles";
import CardRemover from "./components/CardRemover";
import { useState } from "react";



function App() {
    const [estaRemovendo, setEstaRemovendo] = useState(false)

    function funcaoApagar(){
      setEstaRemovendo(true)
    }

    function funcaoCancelar(){
      setEstaRemovendo(false)
    }

    return (
      <>
        <EstiloGlobal/>
        <ContainerPagina>
            <Header />
            {estaRemovendo ? (
              <CardRemover 
                cancelarRemover={funcaoCancelar}    
              />
            ) : (
              <ContanainerContato>
                <Contato 
                    nome='Pedro'
                    telefone='Pedro'
                    email='Pedro'
                    apagar={funcaoApagar}
                />
              </ContanainerContato>
            )}
            
            
        </ContainerPagina>
      </>
    ) 
}

export default App;
