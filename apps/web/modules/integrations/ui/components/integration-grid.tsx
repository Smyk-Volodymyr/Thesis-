'use client';

import Image from 'next/image';
import {
  type IntegrationId,
  INTEGRATIONS
} from '@/modules/integrations/constants';

type IntegrationGridAttributes = {
  onSelect: (integrationId: IntegrationId) => void;
};

export const IntegrationGrid = ({ onSelect }: IntegrationGridAttributes) => {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
      {INTEGRATIONS.map((integration) => (
        <button
          key={integration.id}
          className='bg-muted hover:bg-accent flex items-center gap-4 rounded-lg border p-4'
          onClick={() => onSelect(integration.id)}
        >
          <Image
            src={integration.icon}
            alt={integration.title}
            width={32}
            height={32}
          />
          <p className='text-sm font-medium'>{integration.title}</p>
        </button>
      ))}
    </div>
  );
};
