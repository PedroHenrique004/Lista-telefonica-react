
import { combineReducers, createStore } from 'redux';
import contatosReducer from './Contatos/contatos';;

const rootReducer = combineReducers({
  contatos: contatosReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
