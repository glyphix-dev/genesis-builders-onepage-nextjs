import * as React from 'react';
import { ContentBlock as ContentBlockType } from '@/types/types.sanity';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { components } from '.';

interface IContentBlockProps {
  value: ContentBlockType
}

enum ContentBlockAlignment {
  start = 'start',
  end = 'end',
  center = 'center'
}

enum ContentBlockAlignmentClass {
  start = 'text-left',
  end = 'text-right',
  center = 'text-center'
}

const ContentBlock: React.FunctionComponent<IContentBlockProps> = (props) => {
  return props.value.content && (
    <div className={`portable-text-block ${ContentBlockAlignmentClass[props.value.align as ContentBlockAlignment]}`}>
      <PortableText value={props.value.content} components={components as Partial<PortableTextReactComponents>} />
    </div>
  );
};

export default ContentBlock;
