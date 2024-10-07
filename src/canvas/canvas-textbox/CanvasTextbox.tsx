import { forwardRef } from 'react';

export interface CanvasTextboxProps {
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
}

export const CanvasTextbox = forwardRef<HTMLInputElement, CanvasTextboxProps>(
  ({ ...forwardedProps }, ref) => {
    return <input ref={ref} className="tbx-canvas-textbox" {...forwardedProps} />;
  }
);
