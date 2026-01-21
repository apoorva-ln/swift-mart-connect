import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react';
import { AINavbar } from '@/components/ai-recommendations/AINavbar';
import { StepProgress } from '@/components/ai-recommendations/StepProgress';
import { RecommendationCard } from '@/components/ai-recommendations/RecommendationCard';
import { Button } from '@/components/ui/button';
import { interests, goals, recommendations } from '@/data/recommendations';
import { cn } from '@/lib/utils';

const steps = [
  { id: 1, title: 'Interests', description: 'Select your interests' },
  { id: 2, title: 'Goals', description: 'Choose your goals' },
  { id: 3, title: 'Results', description: 'View recommendations' },
];

export default function AIRecommendationFlow() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInterestToggle = (id: string) => {
    setSelectedInterests(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleGoalToggle = (id: string) => {
    setSelectedGoals(prev =>
      prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    if (currentStep === 2) {
      setIsGenerating(true);
      setTimeout(() => {
        setIsGenerating(false);
        setCurrentStep(3);
      }, 2000);
    } else if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const canProceed = 
    (currentStep === 1 && selectedInterests.length > 0) ||
    (currentStep === 2 && selectedGoals.length > 0) ||
    currentStep === 3;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <AINavbar />
      
      <main className="pt-28 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <StepProgress steps={steps} currentStep={currentStep} />

          <AnimatePresence mode="wait">
            {/* Step 1: Select Interests */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-3xl mx-auto"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    What are you interested in?
                  </h2>
                  <p className="text-muted-foreground">
                    Select all the topics that spark your curiosity
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {interests.map((interest) => (
                    <motion.button
                      key={interest.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleInterestToggle(interest.id)}
                      className={cn(
                        "relative p-6 rounded-2xl border-2 transition-all duration-200 text-center",
                        selectedInterests.includes(interest.id)
                          ? "border-primary bg-primary/10 shadow-glow"
                          : "border-border/50 bg-card/50 hover:border-primary/30 hover:bg-surface-elevated"
                      )}
                    >
                      {selectedInterests.includes(interest.id) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                        >
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </motion.div>
                      )}
                      <span className="text-3xl mb-2 block">{interest.icon}</span>
                      <span className="text-sm font-medium text-foreground">
                        {interest.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Choose Goals */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-3xl mx-auto"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    What are your goals?
                  </h2>
                  <p className="text-muted-foreground">
                    Help us understand what you want to achieve
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {goals.map((goal) => (
                    <motion.button
                      key={goal.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleGoalToggle(goal.id)}
                      className={cn(
                        "relative p-6 rounded-2xl border-2 transition-all duration-200 text-left",
                        selectedGoals.includes(goal.id)
                          ? "border-primary bg-primary/10 shadow-glow"
                          : "border-border/50 bg-card/50 hover:border-primary/30 hover:bg-surface-elevated"
                      )}
                    >
                      {selectedGoals.includes(goal.id) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                        >
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </motion.div>
                      )}
                      <h3 className="font-semibold text-foreground mb-1">
                        {goal.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {goal.description}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Generating Animation */}
            {isGenerating && (
              <motion.div
                key="generating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 shadow-glow"
                >
                  <Sparkles className="w-10 h-10 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Generating Your Recommendations
                </h3>
                <p className="text-muted-foreground">
                  Our AI is analyzing your preferences...
                </p>
              </motion.div>
            )}

            {/* Step 3: View Results */}
            {currentStep === 3 && !isGenerating && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-4"
                  >
                    <Check className="w-4 h-4" />
                    Recommendations Generated!
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Your Personalized Recommendations
                  </h2>
                  <p className="text-muted-foreground">
                    Based on your interests and goals, we've curated these learning paths for you
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recommendations.slice(0, 6).map((rec, index) => (
                    <RecommendationCard
                      key={rec.id}
                      recommendation={rec}
                      index={index}
                    />
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center mt-10"
                >
                  <Button
                    onClick={() => navigate('/ai/dashboard')}
                    size="lg"
                    className="rounded-xl gap-2"
                  >
                    Explore All Recommendations
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {currentStep < 3 && !isGenerating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between mt-12 max-w-3xl mx-auto"
            >
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="rounded-xl gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={!canProceed}
                className="rounded-xl gap-2 shadow-glow"
              >
                {currentStep === 2 ? 'Generate Recommendations' : 'Continue'}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </div>
      </main>
    </motion.div>
  );
}
