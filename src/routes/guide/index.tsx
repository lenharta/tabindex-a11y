import { Hero, Page } from '@/layout';

export const Guide: React.FC<{}> = (props) => {
  return (
    <Page {...props}>
      <Hero>
        <h1>Guide</h1>
      </Hero>
    </Page>
  );
};

Guide.displayName = '@tbx/Guide';
