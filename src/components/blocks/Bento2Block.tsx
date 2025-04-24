import type { Bento2Block } from '@/types/types.sanity';
import * as React from 'react';
// import SanityContent from '../SanityContent';
// import { TextSize } from '@/types/types.custom';
import { cn } from '@/lib/utils';
import Heading from '../Heading';
import { components } from '.';
import { PortableText } from '@portabletext/react';

enum VAlign {
  top = 'items-start',
  center = 'items-center',
  bottom = 'items-end',
}

const Bento2Block: React.FunctionComponent<Bento2Block> = async (props) => {
  const { left, right, heading, options, leading } = props;
  return (
    <div className="">
      {heading && <Heading text={heading.text || "no text"} level={heading.level || 1} className='heading-center mt-0 text-center ' />}
      {leading && (
        <div className="text-center">
          <PortableText value={leading} components={components} />
        </div>
      )}
      <div
        className={cn(
          `flex items-center flex-col md:flex-row gap-[var(--block-padding)]`,
          `${options?.reverse ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'} ${VAlign[options?.vAlign || 'center']}`
        )}>
        <div className={cn("portable-text-block", options?.offset ? 'basis-1 md:basis-2/3' : 'basis-1 md:basis-1/2')}>
          {left && <PortableText value={left} components={components} />}
        </div>
        <div className={cn("portable-text-block", options?.offset ? 'w-full md:basis-1/3' : 'w-full md:basis-1/2')}>
          {right && <PortableText value={right} components={components} />}
        </div>
      </div>
    </div>
  );
};

export default Bento2Block;
