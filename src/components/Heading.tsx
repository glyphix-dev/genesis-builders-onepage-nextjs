import { cn } from '@/lib/utils';
import * as React from 'react';
interface IHeadingProps {
  text: string
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

const Heading: React.FunctionComponent<IHeadingProps> = (props) => {
  const { text, level, className = "" } = props;
  switch (level) {
    case 1:
      return <h1 className={cn(className)}>{text}</h1>;
    case 2:
      return <h2 className={cn(className)}>{text}</h2>;
    case 3:
      return <h3 className={cn(className)}>{text}</h3>;
    case 4:
      return <h4 className={cn(className)}>{text}</h4>;
    case 5:
      return <h5 className={cn(className)}>{text}</h5>;
    case 6:
      return <h6 className={cn(className)}>{text}</h6>;
  }
};
export default Heading;
