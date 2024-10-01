import { createContext, useReducer, useContext } from 'react';
import { STORE } from '@/types';

const initialState: STORE.State = {};

export const StateStoreContext = createContext({} as STORE.State);

export const StateDispatchContext = createContext({} as STORE.StateDispatch);

export function StateStoreProvider(props: Readonly<{ children: React.ReactNode }>) {
  const [store, dispatch] = useReducer<STORE.StateReducer>(
    (current, update) => ({ ...current, ...update }),
    initialState
  );

  return (
    <StateDispatchContext.Provider value={dispatch}>
      <StateStoreContext.Provider value={store}>
        <>{props.children}</>
      </StateStoreContext.Provider>
    </StateDispatchContext.Provider>
  );
}

export function useStateStore() {
  return useContext(StateStoreContext);
}

export function useStateDispatch() {
  return useContext(StateDispatchContext);
}
