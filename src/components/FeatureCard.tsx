import { ExternalLink } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  linkText: string;
  href?: string;
  children: React.ReactNode;
}

export default function FeatureCard({ title, description, linkText, href = "#", children }: FeatureCardProps) {
  return (
    <a href={href} className="h-full">
      <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
        <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
          {children}
        </div>
        <div className="flex flex-col gap-2 px-6 py-4 h-full">
          <div className="flex flex-col gap-2 h-full">
            <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <span className="text-primary group-hover/card:underline flex items-center">
            {linkText}
            <ExternalLink className="ml-1 inline-block w-4" />
          </span>
        </div>
      </div>
    </a>
  );
}