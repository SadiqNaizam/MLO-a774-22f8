import React from 'react';
import { cn } from '@/lib/utils';
import SidebarComponent from './Sidebar';
import HeaderComponent from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  pageTitle?: string; // To be passed to the HeaderComponent
  className?: string;   // For the outermost div
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  pageTitle = 'Dashboard', // Default title if not provided
  className,
}) => {
  return (
    <div className={cn('min-h-screen bg-background', className)}>
      <SidebarComponent />
      {/* HeaderComponent is fixed positioned, it will overlay correctly */}
      <HeaderComponent pageTitle={pageTitle} />

      {/* Main content area: needs margin to offset fixed sidebar and padding-top for fixed header */}
      <main
        className={cn(
          'ml-64 pt-[70px]', // Margin for w-64 sidebar, padding-top for h-[70px] header
          'h-screen'        // Ensure main area takes up remaining viewport height for proper scrolling
        )}
      >
        {/* Inner div for padding, scrolling, and minimum width */}
        <div
          className={cn(
            'p-6 h-full overflow-y-auto min-w-0', // Padding, full height of parent, scroll, and min-width constraint
            'custom-scrollbar' // Optional: if you have custom scrollbar styles
          )}
        >
          {/* Container for main content children, applying flex column layout with gap */}
          <div className="flex flex-col gap-6">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
