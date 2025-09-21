import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  ShieldCheck,
  FileText,
  BarChart3
} from "lucide-react";

const AdminDashboard = () => {
  const kpiData = [
    { 
      title: "MRL-Safe Dairies", 
      value: "87%", 
      change: "+5.2%", 
      trend: "up", 
      icon: ShieldCheck,
      color: "text-success"
    },
    { 
      title: "Total Farmers", 
      value: "2,847", 
      change: "+12.3%", 
      trend: "up", 
      icon: Users,
      color: "text-primary"
    },
    { 
      title: "Active Alerts", 
      value: "23", 
      change: "-8.1%", 
      trend: "down", 
      icon: AlertTriangle,
      color: "text-warning"
    },
    { 
      title: "Compliance Rate", 
      value: "94.2%", 
      change: "+2.1%", 
      trend: "up", 
      icon: CheckCircle,
      color: "text-success"
    },
  ];

  const recentAlerts = [
    { farm: "Dairy Farm A", issue: "MRL exceeded in milk sample", severity: "high", time: "2 hours ago" },
    { farm: "Poultry Farm B", issue: "AMU documentation missing", severity: "medium", time: "4 hours ago" },
    { farm: "Cattle Ranch C", issue: "Vaccination schedule delayed", severity: "low", time: "1 day ago" },
    { farm: "Organic Farm D", issue: "QR code generation failed", severity: "low", time: "2 days ago" },
  ];

  // Real data based on antibiotic usage analysis
  const antibioticClassData = [
    { name: "Penicillins", count: 32, percentage: 32.3, color: "hsl(var(--primary))" },
    { name: "Sulfonamides", count: 28, percentage: 28.3, color: "hsl(var(--secondary))" },
    { name: "Quinolones", count: 15, percentage: 15.2, color: "hsl(var(--accent))" },
    { name: "Fluoroquinolones", count: 12, percentage: 12.1, color: "hsl(var(--success))" },
    { name: "Aminoglycosides", count: 8, percentage: 8.1, color: "hsl(var(--warning))" },
    { name: "Others", count: 4, percentage: 4.0, color: "hsl(var(--muted))" },
  ];

  const animalDistribution = [
    { animal: "Dairy Cattle/Buffaloes", count: 42, breeds: ["Sahiwal", "Gir", "Jersey", "Holstein"] },
    { animal: "Sheep and Goats", count: 35, breeds: ["Marwari", "Jamunapari", "Sirohi", "Boer"] },
    { animal: "Poultry", count: 22, breeds: ["Dindigul", "Aseel", "Leghorn", "Broiler"] },
  ];

  const breedData = [
    { breed: "Sahiwal", percentage: 18.5 },
    { breed: "Marwari", percentage: 16.2 },
    { breed: "Dindigul", percentage: 14.8 },
    { breed: "Gir", percentage: 12.3 },
    { breed: "Jamunapari", percentage: 11.1 },
    { breed: "Aseel", percentage: 9.8 },
    { breed: "Sirohi", percentage: 8.7 },
    { breed: "Others", percentage: 8.6 },
  ];

  const amuTrendData = [
    { month: "Jan", responsible: 78, misuse: 22 },
    { month: "Feb", responsible: 82, misuse: 18 },
    { month: "Mar", responsible: 85, misuse: 15 },
    { month: "Apr", responsible: 88, misuse: 12 },
    { month: "May", responsible: 91, misuse: 9 },
    { month: "Jun", responsible: 94, misuse: 6 },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-destructive text-white";
      case "medium": return "bg-warning text-warning-foreground";
      case "low": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-accent/5">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive analytics and system monitoring</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi, index) => (
            <Card key={index} className="shadow-soft hover-lift transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <kpi.icon className={`w-8 h-8 ${kpi.color}`} />
                  <div className="flex items-center gap-1">
                    {kpi.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-success" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-success" />
                    )}
                    <span className="text-sm text-success">{kpi.change}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{kpi.value}</h3>
                  <p className="text-sm text-muted-foreground">{kpi.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* AMU vs MRL Trends Chart */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>AMU vs MRL Trends</CardTitle>
              <CardDescription>Monthly correlation analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Line Chart: AMU Usage vs MRL Violations</p>
                  <p className="text-sm text-muted-foreground mt-2">Chart integration with real data</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Drug Usage Distribution */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Drug Usage Distribution</CardTitle>
              <CardDescription>Breakdown of antimicrobial types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {antibioticClassData.map((antibiotic, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{antibiotic.name}</span>
                    <span className="text-sm font-medium">{antibiotic.percentage}%</span>
                  </div>
                ))}
                <div className="mt-4 space-y-2">
                  {antibioticClassData.slice(0, 4).map((antibiotic, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs">{antibiotic.name}</span>
                        <span className="text-xs">{antibiotic.count} cases</span>
                      </div>
                      <Progress value={antibiotic.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Alerts */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Recent Alerts
              </CardTitle>
              <CardDescription>System alerts and compliance issues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-smooth">
                    <Badge className={getSeverityColor(alert.severity)}>
                      {alert.severity}
                    </Badge>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{alert.farm}</p>
                      <p className="text-sm text-muted-foreground">{alert.issue}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Disease Occurrence */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Animal & Breed Distribution</CardTitle>
              <CardDescription>Livestock distribution based on real data analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {animalDistribution.map((animal, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{animal.animal}</h4>
                      <Badge variant="outline">{animal.count} farms</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {animal.breeds.map((breed, breedIndex) => (
                        <div key={breedIndex} className="text-sm text-muted-foreground bg-accent/20 px-2 py-1 rounded">
                          {breed}
                        </div>
                      ))}
                    </div>
                    <Progress value={(animal.count / 99) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <Button size="lg" className="gap-2">
            <FileText className="w-5 h-5" />
            Generate PDF Report
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <FileText className="w-5 h-5" />
            Export Excel Data
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;