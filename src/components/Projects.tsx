import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    id: 1,
    title: "Sales Analytics Dashboard",
    description: "Interactive Power BI dashboard tracking sales performance across regions with real-time data updates and drill-down capabilities.",
    tags: ["Power BI", "DAX", "SQL", "Data Modeling"],
    image: "/placeholder.svg",
    liveUrl: "#", // TODO: Add live URL
    githubUrl: "#", // TODO: Add GitHub URL
    featured: false,
  },
  {
    id: 2,
    title: "Finance Tracker App",
    description: "Flutter mobile app for personal finance management with beautiful charts, expense categorization, and budget tracking.",
    tags: ["Flutter", "Dart", "Firebase", "Charts"],
    image: "/placeholder.svg",
    liveUrl: "#", // TODO: Add live URL
    githubUrl: "#", // TODO: Add GitHub URL
    featured: false,
  },
  {
    id: 3,
    title: "Customer Churn Analysis",
    description: "Python-based analysis pipeline predicting customer churn with machine learning models and automated reporting.",
    tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    image: "/placeholder.svg",
    liveUrl: "#", // TODO: Add live URL
    githubUrl: "#", // TODO: Add GitHub URL
    featured: false,
  },
];

const caseStudy = {
  title: "E-Commerce Analytics Platform",
  subtitle: "A comprehensive data solution for online retail",
  problem: "The client struggled with fragmented data across multiple platforms, making it difficult to understand customer behavior and optimize inventory management.",
  process: "Conducted stakeholder interviews to understand pain points, designed a unified data model, built ETL pipelines in Python, and created interactive Power BI dashboards.",
  tools: ["Python", "Power BI", "SQL Server", "Azure Data Factory", "Excel"],
  outcome: "Reduced reporting time by 70%, identified $50K in inventory optimization opportunities, and improved customer retention by 15% through targeted insights.",
  screenshots: ["/placeholder.svg", "/placeholder.svg"], // TODO: Add actual screenshots
  metrics: [
    { value: "70%", label: "Faster Reporting" },
    { value: "$50K", label: "Cost Savings" },
    { value: "15%", label: "Retention Increase" },
  ],
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 relative"
      aria-labelledby="projects-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of work showcasing my skills in data analytics and mobile development
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-accent">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-accent text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                      Code
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={18} />
                      Live
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Case Study Section */}
        <div className="glass-card p-8 lg:p-12 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Case Study Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm font-medium text-primary">Featured Case Study</span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-2">
              {caseStudy.title}
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              {caseStudy.subtitle}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {caseStudy.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="text-center p-4 rounded-xl bg-accent/50"
                >
                  <p className="text-2xl md:text-3xl font-heading font-bold text-gradient">
                    {metric.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Case Study Content */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-heading font-semibold mb-3">
                    <ChevronRight className="text-primary" size={20} />
                    The Problem
                  </h4>
                  <p className="text-muted-foreground pl-7">
                    {caseStudy.problem}
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-lg font-heading font-semibold mb-3">
                    <ChevronRight className="text-primary" size={20} />
                    The Process
                  </h4>
                  <p className="text-muted-foreground pl-7">
                    {caseStudy.process}
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-lg font-heading font-semibold mb-3">
                    <ChevronRight className="text-primary" size={20} />
                    The Outcome
                  </h4>
                  <p className="text-muted-foreground pl-7">
                    {caseStudy.outcome}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-lg font-heading font-semibold mb-4">
                  <ChevronRight className="text-primary" size={20} />
                  Tools Used
                </h4>
                <div className="flex flex-wrap gap-2 pl-7 mb-6">
                  {caseStudy.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-lg bg-accent text-sm font-medium text-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Screenshots Placeholder */}
                <div className="grid grid-cols-2 gap-4 pl-7">
                  {caseStudy.screenshots.map((src, index) => (
                    <div
                      key={index}
                      className="aspect-video rounded-lg bg-accent overflow-hidden border border-border/50"
                    >
                      <img
                        src={src}
                        alt={`Case study screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  Discuss Your Project
                  <ChevronRight size={18} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
