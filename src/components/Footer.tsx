export const Footer = () => {
  return (
    <footer className="py-16 bg-gradient-to-t from-accent/10 to-background border-t border-border/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              InstaSelly
            </h3>
            <p className="text-lg text-muted-foreground">
              Your AI-powered customer service revolution
            </p>
          </div>
          
          {/* status indicators */}
          <div className="flex justify-center items-center gap-8 mb-8 text-muted-foreground animate-fade-in animation-delay-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm">AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse animation-delay-500"></div>
              <span className="text-sm">Shopify Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-1000"></div>
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
          
          <p className="text-muted-foreground animate-fade-in animation-delay-500">
            © 2024 InstaSelly. Built for growing businesses.
          </p>
        </div>
      </div>
    </footer>
  );
};
