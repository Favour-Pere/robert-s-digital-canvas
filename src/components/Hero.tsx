import { ArrowDown, Download, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float animation-delay-200" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="section-container relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-border/50 mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 animate-fade-up animation-delay-100"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Robert Wilson</span>
            <br />
            <span className="text-foreground">Peremobowei</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up animation-delay-200">
            <span className="text-primary font-semibold">Data Analyst</span>
            {" "}&{" "}
            <span className="text-secondary font-semibold">Flutter Mobile Developer</span>
          </p>

          {/* Bio */}
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-8 animate-fade-up animation-delay-300">
            Turning raw data into actionable insights and crafting intuitive mobile experiences. 
            I believe in consistency over intensity and learning in public.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up animation-delay-400">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToProjects}
              className="group"
            >
              <FolderOpen className="mr-2 group-hover:rotate-6 transition-transform" />
              View Projects
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              asChild
            >
              {/* TODO: Replace with actual CV link */}
              <a href="#" aria-label="Download Resume (Coming Soon)">
                <Download className="mr-2" />
                Download CV
              </a>
            </Button>
          </div>

          {/* 2026 Mantra */}
          <div className="inline-block px-6 py-3 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm animate-fade-up animation-delay-400">
            <p className="text-sm text-muted-foreground">
              2026 Mantra:{" "}
              <span className="text-foreground font-semibold italic">
                "Consistency over Intensity"
              </span>
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="p-2 rounded-full bg-accent/50 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
