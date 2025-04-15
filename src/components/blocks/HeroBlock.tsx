import * as React from 'react';
import { HeroBlock as HeroBlockType } from '@/types/types.sanity';

interface IHeroBlockProps {
  value: HeroBlockType
}

const HeroBlock: React.FunctionComponent<IHeroBlockProps> = (props) => {
  return (
    <div>
      <h1>Hero Block</h1>
    </div>
  );
};

export default HeroBlock;
