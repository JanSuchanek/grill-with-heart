import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <section id="kontakt" className="py-24 bg-background">
    <div className="container max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Kontaktujte nás</p>
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-4 uppercase tracking-tight">
          Poptejte nás na vaši <span className="text-primary">akci</span>
        </h2>
        <p className="text-muted-foreground text-lg font-light max-w-xl mx-auto">
          Cenovou nabídku vám vždy vyladíme na míru. Odpovíme vám do 24 hodin.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-card rounded-xl shadow-xl p-8 md:p-12"
      >
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Jméno a příjmení</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all font-body"
                placeholder="Jan Novák"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">E-mail</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all font-body"
                placeholder="jan@email.cz"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Telefon</label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all font-body"
                placeholder="+420 xxx xxx xxx"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Typ akce</label>
              <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all font-body">
                <option value="">Vyberte typ akce</option>
                <option value="wedding">Svatba</option>
                <option value="corporate">Firemní akce</option>
                <option value="family">Rodinná oslava</option>
                <option value="other">Jiná akce</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Zpráva</label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all font-body resize-none"
              placeholder="Popište nám vaši představu – počet hostů, datum, místo konání..."
            />
          </div>
          <Button variant="hero" size="lg" className="w-full">
            Odeslat nezávaznou poptávku
          </Button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 flex flex-col md:flex-row justify-center gap-8 text-center"
      >
        <a href="tel:+420123456789" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors justify-center">
          <Phone className="w-5 h-5" />
          <span>+420 123 456 789</span>
        </a>
        <a href="mailto:info@grilovaniславske.cz" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors justify-center">
          <Mail className="w-5 h-5" />
          <span>info@grilovanislaskou.cz</span>
        </a>
        <span className="flex items-center gap-3 text-muted-foreground justify-center">
          <MapPin className="w-5 h-5" />
          <span>Po celé České republice</span>
        </span>
      </motion.div>
    </div>
  </section>
);

export default Contact;
