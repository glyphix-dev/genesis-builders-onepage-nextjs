import { cn } from '@/lib/utils';
import { TabBlock } from '@/types/types.sanity';
import { PortableText } from 'next-sanity';
import * as React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import type { Image as ImageType } from 'sanity';

enum BlockThemeClasses {
  default = 'border-3 border-accent',
  filled = 'border-3 border-tertiary bg-tertiary',
}
export const TabbedBlock: React.FunctionComponent<TabBlock> = ({
  tabTitle,
  icon,
  left,
  right,
  theme = 'default',
}) => {
  const iconUrl = icon?.asset?._ref ? urlForImage(icon as ImageType) : null;
  return (
    <div className={cn(
      "tabbed-block p-6 relative",
      BlockThemeClasses[theme || 'default']
    )}>
      {tabTitle && <p className={cn(
        "bg-accent px-3 py-1 absolute top-0 -left-[3px] text-secondary -translate-y-full -mt-[3px]",
        "font-bold text-white text-base",
        "border-3 border-accent",
      )}>{tabTitle}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--block-padding)] items-start">
        <div className="flex gap-4">
          {iconUrl && <Image src={iconUrl} alt={icon?.alt || ''} width={75} height={75} />}
          <div className="">

            {left && <PortableText value={left} />}
          </div>
        </div>
        <div className="">
          {right && <PortableText value={right} />}
        </div>
      </div>
    </div>
  );
};

export default TabbedBlock;
