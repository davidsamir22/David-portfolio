import { MapPin, Download } from "lucide-react";
import profileImg from "@/assets/david-profile.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center py-10 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image with blob */}
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blob-animation blur-2xl" />
            <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full border-4 border-primary/30 overflow-hidden shadow-[0_0_40px_-10px_hsl(var(--primary)/0.3)]">
              <img
                src={profileImg}
                alt="David Salama"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="flex items-center gap-2 justify-center lg:justify-start text-muted-foreground">
              <MapPin size={16} />
              <span className="text-sm font-body">Alexandria, Egypt</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">David Salama</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Computer Science student specializing in Software Engineering, seeking an internship to apply my skills in real-world projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="/DAVID-SAMIR-CV.pdf"
                download
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display font-medium transition-all duration-300 hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5"
              >
                <Download size={18} />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-display font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
