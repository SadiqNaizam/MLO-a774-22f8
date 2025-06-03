import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

interface OtherDataItem {
  id: string;
  value: string;
  label: string;
  tooltip?: string;
}

const otherData: OtherDataItem[] = [
  { id: 'totalLeads', value: '900', label: 'total leads count' },
  { id: 'avgConvertTime', value: '12', label: 'days in average to convert lead' },
  { id: 'inactiveLeads', value: '30', label: 'inactive leads', tooltip: 'Leads with no activity in the last 30 days' },
];

interface OtherDataCardProps {
  className?: string;
}

const OtherDataCard: React.FC<OtherDataCardProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle>Other data</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {otherData.map((item) => (
          <div key={item.id}>
            <p className="text-3xl font-bold text-foreground">{item.value}</p>
            <div className="flex items-center mt-1">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              {item.tooltip && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground ml-1.5 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default OtherDataCard;
