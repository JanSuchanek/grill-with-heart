const Footer = () => (
  <footer className="bg-charcoal border-t border-charcoal-foreground/10 py-8">
    <div className="container max-w-6xl mx-auto px-4 text-center">
      <p className="font-display text-lg font-bold text-charcoal-foreground mb-2">
        Grilování <span className="text-amber">s láskou</span>
      </p>
      <p className="text-charcoal-foreground/50 text-sm font-light">
        © {new Date().getFullYear()} Grilování s láskou. Všechna práva vyhrazena.
      </p>
    </div>
  </footer>
);

export default Footer;
