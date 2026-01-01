import { Target, BookOpen, Lightbulb, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Data-Driven",
    description: "Transform complex datasets into clear, actionable business insights",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Approach challenges with analytical thinking and creative solutions",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learner",
    description: "Constantly expanding skills in data analytics and mobile development",
  },
  {
    icon: BookOpen,
    title: "Learning in Public",
    description: "Documenting my journey to help others on similar paths",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32 relative"
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
          >
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into who I am and what drives me
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm <span className="text-primary font-semibold">Robert Wilson Peremobowei</span>, 
              also known as Robert-Wilson Peremobowei Favour. I'm a data-driven builder passionate 
              about turning raw data into insights and building intuitive mobile experiences with Flutter.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My journey blends the analytical world of data with the creative realm of mobile app 
              development. I leverage tools like Python, Excel, and Power BI to uncover patterns 
              and build dashboards that tell compelling stories, while crafting beautiful Flutter 
              apps that bring data to life.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I value consistency and continuous learning, and I document my journey publicly to 
              help others. Based in Lagos, Nigeria, I'm always exploring new ways to combine my 
              skills to create impactful solutions.
            </p>

            {/* Mantra Highlight */}
            <div className="mt-8 p-6 rounded-2xl bg-card-gradient border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary" />
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                2026 Mantra
              </p>
              <blockquote className="text-2xl md:text-3xl font-heading font-bold text-gradient italic">
                "Consistency over Intensity"
              </blockquote>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="skill-icon mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What I'm Working On */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">
            What I'm Working On in <span className="text-primary">2026</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">Data Mastery</h4>
              <p className="text-sm text-muted-foreground">
                Automating analysis workflows with Python; advanced Excel/financial models; 
                Power BI dashboards
              </p>
            </div>
            
            <div className="glass-card p-6 hover:border-secondary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">Mobile Innovation</h4>
              <p className="text-sm text-muted-foreground">
                Flutter apps that visualize real-time analytics for users with beautiful, 
                intuitive interfaces
              </p>
            </div>
            
            <div className="glass-card p-6 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">✍️</span>
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">Writing</h4>
              <p className="text-sm text-muted-foreground">
                Documenting my journey on Medium and Substack, sharing insights and lessons 
                learned along the way
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
