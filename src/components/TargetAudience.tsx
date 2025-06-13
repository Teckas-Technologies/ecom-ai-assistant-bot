
import { Card, CardContent } from "@/components/ui/card";
import { Package, Instagram, MessageCircle } from "lucide-react";

export const TargetAudience = () => {
  const audiences = [
    {
      icon: <Package className="w-10 h-10" />,
      title: "Small ecom brands",
      description: "Growing online stores looking to scale customer support",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Instagram className="w-10 h-10" />,
      title: "Instagram sellers",
      description: "Social commerce businesses managing DM inquiries",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: "WhatsApp-first businesses",
      description: "Companies using WhatsApp as their primary sales channel",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-accent/5 to-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 animate-fade-in">
            📦 Who It's For
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {audiences.map((audience, index) => (
              <Card 
                key={index} 
                className="border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden backdrop-blur-sm animate-fade-in hover:-translate-y-4 hover:scale-105"
                style={{ animationDelay: `${300 + index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-10 text-center relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className={`p-6 bg-gradient-to-br ${audience.gradient} rounded-3xl text-white group-hover:scale-110 transition-all duration-500 group-hover:rotate-6 shadow-xl`}>
                        {audience.icon}
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-4 group-hover:text-primary transition-colors duration-300">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-card/80 to-accent/10 rounded-3xl p-12 border border-border/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 animate-fade-in animation-delay-900 hover:scale-105">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              If you're spending <span className="font-bold text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3–4 hours a day</span> replying to messages manually — we're here to take that off your plate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
