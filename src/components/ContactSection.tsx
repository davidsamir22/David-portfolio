import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-10 ">
      <div className="container mx-auto max-w-6xl">
        <div className="bento-card max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-display gradient-text inline-block">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            I'm actively looking for a Software Engineering internship. Feel free to reach out!
          </p>

          <a
            href="mailto:davidsamir789@gmail.com"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-display font-medium transition-all duration-300 hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5 text-lg"
          >
            <Mail size={20} />
            Contact With Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
