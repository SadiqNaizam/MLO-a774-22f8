import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TrendingUp, DollarSign, Clock } from 'lucide-react'; // Placeholder icons, specific icons not in image

interface FunnelStage {
  id: string;
  name: string;
  count: number;
  value: number;
  avgTime: string;
  color: string; // Tailwind background color class e.g. 'bg-red-500'
}

const funnelData: FunnelStage[] = [
  { id: 'discovery', name: 'Discovery', count: 250, value: 20000, avgTime: '2 days', color: 'bg-red-500' },
  { id: 'qualified', name: 'Qualified', count: 150, value: 15000, avgTime: '2 days', color: 'bg-yellow-400' }, // Using tailwind yellow, can replace with bg-accentYellow if preferred
  { id: 'inConversation', name: 'In conversation', count: 100, value: 25000, avgTime: '5 days', color: 'bg-indigo-500' },
  { id: 'negotiations', name: 'Negotiations', count: 70, value: 35000, avgTime: '8 days', color: 'bg-green-500' }, // Using tailwind green, can replace with bg-accentGreen
  { id: 'closedWonActive', name: 'Closed won', count: 30, value: 15000, avgTime: '10 days', color: 'bg-purple-500' },
];

const totalActiveLeads = funnelData.reduce((sum, stage) => sum + stage.count, 0);

interface FunnelStatsCardProps {
  className?: string;
}

const FunnelStatsCard: React.FC<FunnelStatsCardProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
        <div className="flex items-center mt-1">
          <span className="text-3xl font-bold text-foreground mr-2">{totalActiveLeads}</span>
          <span className="text-sm text-muted-foreground">active leads</span>
        </div>
        <div className="w-full h-3 flex rounded-full overflow-hidden mt-3">
          {funnelData.map(stage => (
            <div 
              key={stage.id}
              className={cn('h-full', stage.color)}
              style={{ width: `${(stage.count / totalActiveLeads) * 100}%` }}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-3 pt-2">
        {funnelData.map((stage) => (
          <div key={stage.id} className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-x-3 text-sm">
            <div className={cn('w-3 h-3 rounded-sm', stage.color)}></div>
            <p className="text-foreground truncate">{stage.name}</p>
            <p className="text-muted-foreground text-right">{stage.count}</p>
            <p className="text-muted-foreground text-right">${(stage.value / 1000)}k</p> {/* Assuming value is in cents or smaller units */} 
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="text-muted-foreground text-right cursor-default">
                    {stage.avgTime}
                    {stage.name === 'Qualified' && 
                        <span className="ml-1 inline-block bg-gray-700 text-white text-xs px-2 py-0.5 rounded relative -top-2 left-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                           average time on this stage
                        </span>
                    }
                  </p>
                </TooltipTrigger>
                {stage.name === 'Qualified' && (
                    <TooltipContent side="top" className="bg-gray-800 text-white text-xs p-2 rounded">
                        <p>Average time on this stage</p>
                    </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default FunnelStatsCard;
