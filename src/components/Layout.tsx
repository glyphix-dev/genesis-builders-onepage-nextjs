import { cn } from '@/lib/utils';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';

interface ILayoutProps {
  children: React.ReactNode;
  hasStickyHeader?: boolean;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children, hasStickyHeader = false }) => {
  return (
    <>
      <Header isSticky={hasStickyHeader} />
      <div className="flex flex-col min-h-screen relative px-8  pb-[var(--layout-spacing)] overflow-hidden">
        <div className={cn("relative animate-fade-in", hasStickyHeader ? "" : "")}>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
