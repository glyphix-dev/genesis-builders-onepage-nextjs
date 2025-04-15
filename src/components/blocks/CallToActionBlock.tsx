import * as React from 'react';
import { CallToActionBlock as CallToActionBlockType } from '@/types/types.sanity';
import SanityContent from '../SanityContent';
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


interface ICallToActionBlockProps {
  value: CallToActionBlockType
}

const CallToActionBlock: React.FunctionComponent<ICallToActionBlockProps> = (props) => {
  const { body, buttonText, formDisplay, } = props.value
  return (
    <div className='content-block flex gap-16 justify-between bg-muted p-16 rounded-lg'>
      <div className='basis-2/3'>
        {body && <SanityContent content={body} size="xl" />}
      </div>
      <div className='basis-1/3 flex justify-end'>
        {formDisplay === 'inline' && (
          <div className='w-full'>
            <ContactForm />
          </div>
        )}
        {formDisplay === 'modal' && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">{buttonText}</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Get Started!</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </DialogDescription>
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
