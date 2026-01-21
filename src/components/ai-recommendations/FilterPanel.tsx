import { motion } from 'framer-motion';
import { Filter, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categories, difficulties, durations, allTags } from '@/data/recommendations';
import { cn } from '@/lib/utils';

interface FilterPanelProps {
  selectedCategory: string;
  selectedDifficulty: string;
  selectedDuration: string;
  selectedTags: string[];
  onCategoryChange: (category: string) => void;
  onDifficultyChange: (difficulty: string) => void;
  onDurationChange: (duration: string) => void;
  onTagToggle: (tag: string) => void;
  onClearFilters: () => void;
}

export function FilterPanel({
  selectedCategory,
  selectedDifficulty,
  selectedDuration,
  selectedTags,
  onCategoryChange,
  onDifficultyChange,
  onDurationChange,
  onTagToggle,
  onClearFilters,
}: FilterPanelProps) {
  const hasActiveFilters = 
    selectedCategory !== 'All' || 
    selectedDifficulty !== 'All' || 
    selectedDuration !== 'All' || 
    selectedTags.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="backdrop-blur-xl bg-card/80 border border-border/50 rounded-2xl p-6 shadow-card sticky top-24"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Filters</h3>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground gap-1"
          >
            <X className="w-4 h-4" />
            Clear
          </Button>
        )}
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
          Category
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </h4>
        <div className="space-y-1.5">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                selectedCategory === category
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
              )}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Difficulty Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
          Difficulty Level
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </h4>
        <div className="space-y-1.5">
          {difficulties.map((difficulty) => (
            <motion.button
              key={difficulty}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onDifficultyChange(difficulty)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                selectedDifficulty === difficulty
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
              )}
            >
              {difficulty}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
          Duration
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </h4>
        <div className="space-y-1.5">
          {durations.map((duration) => (
            <motion.button
              key={duration}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onDurationChange(duration)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                selectedDuration === duration
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
              )}
            >
              {duration}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Interest Tags */}
      <div>
        <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
          Interest Tags
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </h4>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onTagToggle(tag)}
            >
              <Badge
                variant={selectedTags.includes(tag) ? "default" : "secondary"}
                className={cn(
                  "cursor-pointer transition-all",
                  selectedTags.includes(tag) 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-surface-elevated"
                )}
              >
                {tag}
              </Badge>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
