'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@workspace/ui/components/button';
import { Input } from '@workspace/ui/components/input';
import { Label } from '@workspace/ui/components/label';
import { Separator } from '@workspace/ui/components/separator';
import { useOrganization } from '@clerk/nextjs';
import { CheckIcon, ClipboardIcon } from 'lucide-react';
import { type IntegrationId } from '@/modules/integrations/constants';
import { createSnippet } from '@/modules/integrations/utils';
import { IntegrationDialog } from '@/modules/integrations/ui/components/integration-dialog';
import { IntegrationGrid } from '@/modules/integrations/ui/components/integration-grid';

export const IntegrationsView = () => {
  const { organization } = useOrganization();
  const [copied, setCopied] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [snippet, setSnippet] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(organization?.id ?? '');
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

  const handleIntegrationClick = (integrationId: IntegrationId) => {
    if (!organization) {
      toast.error('Organization not found');
      return;
    }

    const generatedSnippet = createSnippet(integrationId, organization.id);
    setSnippet(generatedSnippet);
    setOpenDialog(true);
  };

  return (
    <>
      <div className='flex h-[calc(100vh-56px)] flex-col overflow-y-auto'>
        <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
          <div className='px-4'>
            <h2 className='text-xl font-bold tracking-tight'>
              Setup & Integrations
            </h2>
            <p className='text-muted-foreground text-sm'>
              Choose the integration that&apos;s right for you
            </p>
          </div>
        </div>

        <div className='my-8 flex w-full max-w-screen-md flex-1 flex-col px-4'>
          <div className='flex items-center gap-4'>
            <Label className='w-34' htmlFor='orgId'>
              Organization ID
            </Label>
            <Input
              id='orgId'
              className='bg-muted flex-1 font-mono text-sm'
              disabled
              readOnly
              value={organization?.id ?? ''}
            />
            <Button
              size='sm'
              className='gap-2'
              onClick={handleCopy}
              disabled={copied}
            >
              {copied ? (
                <CheckIcon className='size-4' />
              ) : (
                <ClipboardIcon className='size-4' />
              )}
              {copied ? 'Copied' : 'Copy'}
            </Button>
          </div>

          <Separator className='my-8' />

          <div className='space-y-6'>
            <div className='space-y-1'>
              <Label className='text-md font-medium'>Integrations</Label>
              <p className='text-muted-foreground text-sm'>
                Add the following code to your website to enable the chatbox.
              </p>
            </div>
            <IntegrationGrid onSelect={handleIntegrationClick} />
          </div>
        </div>
      </div>
      <IntegrationDialog
        open={openDialog}
        onOpenChange={setOpenDialog}
        snippet={snippet}
      />
    </>
  );
};
