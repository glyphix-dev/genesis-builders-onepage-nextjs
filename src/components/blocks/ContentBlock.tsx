import * as React from 'react';
import { ContentBlock as ContentBlockType } from '@/types/types.sanity';
import SanityContent from '@/components/SanityContent';
import { TextSize } from '@/types/types.custom';

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
    <div className={`${ContentBlockAlignmentClass[props.value.align as ContentBlockAlignment]}`}>
      <SanityContent content={props.value.content} size={props.value.options?.textSize as keyof typeof TextSize} />
    </div>
  );
};

export default ContentBlock;
