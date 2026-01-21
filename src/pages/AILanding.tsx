import { motion } from 'framer-motion';
import { AINavbar } from '@/components/ai-recommendations/AINavbar';
import { HeroSection } from '@/components/ai-recommendations/HeroSection';
import { FeaturesSection } from '@/components/ai-recommendations/FeaturesSection';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function AILanding() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <AINavbar />
      <HeroSection />
      <FeaturesSection />
      
      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary-glow/5" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow mb-8 shadow-glow"
          >
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who've discovered their perfect learning path 
            with our AI-powered recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/ai/flow">
              <Button size="lg" className="rounded-xl gap-2 px-8 shadow-glow">
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/ai/dashboard">
              <Button size="lg" variant="outline" className="rounded-xl px-8">
                Browse Dashboard
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">SmartRec</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 SmartRec. Built with AI for students.
          </p>
        </div>
      </footer>
    </motion.div>
  );
}
