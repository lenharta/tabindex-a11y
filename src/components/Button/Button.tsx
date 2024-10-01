import clsx from "clsx";
import { forwardRef } from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  disabled?: boolean;
  selected?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, leftContent, rightContent, children, ...props }, ref) => {
    return (
      <button {...props} className={clsx("tbx-button", className)} ref={ref}>
        <span className="tbx-button-layout">
          {leftContent && (
            <div data-position="left" className="tbx-button-content">
              {leftContent}
            </div>
          )}

          <div className="tbx-button-label">{children}</div>

          {rightContent && (
            <div data-position="right" className="tbx-button-content">
              {rightContent}
            </div>
          )}
        </span>
      </button>
    );
  }
);

Button.displayName = "@tbx/Button";
