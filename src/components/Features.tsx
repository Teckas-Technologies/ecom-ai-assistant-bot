
import { Eye, ShoppingCart, CreditCard, Clock, Smartphone, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: <Eye className="w-7 h-7" />,
      title: "Recognize product photos",
      description: "AI instantly identifies products from customer images",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <ShoppingCart className="w-7 h-7" />,
      title: "Check live stock from Shopify",
      description: "Real-time inventory updates from your store",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <CreditCard className="w-7 h-7" />,
      title: "Send payment links or UPI QR",
      description: "Seamless payment processing for quick checkouts",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <CheckCircle className="w-7 h-7" />,
      title: "Confirm payments automatically",
      description: "Automatic payment verification and order processing",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Create orders in Shopify",
      description: "Direct integration with your existing store setup",
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Reply instantly, 24/7",
      description: "Never miss a customer inquiry, day or night",
      color: "from-teal-500/20 to-green-500/20"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block mb-4">If your customers send product photos, ask</span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x">
                "is this available?"
              </span>
              <span className="block mt-4">and place orders on WhatsApp…</span>
            </h2>
            <p className="text-2xl md:text-3xl text-primary font-semibold animate-fade-in animation-delay-500">
              This is for you.
            </p>
          </div>
          
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in animation-delay-700">
              🧠 Your WhatsApp AI agent can:
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className={`border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group relative overflow-hidden backdrop-blur-sm animate-fade-in hover:-translate-y-2 hover:scale-105`}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 relative">
                        <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                          {feature.icon}
                        </div>
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                          → {feature.title}
                        </h4>
                        <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
