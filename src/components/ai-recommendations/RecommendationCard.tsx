import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Clock, TrendingUp, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Recommendation } from '@/data/recommendations';

interface RecommendationCardProps {
  recommendation: Recommendation;
  index?: number;
}

export function RecommendationCard({ recommendation, index = 0 }: RecommendationCardProps) {
  const matchColor = 
    recommendation.matchPercentage >= 90 ? 'text-success' :
    recommendation.matchPercentage >= 75 ? 'text-primary' :
    'text-warning';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group"
    >
      <Link to={`/ai/recommendation/${recommendation.id}`}>
        <div className="relative h-full rounded-2xl overflow-hidden backdrop-blur-xl bg-card/80 border border-border/50 shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-primary-glow/5 transition-all duration-500" />
          
          {/* Image */}
          <div className="relative h-40 overflow-hidden">
            <motion.img
              src={recommendation.image}
              alt={recommendation.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            
            {/* Match Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.05 + 0.2, type: "spring" }}
              className="absolute top-3 right-3"
            >
              <div className={cn(
                "flex items-center gap-1 px-3 py-1.5 rounded-full backdrop-blur-md bg-background/80 border border-border/50 font-semibold text-sm",
                matchColor
              )}>
                <TrendingUp className="w-3.5 h-3.5" />
                {recommendation.matchPercentage}%
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Category */}
            <Badge variant="secondary" className="mb-3 rounded-lg">
              {recommendation.category}
            </Badge>

            {/* Title */}
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {recommendation.title}
              <ArrowUpRight className="inline-block ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {recommendation.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {recommendation.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-md bg-surface-elevated text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {recommendation.duration}
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <Star className="w-4 h-4 text-warning fill-warning" />
                <span className="font-medium">{recommendation.rating}</span>
              </div>
            </div>

            {/* Difficulty */}
            <div className="mt-3">
              <div className={cn(
                "text-xs font-medium px-2 py-1 rounded-md inline-block",
                recommendation.difficulty === 'Beginner' && "bg-success/10 text-success",
                recommendation.difficulty === 'Intermediate' && "bg-primary/10 text-primary",
                recommendation.difficulty === 'Advanced' && "bg-destructive/10 text-destructive"
              )}>
                {recommendation.difficulty}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
