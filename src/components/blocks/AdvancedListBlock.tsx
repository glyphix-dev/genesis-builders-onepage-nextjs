import * as React from 'react';
import { AdvancedListBlock as AdvancedListBlockType } from '@/types/types.sanity';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import Heading from '../Heading';
import { components } from '.';
import { cn } from '@/lib/utils';

interface IAdvancedListBlockProps extends AdvancedListBlockType {
  listItems?: AdvancedListBlockType['listItems'];
  options?: AdvancedListBlockType['options'];
  heading?: AdvancedListBlockType['heading'];
}

const AdvancedListBlock: React.FunctionComponent<IAdvancedListBlockProps> = (props) => {
  const { listItems, options, heading } = props;
  console.log({ listItems, options, heading });

  const ListItems = listItems?.map((item) => {
    const builder = imageUrlBuilder(client);
    return (
      <li key={item._key} className={`${options?.type === 'bullet' ? 'flex items-start gap-2 text-2xl pb-4' : 'content-block'}`}>
        {item.image && (
          <Image src={builder.image(item.image).width(30).height(30).fit('max').url()} alt={""} width={30} height={30} />
        )}
        {item.body && (
          <PortableText value={item.body} components={components} />
        )}
      </li>
    )
  })

  return (
    <div className={cn(
      "content-block",
      `text-${options?.textAlign || "left"}`,
    )}>
      {heading && (
        <Heading level={heading.level || 2} text={heading.text || ""} />
      )}
      {options?.type === 'bullet' ? (
        <ul className="not-prose">
          {ListItems}
        </ul>
      ) : (
        <ol className="list-none flex flex-col gap-4">
          {ListItems}
        </ol>
      )}
    </div>
  );
};

export default AdvancedListBlock;
