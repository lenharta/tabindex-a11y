import { Button, Snippet } from '@/components';
import { useThemeDispatch } from '@/store';

const sampleCode = '\nconst foo(bar) {\n  return bar;\n}\n';

const ModeControl = () => {
  const dispatch = useThemeDispatch();
  return (
    <div>
      <Button onClick={() => dispatch({ mode: 'dark' })}>Dark</Button>
      <Button onClick={() => dispatch({ mode: 'light' })}>Light</Button>
    </div>
  );
};

export const Home: React.FC<{}> = (props) => {
  return (
    <div {...props}>
      <h1>Home</h1>
      <Snippet code={sampleCode} />
      <ModeControl />
    </div>
  );
};

Home.displayName = '@tbx/Home';
