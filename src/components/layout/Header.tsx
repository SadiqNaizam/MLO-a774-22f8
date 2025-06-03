import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
  pageTitle: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ pageTitle, className }) => {
  return (
    <header
      className={cn(
        'flex items-center justify-between px-4 border-b bg-card', // As per layout requirements (px-4) and using card as surface
        'h-[70px]', // As per layout requirements
        'fixed top-0 left-64 right-0 z-10', // As per layout requirements for positioning
        className
      )}
    >
      <h1 className="text-2xl font-semibold text-foreground">{pageTitle}</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default"> {/* Default variant uses primary color */}
            Create
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {/* Example Dropdown Items based on context TopHeader.tsx */}
          <DropdownMenuItem>New Lead</DropdownMenuItem>
          <DropdownMenuItem>New Task</DropdownMenuItem>
          <DropdownMenuItem>New Event</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
