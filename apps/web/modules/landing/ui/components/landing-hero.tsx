import { Button } from '@workspace/ui/components/button';
import { ArrowRightIcon, SparklesIcon } from 'lucide-react';
import Link from 'next/link';

export const LandingHero = () => {
  return (
    <section className='from-primary/10 relative overflow-hidden rounded-2xl border bg-gradient-to-b to-transparent p-8 md:p-12'>
      <span className='bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold'>
        <SparklesIcon className='size-3.5' />
        AI Support Platform
      </span>

      <h1 className='mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl'>
        Resolve every customer conversation, faster.
      </h1>
      <p className='text-muted-foreground mt-3 max-w-xl text-sm md:text-base'>
        A unified inbox, an AI co-pilot for your operators and a voice-ready
        assistant — all from a single workspace.
      </p>

      <div className='mt-6 flex flex-wrap items-center gap-3'>
        <Button asChild>
          <Link href='/conversations'>
            Open Conversations
            <ArrowRightIcon className='size-4' />
          </Link>
        </Button>
        <Button asChild variant='outline'>
          <Link href='/customization'>Customize widget</Link>
        </Button>
      </div>
    </section>
  );
};
