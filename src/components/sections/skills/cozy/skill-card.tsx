import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Skill } from '@/types/skill';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface SkillCardProps extends Skill {
  index: number;
  className?: string;
}

export default function SkillCard({
  name,
  description,
  proficiency,
  items,
  className,
}: SkillCardProps) {
  return (
    <Card className={cn("overflow-hidden hover:shadow-lg transition-all", className)}>
      <CardHeader className="space-y-1">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-sm text-muted-foreground">{proficiency}%</span>
        </div>
        <Progress value={proficiency} className="h-2" />
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <Badge 
              key={item} 
              variant="secondary"
              className="text-xs"
            >
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
