import { useState } from "react";
import { Send, Mail, Linkedin, Twitter, Github, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/peremobowei-robert/",
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/PeremoboweiR",
    color: "hover:text-[#1DA1F2]",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Favour-Pere",
    color: "hover:text-foreground",
  },
  {
    name: "Medium",
    icon: ExternalLink,
    url: "https://medium.com/@peremoboweirobert",
    color: "hover:text-foreground",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const mailtoLink = `mailto:peremoboweirobert@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email app should open shortly.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative bg-card/30"
      aria-labelledby="contact-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
          >
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you're looking for a data analyst to help uncover insights, 
                a Flutter developer to build your next app, or just want to chat 
                about tech - I'm always open to new connections and opportunities.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Lagos, Nigeria (WAT)</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a 
                  href="mailto:peremoboweirobert@gmail.com" 
                  className="font-medium hover:text-primary transition-colors"
                >
                  peremoboweirobert@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="social"
                    size="icon"
                    asChild
                    className={social.color}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Connect on ${social.name}`}
                    >
                      <social.icon size={20} />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-accent border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-accent border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-accent border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-accent border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                This will open your default email client to send the message.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
