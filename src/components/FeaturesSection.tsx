import FeatureCard from "./FeatureCard";
import { Shield, Lock, CheckCircle } from "lucide-react";

const FloatingProviderIcons = () => (
  <div className="absolute inset-[1rem] grid grid-cols-5 gap-x-3 gap-y-1 scale-105 z-10">
    {Array.from({ length: 25 }, (_, i) => (
      <div
        key={i}
        className="size-9 transform hover:scale-110 hover:brightness-110 transition-all duration-500 ease-out"
        style={{
          animation: `float${i % 5} 4s ease-in-out infinite ${i * 150}ms`,
          opacity: 0.85,
          transform: i % 2 === 0 ? 'translateX(36px)' : ''
        }}
      >
        <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
          <div className="overflow-hidden rounded-full">
            <div
              className="h-full w-full object-cover rounded-full"
              style={{ 
                backgroundColor: ['#4285F4', '#000000', '#C5915B', '#FF6B35', '#2ECC71'][i % 5]
              }}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
);

const RoutingDiagram = () => (
  <div className="h-full flex items-center justify-center">
    <div className="relative w-full max-w-52 flex flex-col items-center gap-y-2">
      <div className="bg-muted px-3 py-1 rounded-lg text-xs text-foreground">
        anthropic/claude-3.7-sonnet
      </div>
      <svg width="100%" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M95 0 C100 40, 20 20, 10 65" stroke="currentColor" strokeWidth="0.75" className="text-muted-foreground/60" />
        <path d="M100 0 C100 20, 100 20, 100 65" stroke="currentColor" strokeWidth="0.75" className="text-muted-foreground/60" />
        <path d="M105 0 C100 40, 180 20, 190 65" stroke="currentColor" strokeWidth="0.75" className="text-muted-foreground/60" />
      </svg>
      <div className="flex justify-between w-full">
        <div className="size-6 rounded-full bg-blue-500" />
        <div className="size-6 rounded-full bg-orange-500" />
        <div className="size-6 rounded-full bg-green-500" />
      </div>
    </div>
  </div>
);

const PerformanceChart = () => (
  <div className="relative flex h-full items-center justify-center">
    <div className="absolute inset-0 z-10">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-1 via-transparent to-slate-1 opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-1 via-transparent to-slate-1 opacity-20" />
    </div>
    <div className="w-full h-full bg-gradient-to-br from-blue-100 via-purple-50 to-green-100 rounded-lg flex items-center justify-center">
      <div className="text-6xl font-bold text-primary/20">📊</div>
    </div>
  </div>
);

const DataPolicyVisualization = () => (
  <div className="h-full flex items-center justify-center">
    <div className="flex flex-col items-center w-full max-w-52">
      <div className="flex justify-between items-end w-full px-[45px] -mb-2">
        <Lock className="size-4 text-muted-foreground" />
        <div className="w-7 h-7 rounded-full bg-green-3 flex items-center justify-center">
          <CheckCircle className="size-5 text-green-9" />
        </div>
        <Lock className="size-4 text-muted-foreground" />
      </div>
      <Shield className="size-32 text-muted-foreground/60" />
    </div>
  </div>
);

export default function FeaturesSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
      <FeatureCard
        title="One API for Any Model"
        description="Access all major models through a single, unified interface. OpenAI SDK works out of the box."
        linkText="Browse all"
        href="/models"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-1 via-transparent to-slate-1 opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-1 via-transparent to-slate-1 opacity-30" />
          </div>
          <FloatingProviderIcons />
        </div>
      </FeatureCard>

      <FeatureCard
        title="Higher Availability"
        description="Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down."
        linkText="Learn more"
        href="/docs/features/uptime-optimization"
      >
        <RoutingDiagram />
      </FeatureCard>

      <FeatureCard
        title="Price and Performance"
        description="Keep costs in check without sacrificing speed. OpenRouter runs at the edge, adding just ~25ms between your users and their inference."
        linkText="Learn more"
        href="/docs/features/provider-routing"
      >
        <PerformanceChart />
      </FeatureCard>

      <FeatureCard
        title="Custom Data Policies"
        description="Protect your organization with fine grained data policies. Ensure prompts only go to the models and providers you trust."
        linkText="View docs"
        href="/docs/features/privacy-and-logging"
      >
        <DataPolicyVisualization />
      </FeatureCard>
    </div>
  );
}