import { forwardRef } from 'react';

export interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(({ ...props }, ref) => {
  return (
    <header {...props} ref={ref} className="tbx-header">
      <span className="tbx-header-layout">
        <div>TabIndex</div>
      </span>
    </header>
  );
});
