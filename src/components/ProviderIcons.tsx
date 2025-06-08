export default function ProviderIcons({ className = "", mobile = false }: { className?: string; mobile?: boolean }) {
  const providers = [
    { name: "Google Gemini", color: "#4285F4" },
    { name: "OpenAI", color: "#000000" },
    { name: "Anthropic", color: "#C5915B" }
  ];

  if (mobile) {
    return (
      <div className="grid grid-cols-3 gap-4 pb-3">
        {providers.map((provider, index) => (
          <button key={index} className="whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 text-muted-foreground hover:bg-accent hover:text-accent-foreground h-11 flex items-center justify-center rounded-lg p-4" type="button">
            <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 size-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
              <div className="overflow-hidden rounded-full">
                <div className="h-full w-full flex-shrink-0 rounded-full" style={{ backgroundColor: provider.color, width: '100%', height: '100%' }} />
              </div>
            </div>
          </button>
        ))}
      </div>
    );
  }

  return null;
}