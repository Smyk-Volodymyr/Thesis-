import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@workspace/ui/components/card';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { landingShortcuts } from '@/modules/landing/constants';

export const LandingQuickActions = () => {
  return (
    <section className='space-y-4'>
      <div className='space-y-1'>
        <h2 className='text-lg font-semibold tracking-tight'>Jump back in</h2>
        <p className='text-muted-foreground text-sm'>
          Pick up where your team left off.
        </p>
      </div>

      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {landingShortcuts.map((shortcut) => {
          const { icon: Icon, title, description, href } = shortcut;

          return (
            <Link key={href} href={href} className='group'>
              <Card className='hover:border-primary/50 h-full transition-colors'>
                <CardHeader>
                  <div className='flex items-center justify-between'>
                    <span className='bg-muted text-foreground flex size-9 items-center justify-center rounded-lg'>
                      <Icon className='size-5' />
                    </span>
                    <ChevronRightIcon className='text-muted-foreground group-hover:text-primary size-4 transition-colors' />
                  </div>
                  <CardTitle className='mt-3 text-base'>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
