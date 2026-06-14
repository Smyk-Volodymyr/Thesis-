'use client';

import {
  Conversation,
  ConversationContent
} from '@workspace/ui/components/ai-elements/conversation';
import {
  PromptInput,
  PromptInputButton,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar
} from '@workspace/ui/components/ai-elements/prompt-input';
import { Button } from '@workspace/ui/components/button';
import { Skeleton } from '@workspace/ui/components/skeleton';
import { cn } from '@workspace/ui/lib/utils';
import { MoreHorizontalIcon, Wand2Icon } from 'lucide-react';

export const ConversationDetailViewSkeleton = () => {
  return (
    <div className='bg-muted flex h-full flex-1 flex-col'>
      <header className='bg-background flex items-center justify-between border-b p-2.5'>
        <Button size='sm' variant='ghost'>
          <MoreHorizontalIcon />
        </Button>
        <Skeleton className='h-8 w-24' />
      </header>

      <Conversation className='max-h-[calc(100vh-159px-64px-44px-22px)] flex-1'>
        <ConversationContent>
          {Array.from({ length: 10 }).map((_, index) => {
            const isUser = index % 2 === 0;
            const widths = ['w-48', 'w-60', 'w-72'];
            const width = widths[index % widths.length];

            return (
              <div
                className={cn(
                  'group flex w-full items-end justify-end gap-2 py-2 [&>div]:max-w-[80%]',
                  isUser ? 'is-user' : 'is-assistant flex-row-reverse'
                )}
                key={index}
              >
                <Skeleton className={`h-9 ${width} bg-secondary rounded-lg`} />
                <Skeleton className='bg-secondary size-8 rounded-full' />
              </div>
            );
          })}
        </ConversationContent>
      </Conversation>

      {/* FORM */}
      <div className='p-2'>
        <PromptInput>
          <PromptInputTextarea
            disabled
            placeholder='Type your response as an operator...'
          />
          <PromptInputToolbar>
            <PromptInputButton disabled={true}>
              <Wand2Icon size={16} />
              Enhance
            </PromptInputButton>
            <PromptInputSubmit disabled status='ready' />
          </PromptInputToolbar>
        </PromptInput>
      </div>
    </div>
  );
};
