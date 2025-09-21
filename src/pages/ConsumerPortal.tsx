import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { QrCode, Scan, MapPin, Shield, Award, Search, CheckCircle } from "lucide-react";

const ConsumerPortal = () => {
  const [scannedProduct, setScannedProduct] = useState(null);
  const [searchCity, setSearchCity] = useState("");

  const mockSafeDairies = [
    { name: "Pure Milk Dairy", location: "Mumbai", rating: 4.8, certification: "MRL Safe" },
    { name: "Farm Fresh Co.", location: "Delhi", rating: 4.9, certification: "MRL Safe" },
    { name: "Organic Valley", location: "Bangalore", rating: 4.7, certification: "MRL Safe" },
    { name: "Green Pastures", location: "Pune", rating: 4.6, certification: "MRL Safe" },
  ];

  const mockProductData = {
    productId: "MLK001234",
    productType: "Fresh Milk",
    farmName: "Sunshine Dairy Farm",
    farmerName: "Rajesh Kumar",
    location: "Punjab, India",
    mrlStatus: "Safe",
    testDate: "2024-01-15",
    certifications: ["Organic", "MRL Compliant", "FSSAI Approved"],
  };

  const handleQRScan = () => {
    // Mock QR scan result
    setScannedProduct(mockProductData);
  };

  const educationalContent = [
    {
      title: "What is MRL?",
      content: "Maximum Residue Limits (MRL) are the highest levels of pesticide residues legally permitted in food.",
      icon: Shield,
    },
    {
      title: "Why AMU Matters",
      content: "Antimicrobial Usage monitoring prevents antibiotic resistance and ensures safer food products.",
      icon: Award,
    },
    {
      title: "QR Code Benefits",
      content: "QR codes provide instant access to complete product traceability and safety information.",
      icon: QrCode,
    },
  ];

  return (
    <div className="min-h-screen bg-accent/5">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Consumer Portal</h1>
          <p className="text-muted-foreground">Verify product safety and find MRL-safe dairy products</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* QR Code Scanner */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scan className="w-5 h-5" />
                Product Verification
              </CardTitle>
              <CardDescription>Scan QR codes to verify product safety</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-lg">
                <QrCode className="w-16 h-16 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center mb-4">
                  Point your camera at the QR code on the product
                </p>
                <Button onClick={handleQRScan} className="gap-2">
                  <Scan className="w-4 h-4" />
                  Start Scanning
                </Button>
              </div>

              {scannedProduct && (
                <Card className="mt-4 border-success border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-success">
                      <CheckCircle className="w-5 h-5" />
                      Product Verified
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium">Product:</p>
                        <p className="text-muted-foreground">{scannedProduct.productType}</p>
                      </div>
                      <div>
                        <p className="font-medium">Farm:</p>
                        <p className="text-muted-foreground">{scannedProduct.farmName}</p>
                      </div>
                      <div>
                        <p className="font-medium">Location:</p>
                        <p className="text-muted-foreground">{scannedProduct.location}</p>
                      </div>
                      <div>
                        <p className="font-medium">Test Date:</p>
                        <p className="text-muted-foreground">{scannedProduct.testDate}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {scannedProduct.certifications.map((cert, index) => (
                        <Badge key={index} className="bg-success text-white">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>

          {/* MRL-Safe Dairies */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                MRL-Safe Dairies
              </CardTitle>
              <CardDescription>Find certified safe dairy products in your city</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your city"
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                />
                <Button variant="outline">
                  <Search className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-3">
                {mockSafeDairies.map((dairy, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-accent/50 transition-smooth">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{dairy.name}</h4>
                      <Badge className="bg-success text-white">{dairy.certification}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">📍 {dairy.location}</p>
                    <div className="flex items-center gap-1">
                      <span className="text-sm">⭐ {dairy.rating}</span>
                      <span className="text-sm text-muted-foreground">rating</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Educational Section */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Why AMU & MRL Matter for Your Health</CardTitle>
            <CardDescription>Understanding food safety and quality standards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {educationalContent.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConsumerPortal;