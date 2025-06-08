export default function ProviderIcons({ className = "", mobile = false }: { className?: string; mobile?: boolean }) {
  const providers = [
    { name: "Google Gemini", icon: "/images/icons/GoogleGemini.svg" },
    { name: "OpenAI", icon: "/images/icons/OpenAI.svg", darkInvert: true },
    { name: "Anthropic", icon: "/images/icons/Anthropic.svg" }
  ];

  if (mobile) {
    return (
      <div className="grid grid-cols-3 gap-4 pb-3">
        {providers.map((provider, index) => (
          <button key={index} className="whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 text-muted-foreground hover:bg-accent hover:text-accent-foreground h-11 flex items-center justify-center rounded-lg p-4" type="button">
            <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 size-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
              <div className={`overflow-hidden rounded-full ${provider.darkInvert ? 'dark:invert' : ''}`}>
                <picture className="h-full w-full flex-shrink-0">
                  <div className="h-full w-full bg-gray-200 rounded-full flex items-center justify-center text-xs">
                    {provider.name.charAt(0)}
                  </div>
                </picture>
              </div>
            </div>
          </button>
        ))}
      </div>
    );
  }

  return null;
}