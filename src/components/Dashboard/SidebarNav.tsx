import React from 'react';
import { cn } from '@/lib/utils';
import { Layers, LayoutGrid, Users, UserCircle, FileText, FileSpreadsheet, Package, Mail, Archive, CalendarDays, HelpCircle, Settings, Menu } from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  isBottom?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, isActive, isBottom }) => {
  return (
    <a
      href={href}
      className={cn(
        'flex items-center py-2 px-4 text-sm rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium' : 'text-sidebar-foreground/80',
        isBottom ? 'mt-auto' : ''
      )}
    >
      <Icon className="mr-3 h-5 w-5" />
      {label}
    </a>
  );
};

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const navItems = [
    { href: '#', icon: LayoutGrid, label: 'Dashboard', isActive: true },
    { href: '#', icon: Users, label: 'Leads' },
    { href: '#', icon: UserCircle, label: 'Customers' },
    { href: '#', icon: FileText, label: 'Proposals' },
    { href: '#', icon: FileSpreadsheet, label: 'Invoices' },
    { href: '#', icon: Package, label: 'Items' },
    { href: '#', icon: Mail, label: 'Mail' },
    { href: '#', icon: Archive, label: 'Shoebox' },
    { href: '#', icon: CalendarDays, label: 'Calendar' },
  ];

  const helpItems = [
    { href: '#', icon: HelpCircle, label: 'Help' },
    { href: '#', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className={cn('h-screen w-64 bg-sidebar text-sidebar-foreground flex flex-col p-4 space-y-1', className)}>
      <div className="flex items-center justify-between mb-6 px-2">
        <a href="#" className="flex items-center space-x-2">
          <Layers className="h-8 w-8 text-primary" /> 
          <span className="font-bold text-lg text-sidebar-foreground">Brand</span>
        </a>
        <button className="p-1 rounded-md hover:bg-sidebar-accent md:hidden">
            <Menu className="h-6 w-6 text-sidebar-foreground/80" />
        </button>
      </div>
      
      <nav className="flex-grow flex flex-col space-y-1">
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
        
        <div className="pt-6 mt-auto space-y-1"> {/* Pusher for bottom items */}
          {helpItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default SidebarNav;
