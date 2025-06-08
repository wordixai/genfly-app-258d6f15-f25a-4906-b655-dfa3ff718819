import Header from "@/components/Header";
import ChatInput from "@/components/ChatInput";
import FeaturedModels from "@/components/FeaturedModels";
import StatsSection from "@/components/StatsSection";
import StepsSection from "@/components/StepsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TopAppsSection from "@/components/TopAppsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground tabular-nums">
      <Header />
      
      <main className="flex flex-1 flex-col items-center min-h-[calc(100vh-80px)] md:min-h-screen mx-auto bg-background text-foreground mb-16 mt-0 max-w-full lg:mt-8">
        <div className="flex flex-col items-center gap-24 px-6 md:gap-28 md:px-8 md:pt-8">
          {/* Hero Section */}
          <div className="flex w-full max-w-4xl flex-col justify-center py-8 md:py-0">
            <div className="mb-3 flex flex-col gap-2 md:-mb-48 md:gap-1">
              <h1 className="my-0 w-full py-0 text-5xl font-semibold">
                <span className="mb-1 hidden md:block">The Unified</span>
                <span className="hidden md:block">Interface For LLMs</span>
                <span className="flex flex-col gap-0.5 text-3xl md:hidden">
                  <div>The Unified</div>
                  <div>Interface For LLMs</div>
                </span>
              </h1>
              <p className="text-slate-11 text-md mb-4 md:mb-8 md:pt-2 md:text-xl">
                Better{" "}
                <a href="/models?order=pricing-low-to-high" className="text-primary hover:underline">
                  prices
                </a>
                , better{" "}
                <a href="/docs/features/uptime-optimization" className="text-primary hover:underline">
                  uptime
                </a>
                , no subscription.
              </p>
            </div>
            
            <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-16 min-w-full flex-shrink-0">
              <ChatInput />
              <FeaturedModels />
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-col gap-8 md:gap-12">
            <StatsSection />
          </div>

          {/* Steps Section */}
          <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto px-6">
            <StepsSection />
          </div>

          {/* Features Section */}
          <div className="space-y-4 md:space-y-8">
            <FeaturesSection />
          </div>

          {/* Top Apps Section */}
          <TopAppsSection />
        </div>
      </main>
    </div>
  );
};

export default Index;