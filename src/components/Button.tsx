import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({ asChild, children, className, ...rest }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'w-full py-3 px-4 bg-cyan-500 text-black text-sm font-semibold hover:bg-cyan-300 transition-colors rounded focus:ring-2 ring-white',
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
