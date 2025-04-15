import { cn } from '@/lib/utils';
import { TextSize } from '@/types/types.custom';
import * as React from 'react';

interface IProseProps {
  children?: React.ReactNode;
  color?: string;
  className?: string;
  size?: keyof typeof ProseSize
}

enum ProseSize {
  sm = 'xl:prose-sm',
  md = 'xl:prose-base',
  lg = 'xl:prose-lg',
  xl = 'xl:prose-xl',
  '2xl' = 'xl:prose-2xl',
}

const Prose: React.FunctionComponent<IProseProps> = ({ children, color, className, size = 'md' }) => {
  // if you want to use dark mode: dark:prose-invert 
  return (
    <div className={cn(`prose max-w-none`, ProseSize[size], className)}>
      {children}
    </div>
  );
};

export default Prose;
