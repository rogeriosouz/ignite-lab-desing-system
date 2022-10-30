import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 focus-within:ring-2 ring-cyan-300  w-full py-3 px-4 bg-gray-800 rounded">
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="text-gray-400 w-6 h-6">{children}</Slot>;
}

TextInputIcon.displayName = 'TextInput.Icon';

function TextInputInput({ ...rest }: TextInputInputProps) {
  return (
    <input
      className={
        'bg-trasparent flex-1 text-gray-100 placeholder:text-gray-400 outline-none font-bold text-sm'
      }
      {...rest}
    />
  );
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
