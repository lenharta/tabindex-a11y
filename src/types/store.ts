export declare namespace STORE {
  type Dir = 'ltr' | 'rtl';
  type Mode = 'light' | 'dark';

  type Theme = { dir: Dir; mode: Mode };
  type State = { error?: boolean; loading?: boolean };

  type Reducer<T> = (state: T, update: Partial<T>) => T & Partial<T>;
  type Dispatch<T> = React.Dispatch<Partial<T>>;

  type ThemeReducer = Reducer<Theme>;
  type StateReducer = Reducer<State>;

  type ThemeDispatch = Dispatch<Theme>;
  type StateDispatch = Dispatch<State>;
}