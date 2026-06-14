'use client';

import { useEffect } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from '@workspace/ui/components/sidebar';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useViewportQuery } from '@/hooks/use-viewport-query';
import {
  accountNavItems,
  configurationNavItems,
  customerSupportNavItems
} from '@/modules/dashboard/ui/constants/nav';
import { SidebarNavGroup } from '@/modules/dashboard/ui/components/sidebar-nav-group';

export const AppSidebar = () => {
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();
  const { isOpen } = useViewportQuery();

  useEffect(() => {
    // Side effects based on sidebar state changes
  }, [isOpen]);

  return (
    <Sidebar collapsible='icon' className='sidebar-scrollbar group'>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <OrganizationSwitcher
                hidePersonal={true}
                skipInvitationScreen={true}
                appearance={{
                  theme: resolvedTheme === 'dark' ? dark : undefined,
                  elements: {
                    rootBox: 'w-full! h-12!',
                    avatarBox: 'size-8! rounded-lg!',
                    organizationSwitcherTrigger:
                      'w-full! justify-start! group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!',
                    organizationPreview:
                      'group-data-[collapsible=icon]:justify-center! gap-2!',
                    organizationPreviewTextContainer:
                      'group-data-[collapsible=icon]:hidden! text-xs! font-medium! text-sidebar-foreground!',
                    organizationSwitcherTriggerIcon:
                      'group-data-[collapsible=icon]:hidden! ml-auto! text-sidebar-foreground!'
                  }
                }}
              />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className='overflow-x-hidden'>
        <SidebarNavGroup
          heading='Customer Support'
          entries={customerSupportNavItems}
          currentPath={pathname}
        />
        <SidebarNavGroup
          heading='Configuration'
          entries={configurationNavItems}
          currentPath={pathname}
        />
        <SidebarNavGroup
          heading='Account'
          entries={accountNavItems}
          currentPath={pathname}
        />
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <UserButton
              showName
              appearance={{
                theme: resolvedTheme === 'dark' ? dark : undefined,
                elements: {
                  rootBox: 'w-full! h-12!',
                  userButtonTrigger:
                    'w-full! p-2! hover:bg-sidebar-accent! hover:text-sidebar-accent-foreground! group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!',
                  userButtonBox:
                    'w-full! flex-row-reverse! justify-end! gap-2! group-data-[collapsible=icon]:justify-center! text-sidebar-foreground!',
                  userButtonOuterIdentifier:
                    'pl-0! group-data-[collapsible=icon]:hidden! text-sm! font-medium! capitalize!'
                }
              }}
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
};
