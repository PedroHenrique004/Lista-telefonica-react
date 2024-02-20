type Contato = {
    nome: string;
    telefone: string;
    email: string;
    id: number;
  };
  
  type ContatosState = {
    contatos: Contato[];
  };
  
  const initialState: ContatosState = {
    contatos: [
      { nome: 'Contato 1', telefone: '12345678', email: 'contato1@email.com', id: 1 },
      { nome: 'Contato 2', telefone: '23456789', email: 'contato2@email.com', id: 2 },
    ],
  };
  
  type Action = 
  | { type: 'ADD_CONTATO'; payload: Contato }
  | { type: 'REMOVE_CONTATO'; payload: number }
  | { type: 'UPDATE_CONTATO'; payload: Contato }

  
  export default function contatosReducer(state = initialState, action: Action): ContatosState {
    switch (action.type) {
      case 'ADD_CONTATO':
        return { ...state, contatos: [...state.contatos, action.payload] };
      case 'REMOVE_CONTATO':
        return { ...state, contatos: state.contatos.filter((contato) => contato.id !== action.payload) };
      case 'UPDATE_CONTATO':
        return {
          ...state,
          contatos: state.contatos.map((contato) =>
            contato.id === action.payload.id ? action.payload : contato
          ),
        };
      default:
        return state;
    }
  }
  