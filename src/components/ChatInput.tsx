import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const RoutingCurves = () => (
  <svg className="h-80 w-12" viewBox="-5 0 50 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <title>Routing Curves</title>
    <g stroke="currentColor" strokeWidth="1.5">
      <path d="M2 150C12 150 15 75 25 65" className="origin-center transition-all duration-300 text-slate-6" />
      <path d="M2 160C12 160 22 160 25 160" className="origin-center transition-all duration-300 text-slate-6" />
      <path d="M2 170C12 170 15 255 25 255" className="origin-center transition-all duration-300 text-primary" />
    </g>
    <g>
      <circle cx="35" cy="60" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
      <circle cx="35" cy="160" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
      <circle cx="35" cy="260" r="6" fill="currentColor" className="origin-center transition-all duration-300 text-primary" />
    </g>
  </svg>
);

export default function ChatInput() {
  return (
    <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-16 min-w-full flex-shrink-0">
      {/* Desktop Chat Input */}
      <div className="group/card text-card-foreground rounded-xl transition-all duration-200 hover:border-slate-7 hover:text-slate-12 border hover:shadow-lg bg-background relative w-full p-2 shadow-md md:translate-y-5">
        <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 translate-x-1/3 md:flex">
          <RoutingCurves />
        </div>
        <div className="flex w-full items-center justify-between gap-3 flex-row">
          <input
            className="w-full appearance-none py-2 transition duration-150 ease-in-out placeholder:text-foreground/30 shadow-border focus:shadow-inner focus:outline-none text-muted-foreground bg-background focus:bg-background/80 h-10 flex-1 rounded-lg border-0 px-4"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            type="text"
            placeholder="Start a message..."
            defaultValue=""
          />
          <Button className="aspect-square h-10 px-3 transition-colors md:aspect-auto md:flex-shrink-0 group">
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}