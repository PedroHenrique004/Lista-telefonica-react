import { BotaoAdicionar, Cabecalho, Titulo } from "./styles"

type Props = {
    onAdicionarClick: () => void;
  };
  
  const Header = ({ onAdicionarClick }: Props) => {
    return (
      <>
        <Cabecalho>
          <Titulo>Lista telefônica</Titulo>
          <BotaoAdicionar onClick={onAdicionarClick}>
            + Adicionar novo contato
          </BotaoAdicionar>
        </Cabecalho>
      </>
    );
  };
  
  export default Header;
  
