import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Moon, Sun, Menu, X, Home, LayoutDashboard, Compass, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

const navLinks = [
  { path: '/ai', label: 'Home', icon: Home },
  { path: '/ai/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/ai/flow', label: 'Get Started', icon: Compass },
];

export function AINavbar() {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
    >
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-background/70 dark:bg-background/50 border border-border/50 rounded-2xl px-4 md:px-6 py-3 shadow-elevated">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/ai" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow"
              >
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                SmartRec
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const Icon = link.icon;
                return (
                  <Link key={link.path} to={link.path}>
                    <motion.div
                      className={cn(
                        "relative px-4 py-2 rounded-xl flex items-center gap-2 transition-colors",
                        isActive 
                          ? "text-primary" 
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{link.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="w-10 h-10 rounded-xl bg-surface-elevated flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <Sun className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Moon className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              <div className="hidden md:block">
                <Link to="/ai/signup">
                <Button size="sm" className="rounded-xl gap-2">
                 <User className="w-4 h-4" />
                 Sign Up
                </Button>
                </Link>

              </div>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-xl bg-surface-elevated flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-4 pb-2 space-y-1">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div
                          className={cn(
                            "px-4 py-3 rounded-xl flex items-center gap-3 transition-colors",
                            isActive
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:bg-surface-elevated"
                          )}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{link.label}</span>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="pt-2">
  <Link to="/ai/signup" onClick={() => setMobileMenuOpen(false)}>
    <Button className="w-full rounded-xl gap-2">
      <User className="w-4 h-4" />
      Sign Up
    </Button>
  </Link>
</div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}