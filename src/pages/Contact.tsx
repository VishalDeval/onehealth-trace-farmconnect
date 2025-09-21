import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Phone, MapPin, Send, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const socialLinks = [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/bitvengers",
      icon: "💼"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/bitvengers_sih",
      icon: "🐦"
    },
    {
      platform: "GitHub",
      url: "https://github.com/bitvengers",
      icon: "👩‍💻"
    }
  ];

  const faqItems = [
    {
      question: "How can I contribute to this project?",
      answer: "We welcome contributions! Check our GitHub repository for open issues and contribution guidelines."
    },
    {
      question: "Is this solution scalable for large farms?",
      answer: "Yes, our cloud infrastructure is designed to handle operations from small farms to large commercial enterprises."
    },
    {
      question: "What about data privacy and security?",
      answer: "We implement industry-standard encryption and comply with data protection regulations to ensure farmer and consumer data security."
    },
    {
      question: "Can this be integrated with existing farm management systems?",
      answer: "Absolutely! Our API-first approach allows seamless integration with existing agricultural software and IoT devices."
    }
  ];

  return (
    <div className="min-h-screen bg-accent/5">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about OneHealth Trace? Want to collaborate or provide feedback? 
            We'd love to hear from you!
          </p>
        </div>

        {/* Information Note */}
        <Card className="shadow-soft mb-12">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Project Information</h2>
            <p className="text-lg text-muted-foreground mb-6">
              For detailed project information, system architecture, technical approach, and comprehensive data visualizations, 
              please refer to our project presentation and data analysis files.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2">
                📊 View Data Visualizations
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                📋 Project Documentation
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;