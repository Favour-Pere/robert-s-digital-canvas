import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const GitHubStats = () => {
  const username = "Favour-Pere";
  
  const statsCards = [
    {
      title: "GitHub Stats",
      url: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0B1220&title_color=22C55E&icon_color=60A5FA&text_color=E5E7EB`,
      alt: "Robert's GitHub Stats",
    },
    {
      title: "Top Languages",
      url: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0B1220&title_color=22C55E&text_color=E5E7EB`,
      alt: "Most Used Languages",
    },
    {
      title: "GitHub Streak",
      url: `https://nirzak-streak-stats.vercel.app/?user=${username}&theme=tokyonight&hide_border=true&background=0B1220&ring=22C55E&fire=22C55E&currStreakLabel=E5E7EB`,
      alt: "GitHub Streak Stats",
    },
  ];

  return (
    <section
      id="github"
      className="py-20 md:py-32 relative"
      aria-labelledby="github-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="github-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
          >
            GitHub <span className="text-gradient">Activity</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A snapshot of my open source contributions and coding activity
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {statsCards.map((card, index) => (
            <div
              key={card.title}
              className="glass-card p-4 overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={card.url}
                alt={card.alt}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Profile Details Card */}
        <div className="glass-card p-4 mb-8 overflow-hidden">
          <img
            src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=tokyonight`}
            alt="GitHub Profile Details"
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View full GitHub profile"
            >
              View Full Profile
              <ExternalLink size={18} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
