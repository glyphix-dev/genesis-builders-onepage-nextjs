import * as React from 'react';
import type { TestimonialBlock } from '@/types/types.sanity';
import SanityImage, { ISanityImageProps } from '../SanityImage';
interface ITestimonialBlockProps {
  value: TestimonialBlock;
}

const TestimonialBlock: React.FunctionComponent<ITestimonialBlockProps> = ({ value }) => {
  return (
    <div className="testimonial-block prose">
      <blockquote>
        {value.quote}
        {value.author && (
          <cite className="mt-4 flex gap-4 items-center">
            {value.author?.image && <SanityImage image={value.author?.image as unknown as ISanityImageProps['image']} alt={value.author?.name || ""} width={40} height={40} className="rounded-full my-0" />}
            <span className="text-lg font-bold">{value.author.name}</span>
          </cite>)}
      </blockquote>

    </div>
  );
};

export default TestimonialBlock;
