'use client';
import { cn } from '@/lib/utils';
import * as React from 'react';

interface IStickyHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const StickyHeader: React.FunctionComponent<IStickyHeaderProps> = ({ children, className }) => {
  const [isSticky, setIsSticky] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 5) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={cn("sticky top-0 z-50 w-full", className, isSticky && "shadow-md")}>
      {children}
    </header>
  );
};

export default StickyHeader;