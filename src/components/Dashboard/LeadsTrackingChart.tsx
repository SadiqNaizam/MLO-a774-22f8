import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, Area, AreaChart } from 'recharts';
import { CalendarDays, ChevronDown } from 'lucide-react';

const leadsTrackingData = [
  { month: 'March', closedWon: 65, closedLost: 40 },
  { month: 'April', closedWon: 52, closedLost: 55 },
  { month: 'May', closedWon: 88, closedLost: 30 },
  { month: 'June', closedWon: 75, closedLost: 10 },
  { month: 'July', closedWon: 60, closedLost: 42 },
  { month: 'August', closedWon: 95, closedLost: 22 },
];

const totalClosed = leadsTrackingData.reduce((sum, item) => sum + item.closedWon, 0);
const totalLost = leadsTrackingData.reduce((sum, item) => sum + item.closedLost, 0);

interface LeadsTrackingChartProps {
  className?: string;
}

const LeadsTrackingChart: React.FC<LeadsTrackingChartProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>Leads tracking</CardTitle>
          <Button variant="outline" size="sm" className="mt-2 sm:mt-0">
            <CalendarDays className="mr-2 h-4 w-4" />
            Last 6 months
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-baseline space-x-6 mt-2">
            <div>
                <span className="text-3xl font-bold text-foreground">{totalClosed}</span>
                <span className="text-sm text-muted-foreground ml-1">total closed</span>
            </div>
            <div>
                <span className="text-3xl font-bold text-foreground">{totalLost}</span>
                <span className="text-sm text-muted-foreground ml-1">total lost</span>
            </div>
        </div>
      </CardHeader>
      <CardContent className="h-[350px] w-full pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={leadsTrackingData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <defs>
                <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis 
              dataKey="month" 
              tickLine={false} 
              axisLine={false} 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              tickLine={false} 
              axisLine={false} 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              tickFormatter={(value) => `${value}`}
            />
            <RechartsTooltip 
              cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1, strokeDasharray: '3 3' }}
              contentStyle={{ backgroundColor: 'hsl(var(--background))', borderRadius: 'var(--radius)', border: '1px solid hsl(var(--border))' }}
            />
            <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="circle"
                wrapperStyle={{paddingTop: '20px'}}
                formatter={(value, entry) => <span className="text-muted-foreground text-sm">{value}</span>}
            />
            <Area type="monotone" dataKey="closedWon" name="Closed won" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorClosedWon)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: 'hsl(var(--primary))' }} activeDot={{ r: 6, strokeWidth: 2, fill: 'hsl(var(--primary))', stroke: 'hsl(var(--card))' }}/>
            <Area type="monotone" dataKey="closedLost" name="Closed lost" stroke="hsl(var(--destructive))" fillOpacity={1} fill="url(#colorClosedLost)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: 'hsl(var(--destructive))' }} activeDot={{ r: 6, strokeWidth: 2, fill: 'hsl(var(--destructive))', stroke: 'hsl(var(--card))' }}/>
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
