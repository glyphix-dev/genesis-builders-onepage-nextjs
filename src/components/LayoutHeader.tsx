import * as React from 'react';

interface ILayoutHeaderProps {
  title: string
  subtitle?: string
}

const LayoutHeader: React.FunctionComponent<ILayoutHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-1 my-16">
      <h1 className="text-5xl font-bold font-serif">{title || "Untitled"}</h1>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  );
};

export default LayoutHeader;
