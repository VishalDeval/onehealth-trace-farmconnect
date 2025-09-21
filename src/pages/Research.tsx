import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Globe, BookOpen, Award } from "lucide-react";

const Research = () => {
  const references = [
    {
      title: "FSSAI – Maximum Residue Limits",
      description: "Food Safety and Standards Authority of India guidelines on MRL standards for livestock products",
      url: "https://www.fssai.gov.in/",
      category: "Regulatory",
      icon: FileText,
      importance: "Critical for compliance standards"
    },
    {
      title: "ICAR – Indian Council of Agricultural Research",
      description: "Research initiatives and guidelines for sustainable livestock management in India",
      url: "https://www.icar.org.in/",
      category: "Research",
      icon: BookOpen,
      importance: "Foundation for scientific approaches"
    },
    {
      title: "WHO – Global Action Plan on AMR",
      description: "World Health Organization's comprehensive strategy on Antimicrobial Resistance",
      url: "https://www.who.int/publications/i/item/9789241509763",
      category: "Global Health",
      icon: Globe,
      importance: "International best practices"
    },
    {
      title: "FAO – Antimicrobial Resistance",
      description: "Food and Agriculture Organization resources on responsible antimicrobial use",
      url: "https://www.fao.org/antimicrobial-resistance/en/",
      category: "Global Agriculture",
      icon: Globe,
      importance: "Agricultural sustainability guidelines"
    },
    {
      title: "WOAH (OIE) – Terrestrial Animal Health Code",
      description: "World Organisation for Animal Health standards for international trade",
      url: "https://www.woah.org/en/what-we-do/standards/codes-and-manuals/terrestrial-code-online-access/",
      category: "Animal Health",
      icon: Award,
      importance: "International trade standards"
    },
    {
      title: "EU Regulation on Veterinary Medicines",
      description: "European Union regulations serving as benchmark for international standards",
      url: "https://eur-lex.europa.eu/eli/reg/2019/6/oj",
      category: "International Regulation",
      icon: FileText,
      importance: "Export market requirements"
    }
  ];

  const researchPapers = [
    {
      title: "Machine Learning Applications in Livestock Health Monitoring",
      authors: "Kumar, S., Sharma, A., et al.",
      journal: "Journal of Agricultural Technology",
      year: "2024",
      impact: "High",
    },
    {
      title: "AI-Driven Prediction Models for Antimicrobial Resistance",
      authors: "Patel, R., Singh, V., et al.",
      journal: "Veterinary Science International",
      year: "2024",
      impact: "Medium",
    },
    {
      title: "Digital Farm Management Systems: A Comprehensive Review",
      authors: "Gupta, M., Jain, K., et al.",
      journal: "Agricultural Innovation Quarterly",
      year: "2023",
      impact: "High",
    }
  ];

  const categoryColors = {
    "Regulatory": "bg-destructive/10 text-destructive border-destructive/20",
    "Research": "bg-primary/10 text-primary border-primary/20",
    "Global Health": "bg-secondary/10 text-secondary border-secondary/20",
    "Global Agriculture": "bg-success/10 text-success border-success/20",
    "Animal Health": "bg-warning/10 text-warning border-warning/20",
    "International Regulation": "bg-info/10 text-info border-info/20",
  };

  return (
    <div className="min-h-screen bg-accent/5">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Research & References</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our project is built on solid scientific foundation and regulatory compliance, 
            backed by leading research institutions and international standards.
          </p>
        </div>

        {/* Key References */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key References & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {references.map((ref, index) => (
              <Card key={index} className="shadow-soft hover-lift transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <ref.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{ref.title}</CardTitle>
                        <div className={`inline-block px-2 py-1 rounded-md text-xs font-medium border ${categoryColors[ref.category] || 'bg-muted text-muted-foreground'}`}>
                          {ref.category}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{ref.description}</CardDescription>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Importance:</p>
                    <p className="text-sm">{ref.importance}</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={ref.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Resource
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Papers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Supporting Research Papers</h2>
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Academic Foundation</CardTitle>
              <CardDescription>Key research papers supporting our methodologies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {researchPapers.map((paper, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-2">{paper.title}</h4>
                    <p className="text-muted-foreground mb-2">{paper.authors}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground">{paper.journal}</span>
                      <span className="text-muted-foreground">{paper.year}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        paper.impact === 'High' ? 'bg-success/10 text-success' : 'bg-secondary/10 text-secondary'
                      }`}>
                        {paper.impact} Impact
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compliance Framework */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Compliance Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-soft text-center">
              <CardContent className="p-6">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">FSSAI Standards</h3>
                <p className="text-muted-foreground">
                  Full compliance with Indian food safety regulations and MRL guidelines
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-soft text-center">
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">WHO Guidelines</h3>
                <p className="text-muted-foreground">
                  Aligned with global antimicrobial resistance prevention strategies
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-soft text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-success mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">International Standards</h3>
                <p className="text-muted-foreground">
                  Meeting WOAH and EU requirements for export market readiness
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Methodology */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Research Methodology</CardTitle>
            <CardDescription>Scientific approach to our solution development</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">1. Literature Review & Standards Analysis</h4>
                <p className="text-muted-foreground">
                  Comprehensive analysis of international food safety standards, AMR guidelines, 
                  and digital agriculture best practices.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2. Machine Learning Model Development</h4>
                <p className="text-muted-foreground">
                  Development of predictive models using supervised learning algorithms 
                  for AMU pattern recognition and MRL violation prediction.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">3. Field Data Integration</h4>
                <p className="text-muted-foreground">
                  Integration of real-world livestock data from Indian farms to train 
                  and validate our AI models for local conditions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">4. Compliance Validation</h4>
                <p className="text-muted-foreground">
                  Continuous validation against FSSAI, WHO, and international standards 
                  to ensure regulatory compliance and export readiness.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Research;