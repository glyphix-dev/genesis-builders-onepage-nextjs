import * as React from 'react';
import { cn } from '@/lib/utils';
interface ILandingPageContentProps {
  children: React.ReactNode;
  className?: string;
}

const LandingPageContent: React.FunctionComponent<ILandingPageContentProps> = (props) => {
  return (
    <div className={cn("flex flex-col gap-32", props.className)}>
      {props.children}
    </div>
  );
};

export default LandingPageContent;
