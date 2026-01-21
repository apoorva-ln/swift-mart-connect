import { MapPin, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-primary rounded-lg p-2">
              <ShoppingCart className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">QuickMart</span>
          </div>

          {/* Location Selector */}
          <div className="hidden md:flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <div>
              <div className="font-medium text-foreground">Deliver to</div>
              <div className="text-muted-foreground">Select location</div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for groceries, snacks, beverages..."
              className="pl-10 h-11 bg-surface"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="default" size="sm" className="hidden md:inline-flex">
              Sign In
            </Button>
          </div>
        </div>

        {/* Mobile Location */}
        <div className="md:hidden mt-3 flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">Select delivery location</span>
        </div>
      </div>
    </header>
  );
};

export default Header;