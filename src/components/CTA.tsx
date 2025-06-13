
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    <section id="waitlist" className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 shadow-2xl bg-card/80 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  🔓 Early Access
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  We're onboarding a small group of sellers first.
                </p>
                <p className="text-lg text-muted-foreground">
                  If this sounds like your daily struggle, join the waitlist.
                  <br />
                  We'll show you exactly how it works.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-3 mb-6">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-11 h-12 text-lg"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground group"
                  >
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </form>
              
              <div className="text-center">
                <div className="bg-accent/20 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-lg mb-2">👀 Real Talk</h3>
                  <p className="text-muted-foreground">
                    This isn't chat automation.
                  </p>
                  <p className="font-semibold text-foreground">
                    This is your first full-time employee who never sleeps.
                  </p>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
