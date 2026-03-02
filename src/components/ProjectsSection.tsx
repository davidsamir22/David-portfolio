import { Globe, BookOpen, MessageSquare, Network, Car, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "DA Motor",
    description: "A responsive UI for browsing and listing cars, built with HTML, CSS, and JavaScript with a focus on clean design and usability.",
    tags: ["Web App", "UI/UX"],
    icon: Car,
    link: "https://davidsamir22.github.io/DA_MOTORS/",
  },
  {
    title: "Library Management System",
    description: "A Java-based application leveraging OOP principles to manage books, users, and borrowing operations efficiently.",
    tags: ["Java", "OOP"],
    icon: BookOpen,
    link: "#",
  },
  {
    title: "JavaFX Chat Application",
    description: "A real-time messaging app using JavaFX, sockets, and multithreading for seamless client-server communication.",
    tags: ["JavaFX", "Sockets", "Multithreading"],
    icon: MessageSquare,
    link: "#",
  },
  {
    title: "Network Design",
    description: "Configured and simulated enterprise network topologies using Cisco Packet Tracer with routing and switching protocols.",
    tags: ["Cisco", "Networking"],
    icon: Network,
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 gradient-text inline-block">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div key={project.title} className="bento-card group">
              <div className="flex flex-col items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <project.icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors shrink-0 ml-3"
                    >
                      Open Project
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;