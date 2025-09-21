import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Code, Brain, Database, Palette, Search, Lightbulb } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Arjun Sharma",
      role: "Team Lead & Full Stack Developer",
      specialization: "React, Node.js, System Architecture",
      icon: Code,
      contribution: "Led project architecture and frontend development"
    },
    {
      name: "Priya Patel",
      role: "Machine Learning Engineer",
      specialization: "Python, TensorFlow, Data Analysis",
      icon: Brain,
      contribution: "Developed AI models for AMU and MRL prediction"
    },
    {
      name: "Rahul Kumar",
      role: "Backend Developer",
      specialization: "APIs, Database Design, Cloud Integration",
      icon: Database,
      contribution: "Built scalable backend infrastructure"
    },
    {
      name: "Sneha Gupta",
      role: "UI/UX Designer",
      specialization: "User Experience, Visual Design",
      icon: Palette,
      contribution: "Designed user-friendly interfaces for all portals"
    },
    {
      name: "Vikram Singh",
      role: "Research Lead",
      specialization: "Agricultural Technology, Compliance",
      icon: Search,
      contribution: "Conducted regulatory research and compliance validation"
    },
    {
      name: "Ananya Joshi",
      role: "Product Strategist",
      specialization: "Business Analysis, Market Research",
      icon: Lightbulb,
      contribution: "Defined product strategy and stakeholder requirements"
    }
  ];

  const achievements = [
    "🏆 SIH 2025 Finalist",
    "🚀 Innovative Agricultural Technology Solution",
    "📊 AI-Powered Predictive Analytics",
    "🌍 Export Market Ready Compliance",
    "👥 Multi-Stakeholder Platform Design",
    "🔒 Comprehensive Food Safety Coverage"
  ];

  const projectStats = [
    { label: "Lines of Code", value: "15,000+", icon: Code },
    { label: "AI Models Trained", value: "3", icon: Brain },
    { label: "Compliance Standards", value: "5+", icon: Trophy },
    { label: "User Portals", value: "3", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-accent/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-large">
              <Trophy className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Team BitVengers</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            A passionate team of developers, researchers, and designers united by the vision 
            of revolutionizing livestock management and food safety in India.
          </p>
          <div className="flex justify-center">
            <Badge className="bg-gradient-hero text-white px-4 py-2 text-lg">
              SIH 2025 Participants
            </Badge>
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {projectStats.map((stat, index) => (
            <Card key={index} className="text-center shadow-soft hover-lift transition-smooth">
              <CardContent className="p-6">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Members */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-soft hover-lift transition-smooth">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <member.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {member.role}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-3">
                    <strong>Specialization:</strong> {member.specialization}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">
                    {member.contribution}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Vision */}
        <Card className="mb-12 shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl">Our Vision & Mission</CardTitle>
            <CardDescription>Transforming agriculture through technology</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 text-primary">🎯 Vision</h4>
              <p className="text-muted-foreground">
                To create a comprehensive Digital Farm Management ecosystem that ensures food safety, 
                empowers farmers with technology, and positions India as a leader in export-quality 
                livestock products through AI-driven insights and compliance management.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-secondary">🚀 Mission</h4>
              <p className="text-muted-foreground">
                We are committed to developing innovative solutions that bridge the gap between 
                traditional farming practices and modern technology, ensuring Maximum Residue Limit 
                compliance, responsible Antimicrobial Usage, and building consumer trust through 
                transparent product traceability.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-success">💡 Innovation</h4>
              <p className="text-muted-foreground">
                Our platform leverages cutting-edge AI and machine learning technologies to predict 
                potential issues before they occur, optimize resource usage, and provide actionable 
                insights that benefit all stakeholders in the livestock ecosystem.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="mb-12 shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl">Project Achievements</CardTitle>
            <CardDescription>Key milestones and recognitions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-accent/20 hover:bg-accent/30 transition-smooth"
                >
                  <span className="text-2xl">{achievement.split(' ')[0]}</span>
                  <span className="font-medium">{achievement.substring(2)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Hackathon Context */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl">Hackathon Journey</CardTitle>
            <CardDescription>Smart India Hackathon 2025 Experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-hero text-white p-6 rounded-lg">
              <h4 className="font-bold mb-2">Problem Statement SIH25007</h4>
              <p className="opacity-90">
                "Development of a comprehensive Digital Farm Management Portal for monitoring 
                Maximum Residue Limits (MRL) and Antimicrobial Usage (AMU) in livestock"
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">🔍 Research Phase</h4>
                <p className="text-muted-foreground text-sm">
                  Extensive research on FSSAI guidelines, WHO standards, and international 
                  best practices in livestock management and food safety.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">💻 Development Phase</h4>
                <p className="text-muted-foreground text-sm">
                  48-hour intensive development cycle creating a full-stack solution with 
                  AI integration and multi-stakeholder portal design.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🧪 Testing & Validation</h4>
                <p className="text-muted-foreground text-sm">
                  Rigorous testing of AI models, user interface validation, and compliance 
                  verification against regulatory standards.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📈 Impact Assessment</h4>
                <p className="text-muted-foreground text-sm">
                  Demonstrating potential impact on farmer empowerment, consumer safety, 
                  and India's export competitiveness in agricultural products.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;