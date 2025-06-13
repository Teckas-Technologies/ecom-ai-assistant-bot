import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToCTA = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 pt-20 pb-32">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse opacity-50 animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full animate-pulse opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating badge with enhanced animation */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full px-6 py-3 mb-12 text-sm font-medium text-primary backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40 group">
            <Zap className="w-4 h-4 animate-pulse" />
            <span>InstaSelly</span>
            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          
          {/* Enhanced heading with staggered animation */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 leading-none">
            <span className="block animate-fade-in bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Tired of replying to the same
            </span>
            <span className="block animate-fade-in animation-delay-300 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x">
              WhatsApp messages
            </span>
            <span className="block animate-fade-in animation-delay-600 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              every day?
            </span>
          </h1>
          
          {/* Enhanced subtitle */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in animation-delay-900 font-light">
            Let an AI assistant handle it while you{" "}
            <span className="text-primary font-medium">grow your business.</span>
          </p>
          
          {/* Enhanced CTA section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in animation-delay-1200">
            <Button 
              size="lg" 
              onClick={scrollToCTA}
              className="text-xl px-12 py-8 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3">
                Join Waitlist
                <ArrowRight className="w-6 h-6 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              </span>
            </Button>
            <div className="flex flex-col items-center gap-2">
              <p className="text-lg text-muted-foreground font-medium">
                Free for early adopters
              </p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-medium">Limited spots available</span>
              </div>
            </div>
          </div>

          {/* Social proof indicators */}
          <div className="mt-16 animate-fade-in animation-delay-1500">
            <div className="flex justify-center items-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse animation-delay-500"></div>
                <span className="text-sm">24/7 Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse animation-delay-1000"></div>
                <span className="text-sm">Shopify Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
