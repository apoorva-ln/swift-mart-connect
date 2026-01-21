import { Clock, Percent, Star, Truck } from "lucide-react";

const quickActions = [
  {
    icon: Clock,
    title: "10-Minute Delivery",
    description: "Ultra-fast delivery for essentials",
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    icon: Percent,
    title: "Daily Deals",
    description: "Up to 50% off on selected items",
    color: "text-red-600",
    bg: "bg-red-50"
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Fresh products, quality guaranteed",
    color: "text-yellow-600",
    bg: "bg-yellow-50"
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "No delivery charges on orders ₹199+",
    color: "text-blue-600",
    bg: "bg-blue-50"
  }
];

const QuickActions = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="text-center space-y-3 p-6 rounded-2xl hover:bg-surface transition-colors duration-200 cursor-pointer group"
            >
              <div className={`inline-flex p-4 rounded-2xl ${action.bg} group-hover:scale-110 transition-transform duration-200`}>
                <action.icon className={`h-8 w-8 ${action.color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {action.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {action.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;