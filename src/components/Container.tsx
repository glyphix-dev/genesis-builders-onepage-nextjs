import { cn } from '@/lib/utils';
import * as React from 'react';

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FunctionComponent<IContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("container mx-auto max-w-6xl px-8 lg:px-0relative", className)}>
      {children}
    </div>
  );
};

export default Container;
