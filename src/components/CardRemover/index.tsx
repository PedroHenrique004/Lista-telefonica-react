import { BotaoEditar, BotaoRemover } from "../Contato/styles"
import { Container, ContainerRemover, Texto } from "./style"

type Props = {
    cancelarRemover: () => void;
}

const CardRemover = ({cancelarRemover}: Props) => {
    return (
        <>
            <Container>
                    <ContainerRemover>
                        <Texto>Tem certeza que deseja apagar esse contato?</Texto>
                        <BotaoRemover>Apagar</BotaoRemover>
                        <BotaoEditar onClick={cancelarRemover}>Cancelar</BotaoEditar>
                    </ContainerRemover>
            </Container>  
        </>
    )
}

export default CardRemover