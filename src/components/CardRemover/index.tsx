import { BotaoEditar, BotaoRemover } from "../Contato/styles"
import { Container, ContainerRemover, Texto } from "./style"

type Props = {
    cancelarRemover: () => void;
    remover: () => void;
  }
  
  const CardRemover = ({cancelarRemover, remover}: Props) => {
    return (
      <>
        <Container>
          <ContainerRemover>
            <Texto>Tem certeza que deseja apagar esse contato?</Texto>
            <BotaoRemover onClick={remover}>Apagar</BotaoRemover> {/* Atualize esta linha */}
            <BotaoEditar onClick={cancelarRemover}>Cancelar</BotaoEditar>
          </ContainerRemover>
        </Container>  
      </>
    )
  }
  
export default CardRemover