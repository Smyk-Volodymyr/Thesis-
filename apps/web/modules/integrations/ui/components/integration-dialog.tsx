'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@workspace/ui/components/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@workspace/ui/components/dialog';
import { CheckIcon, ClipboardIcon } from 'lucide-react';

type IntegrationDialogAttributes = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  snippet: string;
};

export const IntegrationDialog = ({
  open,
  onOpenChange,
  snippet
}: IntegrationDialogAttributes) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      toast.success('Copied to clipboard');
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    } finally {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='lg:min-w-[600px]'>
        <DialogHeader>
          <DialogTitle>Integration with your website</DialogTitle>
          <DialogDescription>
            Add the following code to your website to enable the chatbox.
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-6'>
          <div className='space-y-2'>
            <div className='py-2 text-sm'>1. Copy the following code.</div>
            <div className='group relative'>
              <pre className='bg-foreground text-secondary max-h-[300px] overflow-auto whitespace-pre-wrap break-all rounded-md p-2 font-mono text-sm'>
                {snippet}
              </pre>
              <Button
                className='absolute right-2 top-2 size-6 opacity-0 transition-opacity group-hover:opacity-100'
                size='icon'
                variant='secondary'
                onClick={handleCopy}
                disabled={copied}
              >
                {copied ? (
                  <CheckIcon className='size-3' />
                ) : (
                  <ClipboardIcon className='size-3' />
                )}
              </Button>
            </div>
          </div>

          <div className='space-y-2'>
            <div className='py-2 text-sm'>
              2. Paste it into the <code>head</code> section of your website.
            </div>
            <p className='text-muted-foreground text-sm'>
              Add the following code to your website to enable the chatbox.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
