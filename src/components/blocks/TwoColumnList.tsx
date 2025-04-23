import { TwoColumnListBlock } from '@/types/types.sanity';
import * as React from 'react';
import Heading from '../Heading';
import type { IHeadingProps } from '../Heading';
import { PortableText } from '@portabletext/react';
import { components } from './index';
import { v4 as uuidv4 } from 'uuid';

const TwoColumnList: React.FunctionComponent<TwoColumnListBlock> = ({ heading, left, right }) => {
  return (
    <div className="flex flex-col gap-4 block-content prose-headings:mb-0 prose-headings:font-bold">
      <Heading text={heading?.text || ""} level={heading?.level || 2} className="mb-0" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--block-padding)] break-word">
        <div className="flex flex-col gap-[var(--block-padding)]">
          {left?.map((item) => (
            <div key={uuidv4()} className="block-content bg-muted text-muted-foreground p-4">
              <div className="not-prose">
                <Heading text={item.heading || ""} level={heading?.level ? heading.level + 1 as IHeadingProps["level"] : 3} className="text-xl font-bold" />
              </div>
              <div className="block-content">
                {item.body && <PortableText value={item.body} components={components} />}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[var(--block-padding)]">
          {right?.map((item) => (
            <div key={uuidv4()} className="block-content bg-muted text-muted-foreground p-4">
              <div className="not-prose">
                <Heading text={item.heading || ""} level={heading?.level ? heading.level + 1 as IHeadingProps["level"] : 3} className="text-xl font-bold" />
              </div>
              <div className="block-content">
                {item.body && <PortableText value={item.body} components={components} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwoColumnList;
