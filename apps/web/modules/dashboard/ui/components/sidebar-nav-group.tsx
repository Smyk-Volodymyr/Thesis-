'use client';

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@workspace/ui/components/sidebar';
import { cn } from '@workspace/ui/lib/utils';
import Link from 'next/link';
import type { NavItem } from '@/modules/dashboard/ui/constants/nav';

// Gradient applied to the currently selected navigation entry.
const activeEntryClass =
  'from-sidebar-primary to-[#0d9488]! text-sidebar-primary-foreground! hover:to-[#0d9488]/90! bg-gradient-to-b';

type SidebarNavGroupAttributes = {
  heading: string;
  entries: NavItem[];
  currentPath: string;
};

export const SidebarNavGroup = ({
  heading,
  entries,
  currentPath
}: SidebarNavGroupAttributes) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{heading}</SidebarGroupLabel>
      <SidebarMenu>
        {entries.map((entry) => {
          const selected = currentPath.startsWith(entry.url);

          return (
            <SidebarMenuItem key={entry.url}>
              <SidebarMenuButton
                asChild
                tooltip={entry.title}
                isActive={selected}
                className={cn(selected && activeEntryClass)}
              >
                <Link href={entry.url}>
                  <entry.icon className='size-4' />
                  <span>{entry.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};
