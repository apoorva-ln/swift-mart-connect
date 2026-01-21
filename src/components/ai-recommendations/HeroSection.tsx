import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Brain, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const floatingElements = [
  { icon: Brain, delay: 0, x: '10%', y: '20%' },
  { icon: Zap, delay: 0.2, x: '85%', y: '15%' },
  { icon: Target, delay: 0.4, x: '75%', y: '70%' },
  { icon: Sparkles, delay: 0.6, x: '15%', y: '75%' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary-glow/5" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              y: [0, -20, 0],
            }}
            transition={{
              delay: element.delay,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute hidden md:block"
            style={{ left: element.x, top: element.y }}
          >
            <div className="w-16 h-16 rounded-2xl backdrop-blur-xl bg-surface-elevated/50 border border-border/50 flex items-center justify-center shadow-elevated">
              <Icon className="w-8 h-8 text-primary" />
            </div>
          </motion.div>
        );
      })}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              AI-Powered Learning Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">Smart Recommendations.</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Built for Students.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Discover personalized learning paths powered by advanced AI. Get tailored 
            recommendations based on your interests, goals, and learning style.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/ai/flow">
              <Button size="lg" className="rounded-xl gap-2 px-8 shadow-glow">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/ai/dashboard">
              <Button size="lg" variant="outline" className="rounded-xl gap-2 px-8 backdrop-blur-sm">
                Explore Recommendations
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            {[
              { value: '50K+', label: 'Active Students' },
              { value: '95%', label: 'Match Accuracy' },
              { value: '1000+', label: 'Learning Paths' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
