import { BotaoAdicionar, Cabecalho, Titulo } from "./styles"

const Header = () => {

    return (
        <>
            <Cabecalho>
                <Titulo>Lista telefônica</Titulo>
                <BotaoAdicionar>+ Adicionar novo contato</BotaoAdicionar>
            </Cabecalho>
        </>
    )
}


export default Header
