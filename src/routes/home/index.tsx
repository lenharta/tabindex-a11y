import { Hero, Page } from '@/layout';
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
    <Page {...props}>
      <Hero>
        <h1>Home</h1>
      </Hero>

      <Snippet code={sampleCode} />
      <ModeControl />

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero velit
          nesciunt pariatur. Recusandae, tenetur numquam! Tempora recusandae, molestias fugiat
          labore dicta quod cumque nulla. Repellendus in alias pariatur ab?
        </p>
      </section>
    </Page>
  );
};

Home.displayName = '@tbx/Home';
