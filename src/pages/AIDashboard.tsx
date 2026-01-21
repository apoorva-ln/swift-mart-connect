import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { AINavbar } from '@/components/ai-recommendations/AINavbar';
import { FilterPanel } from '@/components/ai-recommendations/FilterPanel';
import { RecommendationCard } from '@/components/ai-recommendations/RecommendationCard';
import { recommendations } from '@/data/recommendations';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function AIDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredRecommendations = useMemo(() => {
    return recommendations.filter((rec) => {
      const matchesSearch = rec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rec.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || rec.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || rec.difficulty === selectedDifficulty;
      const matchesDuration = selectedDuration === 'All' || rec.duration === selectedDuration;
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => rec.tags.includes(tag));
      
      return matchesSearch && matchesCategory && matchesDifficulty && matchesDuration && matchesTags;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedDuration, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedDifficulty('All');
    setSelectedDuration('All');
    setSelectedTags([]);
    setSearchQuery('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <AINavbar />
      
      <main className="pt-28 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Welcome back, Student 👋
            </h1>
            <p className="text-muted-foreground">
              Discover personalized recommendations based on your interests and goals.
            </p>
          </motion.div>

          {/* Search and Filter Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-3 mb-8"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search recommendations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl bg-surface-elevated border-border/50 focus:border-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <Button
              variant="outline"
              className="lg:hidden h-12 px-4 rounded-xl"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <SlidersHorizontal className="w-5 h-5" />
            </Button>
          </motion.div>

          <div className="flex gap-8">
            {/* Desktop Filters */}
            <div className="hidden lg:block w-72 flex-shrink-0">
              <FilterPanel
                selectedCategory={selectedCategory}
                selectedDifficulty={selectedDifficulty}
                selectedDuration={selectedDuration}
                selectedTags={selectedTags}
                onCategoryChange={setSelectedCategory}
                onDifficultyChange={setSelectedDifficulty}
                onDurationChange={setSelectedDuration}
                onTagToggle={handleTagToggle}
                onClearFilters={handleClearFilters}
              />
            </div>

            {/* Mobile Filters Overlay */}
            {showMobileFilters && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                onClick={() => setShowMobileFilters(false)}
              >
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: "spring", damping: 25 }}
                  className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-background border-l border-border p-4 overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Filters</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowMobileFilters(false)}
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                  <FilterPanel
                    selectedCategory={selectedCategory}
                    selectedDifficulty={selectedDifficulty}
                    selectedDuration={selectedDuration}
                    selectedTags={selectedTags}
                    onCategoryChange={setSelectedCategory}
                    onDifficultyChange={setSelectedDifficulty}
                    onDurationChange={setSelectedDuration}
                    onTagToggle={handleTagToggle}
                    onClearFilters={handleClearFilters}
                  />
                </motion.div>
              </motion.div>
            )}

            {/* Recommendations Grid */}
            <div className="flex-1">
              {filteredRecommendations.length > 0 ? (
                <>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-muted-foreground mb-4"
                  >
                    Showing {filteredRecommendations.length} recommendation{filteredRecommendations.length !== 1 ? 's' : ''}
                  </motion.p>
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredRecommendations.map((rec, index) => (
                      <RecommendationCard
                        key={rec.id}
                        recommendation={rec}
                        index={index}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 rounded-2xl bg-surface-elevated flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    No recommendations found
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search query
                  </p>
                  <Button onClick={handleClearFilters} variant="outline" className="rounded-xl">
                    Clear all filters
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
