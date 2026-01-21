import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  id: number;
  title: string;
  description: string;
}

interface StepProgressProps {
  steps: Step[];
  currentStep: number;
}

export function StepProgress({ steps, currentStep }: StepProgressProps) {
  return (
    <div className="w-full max-w-3xl mx-auto mb-12">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-border">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-primary-glow"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {/* Steps */}
        {steps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          const isPending = step.id > currentStep;

          return (
            <div key={step.id} className="relative flex flex-col items-center z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: step.id * 0.1 }}
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                  isCompleted && "bg-primary border-primary text-primary-foreground",
                  isCurrent && "bg-primary/10 border-primary text-primary shadow-glow",
                  isPending && "bg-surface-elevated border-border text-muted-foreground"
                )}
              >
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    <Check className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <span className="font-semibold">{step.id}</span>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: step.id * 0.1 + 0.2 }}
                className="mt-4 text-center"
              >
                <div className={cn(
                  "font-medium text-sm",
                  (isCompleted || isCurrent) ? "text-foreground" : "text-muted-foreground"
                )}>
                  {step.title}
                </div>
                <div className="text-xs text-muted-foreground mt-1 hidden sm:block max-w-[120px]">
                  {step.description}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
