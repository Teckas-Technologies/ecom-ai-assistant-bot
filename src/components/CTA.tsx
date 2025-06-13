
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Sparkles, Zap, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import WaitlistForm from "./WaitlistForm";

export const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "You're on the waitlist! 🎉",
        description: "We'll reach out soon to show you how it works.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="waitlist" className="py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-conic from-primary/5 via-accent/5 to-primary/5 rounded-full blur-3xl animate-spin-slow opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="border-primary/20 shadow-2xl bg-gradient-to-br from-card/90 to-accent/5 backdrop-blur-lg relative overflow-hidden hover:shadow-3xl transition-all duration-700 hover:scale-105">
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur-sm animate-pulse"></div>
            <div className="absolute inset-[1px] bg-gradient-to-br from-card/95 to-accent/10 rounded-lg"></div>
            
            <CardContent className="p-16 relative z-10">
              <div className="text-center mb-16">
                {/* Enhanced heading */}
                <div className="flex justify-center items-center gap-3 mb-8 animate-fade-in">
                  <Sparkles className="w-10 h-10 text-primary animate-pulse" />
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x">
                    🔓 Early Access
                  </h2>
                  <Zap className="w-10 h-10 text-accent animate-pulse animation-delay-500" />
                </div>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in animation-delay-300">
                  We're onboarding a small group of sellers first.
                </p>
                <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in animation-delay-500">
                  If this sounds like your daily struggle, join the waitlist.
                  <br />
                  <span className="text-primary font-semibold">We'll show you exactly how it works.</span>
                </p>
              </div>
              
              {/* Enhanced form */}
          
              <div className="flex justify-center mb-12">
              <Button 
                type="submit" 
                size="lg" 
                onClick={() => setIsDialogOpen(true)}
                className="h-16 px-10 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 text-lg font-semibold"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-3">
                  Join Waitlist
                  <ArrowRight className="w-6 h-6 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                </span>
              </Button>
            </div>
            <WaitlistForm isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
              
              {/* Enhanced benefits section */}
              <div className="text-center animate-fade-in animation-delay-900">
                <div className="bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 rounded-2xl p-8 mb-10 border border-primary/20 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className="flex justify-center items-center gap-3 mb-4">
                    <CheckCircle className="w-8 h-8 text-primary animate-pulse" />
                    <h3 className="font-bold text-2xl md:text-3xl">👀 Real Talk</h3>
                  </div>
                  <p className="text-lg md:text-xl text-muted-foreground mb-3 leading-relaxed">
                    This isn't chat automation.
                  </p>
                  <p className="font-bold text-xl md:text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    This is your first full-time employee who never sleeps.
                  </p>
                </div>
                
                {/* Trust indicators */}
                <div className="flex justify-center items-center gap-8 mb-8 text-muted-foreground animate-fade-in animation-delay-1100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">No spam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse animation-delay-500"></div>
                    <span className="text-sm font-medium">Free setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></div>
                    <span className="text-sm font-medium">Cancel anytime</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground opacity-80">
                  Join 500+ businesses on the waitlist. Unsubscribe anytime.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
