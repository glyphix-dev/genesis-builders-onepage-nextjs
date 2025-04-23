import * as React from 'react';
import { StatsBlock as StatsBlockType } from '@/types/types.sanity';
import { v4 as uuidv4 } from 'uuid';

interface IStatsBlockProps {
  value: StatsBlockType
}

const StatsBlock: React.FunctionComponent<IStatsBlockProps> = (props) => {
  const { stats } = props.value
  return (
    <div className='flex flex-wrap gap-[var(--block-padding)] justify-center not-prose'>
      {stats?.map((stat) => {
        return (
          <div key={uuidv4()} className='flex flex-col-reverse items-center gap-8 bg-slate-800 text-white p-4 rounded-lg'>
            <h2 className='text-xl font-bold'>{stat.title}</h2>
            <p className='text-4xl'>{stat.value}</p>
          </div>
        )
      })}
    </div>
  );
};

export default StatsBlock;
