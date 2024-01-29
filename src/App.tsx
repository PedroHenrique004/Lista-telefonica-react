import Contato from "./components/Contato";
import Header from "./components/Titulo";
import EstiloGlobal, { ContainerPagina, ContanainerContato } from "./styles";
import CardRemover from "./components/CardRemover";
import { useState } from "react";
import { Provider } from "react-redux"; 
import store from "./store";



function App() {
    const [estaRemovendo, setEstaRemovendo] = useState(false)

    function funcaoApagar(){
      setEstaRemovendo(true)
    }

    function funcaoCancelar(){
      setEstaRemovendo(false)
    }

    return (
      <Provider store={store}>
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
      </Provider>
    ) 
}

export default App;
