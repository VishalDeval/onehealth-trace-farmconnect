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

  const contactInfo = [
    {
      icon: Mail,
      title: "Project Email",
      value: "bitvengers.sih2025@gmail.com",
      link: "mailto:bitvengers.sih2025@gmail.com"
    },
    {
      icon: Github,
      title: "GitHub Repository",
      value: "github.com/bitvengers/onehealth-trace",
      link: "https://github.com/bitvengers/onehealth-trace"
    },
    {
      icon: MapPin,
      title: "Team Location",
      value: "Mumbai, Maharashtra, India",
      link: null
    },
    {
      icon: Phone,
      title: "Project Lead",
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    }
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-smooth">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{contact.title}</p>
                      {contact.link ? (
                        <a 
                          href={contact.link}
                          className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{contact.value}</p>
                      )}
                    </div>
                    {contact.link && (
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Follow Our Journey</CardTitle>
                <CardDescription>Stay updated with our latest developments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button key={index} variant="outline" size="lg" asChild>
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <span className="mr-2">{social.icon}</span>
                        {social.platform}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* GitHub Repository Highlight */}
            <Card className="shadow-soft border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Github className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-bold">Open Source Project</h3>
                    <p className="text-sm text-muted-foreground">Check out our code on GitHub</p>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <a href="https://github.com/bitvengers/onehealth-trace" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Repository
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

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