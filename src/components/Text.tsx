import { Slot } from '@radix-ui/react-slot';

import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({ size = 'md', children, asChild, className }: TextProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'text-gray-100 font-normal',
        {
          'text-sm': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}
