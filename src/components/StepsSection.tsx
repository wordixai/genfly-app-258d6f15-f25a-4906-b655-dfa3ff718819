import { User, CreditCard, Key, Mail } from "lucide-react";

const StepIcon = ({ children, number }: { children: React.ReactNode; number: string }) => (
  <div className="w-7 h-7 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">
    {number}
  </div>
);

const ProviderIcon = ({ name, color }: { name: string; color: string }) => (
  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
    <div className="w-5 h-5 rounded" style={{ backgroundColor: color }} />
  </div>
);

export default function StepsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Step 1: Signup */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 md:gap-3">
          <StepIcon number="1">
            <User className="w-4 h-4" />
          </StepIcon>
          <h3 className="text-base md:text-lg font-semibold">Signup</h3>
        </div>
        <div className="min-h-10 md:min-h-12">
          <p className="text-sm text-muted-foreground">
            Create an account to get started. You can set up an org for your team later.
          </p>
        </div>
        <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            <div className="h-4 w-6 flex flex-col justify-center">
              <div className="h-1 bg-primary/20 rounded"></div>
              <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
            </div>
            <div className="h-4 w-12 flex flex-col justify-center">
              <div className="h-1 bg-primary/20 rounded"></div>
              <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
            </div>
          </div>
          <div className="flex flex-row gap-2 max-w-56">
            <ProviderIcon name="Google" color="#4285F4" />
            <ProviderIcon name="GitHub" color="#333333" />
            <ProviderIcon name="MetaMask" color="#F6851B" />
            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Buy credits */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 md:gap-3">
          <StepIcon number="2">
            <CreditCard className="w-4 h-4" />
          </StepIcon>
          <h3 className="text-base md:text-lg font-semibold">Buy credits</h3>
        </div>
        <div className="min-h-10 md:min-h-12">
          <p className="text-sm text-muted-foreground">
            Credits can be used with any model or provider.
          </p>
        </div>
        <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" />
            <div className="h-4 w-6 flex flex-col justify-center">
              <div className="h-1 bg-primary/20 rounded"></div>
              <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
            </div>
            <div className="h-4 w-6 flex flex-col justify-center">
              <div className="h-1 bg-primary/20 rounded"></div>
              <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
            </div>
            <div className="h-4 w-6 flex flex-col justify-center">
              <div className="h-1 bg-primary/20 rounded"></div>
              <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
            </div>
            <div className="h-4 w-6 flex flex-col justify-center">
              <div className="h-1 bg-primary/20 rounded"></div>
              <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-6 bg-primary/5 rounded flex items-center px-2">
              <span className="text-xs text-muted-foreground">Apr 1</span>
              <div className="flex-1 flex items-center gap-2 mx-2">
                <div className="h-2 flex-1 bg-primary/10 rounded"></div>
                <div className="h-2 flex-1 bg-primary/10 rounded"></div>
              </div>
              <span className="text-sm font-medium">$99</span>
            </div>
            <div className="h-6 bg-primary/5 rounded flex items-center px-2">
              <span className="text-xs text-muted-foreground">Mar 30</span>
              <div className="flex-1 flex items-center gap-2 mx-2">
                <div className="h-2 flex-1 bg-primary/10 rounded"></div>
                <div className="h-2 flex-1 bg-primary/10 rounded"></div>
              </div>
              <span className="text-sm font-medium">$10</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Get API key */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 md:gap-3">
          <StepIcon number="3">
            <Key className="w-4 h-4" />
          </StepIcon>
          <h3 className="text-base md:text-lg font-semibold">Get your API key</h3>
        </div>
        <div className="min-h-10 md:min-h-12">
          <p className="text-sm text-muted-foreground">
            Create an API key and start making requests. <a href="#" className="text-primary hover:underline">Fully OpenAI compatible</a>.
          </p>
        </div>
        <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Key className="w-5 h-5 text-primary" />
            <div className="h-6 flex-1 bg-primary/5 rounded flex items-center px-2">
              <span className="text-xs text-muted-foreground tracking-wide">OPENROUTER_API_KEY</span>
            </div>
          </div>
          <div className="h-6 bg-primary/5 rounded flex items-center px-2">
            <span className="text-xs tracking-wider">••••••••••••••••</span>
          </div>
        </div>
      </div>
    </div>
  );
}