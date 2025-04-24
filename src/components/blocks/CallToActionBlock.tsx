import * as React from 'react';
import { CallToActionBlock as CallToActionBlockType } from '@/types/types.sanity';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { ContactFormExternal } from '../ContactFormExternal';
import { PortableText } from '@portabletext/react';
import { components } from './index';
import { cn } from '@/lib/utils';

interface ICallToActionBlockProps {
  value: CallToActionBlockType
}

const CallToActionBlock: React.FunctionComponent<ICallToActionBlockProps> = (props) => {
  switch (props?.value?.options?.layout) {
    case 'form':
      return <FormLayout {...props} />;
    default:
      return <DefaultLayout {...props} />;
  }
};

export default CallToActionBlock;

const DefaultLayout: React.FunctionComponent<ICallToActionBlockProps> = (props) => {
  const { body, buttonText } = props.value
  return (
    <div className={cn(
      'flex flex-col gap-[var(--block-padding)] items-center justify-center md:justify-between text-center prose-h2:text-center',
    )}>
      <div className='portable-text-block w-full text-center'>
        {body && (
          <PortableText value={body} components={components} />
        )}
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='not-prose flex justify-center items-center'>
          <Dialog>
            <DialogTrigger>
              <span className='bg-primary text-primary-foreground font-bold text-2xl px-4 py-2 rounded-md'>{buttonText}</span>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{buttonText}</DialogTitle>
                <DialogDescription>
                  Tell us a bit about yourself so we can get started on rebuilding your home.
                </DialogDescription>
              </DialogHeader>
              <ContactFormExternal />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

const FormLayout: React.FunctionComponent<ICallToActionBlockProps> = (props) => {
  const { body, options } = props.value

  return (
    <div className={cn(
      'flex flex-col md:flex-row gap-[var(--block-padding)] justify-start md:justify-between text-center',
      options?.vAlign === 'top' ? 'items-start' : options?.vAlign === 'bottom' ? 'items-end' : 'items-center'
    )}>
      <div className='portable-text-block w-full text-left'>
        {body && (
          <PortableText value={body} components={components} />
        )}
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='w-full not-prose'>
          <ContactFormExternal />
        </div>
      </div>
    </div>
  )
}