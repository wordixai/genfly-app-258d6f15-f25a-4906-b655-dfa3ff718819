import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <span className="font-semibold text-lg">OpenRouter</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-64 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              ⌘K
            </kbd>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Models</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Chat</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Rankings</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Docs</a>
          <Button variant="outline" size="sm">Sign In</Button>
        </nav>
      </div>
    </header>
  );
}