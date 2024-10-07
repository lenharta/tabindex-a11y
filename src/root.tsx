import { Outlet } from 'react-router-dom';
import { EDITOR_THEME_DARK, EDITOR_THEME_LIGHT, ShikiProvider } from './shiki';
import { StateStoreProvider, ThemeStoreProvider } from './store';
import { Header } from './layout';

async function loadShiki() {
  const { createHighlighter } = await import('shiki');

  const shiki = await createHighlighter({
    langs: ['tsx', 'css', 'scss', 'html', 'bash', 'json', 'js', 'jsx'],
    themes: [EDITOR_THEME_LIGHT, EDITOR_THEME_DARK],
  });

  return shiki;
}

export default function RootLayout() {
  return (
    <ThemeStoreProvider>
      <StateStoreProvider>
        <ShikiProvider loader={loadShiki}>
          <Header />
          <Outlet />
        </ShikiProvider>
      </StateStoreProvider>
    </ThemeStoreProvider>
  );
}
