import { motion } from "framer-motion";
import weddingImg from "@/assets/wedding-grill.jpg";
import corporateImg from "@/assets/corporate-grill.jpg";
import familyImg from "@/assets/family-grill.jpg";
import { Heart, Briefcase, Users } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Svatební hostiny",
    description: "Elegantní grilování pro váš nejkrásnější den. Od steaků po dezerty – postaráme se o vše, abyste si mohli užít svůj den naplno.",
    image: weddingImg,
    alt: "Svatební grilování",
  },
  {
    icon: Briefcase,
    title: "Firemní akce",
    description: "Teambuildingy, firemní večírky a konference. Profesionální catering, který zanechá dojem na vaše kolegy i klienty.",
    image: corporateImg,
    alt: "Firemní grilování",
  },
  {
    icon: Users,
    title: "Rodinné oslavy",
    description: "Narozeniny, výročí nebo prostě jen sraz s rodinou. Připravíme jídlo, vy si užijte čas se svými blízkými.",
    image: familyImg,
    alt: "Rodinné grilování",
  },
];

const Services = () => (
  <section id="sluzby" className="py-24 bg-background">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Co nabízíme</p>
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground uppercase tracking-tight">
          Naše <span className="text-primary">služby</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
