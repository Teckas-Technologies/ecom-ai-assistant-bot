
import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Zap } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time saved",
      value: "80+ hours per month",
      description: "Focus on growing your business instead of answering the same questions"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Money saved",
      value: "₹10,000–₹20,000",
      description: "Eliminate the need for manual customer support staff"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Zero burnout",
      value: "Zero missed messages",
      description: "Never worry about customer inquiries going unanswered"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              💰 Why It Matters
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-muted-foreground">{benefit.title}</h3>
                  <p className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{benefit.value}</p>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
