import type { Bento2Block } from '@/types/types.sanity';
import * as React from 'react';
import SanityContent from '../SanityContent';
import { TextSize } from '@/types/types.custom';
import { cn } from '@/lib/utils';
import Heading from '../Heading';

enum VAlign {
  top = 'items-start',
  center = 'items-center',
  bottom = 'items-end',
}

const Bento2Block: React.FunctionComponent<Bento2Block> = async (props) => {
  const { left, right, heading, options } = props;
  return (
    <div className="">
      {heading && <Heading text={heading.text || "no text"} level={heading.level || 1} className='mt-0' />}
      <div className={`content-block flex items-center flex-col md:flex-row md:gap-16 ${options?.reverse ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col-reverse md:flex-row'} ${VAlign[options?.vAlign || 'center']}`}>
        <div className={cn(options?.offset ? 'basis-2/3' : 'basis-1/2 w-1/2')}>
          {left && <SanityContent content={left} size={options?.textSize as keyof typeof TextSize} />}
        </div>
        <div className={`${options?.offset ? 'basis-1/3' : 'basis-1/2 w-1/2'}`}>
          {right && <SanityContent content={right} size={options?.textSize as keyof typeof TextSize} />}
        </div>
      </div>
    </div>
  );
};

export default Bento2Block;
