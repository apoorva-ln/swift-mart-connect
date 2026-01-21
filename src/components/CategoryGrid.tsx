import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import categoryProduce from "@/assets/category-produce-new.jpg";
import categoryDairy from "@/assets/category-dairy.jpg";
import categorySnacks from "@/assets/category-snacks-new.jpg";
import categoryPersonalCare from "@/assets/category-personal-care.jpg";
import categoryHousehold from "@/assets/category-household.jpg";
import categoryBabyCare from "@/assets/category-baby-care.jpg";

const categories = [
  {
    id: 1,
    name: "Fresh Produce",
    description: "Farm-fresh vegetables & fruits",
    image: categoryProduce,
    deliveryTime: "15-25 min",
    color: "from-green-500 to-green-600"
  },
  {
    id: 2,
    name: "Dairy & Beverages", 
    description: "Milk, juices & cold drinks",
    image: categoryDairy,
    deliveryTime: "10-20 min",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 3,
    name: "Snacks & Foods",
    description: "Ready-to-eat & packaged foods",
    image: categorySnacks,
    deliveryTime: "15-30 min",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 4,
    name: "Personal Care",
    description: "Health & beauty essentials",
    image: categoryPersonalCare,
    deliveryTime: "20-30 min",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 5,
    name: "Household Items",
    description: "Cleaning & home supplies",
    image: categoryHousehold,
    deliveryTime: "25-35 min",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: 6,
    name: "Baby Care",
    description: "Baby food & care essentials",
    image: categoryBabyCare,
    deliveryTime: "15-25 min",
    color: "from-pink-500 to-pink-600"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need, delivered fresh and fast to your doorstep
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1">
                {/* Image */}
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <div>
                    <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-medium">
                      {category.deliveryTime}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Categories
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;