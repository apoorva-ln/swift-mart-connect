import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { RecommendationCard } from './RecommendationCard';
import type { Recommendation } from '@/data/recommendations';
import { Button } from '@/components/ui/button';

interface SimilarCarouselProps {
  recommendations: Recommendation[];
  title?: string;
}

export function SimilarCarousel({ recommendations, title = "Similar Recommendations" }: SimilarCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, recommendations.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="py-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="rounded-xl"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="rounded-xl"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${currentIndex * (100 / itemsPerView + 2)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {recommendations.map((rec, index) => (
            <div key={rec.id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
              <RecommendationCard recommendation={rec} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
