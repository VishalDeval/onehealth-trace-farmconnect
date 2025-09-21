import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Users, BarChart3, Award, TrendingUp, QrCode } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-agriculture.jpg";
import foodSafetyIcon from "@/assets/food-safety-icon.jpg";
import farmerEmpowermentIcon from "@/assets/farmer-empowerment.jpg";
import aiInsightsIcon from "@/assets/ai-insights.jpg";

const HeroSection = () => {
  const impactHighlights = [
    {
      icon: Shield,
      title: "Food Safety",
      description: "Ensuring MRL compliance and safe animal products",
      image: foodSafetyIcon,
    },
    {
      icon: Users,
      title: "Farmer Empowerment",
      description: "Digital tools for modern livestock management",
      image: farmerEmpowermentIcon,
    },
    {
      icon: BarChart3,
      title: "AI-driven Insights",
      description: "Predictive analytics for better decision making",
      image: aiInsightsIcon,
    },
    {
      icon: Award,
      title: "Consumer Trust",
      description: "Transparent tracking with QR code verification",
      image: foodSafetyIcon,
    },
    {
      icon: TrendingUp,
      title: "Export Competitiveness",
      description: "Meeting international food safety standards",
      image: aiInsightsIcon,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern agricultural technology"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 text-center text-white">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            OneHealth Trace
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Safe Milk, Safe Meat, Safe Future
          </p>
          
          <p className="text-lg mb-12 max-w-4xl mx-auto opacity-90 animate-slide-up" style={{animationDelay: '0.4s'}}>
            Revolutionizing livestock management and food safety in India through comprehensive 
            Digital Farm Management. Monitor Maximum Residue Limits (MRL) and Antimicrobial Usage (AMU) 
            with AI-driven insights for a safer food supply chain.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{animationDelay: '0.6s'}}>
            <Link to="/farmer">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-large hover-lift">
                <Users className="w-5 h-5 mr-2" />
                Login as Farmer
              </Button>
            </Link>
            <Link to="/consumer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 shadow-large hover-lift">
                <QrCode className="w-5 h-5 mr-2" />
                Scan QR
              </Button>
            </Link>
            <Link to="/admin">
              <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-large hover-lift">
                <BarChart3 className="w-5 h-5 mr-2" />
                Login as Admin
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Transforming Agriculture Through Technology</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Our comprehensive platform addresses key challenges in livestock management and food safety
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactHighlights.map((highlight, index) => (
              <Card 
                key={highlight.title}
                className="p-6 hover-lift transition-spring shadow-soft bg-gradient-card border-0"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative mb-4">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-32 object-cover rounded-lg opacity-80"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-medium">
                    <highlight.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;