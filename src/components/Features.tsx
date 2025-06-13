
import { Eye, ShoppingCart, CreditCard, Clock, Smartphone, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Recognize product photos",
      description: "AI instantly identifies products from customer images"
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Check live stock from Shopify",
      description: "Real-time inventory updates from your store"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Send payment links or UPI QR",
      description: "Seamless payment processing for quick checkouts"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Confirm payments automatically",
      description: "Automatic payment verification and order processing"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Create orders in Shopify",
      description: "Direct integration with your existing store setup"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reply instantly, 24/7",
      description: "Never miss a customer inquiry, day or night"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              If your customers send product photos, ask{" "}
              <span className="text-primary">"is this available?"</span>, and place orders on WhatsApp…
            </h2>
            <p className="text-xl text-muted-foreground">This is for you.</p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              🧠 Your WhatsApp AI agent can:
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">
                          → {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
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
