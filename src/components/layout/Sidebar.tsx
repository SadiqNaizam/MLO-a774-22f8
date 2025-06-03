import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav'; // Assuming SidebarNav.tsx from context is at this path

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // SidebarNav.tsx is already styled with w-64, h-screen, bg-sidebar, text-sidebar-foreground, and flex layout.
  // This Sidebar component ensures it's positioned correctly using fixed positioning according to layout requirements.
  return (
    <div className={cn(
      'fixed top-0 left-0 z-20 h-screen', // Ensures fixed positioning and full height. Width is handled by SidebarNav.
      className
    )}>
      <SidebarNav /> {/* SidebarNav component provides the actual content and its inherent w-64 styling */}
    </div>
  );
};

export default Sidebar;
