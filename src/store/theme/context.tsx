import { STORE } from '@/types';
import { useReducer, createContext, useEffect, useContext } from 'react';
import { JSONDeserialize, JSONSerialize, keys } from '@/utils';

const STORAGE_KEY = 'tbx-theme';

const INITIAL_THEME: STORE.Theme = {
  mode: 'dark',
  dir: 'ltr',
};

export const ThemeStoreContext = createContext({} as STORE.Theme);
export const ThemeDispatchContext = createContext({} as STORE.ThemeDispatch);

export function writeTheme<T extends Record<string, any>>(payload: T): boolean {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSONSerialize(payload));
    return true;
  } catch {
    return false;
  }
}

export function readTheme(): boolean {
  try {
    return !!window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return false;
  }
}

export function fetchTheme<T extends Record<string, any>>(): T | null {
  try {
    return JSONDeserialize(window.localStorage.getItem(STORAGE_KEY) as string) as T;
  } catch {
    return null;
  }
}

export function clearTheme(): boolean {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}

export function initializeTheme<T>(current: T): T {
  return readTheme() ? (fetchTheme() as T) : current;
}

export function updateThemeDOM(theme: STORE.Theme, element?: HTMLElement | undefined): boolean {
  if (!element) {
    return false;
  }

  keys(theme).forEach((key) => {
    element.setAttribute(`data-prefers-${key}`, theme[key]);
  });

  return true;
}

export function ThemeStoreProvider(props: Readonly<{ children: React.ReactNode }>) {
  const [theme, dispatch] = useReducer(
    (current: STORE.Theme, update: Partial<STORE.Theme>) => ({ ...current, ...update }),
    INITIAL_THEME,
    initializeTheme
  );

  useEffect(() => {
    const element = document.getElementsByTagName('html')[0];
    updateThemeDOM(theme, element);
    writeTheme(theme);
  }, [theme]);

  return (
    <ThemeDispatchContext.Provider value={dispatch}>
      <ThemeStoreContext.Provider value={theme}>
        <>{props.children}</>
      </ThemeStoreContext.Provider>
    </ThemeDispatchContext.Provider>
  );
}

export function useThemeStore() {
  return useContext(ThemeStoreContext);
}

export function useThemeDispatch() {
  return useContext(ThemeDispatchContext);
}
