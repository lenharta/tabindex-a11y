import { SHIKI } from '@/types';
import { useShiki } from '@/shiki';

export interface SnippetTransitionProps {
  style?: React.CSSProperties;
  easing?: React.CSSProperties['transitionTimingFunction'];
  property?: React.CSSProperties['transitionProperty'];
  duration?: React.CSSProperties['transitionDuration'];
}

export interface SnippetProps extends SnippetTransitionProps {
  lang?: SHIKI.Language;
  code?: string;
}

const DEFAULT_SNIPPET_TRANSITION: SnippetTransitionProps = {
  property: 'background-color, border-color, color',
  easing: 'ease-in-out',
  duration: '400ms',
};

export function parseSnippetStyles(props: SnippetTransitionProps): React.CSSProperties {
  return {
    ...props.style,
    transitionTimingFunction: props.easing || DEFAULT_SNIPPET_TRANSITION.easing,
    transitionProperty: props.property || DEFAULT_SNIPPET_TRANSITION.property,
    transitionDuration: props.duration || DEFAULT_SNIPPET_TRANSITION.duration,
  };
}

export const Snippet: React.FC<SnippetProps> = (props) => {
  const { code: raw = '', lang = 'tsx', duration, easing, property, style } = props;

  const shiki = useShiki();

  const { highlighted, code } = shiki(raw.trim(), lang);

  return (
    <div
      role="presentation"
      style={parseSnippetStyles({ style, duration, easing, property })}
      className="tbx-snippet"
    >
      {!highlighted ? (
        <pre>
          <code>{code}</code>
        </pre>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: code }} />
      )}
    </div>
  );
};

Snippet.displayName = '@tbx/Snippet';
