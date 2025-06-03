import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip as RechartsTooltip } from 'recharts';
import { CalendarDays, ChevronDown } from 'lucide-react';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string; // hex color for recharts
  textColor: string; // tailwind text color for list
}

const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#EF4444', textColor: 'text-red-500' }, // red-500
  { name: 'Behance', value: 1000, percentage: 25, color: '#F59E0B', textColor: 'text-yellow-500' }, // amber-500 (closer to image than accentYellow)
  { name: 'Instagram', value: 750, percentage: 15, color: '#14B8A6', textColor: 'text-teal-500' }, // teal-500
  { name: 'Dribbble', value: 500, percentage: 10, color: '#22C55E', textColor: 'text-green-500' }, // green-500
];

interface SourcesPieChartCardProps {
  className?: string;
}

const SourcesPieChartCard: React.FC<SourcesPieChartCardProps> = ({ className }) => {
  const [activeTab, setActiveTab] = React.useState<string>('leadsConverted');

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>Sources</CardTitle>
        <Button variant="outline" size="sm" className="ml-auto">
          <CalendarDays className="mr-2 h-4 w-4" />
          Last 6 months
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="leadsCame">Leads Came</TabsTrigger>
            <TabsTrigger value="leadsConverted">Leads Converted</TabsTrigger>
            <TabsTrigger value="totalDeals">Total Deals Size</TabsTrigger>
          </TabsList>
          <TabsContent value="leadsCame">
             {/* Content for Leads Came - could be different data or chart config */}
             <PieChartDisplay data={sourcesData} />
          </TabsContent>
          <TabsContent value="leadsConverted">
            <PieChartDisplay data={sourcesData} />
          </TabsContent>
          <TabsContent value="totalDeals">
            {/* Content for Total Deals Size */}
            <PieChartDisplay data={sourcesData} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

interface PieChartDisplayProps {
  data: SourceData[];
}

const PieChartDisplay: React.FC<PieChartDisplayProps> = ({ data }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div className="h-60 md:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <RechartsTooltip 
                formatter={(value: number, name: string, props) => [`$${value}`, props.payload.name]}
                cursor={{ fill: 'hsl(var(--muted))' }}
                contentStyle={{ backgroundColor: 'hsl(var(--background))', borderRadius: 'var(--radius)', border: '1px solid hsl(var(--border))' }}
            />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={1}
              dataKey="value"
              stroke="hsl(var(--background))"
              strokeWidth={3}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-3">
        {data.map((source) => (
          <div key={source.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <span className={cn('w-3 h-3 rounded-sm mr-2', source.textColor.replace('text-', 'bg-'))}></span>
              <span className="text-foreground">{source.name}</span>
            </div>
            <div className="flex items-center">
              <span className="text-muted-foreground mr-4">${source.value.toLocaleString()}</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-muted-foreground w-10 text-right cursor-default">{source.percentage}%</span>
                  </TooltipTrigger>
                  {source.percentage === 10 && source.name === 'Dribbble' && (
                     <TooltipContent side="top" className="bg-gray-800 text-white text-xs p-2 rounded">
                       <p>from leads total</p>
                     </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SourcesPieChartCard;
