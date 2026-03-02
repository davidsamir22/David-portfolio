import { Code, Database, GitBranch, Terminal } from "lucide-react";

const skills = [
  { category: "Languages", items: ["Java", "C", "Python", "JavaScript"], icon: Code },
  { category: "Web", items: ["HTML", "CSS", "React", "Responsive Design"], icon: Terminal },
  { category: "Tools", items: ["Git", "GitHub", "Cisco Packet Tracer", "JavaFX"], icon: GitBranch },
  { category: "Concepts", items: ["OOP", "SDLC", "Data Structures", "Networking"], icon: Database },
];

const SkillsSection = () => {
  return (
    <section className="py-10 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 gradient-text inline-block">
          Skills & Tools
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="bento-card"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <group.icon size={24} className="text-primary mb-4" />
              <h3 className="font-display font-semibold text-lg mb-3">{group.category}</h3>
              <ul className="space-y-1.5">
                {group.items.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
