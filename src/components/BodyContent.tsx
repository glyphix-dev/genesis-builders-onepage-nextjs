import { PortableText } from 'next-sanity';
import * as React from 'react';
import { components } from './blocks';
import LandingPageContent from './LandingPageContent';
import { Page, Home } from '@/types/types.sanity';
import SanityContent from './SanityContent';
interface IBodyContentProps {
  data: Page | Home
}

const BodyContent: React.FunctionComponent<IBodyContentProps> = ({ data }) => {
  switch (data.template) {
    case "landing":
      return (
        <LandingPageContent>
          {data.landingContent && (
            <PortableText value={data.landingContent} components={components} />
          )}
        </LandingPageContent>
      )
    default:
      return (
        <div className="w-full">
          {data.defaultContent && (
            <SanityContent content={data.defaultContent} />
          )}
        </div>
      )
  }
};

export default BodyContent;
