import { cn } from '@/lib/utils';
import * as React from 'react';

interface IContentContainerProps {
  children: React.ReactNode;
  hasAside?: boolean;
  className?: string;
}

const ContentContainer: React.FunctionComponent<IContentContainerProps> = ({ children, hasAside = false, className }) => {
  return (
    <div id="content" className={cn(
      `w-full flex flex-col`,
      hasAside ? 'md:flex-row gap-[var(--layout-gap)]' : '',
      className
    )}>
      {children}
    </div>
  );
};

export default ContentContainer;
