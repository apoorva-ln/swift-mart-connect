import { Clock, MapPin, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-groceries.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Groceries in
                <span className="block text-yellow-300">10-30 minutes</span>
              </h1>
              <p className="text-xl text-gray-100 max-w-md">
                Fresh groceries, daily essentials, and household items delivered instantly to your doorstep.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4" />
                <span>10-30 min delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Truck className="h-4 w-4" />
                <span>Free delivery over ₹199</span>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 h-auto text-lg"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Set Delivery Location
              </Button>
              <p className="text-sm text-gray-200">
                Available in 20+ cities across India
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            <img 
              src={heroImage} 
              alt="Fresh groceries and delivery" 
              className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-elevated"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;