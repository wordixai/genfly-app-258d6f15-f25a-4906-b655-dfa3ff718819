import FeatureCard from "./FeatureCard";
import { Shield } from "lucide-react";

const FloatingProviderIcons = () => (
  <div className="absolute inset-[1rem] grid grid-cols-5 gap-x-3 gap-y-1 scale-105 z-10">
    {Array.from({ length: 25 }, (_, i) => (
      <div
        key={i}
        className="size-9 transform hover:scale-110 hover:brightness-110 transition-all duration-500 ease-out"
        style={{
          animation: `float${i % 5} 4s ease-in-out infinite ${i * 150}ms`,
          opacity: 0.85,
          transform: i % 2 === 0 ? 'translateX(9px)' : ''
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
      <svg width="100%" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground/60">
        <path d="M95 0 C100 40, 20 20, 10 65" stroke="currentColor" strokeWidth="0.75" />
        <path d="M100 0 C100 20, 100 20, 100 65" stroke="currentColor" strokeWidth="0.75" />
        <path d="M105 0 C100 40, 180 20, 190 65" stroke="currentColor" strokeWidth="0.75" />
      </svg>
      <div className="flex justify-between w-full">
        <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
          <div className="overflow-hidden rounded-full">
            <div className="h-full w-full bg-blue-500 rounded-full" />
          </div>
        </div>
        <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
          <div className="overflow-hidden rounded-full">
            <div className="h-full w-full bg-amber-500 rounded-full" />
          </div>
        </div>
        <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
          <div className="overflow-hidden rounded-full">
            <div className="h-full w-full bg-green-500 rounded-full" />
          </div>
        </div>
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
    <img 
      alt="Performance graph" 
      className="h-full w-full object-contain"
      src="https://openrouter.ai/_next/image?url=%2Fperf-light.png&w=640&q=75"
    />
  </div>
);

const DataPolicyVisualization = () => (
  <div className="h-full flex items-center justify-center">
    <div className="flex flex-col items-center w-full max-w-52">
      <div className="flex justify-between items-end w-full px-[45px] -mb-2">
        <Shield className="size-4 text-muted-foreground" />
        <div className="w-7 h-7 rounded-full bg-green-3 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-9">
            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
          </svg>
        </div>
        <Shield className="size-4 text-muted-foreground" />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.3" stroke="currentColor" className="size-32 text-muted-foreground/60">
        <title>Data policy visualization</title>
        <path d="M12 2.7A12 12 0 0 1 3.6 6 12 12 0 0 0 3 9.7a12 12 0 0 0 9 11.7A12 12 0 0 0 20.4 6h-.1A12 12 0 0 1 12 2.7Z"></path>
        <path strokeWidth=".4" d="M14.2 14.5a3.6 3.6 0 0 0 1.5-.2 1.2 1.2 0 0 0-1.9-1m.4 1.2v.3a4.8 4.8 0 0 1-2.4.6c-.9 0-1.7-.2-2.4-.6a2.4 2.4 0 0 1 0-.3m4.8 0a2.4 2.4 0 0 0-.4-1.3m0 0a2.4 2.4 0 0 0-2-1.1 2.4 2.4 0 0 0-2 1.1m0 0a1.2 1.2 0 0 0-1.9 1.1 3.6 3.6 0 0 0 1.5.2m.4-1.3a2.4 2.4 0 0 0-.4 1.3M13 9.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm2.4 1.2a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm-5.4 0a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z"></path>
      </svg>
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