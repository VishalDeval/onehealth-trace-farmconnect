import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  Lightbulb, 
  Target,
  Activity,
  Zap,
  Shield
} from "lucide-react";
import aiInsightsImage from "@/assets/ai-insights.jpg";

const AIInsights = () => {
  const aiFeatures = [
    {
      title: "AMU Misuse Prediction",
      description: "AI-powered analysis to predict potential antimicrobial misuse patterns",
      accuracy: "94.2%",
      status: "Active",
      icon: Target,
    },
    {
      title: "Disease Outbreak Early Warning",
      description: "Machine learning models for early detection of disease outbreaks",
      accuracy: "89.7%",
      status: "Active",
      icon: AlertTriangle,
    },
    {
      title: "Smart Drug Recommendations",
      description: "AI-driven suggestions for optimal and responsible drug usage",
      accuracy: "91.8%",
      status: "Beta",
      icon: Lightbulb,
    },
  ];

  const predictionTrends = [
    { metric: "MRL Violation Risk", current: 12, predicted: 8, trend: "decreasing" },
    { metric: "Disease Outbreak Probability", current: 23, predicted: 18, trend: "decreasing" },
    { metric: "AMU Compliance Rate", current: 87, predicted: 92, trend: "increasing" },
    { metric: "Product Safety Score", current: 8.4, predicted: 8.9, trend: "increasing" },
  ];

  const techStack = [
    { name: "Python", usage: "Core ML Development", icon: "🐍" },
    { name: "TensorFlow", usage: "Deep Learning Models", icon: "🧠" },
    { name: "Scikit-learn", usage: "Machine Learning Algorithms", icon: "📊" },
    { name: "Pandas", usage: "Data Processing & Analysis", icon: "🐼" },
    { name: "React", usage: "Frontend Interface", icon: "⚛️" },
    { name: "Node.js", usage: "Backend API Services", icon: "🚀" },
    { name: "MongoDB", usage: "Database Management", icon: "🍃" },
    { name: "Vercel/Render", usage: "Cloud Deployment", icon: "☁️" },
  ];

  return (
    <div className="min-h-screen bg-accent/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="relative mb-8">
            <img
              src={aiInsightsImage}
              alt="AI and Machine Learning"
              className="w-full h-64 object-cover rounded-2xl opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-hero opacity-60 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <Brain className="w-16 h-16 mx-auto mb-4" />
                <h1 className="text-5xl font-bold mb-4">AI & ML Insights</h1>
                <p className="text-xl max-w-2xl">
                  Predictive Analytics for Smarter Livestock Management
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {aiFeatures.map((feature, index) => (
            <Card key={index} className="shadow-soft hover-lift transition-smooth">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <feature.icon className="w-8 h-8 text-primary" />
                  <Badge className={feature.status === "Active" ? "bg-success text-white" : "bg-secondary"}>
                    {feature.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Accuracy</span>
                  <span className="text-lg font-bold text-success">{feature.accuracy}</span>
                </div>
                <Progress value={parseFloat(feature.accuracy)} className="mt-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Predictive Analytics */}
        <Card className="mb-12 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Predictive Analytics Dashboard
            </CardTitle>
            <CardDescription>Real-time AI predictions and trend analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {predictionTrends.map((trend, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-accent/20">
                  <h4 className="font-medium mb-2">{trend.metric}</h4>
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <div>
                      <p className="text-sm text-muted-foreground">Current</p>
                      <p className="text-xl font-bold">{trend.current}{trend.current < 50 && typeof trend.current === 'number' ? '%' : ''}</p>
                    </div>
                    <div className="flex items-center">
                      {trend.trend === "increasing" ? (
                        <TrendingUp className="w-5 h-5 text-success" />
                      ) : (
                        <TrendingUp className="w-5 h-5 text-success rotate-180" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Predicted</p>
                      <p className="text-xl font-bold text-primary">{trend.predicted}{trend.predicted < 50 && typeof trend.predicted === 'number' ? '%' : ''}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mock Data Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>AMU Misuse Trends</CardTitle>
              <CardDescription>AI-powered prediction model results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Machine Learning Trend Analysis</p>
                  <p className="text-sm text-muted-foreground mt-2">Jupyter Notebook Integration</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Disease Outbreak Prediction</CardTitle>
              <CardDescription>Early warning system dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                <div className="text-center">
                  <AlertTriangle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Predictive Model Visualization</p>
                  <p className="text-sm text-muted-foreground mt-2">Real-time Risk Assessment</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technology Stack */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Technology Stack
            </CardTitle>
            <CardDescription>Cutting-edge tools powering our AI insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg hover:bg-accent/50 transition-smooth">
                  <span className="text-2xl">{tech.icon}</span>
                  <div>
                    <h4 className="font-medium">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center shadow-soft">
            <CardContent className="p-6">
              <Shield className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-success mb-2">99.2%</h3>
              <p className="text-muted-foreground">Model Reliability</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-soft">
            <CardContent className="p-6">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-primary mb-2">&lt; 50ms</h3>
              <p className="text-muted-foreground">Prediction Speed</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-soft">
            <CardContent className="p-6">
              <Activity className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-secondary mb-2">24/7</h3>
              <p className="text-muted-foreground">Real-time Monitoring</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;