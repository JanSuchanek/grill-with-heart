import { motion } from "framer-motion";
import heroImage from "@/assets/hero-grill.jpg";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Grilování na zahradní párty" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
    </div>
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-amber font-body text-lg tracking-[0.3em] uppercase mb-4"
      >
        Catering & Grilování
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-charcoal-foreground leading-tight mb-6"
      >
        Grilování{" "}
        <span className="italic text-amber">s láskou</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-charcoal-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
      >
        Profesionální grilování pro svatby, firemní akce a rodinné oslavy. 
        Vytváříme nezapomenutelné chuťové zážitky s vášní a precizností.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button variant="hero" size="lg" asChild>
          <a href="#kontakt">Nezávazná poptávka</a>
        </Button>
        <Button variant="heroOutline" size="lg" asChild>
          <a href="#sluzby">Naše služby</a>
        </Button>
      </motion.div>
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-6 h-10 border-2 border-charcoal-foreground/40 rounded-full flex justify-center pt-2">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-1.5 bg-amber rounded-full"
        />
      </div>
    </motion.div>
  </section>
);

export default Hero;
