import { HighlighterGeneric } from 'shiki';

export declare namespace SHIKI {
  type Language = 'tsx' | 'css' | 'scss' | 'html' | 'bash' | 'json' | 'js' | 'jsx';

  type Payload = { code: string; highlighted: boolean };

  type Generator = (code: string, language: Language) => Payload;

  type State = HighlighterGeneric<any, any> | null;

  type ProviderProps = {
    children: React.ReactNode;
    loader: () => Promise<HighlighterGeneric<any, any>>;
  };
}