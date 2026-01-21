import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import CategoryGrid from "@/components/CategoryGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <QuickActions />
        <CategoryGrid />
      </main>
    </div>
  );
};

export default Index;