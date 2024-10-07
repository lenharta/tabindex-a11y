import { CanvasTextbox } from '../canvas-textbox/CanvasTextbox';

export interface CanvasInputProps {
  type?: 'textbox';
  error?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const CanvasInputs = {
  textbox: CanvasTextbox,
};

export const CanvasInput: React.FC<CanvasInputProps> = (props) => {
  const { type = 'textbox', error, loading, disabled } = props;

  let Component = CanvasInputs[type];

  return <Component error={error} loading={loading} disabled={disabled} />;
};
