import { 
  BarChart3, 
  Table2, 
  LineChart, 
  Smartphone, 
  Code2, 
  Database,
  GitBranch,
  BookOpen,
  Flame,
  PieChart
} from "lucide-react";

const skillCategories = [
  {
    title: "Data Analytics",
    color: "primary",
    skills: [
      { name: "Python", icon: Code2, level: "Advanced" },
      { name: "Excel (XLOOKUP, VLOOKUP)", icon: Table2, level: "Expert" },
      { name: "Advanced Logic & Formulas", icon: BarChart3, level: "Expert" },
      { name: "Statistical Analysis", icon: PieChart, level: "Intermediate" },
    ],
  },
  {
    title: "Data Visualization",
    color: "secondary",
    skills: [
      { name: "Power BI Dashboards", icon: BarChart3, level: "Advanced" },
      { name: "Matplotlib", icon: LineChart, level: "Intermediate" },
      { name: "Conditional Formatting", icon: Table2, level: "Expert" },
      { name: "Data Storytelling", icon: BookOpen, level: "Advanced" },
    ],
  },
  {
    title: "Mobile Development",
    color: "primary",
    skills: [
      { name: "Flutter", icon: Smartphone, level: "Advanced" },
      { name: "Dart", icon: Code2, level: "Advanced" },
      { name: "Firebase", icon: Flame, level: "Intermediate" },
      { name: "REST APIs", icon: Database, level: "Intermediate" },
    ],
  },
  {
    title: "Workflow & Tools",
    color: "secondary",
    skills: [
      { name: "Git", icon: GitBranch, level: "Advanced" },
      { name: "GitHub", icon: GitBranch, level: "Advanced" },
      { name: "Learning in Public", icon: BookOpen, level: "Expert" },
      { name: "Technical Writing", icon: BookOpen, level: "Advanced" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 relative bg-card/30"
      aria-labelledby="skills-heading"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
          >
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis and mobile development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card p-6 lg:p-8 group hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full ${category.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
                <h3 className="text-xl lg:text-2xl font-heading font-semibold">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors group/skill"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        category.color === 'primary' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-secondary/10 text-secondary'
                      } group-hover/skill:scale-110 transition-transform`}>
                        <skill.icon size={20} />
                      </div>
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      skill.level === 'Expert' 
                        ? 'bg-primary/20 text-primary' 
                        : skill.level === 'Advanced'
                        ? 'bg-secondary/20 text-secondary'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "10+", label: "Dashboards Built" },
            { value: "5+", label: "Mobile Apps" },
            { value: "20+", label: "Data Projects" },
            { value: "50+", label: "Articles Written" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card/50 border border-border/50"
            >
              <p className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
