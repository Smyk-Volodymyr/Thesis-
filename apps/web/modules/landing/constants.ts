import {
  BotIcon,
  CreditCardIcon,
  InboxIcon,
  LayoutDashboardIcon,
  LibraryBigIcon,
  MicIcon,
  PaletteIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ZapIcon,
  type LucideIcon
} from 'lucide-react';

export type LandingHighlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type LandingShortcut = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

// Value props surfaced in the hero feature grid.
export const landingHighlights: LandingHighlight[] = [
  {
    title: 'AI-assisted replies',
    description:
      'Draft, refine and enhance operator responses with a single click so no customer waits.',
    icon: BotIcon
  },
  {
    title: 'Unified inbox',
    description:
      'Every conversation from every channel lands in one resolvable, searchable place.',
    icon: SparklesIcon
  },
  {
    title: 'Voice ready',
    description:
      'Connect a Vapi voice assistant and let callers reach support without lifting a finger.',
    icon: ZapIcon
  },
  {
    title: 'Secure by default',
    description:
      'Organization-scoped data and access keeps every workspace neatly isolated.',
    icon: ShieldCheckIcon
  }
];

// Jump-off points wired to the dashboard routes.
export const landingShortcuts: LandingShortcut[] = [
  {
    title: 'Conversations',
    description: 'Triage and resolve incoming customer messages.',
    href: '/conversations',
    icon: InboxIcon
  },
  {
    title: 'Knowledge Base',
    description: 'Upload the documents your assistant learns from.',
    href: '/files',
    icon: LibraryBigIcon
  },
  {
    title: 'Widget Customization',
    description: 'Tailor the chat widget to match your brand.',
    href: '/customization',
    icon: PaletteIcon
  },
  {
    title: 'Integrations',
    description: 'Embed the chatbox anywhere with a snippet.',
    href: '/integrations',
    icon: LayoutDashboardIcon
  },
  {
    title: 'Voice Assistant',
    description: 'Bring your support flow to phone calls.',
    href: '/plugins/vapi',
    icon: MicIcon
  },
  {
    title: 'Plan & Billing',
    description: 'Review usage and manage your subscription.',
    href: '/billing',
    icon: CreditCardIcon
  }
];
