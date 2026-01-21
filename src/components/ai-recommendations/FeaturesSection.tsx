import { motion } from 'framer-motion';
import { Brain, Target, Zap, Shield, LineChart, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze your learning patterns and preferences.',
  },
  {
    icon: Target,
    title: 'Personalized Paths',
    description: 'Get custom learning paths tailored to your goals, skill level, and available time.',
  },
  {
    icon: Zap,
    title: 'Real-Time Updates',
    description: 'Recommendations evolve as you progress, ensuring always-relevant suggestions.',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Every recommendation is vetted for quality and relevance by our expert team.',
  },
  {
    icon: LineChart,
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed analytics and insights.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Learn from peers and mentors in our thriving student community.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wide uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Powered by Intelligence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with educational expertise to deliver 
            the most relevant recommendations for your learning journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl backdrop-blur-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow"
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
