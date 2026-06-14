import { LandingFeatureGrid } from '@/modules/landing/ui/components/landing-feature-grid';
import { LandingHero } from '@/modules/landing/ui/components/landing-hero';
import { LandingQuickActions } from '@/modules/landing/ui/components/landing-quick-actions';

export const LandingView = () => {
  return (
    <div className='mx-auto flex w-full max-w-screen-lg flex-col gap-8 px-4 py-6'>
      <LandingHero />
      <LandingFeatureGrid />
      <LandingQuickActions />
    </div>
  );
};
