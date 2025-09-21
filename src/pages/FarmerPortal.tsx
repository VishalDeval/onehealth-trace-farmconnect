import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mountain, Bird, Rabbit, Plus, QrCode, FileText, Mic, Shield } from "lucide-react";

const FarmerPortal = () => {
  const animals = [
    { type: "Cow", icon: Mountain, count: 15, status: "Safe", color: "bg-success" },
    { type: "Buffalo", icon: Mountain, count: 8, status: "Pending", color: "bg-warning" },
    { type: "Goat", icon: Rabbit, count: 25, status: "Safe", color: "bg-success" },
    { type: "Hen", icon: Bird, count: 100, status: "Alert", color: "bg-destructive" },
  ];

  const recentActivities = [
    { action: "AMU recorded for Cow #C001", time: "2 hours ago", status: "completed" },
    { action: "MRL test pending for Buffalo #B005", time: "5 hours ago", status: "pending" },
    { action: "QR code generated for Goat #G012", time: "1 day ago", status: "completed" },
    { action: "Vaccination recorded for Hen batch #H3", time: "2 days ago", status: "completed" },
  ];

  return (
    <div className="min-h-screen bg-accent/5">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Farmer Dashboard</h1>
          <p className="text-muted-foreground">Manage your livestock health and safety records</p>
        </div>

        {/* Animal Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {animals.map((animal) => (
            <Card key={animal.type} className="hover-lift transition-smooth shadow-soft">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <animal.icon className="w-8 h-8 text-primary" />
                  <Badge className={`${animal.color} text-white`}>
                    {animal.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-2xl font-bold">{animal.count}</h3>
                <p className="text-muted-foreground">{animal.type}s</p>
                <Button className="w-full mt-3" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" size="lg" variant="outline">
                <Mic className="w-5 h-5 mr-3" />
                Record AMU (Voice Input)
              </Button>
              <Button className="w-full justify-start" size="lg" variant="outline">
                <Shield className="w-5 h-5 mr-3" />
                Check MRL Status
              </Button>
              <Button className="w-full justify-start" size="lg" variant="outline">
                <QrCode className="w-5 h-5 mr-3" />
                Generate QR Code
              </Button>
              <Button className="w-full justify-start" size="lg" variant="outline">
                <FileText className="w-5 h-5 mr-3" />
                Generate Report
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Your latest farm management actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-smooth">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === 'completed' ? 'bg-success' : 'bg-warning'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* MRL Status Overview */}
        <Card className="mt-8 shadow-soft">
          <CardHeader>
            <CardTitle>MRL Status Overview</CardTitle>
            <CardDescription>Maximum Residue Limits monitoring for all animals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">92%</div>
                <p className="text-sm text-muted-foreground">Safe Animals</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning mb-2">6%</div>
                <p className="text-sm text-muted-foreground">Pending Tests</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-destructive mb-2">2%</div>
                <p className="text-sm text-muted-foreground">Requires Attention</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FarmerPortal;