import { landingHighlights } from '@/modules/landing/constants';
import { LandingFeatureCard } from '@/modules/landing/ui/components/landing-feature-card';

export const LandingFeatureGrid = () => {
  return (
    <section className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {landingHighlights.map((highlight) => (
        <LandingFeatureCard key={highlight.title} highlight={highlight} />
      ))}
    </section>
  );
};
