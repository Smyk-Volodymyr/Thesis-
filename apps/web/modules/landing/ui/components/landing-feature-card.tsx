import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@workspace/ui/components/card';
import type { LandingHighlight } from '@/modules/landing/constants';

type LandingFeatureCardAttributes = {
  highlight: LandingHighlight;
};

export const LandingFeatureCard = ({
  highlight
}: LandingFeatureCardAttributes) => {
  const { icon: Icon, title, description } = highlight;

  return (
    <Card className='h-full'>
      <CardHeader>
        <span className='bg-primary/10 text-primary flex size-9 items-center justify-center rounded-lg'>
          <Icon className='size-5' />
        </span>
        <CardTitle className='mt-3 text-base'>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
