import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Clock, TrendingUp, Users, BookOpen, Award, ExternalLink } from 'lucide-react';
import { AINavbar } from '@/components/ai-recommendations/AINavbar';
import { SimilarCarousel } from '@/components/ai-recommendations/SimilarCarousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { recommendations } from '@/data/recommendations';
import { cn } from '@/lib/utils';

export default function AIRecommendationDetails() {
  const { id } = useParams<{ id: string }>();
  const recommendation = recommendations.find(r => r.id === id);
  const similarRecommendations = recommendations.filter(r => r.id !== id).slice(0, 4);

  if (!recommendation) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Recommendation not found</h2>
          <Link to="/ai/dashboard">
            <Button className="rounded-xl gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const matchColor = 
    recommendation.matchPercentage >= 90 ? 'text-success' :
    recommendation.matchPercentage >= 75 ? 'text-primary' :
    'text-warning';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <AINavbar />

      {/* Hero Header */}
      <header className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary-glow/10" />
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 0.8 }}
            src={recommendation.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-12 pb-16">
          <Link to="/ai/dashboard">
            <motion.div
              whileHover={{ x: -4 }}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="secondary" className="rounded-lg text-sm">
                {recommendation.category}
              </Badge>
              <div className={cn(
                "flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 font-semibold text-sm",
                matchColor
              )}>
                <TrendingUp className="w-4 h-4" />
                {recommendation.matchPercentage}% Match
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {recommendation.title}
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mb-6">
              {recommendation.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-foreground">
                <Star className="w-5 h-5 text-warning fill-warning" />
                <span className="font-semibold">{recommendation.rating}</span>
                <span className="text-muted-foreground">(2.4k reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                {recommendation.duration}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5" />
                5.2k enrolled
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {recommendation.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-lg">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-xl gap-2 shadow-glow">
                <BookOpen className="w-5 h-5" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl gap-2">
                <ExternalLink className="w-5 h-5" />
                View Curriculum
              </Button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: Clock, label: 'Duration', value: recommendation.duration },
            { icon: Award, label: 'Difficulty', value: recommendation.difficulty },
            { icon: BookOpen, label: 'Modules', value: '12 modules' },
            { icon: Users, label: 'Students', value: '5,200+' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-5 rounded-2xl backdrop-blur-xl bg-card/50 border border-border/50 text-center"
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-semibold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* What You'll Learn */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Master core concepts and fundamentals',
              'Build real-world projects from scratch',
              'Learn industry best practices',
              'Gain hands-on experience with tools',
              'Prepare for professional certifications',
              'Join a community of learners',
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-surface-elevated"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Similar Recommendations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <SimilarCarousel recommendations={similarRecommendations} />
        </motion.section>
      </main>
    </motion.div>
  );
}
