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

import { Button } from '../ui/button';
import { ContactForm } from '../ContactForm';
import { PortableText } from '@portabletext/react';
import { components } from './index';

interface ICallToActionBlockProps {
  value: CallToActionBlockType
}

const CallToActionBlock: React.FunctionComponent<ICallToActionBlockProps> = (props) => {
  const { body, buttonText, formDisplay, } = props.value
  return (
    <div className='flex flex-col md:flex-row gap-[var(--block-padding)] items-center justify-center md:justify-between'>
      <div className='portable-text-block w-full md:basis-2/3 text-center md:text-left'>
        {body && (
          <PortableText value={body} components={components} />
        )}
      </div>
      <div className='w-full md:basis-1/3 flex justify-center md:justify-end items-center'>
        {formDisplay === 'inline' && (
          <div className='w-full not-prose'>
            <ContactForm />
          </div>
        )}
        {formDisplay === 'modal' && (
          <div className='not-prose'>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" size="lg">{buttonText}</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Get Started!</DialogTitle>
                  <DialogDescription>
                    Tell us a bit about yourself so we can get started on rebuilding your home.
                  </DialogDescription>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallToActionBlock;
