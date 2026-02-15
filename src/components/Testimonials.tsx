import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Petra & Martin Novákovi",
    event: "Svatba, 120 hostů",
    text: "Absolutně dokonalé! Hosté dodnes mluví o tom, jak skvělé jídlo na naší svatbě bylo. Tým byl profesionální, flexibilní a jídlo bylo prostě božské.",
    rating: 5,
  },
  {
    name: "Jan Dvořák",
    event: "Firemní teambuilding, 80 osob",
    text: "Už podruhé jsme si objednali catering od Grilování s láskou a opět nadšení. Kolegové byli z jídla i atmosféry u grilu naprosto nadšení. Příští rok znovu!",
    rating: 5,
  },
  {
    name: "Lenka Svobodová",
    event: "Rodinná oslava, 45 hostů",
    text: "Oslavili jsme máminy šedesátiny a díky skvělému grilování to byla ta nejlepší rodinná akce, jakou si pamatuji. Děkujeme za krásný den!",
    rating: 5,
  },
];

const Testimonials = () => (
  <section id="recenze" className="py-24 bg-secondary">
    <div className="container max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Reference</p>
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground uppercase tracking-tight">
          Co říkají <span className="text-primary">zákazníci</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-card rounded-xl p-8 shadow-lg relative"
          >
            <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-amber text-amber" />
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 font-light">
              "{t.text}"
            </p>
            <div>
              <p className="font-display font-bold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
