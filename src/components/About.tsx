import { motion } from "framer-motion";
import { Flame, Clock, Award, Leaf } from "lucide-react";

const features = [
  { icon: Flame, title: "Živý oheň", desc: "Grilujeme na dřevěném uhlí pro autentickou chuť" },
  { icon: Clock, title: "15+ let zkušeností", desc: "Stovky spokojených zákazníků po celé ČR" },
  { icon: Award, title: "Prémiové suroviny", desc: "Pouze kvalitní maso od lokálních dodavatelů" },
  { icon: Leaf, title: "I pro vegany", desc: "Nabízíme i vegetariánské a veganské alternativy" },
];

const About = () => (
  <section id="o-nas" className="py-24 bg-charcoal text-charcoal-foreground">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-amber font-body text-sm tracking-[0.3em] uppercase mb-3">O nás</p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 uppercase tracking-tight">
            Vášeň pro <span className="text-amber">grilování</span>
          </h2>
          <p className="text-charcoal-foreground/80 leading-relaxed mb-6 font-light text-lg">
            Jsme tým nadšených grilmasterů, kteří věří, že skvělé jídlo spojuje lidi.
            Každá akce je pro nás příležitost vytvořit něco výjimečného – od šťavnatých 
            steaků přes marinovaná žebírka až po křupavou zeleninu z grilu.
          </p>
          <p className="text-charcoal-foreground/80 leading-relaxed font-light text-lg">
            Ať už plánujete intimní rodinnou oslavu nebo velkolepou firemní akci pro stovky 
            hostů, přizpůsobíme se vašim představám a rozpočtu. Protože grilování s láskou 
            chutná prostě jinak.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 gap-5"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-charcoal-foreground/5 border border-charcoal-foreground/10 rounded-lg p-5 text-center"
            >
              <f.icon className="w-8 h-8 text-amber mx-auto mb-3" />
              <h3 className="font-display font-semibold text-sm mb-1">{f.title}</h3>
              <p className="text-charcoal-foreground/60 text-xs font-light">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
