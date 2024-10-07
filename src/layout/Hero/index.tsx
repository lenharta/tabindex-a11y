import clsx from 'clsx';
import { forwardRef } from 'react';

export interface HeroProps extends React.ComponentPropsWithoutRef<'section'> {}

export const Hero = forwardRef<HTMLDivElement, HeroProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <section {...props} ref={ref} className={clsx('tbx-hero', className)}>
        {children}
      </section>
    );
  }
);
