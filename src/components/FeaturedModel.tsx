import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FeaturedModelProps {
  name: string;
  provider: string;
  tokens: string;
  latency: string;
  growth: string;
  isNew?: boolean;
  highlighted?: boolean;
  providerColor?: string;
}

export default function FeaturedModel({
  name,
  provider,
  tokens,
  latency,
  growth,
  isNew = false,
  highlighted = false,
  providerColor = "#666"
}: FeaturedModelProps) {
  return (
    <div className={`group/card text-card-foreground transition-all duration-200 hover:text-slate-12 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary ${highlighted ? 'md:border-primary' : 'border-slate-6'}`}>
      <div className="space-y-2">
        <div>
          <a className="hover:underline" href="#">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <h3 className="text-foreground font-medium">{name}</h3>
                {isNew && (
                  <Badge variant="secondary" className="text-[10px]">New</Badge>
                )}
              </div>
              <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                <div className="overflow-hidden rounded-full">
                  <div className="h-full w-full flex-shrink-0 rounded-full" style={{ backgroundColor: providerColor }} />
                </div>
              </div>
            </div>
          </a>
          <div className="flex items-center">
            <span className="text-muted-foreground text-xs">
              by <a className="text-primary hover:underline" href="#">{provider}</a>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
          <div>
            <p className="text-green-10 text-sm font-medium">{tokens}</p>
            <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
          </div>
          <div>
            <p className="text-sm font-medium">{latency}</p>
            <p className="text-muted-foreground text-[10px]">Latency</p>
          </div>
          <div>
            <p className={`text-sm font-medium ${growth.includes('-') ? 'text-red-10' : growth === '--' ? 'text-slate-9' : 'text-green-10'}`}>
              {growth}
            </p>
            <p className="text-muted-foreground text-[10px]">Weekly growth</p>
          </div>
        </div>
      </div>
    </div>
  );
}