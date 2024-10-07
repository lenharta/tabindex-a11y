import clsx from 'clsx';
import { forwardRef } from 'react';

export interface PageProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className={clsx('tbx-page', className)}>
        {children}
      </div>
    );
  }
);
