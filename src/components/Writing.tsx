import { ExternalLink, BookOpen, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    platform: "Medium",
    icon: BookOpen,
    title: "How I Automated My Data Analysis Workflow with Python",
    description: "A step-by-step guide on building efficient data pipelines that save hours of manual work.",
    url: "https://medium.com/@peremoboweirobert",
    date: "Coming Soon",
    readTime: "8 min read",
  },
  {
    platform: "Medium",
    icon: BookOpen,
    title: "Building Beautiful Charts in Flutter: A Comprehensive Guide",
    description: "From basic line charts to complex interactive dashboards in your Flutter apps.",
    url: "https://medium.com/@peremoboweirobert",
    date: "Coming Soon",
    readTime: "12 min read",
  },
  {
    platform: "Substack",
    icon: PenLine,
    title: "My Journey Learning Data Analytics in Public",
    description: "Weekly insights, lessons learned, and resources from my data analytics journey.",
    url: "#", // TODO: Add Substack URL
    date: "Coming Soon",
    readTime: "Newsletter",
  },
];

const Writing = () => {
  return (
    <section
      id="writing"
      className="py-20 md:py-32 relative bg-card/30"
      aria-labelledby="writing-heading"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="writing-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
          >
            Writing & <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and documenting my learning journey in public
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 flex flex-col animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Platform Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    article.platform === 'Medium' 
                      ? 'bg-foreground text-background' 
                      : 'bg-secondary/20 text-secondary'
                  }`}>
                    <article.icon size={18} />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {article.platform}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {article.readTime}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-heading font-semibold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                {article.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-xs text-muted-foreground">
                  {article.date}
                </span>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read ${article.title}`}
                  >
                    Read
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Platform Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="glass" size="lg" asChild>
            <a
              href="https://medium.com/@peremoboweirobert"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all articles on Medium"
            >
              <BookOpen size={20} className="mr-2" />
              Follow on Medium
              <ExternalLink size={16} className="ml-2 opacity-50" />
            </a>
          </Button>
          <Button variant="glass" size="lg" asChild>
            {/* TODO: Replace with actual Substack URL */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe on Substack"
            >
              <PenLine size={20} className="mr-2" />
              Subscribe on Substack
              <ExternalLink size={16} className="ml-2 opacity-50" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Writing;
