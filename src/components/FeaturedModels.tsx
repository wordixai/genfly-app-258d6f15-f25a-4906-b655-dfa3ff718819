import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeaturedModel from "./FeaturedModel";
import ProviderIcons from "./ProviderIcons";

const MobileRoutingCurves = () => (
  <svg width="100%" className="h-10" viewBox="0 0 320 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <title>Routing Curves</title>
    <g stroke="currentColor" strokeWidth="1.5">
      <path d="M155 2C160 15 60 5 60 18" className="origin-center transition-all duration-300 text-slate-6" />
      <path d="M160 2C160 12 160 15 160 18" className="origin-center transition-all duration-300 text-slate-6" />
      <path d="M165 2C160 15 260 5 260 18" className="origin-center transition-all duration-300 text-primary" />
    </g>
    <g>
      <circle cy="24" cx="60" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
      <circle cy="24" cx="160" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
      <circle cy="24" cx="260" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-primary" />
    </g>
  </svg>
);

export default function FeaturedModels() {
  return (
    <div className="w-full min-w-80 space-y-3 md:w-auto">
      {/* Mobile view */}
      <div className="block md:hidden">
        <MobileRoutingCurves />
        <ProviderIcons mobile />
        <FeaturedModel
          name="Claude Sonnet 4"
          provider="anthropic"
          tokens="214.4B"
          latency="1.6s"
          growth="-18.11%"
          highlighted
          providerIcon="/images/icons/Anthropic.svg"
        />
        <div className="flex items-center justify-between px-2 pt-4">
          <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
          <a className="text-primary text-xs hover:underline flex items-center gap-1" href="#">
            View Trending
            <ExternalLink className="inline-block ml-px size-3" />
          </a>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden space-y-3 md:block">
        <div className="flex items-center justify-between">
          <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
          <Button variant="link" className="h-6 px-1.5 text-xs gap-0 text-primary hover:underline">
            View Trending
            <ExternalLink className="inline-block ml-px size-3" />
          </Button>
        </div>
        
        <div className="space-y-3">
          <FeaturedModel
            name="Gemini 2.5 Pro Preview 06-05"
            provider="google"
            tokens="15.4B"
            latency="2.2s"
            growth="--"
            isNew
            providerIcon="/images/icons/GoogleGemini.svg"
          />
          <FeaturedModel
            name="GPT-4.1"
            provider="openai"
            tokens="47.0B"
            latency="771ms"
            growth="-1.71%"
            providerIcon="/images/icons/OpenAI.svg"
            darkInvert
          />
          <FeaturedModel
            name="Claude Sonnet 4"
            provider="anthropic"
            tokens="214.4B"
            latency="1.6s"
            growth="-18.11%"
            highlighted
            providerIcon="/images/icons/Anthropic.svg"
          />
        </div>
      </div>
    </div>
  );
}