import * as React from 'react';
import { CallToActionBlock as CallToActionBlockType } from '@/types/types.sanity';
import {
  Dialog,
  DialogContent,
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
    <div className='content-block bg-muted text-muted-foreground flex flex-col md:flex-row gap-16 items-center justify-center md:justify-between p-16'>
      <div className='w-full md:basis-2/3 text-center md:text-left prose-h2:text-5xl'>
        {body && (
          <PortableText value={body} components={components} />
        )}
      </div>
      <div className='w-full md:basis-1/3 flex justify-center md:justify-end items-center'>
        {formDisplay === 'inline' && (
          <div className='w-full'>
            <ContactForm />
          </div>
        )}
        {formDisplay === 'modal' && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" size="lg">{buttonText}</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Get Started!</DialogTitle>
                {/* <DialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </DialogDescription> */}
              </DialogHeader>
              <ContactForm />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default CallToActionBlock;
