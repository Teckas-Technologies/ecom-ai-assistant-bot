
import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Zap, TrendingUp } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Time saved",
      value: "80+ hours",
      subtitle: "per month",
      description: "Focus on growing your business instead of answering the same questions",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Money saved",
      value: "₹10K–₹20K",
      subtitle: "monthly savings",
      description: "Eliminate the need for manual customer support staff",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Zero burnout",
      value: "0 missed",
      subtitle: "messages",
      description: "Never worry about customer inquiries going unanswered",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-conic from-primary/5 via-accent/5 to-primary/5 rounded-full blur-3xl animate-spin-slow opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in">
              💰 Why It Matters
            </h2>
            <div className="flex justify-center items-center gap-3 animate-fade-in animation-delay-300">
              <TrendingUp className="w-8 h-8 text-primary animate-pulse" />
              <p className="text-xl md:text-2xl text-primary font-semibold">
                Transform your business efficiency
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-border/50 hover:border-primary/30 transition-all duration-700 group relative overflow-hidden backdrop-blur-sm animate-fade-in hover:-translate-y-6 hover:scale-105"
                style={{ animationDelay: `${500 + index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                
                <CardContent className="p-10 text-center relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className={`p-6 bg-gradient-to-br ${benefit.gradient} rounded-3xl text-white group-hover:scale-110 transition-all duration-500 group-hover:rotate-6 shadow-2xl`}>
                        {benefit.icon}
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-3xl blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500`}></div>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-3 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <div className="mb-6">
                    <p className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {benefit.value}
                    </p>
                    <p className="text-lg font-medium text-primary opacity-80">
                      {benefit.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional impact section */}
          <div className="mt-20 text-center animate-fade-in animation-delay-1200">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12 border border-primary/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Join 100+ businesses already saving time
              </h3>
              <p className="text-lg text-muted-foreground">
                Don't let manual replies slow down your growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
