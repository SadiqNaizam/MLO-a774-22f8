import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ReasonLost {
  id: string;
  percentage: number;
  reason: string;
}

const reasonsLostData: ReasonLost[] = [
  { id: 'unclearProposal1', percentage: 40, reason: 'The proposal is unclear' },
  { id: 'venturePursuit', percentage: 20, reason: 'However venture pursuit' },
  { id: 'other', percentage: 10, reason: 'Other' },
  { id: 'unclearProposal2', percentage: 30, reason: 'The proposal is unclear' }, // Second instance as per image
];

interface ReasonsLostCardProps {
  className?: string;
}

const ReasonsLostCard: React.FC<ReasonsLostCardProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle>Reasons of leads lost</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {reasonsLostData.map((item) => (
          <div key={item.id}>
            <p className="text-3xl font-bold text-foreground">{item.percentage}%</p>
            <p className="text-sm text-muted-foreground mt-1">{item.reason}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ReasonsLostCard;
