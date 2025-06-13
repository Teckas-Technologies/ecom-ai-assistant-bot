
import { Card, CardContent } from "@/components/ui/card";
import { Package, Instagram, MessageCircle } from "lucide-react";

export const TargetAudience = () => {
  const audiences = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Small ecom brands",
      description: "Growing online stores looking to scale customer support"
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Instagram sellers",
      description: "Social commerce businesses managing DM inquiries"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp-first businesses",
      description: "Companies using WhatsApp as their primary sales channel"
    }
  ];

  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            📦 Who It's For
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {audiences.map((audience, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {audience.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{audience.title}</h3>
                  <p className="text-sm text-muted-foreground">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-card rounded-lg p-8 border border-border/50">
            <p className="text-lg text-muted-foreground">
              If you're spending <span className="font-semibold text-foreground">3–4 hours a day</span> replying to messages manually — we're here to take that off your plate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
