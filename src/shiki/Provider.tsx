import { useThemeStore } from '@/store';
import { SHIKI } from '@/types';
import { useCallback, useEffect, useState, createContext, useContext } from 'react';

export const CODE_THEME_LOOKUP = {
  light: 'tbx-code-theme-light',
  dark: 'tbx-code-theme-dark',
};

export const ShikiContext = createContext<SHIKI.Generator | null>(null);

export function ShikiProvider(props: SHIKI.ProviderProps) {
  const [shiki, setShiki] = useState<SHIKI.State | null>(null);
  const { mode } = useThemeStore();

  useEffect(() => {
    props.loader().then((payload) => {
      setShiki(payload);
    });
  }, []);

  const highlight: SHIKI.Generator = useCallback(
    (code, lang = 'tsx') => {
      if (!shiki) {
        return {
          highlighted: false,
          code,
        };
      } else {
        return {
          highlighted: true,
          code: shiki.codeToHtml(code, {
            theme: CODE_THEME_LOOKUP[mode] || 'tbx-code-theme-dark',
            lang,
          }),
        };
      }
    },
    [shiki, mode]
  );

  return (
    <ShikiContext.Provider value={highlight}>
      <>{props.children}</>
    </ShikiContext.Provider>
  );
}

export function useShiki() {
  const context = useContext(ShikiContext);

  if (!context) {
    return (code: string) => ({ code, highlighted: false });
  }
  return context;
}
