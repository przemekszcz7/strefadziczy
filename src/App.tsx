import { useState } from 'react';

export default function App() {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for gallery lightbox preview
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  // Gallery items with descriptions for the premium hover cards
  const galleryItems = [
    {
      url: 'https://i.ibb.co/LzRv9dQn/683456093-122095074375301889-4289049445325563557-n.jpg',
      title: 'Leśny Staw i Pomost',
      desc: 'Krystaliczna woda i cisza przerywana jedynie śpiewem ptaków.',
    },
    {
      url: 'https://i.ibb.co/TDgwtfb1/684532910-122095091559301889-1924434766142943071-n.jpg',
      title: 'Wieczorny Blask Ogniska',
      desc: 'Magiczne chwile spędzone na rozmowach pod gwieździstym niebem.',
    },
    {
      url: 'https://i.ibb.co/90njr4s/687029796-122097655059301889-3832159151840500205-n.jpg',
      title: 'Strefa Relaksu i Biesiady',
      desc: 'Drewniane ławy i altany przygotowane na biesiady w gronie przyjaciół.',
    },
    {
      url: 'https://i.ibb.co/whkq2W9m/691022903-122099420121301889-6028447467472361859-n.jpg',
      title: 'Luksus Off-Grid',
      desc: 'Dzika natura spotyka komfort nowoczesnego wypoczynku w lesie.',
    },
  ];

  // Co oferujemy - 11 items
  const offers = [
    { icon: 'fa-fire', title: 'Ognisko', desc: 'Profesjonalne palenisko z zapasem drewna liściastego i klimatycznym oświetleniem.' },
    { icon: 'fa-drumstick-bite', title: 'Grill', desc: 'Duży, stabilny grill gotowy na kulinarne biesiady pod chmurką.' },
    { icon: 'fa-tent', title: 'Pole namiotowe', desc: 'Miękka leśna trawa i pełne odcięcie od cywilizacyjnego zgiełku.' },
    { icon: 'fa-droplet', title: 'Kąpiele w stawie', desc: 'Orzeźwiająca i czysta woda, idealna na ochłodę w upalne letnie dni.' },
    { icon: 'fa-sun', title: 'Opalanie', desc: 'Słoneczne polany i wygodne leżaki do łapania naturalnej witaminy D.' },
    { icon: 'fa-caravan', title: 'Kemping', desc: 'Bezpieczne, przygotowane miejsca dla pasjonatów podróży domami na kółkach.' },
    { icon: 'fa-compass', title: 'Biwakowanie', desc: 'Autentyczny survival w bezpiecznym, kontrolowanym i luksusowym wydaniu.' },
    { icon: 'fa-champagne-glasses', title: 'Wynajem placu', desc: 'Prywatna przestrzeń na urodziny, wieczory kawalerskie/panieńskie i integracje.' },
    { icon: 'fa-leaf', title: 'Duża powierzchnia', desc: 'Rozległy teren zapewniający pełną swobodę ruchu i intymność każdej grupy.' },
    { icon: 'fa-tower-observation', title: 'Miejsce Off-grid', desc: 'Prawdziwy odpoczynek bez miejskiego smogu, hałasu i powiadomień w telefonie.' },
    { icon: 'fa-user-slash', title: 'Brak sąsiadów', desc: 'Gwarancja stuprocentowej prywatności. Hałasujesz i odpoczywasz bez skarg i limitów.' },
  ];

  // Dlaczego warto - 8 items
  const advantages = [
    { icon: 'fa-user-shield', title: 'Cisza i prywatność', desc: 'Otoczenie lasów odcina Cię całkowicie od spojrzeń i zgiełku innych ludzi.' },
    { icon: 'fa-tree', title: 'Bliskość natury', desc: 'Leśne powietrze, szum drzew i naturalne jezioro tuż na wyciągnięcie ręki.' },
    { icon: 'fa-maximize', title: 'Duża przestrzeń', desc: 'Teren zaprojektowany tak, aby każdy znalazł swój idealny kąt do wypoczynku.' },
    { icon: 'fa-mug-hot', title: 'Kameralna atmosfera', desc: 'Subtelne oświetlenie girland i surowe drewno tworzą niezwykły, przytulny klimat.' },
    { icon: 'fa-music', title: 'Idealne na imprezy', desc: 'Brak ograniczeń ciszy nocnej pozwala bawić się ze znajomymi do białego rana.' },
    { icon: 'fa-star', title: 'Ognisko pod gwiazdami', desc: 'Niezanieczyszczone światłem miejskim niebo ukazuje pełny pas Drogi Mlecznej.' },
    { icon: 'fa-shield-halved', title: 'Bezpieczny teren', desc: 'Ogrodzona i odpowiednio przygotowana strefa dająca pełen komfort psychiczny.' },
    { icon: 'fa-users-slash', title: 'Wypoczynek bez tłumów', desc: 'Tylko Ty i Twoi goście. Cała Strefa Dziczy jest na ten czas wyłącznie Wasza.' },
  ];

  // Idealne miejsce na - 8 items
  const occasions = [
    { icon: 'fa-people-roof', title: 'Spotkania rodzinne', desc: 'Wielopokoleniowe zjazdy w otoczeniu, które łączy i relaksuje.' },
    { icon: 'fa-fire-burner', title: 'Wieczory przy ognisku', desc: 'Długie Polaków rozmowy, gitara, śpiew i zapach palonego drewna.' },
    { icon: 'fa-music', title: 'Imprezy plenerowe', desc: 'Urodziny, rocznice, jubileusze zorganizowane w niezapomnianym stylu.' },
    { icon: 'fa-handshake-angle', title: 'Integracje', desc: 'Firmowe wyjazdy budujące prawdziwe zespołowe więzi poza biurem.' },
    { icon: 'fa-couch', title: 'Weekendowy odpoczynek', desc: 'Szybki reset baterii po ciężkim tygodniu w pracy.' },
    { icon: 'fa-campground', title: 'Biwak', desc: 'Noc pod namiotem ze wszystkimi atutami czystej przyrody.' },
    { icon: 'fa-utensils', title: 'Grill z przyjaciółmi', desc: 'Sobotnia biesiada ze świetnym jedzeniem i zimnymi napojami.' },
    { icon: 'fa-route', title: 'Wypad poza miasto', desc: 'Krótka ucieczka na łono natury, zaledwie chwilę drogi od cywilizacji.' },
  ];

  return (
    <div className="min-h-screen bg-[#f6f2ea] text-[#1f3325] antialiased selection:bg-[#ff8c42] selection:text-white overflow-x-hidden font-sans">
      
      {/* Dynamic Floating Navigation Bar */}
      <nav id="nav-bar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1f3325]/90 backdrop-blur-md border-b border-[#8b5e3c]/20 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo and Brand Name */}
            <a href="#hero" id="nav-logo-link" className="flex items-center space-x-3 group">
              <img 
                src="https://i.ibb.co/M5gSRNwT/683637005-122094476319301889-8174671146559426624-n.jpg" 
                alt="Strefa Dziczy Logo" 
                className="w-12 h-12 rounded-full border-2 border-[#8b5e3c] object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl sm:text-2xl text-[#f6f2ea] leading-none tracking-tight">
                  Strefa Dziczy
                </span>
                <span className="text-xs text-[#ff8c42] uppercase tracking-widest font-semibold mt-0.5">
                  Grill & Ognisko
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#o-miejscu" className="text-[#f6f2ea]/90 hover:text-[#ff8c42] transition-colors font-medium text-sm tracking-wide link-underline">O miejscu</a>
              <a href="#co-oferujemy" className="text-[#f6f2ea]/90 hover:text-[#ff8c42] transition-colors font-medium text-sm tracking-wide link-underline">Oferta</a>
              <a href="#dlaczego-warto" className="text-[#f6f2ea]/90 hover:text-[#ff8c42] transition-colors font-medium text-sm tracking-wide link-underline">Dlaczego my</a>
              <a href="#galeria" className="text-[#f6f2ea]/90 hover:text-[#ff8c42] transition-colors font-medium text-sm tracking-wide link-underline">Galeria</a>
              <a href="#kontakt" className="text-[#f6f2ea]/90 hover:text-[#ff8c42] transition-colors font-medium text-sm tracking-wide link-underline">Kontakt</a>
            </div>

            {/* Quick Call Button Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="tel:660964056" 
                id="nav-call-btn"
                className="flex items-center space-x-2 bg-transparent border border-[#ff8c42] text-[#ff8c42] hover:bg-[#ff8c42] hover:text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              >
                <i className="fa-solid fa-phone text-xs"></i>
                <span>660 964 056</span>
              </a>
              <a 
                href="#kontakt" 
                id="nav-book-btn"
                className="bg-[#8b5e3c] text-[#f6f2ea] hover:bg-[#ff8c42] hover:shadow-[0_0_15px_rgba(255,140,66,0.4)] px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 transform active:scale-95"
              >
                Zarezerwuj
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                id="mobile-menu-btn"
                className="text-[#f6f2ea] hover:text-[#ff8c42] focus:outline-none p-2 transition-colors"
                aria-label="Menu"
              >
                <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu-dropdown" className="md:hidden bg-[#1f3325] border-t border-[#8b5e3c]/20 px-4 py-6 space-y-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#o-miejscu" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#f6f2ea] hover:text-[#ff8c42] text-lg font-medium tracking-wide py-1 border-b border-[#f6f2ea]/10"
              >
                O miejscu
              </a>
              <a 
                href="#co-oferujemy" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#f6f2ea] hover:text-[#ff8c42] text-lg font-medium tracking-wide py-1 border-b border-[#f6f2ea]/10"
              >
                Oferta
              </a>
              <a 
                href="#dlaczego-warto" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#f6f2ea] hover:text-[#ff8c42] text-lg font-medium tracking-wide py-1 border-b border-[#f6f2ea]/10"
              >
                Dlaczego my
              </a>
              <a 
                href="#galeria" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#f6f2ea] hover:text-[#ff8c42] text-lg font-medium tracking-wide py-1 border-b border-[#f6f2ea]/10"
              >
                Galeria
              </a>
              <a 
                href="#kontakt" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#f6f2ea] hover:text-[#ff8c42] text-lg font-medium tracking-wide py-1"
              >
                Kontakt
              </a>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-[#f6f2ea]/10">
              <a 
                href="tel:660964056" 
                className="flex items-center justify-center space-x-2 bg-transparent border border-[#ff8c42] text-[#ff8c42] py-3 rounded-full font-bold"
              >
                <i className="fa-solid fa-phone"></i>
                <span>Zadzwoń: 660 964 056</span>
              </a>
              <a 
                href="#kontakt" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center bg-[#8b5e3c] text-white py-3 rounded-full font-bold hover:bg-[#ff8c42] transition-colors"
              >
                Zarezerwuj termin
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION (Fullscreen Parallax Banner) --- */}
      <header 
        id="hero" 
        className="relative min-h-screen md:h-screen py-24 md:py-0 flex items-center justify-center parallax-bg overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(31, 51, 37, 0.4) 0%, rgba(31, 51, 37, 0.8) 70%, rgba(31, 51, 37, 1) 100%), url('https://i.ibb.co/PZYvXVVT/684167841-122094475689301889-6521510102853264732-n.jpg')`
        }}
      >
        <div className="relative max-w-5xl mx-auto px-4 text-center z-10 pt-16 md:pt-20 flex flex-col items-center">
          
          {/* Decorative Pre-title with floating icon */}
          <div className="inline-flex items-center space-x-2 bg-[#8b5e3c]/20 backdrop-blur-md border border-[#8b5e3c]/30 px-4 py-1.5 rounded-full mb-6 text-[#ff8c42] text-sm font-semibold tracking-widest uppercase animate-float">
            <i className="fa-solid fa-campground text-xs"></i>
            <span>Strefa Wolna od Zgiełku</span>
          </div>

          {/* Majestic Main Heading */}
          <h1 id="hero-title" className="font-display font-black text-4xl sm:text-7xl md:text-8xl text-[#f6f2ea] tracking-tight leading-none mb-6">
            Strefa Dziczy
          </h1>

          {/* Underline wood accent */}
          <div className="w-24 h-1 bg-[#8b5e3c] rounded-full mb-8"></div>

          {/* Description Subtitle */}
          <p id="hero-subtitle" className="text-base sm:text-xl md:text-2xl text-[#f6f2ea]/90 font-light max-w-3xl leading-relaxed mb-10 md:mb-12">
            Relax & Chill z dala od ludzi. Las, staw, ognisko i natura. Idealne miejsce na odpoczynek, spotkania z przyjaciółmi oraz organizację wyjątkowych wydarzeń.
          </p>

          {/* Feature Badge Grid (6 quick points) */}
          <div id="hero-features-grid" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 w-full max-w-4xl mb-10 md:mb-12">
            {[
              { icon: 'fa-tree', text: 'Las', color: 'text-emerald-400' },
              { icon: 'fa-droplet', text: 'Staw', color: 'text-sky-400' },
              { icon: 'fa-fire', text: 'Ognisko', color: 'text-[#ff8c42]' },
              { icon: 'fa-drumstick-bite', text: 'Grill', color: 'text-amber-500' },
              { icon: 'fa-tent', text: 'Kemping', color: 'text-[#a97e5d]' },
              { icon: 'fa-face-smile', text: 'Imprezy', color: 'text-pink-400' },
            ].map((f, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center p-3 bg-white/5 backdrop-blur-xs rounded-xl border border-white/10 hover:border-[#8b5e3c]/40 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-full bg-[#1f3325]/80 flex items-center justify-center mb-2 shadow-inner`}>
                  <i className={`fa-solid ${f.icon} ${f.color} text-lg`}></i>
                </div>
                <span className="text-white text-xs font-semibold tracking-wider uppercase">{f.text}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div id="hero-actions" className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="tel:660964056" 
              id="hero-call-action"
              className="flex items-center justify-center space-x-3 bg-[#ff8c42] hover:bg-[#e66817] text-white font-bold text-lg px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(255,140,66,0.3)] hover:shadow-[0_4px_25px_rgba(255,140,66,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <i className="fa-solid fa-phone text-lg animate-pulse"></i>
              <span>Zadzwoń teraz</span>
            </a>
            <a 
              href="#kontakt" 
              id="hero-book-action"
              className="flex items-center justify-center bg-[#8b5e3c] hover:bg-[#a97e5d] text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
            >
              Zarezerwuj termin
            </a>
            <a 
              href="#o-miejscu" 
              id="hero-about-action"
              className="flex items-center justify-center bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium text-lg px-8 py-4 rounded-full transition-all duration-300"
            >
              O miejscu
            </a>
          </div>

          {/* Elegant Floating Arrow Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center text-white/40 hover:text-[#ff8c42] transition-colors cursor-pointer">
            <span className="text-[10px] uppercase tracking-widest font-bold mb-1">Odkryj Dzicz</span>
            <i className="fa-solid fa-chevron-down animate-bounce text-sm"></i>
          </div>

        </div>

        {/* Ambient Warm Spark Particle Overlays (Flickering light mockup) */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#ff8c42]/5 pointer-events-none mix-blend-color-dodge"></div>
      </header>

      {/* --- SECTION 1: O MIEJSCU (About Place) --- */}
      <section id="o-miejscu" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#f6f2ea] overflow-hidden">
        {/* Subtle decorative vector tree block */}
        <div className="absolute top-10 right-[-5%] text-[#1f3325]/3 pointer-events-none">
          <i className="fa-solid fa-tree text-[350px]"></i>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Grid Layout - Asymmetric and Editorial */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Category indicator */}
              <div className="flex items-center space-x-2 text-[#8b5e3c]">
                <div className="w-8 h-[1px] bg-[#8b5e3c]"></div>
                <span className="uppercase text-xs font-bold tracking-widest">Oaza Spokoju</span>
              </div>

              {/* Title */}
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[#1f3325] leading-tight tracking-tight">
                Prawdziwy reset w sercu natury – Strefa Dziczy
              </h2>

              {/* Wooden Accent Line */}
              <div className="w-16 h-[3px] bg-[#8b5e3c]"></div>

              {/* Primary Description */}
              <div className="space-y-6 text-[#1f3325]/80 text-lg leading-relaxed font-light">
                <p>
                  Strefa Dziczy to wyjątkowe miejsce stworzone dla osób, które chcą odpocząć od miejskiego zgiełku. Położona w otoczeniu lasów i natury oferuje przestrzeń do wspólnego grillowania, ognisk, biwakowania oraz organizacji imprez w kameralnym klimacie.
                </p>
                <p className="font-medium text-[#1f3325]">
                  Tutaj naprawdę możesz zwolnić tempo i cieszyć się ciszą.
                </p>
                <p>
                  Nasze urokliwe siedlisko w Stołowaczu łączy w sobie nieskażoną dzikość przyrody z odpowiednią infrastrukturą biesiadną. Bezpośrednie sąsiedztwo lasu, szum wody w stawie i przytulne altanki sprawią, że każda chwila spędzona w Strefie stanie się niezapomnianym przeżyciem.
                </p>
              </div>

              {/* Elegant bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-[#1f3325]/10 flex items-center justify-center text-[#ff8c42] mt-1 shrink-0">
                    <i className="fa-solid fa-check text-xs"></i>
                  </span>
                  <div>
                    <h4 className="font-bold text-[#1f3325]">Pełny Off-Grid</h4>
                    <p className="text-sm text-[#1f3325]/70">Odłącz się od sieci i naładuj własne baterie.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-[#1f3325]/10 flex items-center justify-center text-[#ff8c42] mt-1 shrink-0">
                    <i className="fa-solid fa-check text-xs"></i>
                  </span>
                  <div>
                    <h4 className="font-bold text-[#1f3325]">Brak sąsiedztwa</h4>
                    <p className="text-sm text-[#1f3325]/70">Swoboda biesiadowania bez ograniczeń.</p>
                  </div>
                </div>
              </div>

              {/* CTA link to Booking */}
              <div className="pt-6">
                <a 
                  href="#kontakt" 
                  className="inline-flex items-center space-x-2 text-[#8b5e3c] font-bold text-lg hover:text-[#ff8c42] transition-colors group"
                >
                  <span>Dowiedz się więcej o rezerwacjach</span>
                  <i className="fa-solid fa-arrow-right group-hover:translate-x-1.5 transition-transform duration-300"></i>
                </a>
              </div>

            </div>

            {/* Right Image Frame Column */}
            <div className="lg:col-span-5 relative">
              {/* Decorative behind border */}
              <div className="absolute inset-4 -bottom-4 -right-4 border-2 border-[#8b5e3c] rounded-2xl pointer-events-none z-0"></div>
              
              {/* Main Photo with premium frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#1f3325]/20 z-10 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                <img 
                  src="https://i.ibb.co/LzRv9dQn/683456093-122095074375301889-4289049445325563557-n.jpg" 
                  alt="Staw w Strefie Dziczy" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Location Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1f3325]/90 backdrop-blur-md p-4 rounded-xl border border-[#8b5e3c]/30 text-[#f6f2ea] shadow-lg flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#8b5e3c] flex items-center justify-center text-white font-bold shrink-0 shadow-md">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm tracking-wide">Stołowacz</h5>
                    <p className="text-xs text-[#f6f2ea]/70">W otoczeniu podlaskich lasów</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: CO OFERUJEMY (What We Offer) --- */}
      <section id="co-oferujemy" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1f3325] text-[#f6f2ea] relative">
        {/* Subtle forest texture representation */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1911] to-[#1f3325] opacity-80 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#ff8c42] uppercase text-xs font-bold tracking-widest block mb-3">Atrakcje & Możliwości</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[#f6f2ea] tracking-tight">
              Co oferujemy w Strefie Dziczy?
            </h2>
            <div className="w-16 h-1 bg-[#8b5e3c] mx-auto mt-4 mb-6"></div>
            <p className="text-[#f6f2ea]/70 font-light text-lg">
              Przygotowaliśmy bogate zaplecze rekreacyjne, łączące surowy urok natury z przemyślaną infrastrukturą zapewniającą wysoki komfort.
            </p>
          </div>

          {/* Cards Grid - 11 Items */}
          <div id="offers-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((o, idx) => (
              <div 
                key={idx} 
                className="bg-[#0e1911]/40 border border-[#8b5e3c]/20 hover:border-[#ff8c42]/40 rounded-2xl p-6 hover:bg-[#0e1911]/80 hover:translate-y-[-4px] transition-all duration-300 shadow-md flex flex-col group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  {/* Icon badge */}
                  <div className="w-12 h-12 rounded-xl bg-[#8b5e3c]/20 border border-[#8b5e3c]/40 flex items-center justify-center text-[#ff8c42] group-hover:bg-[#ff8c42] group-hover:text-white transition-all duration-300 shadow-inner">
                    <i className={`fa-solid ${o.icon} text-xl`}></i>
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#f6f2ea] tracking-wide">
                    {o.title}
                  </h3>
                </div>
                <p className="text-[#f6f2ea]/70 text-sm leading-relaxed font-light mt-1 flex-grow">
                  {o.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 3: DLACZEGO WARTO (Why Us) --- */}
      <section id="dlaczego-warto" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f6f2ea] text-[#1f3325]">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#8b5e3c] uppercase text-xs font-bold tracking-widest block mb-3">Zalety Lokalizacji</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[#1f3325] tracking-tight">
              Dlaczego warto nas wybrać?
            </h2>
            <div className="w-16 h-1 bg-[#ff8c42] mx-auto mt-4 mb-6"></div>
            <p className="text-[#1f3325]/70 font-light text-lg">
              Tworzymy unikalne warunki do wypoczynku i integracji, których nie znajdziesz w komercyjnych ośrodkach miejskich.
            </p>
          </div>

          {/* Advantages Grid - 8 Items */}
          <div id="advantages-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#8b5e3c]/10 hover:border-[#8b5e3c]/30 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center group"
              >
                {/* Large circular icon with double offset ring */}
                <div className="w-16 h-16 rounded-full bg-[#f6f2ea] border border-[#8b5e3c]/30 flex items-center justify-center text-[#8b5e3c] mb-5 group-hover:scale-110 group-hover:text-[#ff8c42] group-hover:border-[#ff8c42]/50 transition-all duration-300 shadow-md">
                  <i className={`fa-solid ${a.icon} text-2xl`}></i>
                </div>
                <h3 className="font-display font-bold text-lg text-[#1f3325] mb-2">
                  {a.title}
                </h3>
                <p className="text-[#1f3325]/70 text-sm leading-relaxed font-light">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 4: IDEALNE MIEJSCE NA (Occasions) --- */}
      <section id="idealne-miejsce" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eae3d2] text-[#1f3325] relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#8b5e3c] uppercase text-xs font-bold tracking-widest block mb-3">Doświadczenia bez limitu</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[#1f3325] tracking-tight">
              Idealne miejsce na...
            </h2>
            <div className="w-16 h-1 bg-[#8b5e3c] mx-auto mt-4 mb-6"></div>
            <p className="text-[#1f3325]/70 font-light text-lg">
              Nasz elastyczny teren pozwala na swobodną adaptację do różnorodnych potrzeb naszych biesiadników i wczasowiczów.
            </p>
          </div>

          {/* Clean Occasions Bento Grid */}
          <div id="occasions-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((o, idx) => (
              <div 
                key={idx} 
                className="bg-white/80 backdrop-blur-xs border border-[#8b5e3c]/20 hover:border-[#ff8c42]/40 rounded-2xl p-6 transition-all duration-300 hover:bg-white flex flex-col hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1f3325]/10 flex items-center justify-center text-[#1f3325] group-hover:bg-[#ff8c42] group-hover:text-white transition-all duration-300 mb-4 shadow-sm">
                  <i className={`fa-solid ${o.icon} text-lg`}></i>
                </div>
                <h3 className="font-display font-bold text-lg text-[#1f3325] mb-2 tracking-wide group-hover:text-[#8b5e3c] transition-colors">
                  {o.title}
                </h3>
                <p className="text-[#1f3325]/70 text-xs leading-relaxed font-light">
                  {o.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 5: GALERIA MASONRY (Gallery) --- */}
      <section id="galeria" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1f3325] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#ff8c42] uppercase text-xs font-bold tracking-widest block mb-3">Obrazy Natury</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[#f6f2ea] tracking-tight">
              Uchwycone w Kadrze
            </h2>
            <div className="w-16 h-1 bg-[#8b5e3c] mx-auto mt-4 mb-6"></div>
            <p className="text-[#f6f2ea]/70 font-light text-lg">
              Przejrzyj naszą galerię zdjęć i zobacz, jak magicznie prezentuje się Strefa Dziczy o różnych porach dnia. Kliknij dowolne zdjęcie, by je powiększyć.
            </p>
          </div>

          {/* Gallery Grid (Interactive responsive columns) */}
          <div id="gallery-grid" className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
            {galleryItems.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setActivePhoto(item.url)}
                className="break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-white/10 hover:border-[#ff8c42]/50 hover:shadow-[0_10px_30px_rgba(255,140,66,0.2)] transition-all duration-300 group"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Luxury overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1911] via-[#0e1911]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#ff8c42] text-xs font-bold uppercase tracking-wider mb-1">Strefa Dziczy</span>
                  <h4 className="font-display font-bold text-lg text-[#f6f2ea]">{item.title}</h4>
                  <p className="text-[#f6f2ea]/70 text-xs mt-1 font-light">{item.desc}</p>
                  
                  {/* Floating click indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#ff8c42]/85 text-white flex items-center justify-center text-xs opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <i className="fa-solid fa-expand"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      {activePhoto && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 transition-all duration-300 animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <button 
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 text-white hover:text-[#ff8c42] text-3xl transition-colors focus:outline-none p-2"
            aria-label="Zamknij"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          
          <div className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-xl border border-white/10" onClick={(e) => e.stopPropagation()}>
            <img 
              src={activePhoto} 
              alt="Powiększone zdjęcie" 
              className="w-full h-auto max-h-[85vh] object-contain shadow-2xl"
            />
            
            {/* Dynamic label inside lightbox */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <p className="text-sm text-[#ff8c42] font-semibold tracking-wider uppercase mb-1">Strefa Dziczy – Widok</p>
              <p className="text-xs text-white/70">Wciśnij dowolny punkt poza zdjęciem, aby zamknąć.</p>
            </div>
          </div>
        </div>
      )}

      {/* --- SECTION 6: KLIMAT STREFY DZICZY (Big Quote) --- */}
      <section 
        id="klimat-quote" 
        className="relative py-32 px-4 sm:px-6 lg:px-8 parallax-bg flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(14, 25, 17, 0.85) 0%, rgba(14, 25, 17, 0.85) 100%), url('https://i.ibb.co/whkq2W9m/691022903-122099420121301889-6028447467472361859-n.jpg')`
        }}
      >
        <div className="relative max-w-4xl mx-auto z-10 space-y-8">
          
          {/* Double Quote Vector Icons */}
          <div className="text-[#ff8c42]/30 text-6xl sm:text-7xl font-serif">
            <i className="fa-solid fa-quote-left animate-float"></i>
          </div>

          {/* Inspirational Text */}
          <blockquote className="font-display italic font-medium text-2xl sm:text-3xl md:text-4xl text-[#f6f2ea] leading-relaxed max-w-3xl mx-auto">
            &quot;Nie potrzebujesz luksusowego hotelu, żeby naprawdę odpocząć. Czasem wystarczy las, ognisko, śpiew ptaków i ludzie, z którymi chcesz spędzić czas.&quot;
          </blockquote>

          {/* Quote Author */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-[1px] bg-[#8b5e3c] mb-3"></div>
            <span className="uppercase text-xs tracking-widest font-semibold text-[#ff8c42]">Klimat Strefy Dziczy</span>
          </div>

        </div>
      </section>

      {/* --- SECTION 7: CALL TO ACTION (Reservation Glow Panel) --- */}
      <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f6f2ea]">
        <div className="max-w-5xl mx-auto">
          
          {/* Main glowing container with double wood frames */}
          <div className="relative rounded-3xl bg-[#1f3325] text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl border border-[#8b5e3c]/30 animate-flicker">
            
            {/* Background campfire glowing light overlay */}
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#ff8c42] opacity-15 blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl space-y-6">
              
              {/* Badge */}
              <span className="text-[#ff8c42] uppercase text-xs font-bold tracking-widest inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10">
                Wolne terminy na ten sezon!
              </span>

              {/* Title */}
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#f6f2ea] tracking-tight leading-none">
                Zarezerwuj swoją Strefę Dziczy
              </h2>

              {/* Desc */}
              <p className="text-[#f6f2ea]/80 font-light text-lg sm:text-xl leading-relaxed">
                Odpocznij z dala od miasta i spędź czas tak, jak lubisz — przy ognisku, grillu i w otoczeniu natury. Skontaktuj się z nami bezpośrednio przez telefon lub napisz e-mail, aby omówić szczegóły.
              </p>

              {/* Decorative list of values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 text-sm text-[#f6f2ea]/90 font-light">
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-fire text-[#ff8c42]"></i>
                  <span>Dostępność drewna na ognisko w cenie</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-tree text-[#ff8c42]"></i>
                  <span>Cały leśny plac wyłączony na Twoją wyłączność</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-caravan text-[#ff8c42]"></i>
                  <span>Dojazd dla samochodów i kamperów</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-ban text-[#ff8c42]"></i>
                  <span>Bez kaucji za drobny hałas i głośniejszą muzykę</span>
                </div>
              </div>

              {/* Button block */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="tel:660964056" 
                  className="flex items-center justify-center space-x-3 bg-[#ff8c42] hover:bg-[#e66817] text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-orange-500/20"
                >
                  <i className="fa-solid fa-phone"></i>
                  <span>Zadzwoń: 660 964 056</span>
                </a>
                <a 
                  href="mailto:bgutrans1@gmail.com" 
                  className="flex items-center justify-center space-x-3 bg-white hover:bg-[#eae3d2] text-[#1f3325] font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-md"
                >
                  <i className="fa-solid fa-envelope text-[#8b5e3c]"></i>
                  <span>Napisz e-mail</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 8: KONTAKT & MAPA (Contact Details) --- */}
      <section id="kontakt" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eae3d2] text-[#1f3325] relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Information Card */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                <span className="text-[#8b5e3c] uppercase text-xs font-bold tracking-widest block">Kontakt bezpośredni</span>
                <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[#1f3325] tracking-tight">
                  Zaplanuj wizytę
                </h2>
                <div className="w-16 h-1 bg-[#8b5e3c] mb-6"></div>
                <p className="text-[#1f3325]/70 font-light text-base leading-relaxed">
                  Odpowiemy na wszystkie pytania dotyczące rezerwacji placu, cennika, dostępności terminów na pole namiotowe oraz organizacji imprez okolicznościowych. Zapraszamy do kontaktu!
                </p>
              </div>

              {/* Premium Contact Details cards list */}
              <div className="space-y-4">
                
                {/* Phone */}
                <a 
                  href="tel:660964056" 
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white hover:bg-[#ff8c42]/10 border border-[#8b5e3c]/10 hover:border-[#ff8c42]/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1f3325]/5 flex items-center justify-center text-[#8b5e3c] group-hover:bg-[#ff8c42] group-hover:text-white transition-all duration-300 shrink-0">
                    <i className="fa-solid fa-phone text-lg"></i>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#1f3325]/50 font-bold">Zadzwoń do nas</span>
                    <span className="block font-display font-bold text-lg text-[#1f3325]">660 964 056</span>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:bgutrans1@gmail.com" 
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white hover:bg-[#ff8c42]/10 border border-[#8b5e3c]/10 hover:border-[#ff8c42]/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1f3325]/5 flex items-center justify-center text-[#8b5e3c] group-hover:bg-[#ff8c42] group-hover:text-white transition-all duration-300 shrink-0">
                    <i className="fa-solid fa-envelope text-lg"></i>
                  </div>
                  <div className="break-all pr-2">
                    <span className="block text-xs uppercase tracking-wider text-[#1f3325]/50 font-bold">Napisz do nas</span>
                    <span className="block font-display font-bold text-base sm:text-lg text-[#1f3325]">bgutrans1@gmail.com</span>
                  </div>
                </a>

                {/* Address */}
                <div 
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-[#8b5e3c]/10 hover:border-[#8b5e3c]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1f3325]/5 flex items-center justify-center text-[#8b5e3c] shrink-0">
                    <i className="fa-solid fa-map-location-dot text-lg"></i>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#1f3325]/50 font-bold">Lokalizacja</span>
                    <span className="block font-display font-bold text-lg text-[#1f3325]">Stołowacz, 17-100</span>
                  </div>
                </div>

              </div>

              {/* Visual note */}
              <p className="text-xs text-[#1f3325]/50 italic">
                * Strefa Dziczy znajduje się na Podlasiu, w ustronnym i kameralnym otoczeniu, sprzyjającym całkowitemu zresetowaniu myśli.
              </p>

            </div>

            {/* Right Column: Premium Ambient Photo Card */}
            <div className="lg:col-span-7 relative group">
              <div className="absolute inset-4 -bottom-4 -right-4 border-2 border-[#8b5e3c] rounded-3xl pointer-events-none z-0"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#1f3325]/20 z-10 aspect-[4/3] lg:h-full lg:aspect-auto">
                <img 
                  src="https://i.ibb.co/TDgwtfb1/684532910-122095091559301889-1924434766142943071-n.jpg" 
                  alt="Klimatyczne ognisko wieczorem" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-flicker"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f3325] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6 text-[#f6f2ea]">
                  <span className="text-[#ff8c42] uppercase text-xs font-bold tracking-widest block mb-1">Strefa Dziczy</span>
                  <h3 className="font-display font-bold text-2xl">Zwolnij tempo i ciesz się chwilą</h3>
                  <p className="text-sm text-[#f6f2ea]/80 font-light mt-2">Ciepło ogniska, szum wiatru i gwieździste niebo czekają na Ciebie w Stołowaczu.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0e1911] text-[#f6f2ea]/80 border-t border-[#8b5e3c]/30 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center pb-12 border-b border-white/10">
            
            {/* Logo area */}
            <div className="md:col-span-5 space-y-4">
              <a href="#hero" className="flex items-center space-x-3 group">
                <img 
                  src="https://i.ibb.co/M5gSRNwT/683637005-122094476319301889-8174671146559426624-n.jpg" 
                  alt="Strefa Dziczy Logo" 
                  className="w-14 h-14 rounded-full border-2 border-[#8b5e3c] object-cover shadow-lg"
                />
                <div className="flex flex-col">
                  <span className="font-display font-black text-2xl text-[#f6f2ea] leading-none tracking-tight">
                    Strefa Dziczy
                  </span>
                  <span className="text-xs text-[#ff8c42] uppercase tracking-widest font-bold mt-1">
                    Grill & Ognisko & Imprezy
                  </span>
                </div>
              </a>
              <p className="text-sm text-[#f6f2ea]/60 font-light max-w-sm leading-relaxed">
                Niezwykłe miejsce wypoczynkowo-integracyjne na Podlasiu. Poczuj bliskość natury, biesiaduj przy ognisku i zapomnij o całym świecie.
              </p>
            </div>

            {/* Direct Shortcuts */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-display font-bold text-[#f6f2ea] text-lg tracking-wider">Nawigacja</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><a href="#o-miejscu" className="hover:text-[#ff8c42] transition-colors">O miejscu</a></li>
                <li><a href="#co-oferujemy" className="hover:text-[#ff8c42] transition-colors">Oferta i Atrakcje</a></li>
                <li><a href="#dlaczego-warto" className="hover:text-[#ff8c42] transition-colors">Dlaczego warto</a></li>
                <li><a href="#galeria" className="hover:text-[#ff8c42] transition-colors">Uchwycone kadry</a></li>
                <li><a href="#kontakt" className="hover:text-[#ff8c42] transition-colors">Rezerwacje i Kontakt</a></li>
              </ul>
            </div>

            {/* Contact quick details footer */}
            <div className="md:col-span-4 space-y-4 text-sm font-light">
              <h4 className="font-display font-bold text-[#f6f2ea] text-lg tracking-wider">Strefa Dziczy</h4>
              <p className="flex items-start space-x-2.5">
                <i className="fa-solid fa-map-pin text-[#ff8c42] mt-1 shrink-0"></i>
                <span>Stołowacz, 17-100</span>
              </p>
              <p className="flex items-center space-x-2.5">
                <i className="fa-solid fa-phone text-[#ff8c42] shrink-0"></i>
                <a href="tel:660964056" className="hover:text-[#ff8c42] transition-colors">660 964 056</a>
              </p>
              <p className="flex items-center space-x-2.5">
                <i className="fa-solid fa-envelope text-[#ff8c42] shrink-0"></i>
                <a href="mailto:bgutrans1@gmail.com" className="hover:text-[#ff8c42] transition-colors">bgutrans1@gmail.com</a>
              </p>
            </div>

          </div>

          {/* Bottom Copyright Block */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#f6f2ea]/40 font-light space-y-4 sm:space-y-0">
            <div>
              <p>© {new Date().getFullYear()} Strefa Dziczy – Grill & Ognisko & Imprezy. Wszelkie prawa zastrzeżone.</p>
            </div>
            <div className="flex space-x-6">
              <span className="hover:text-[#ff8c42] cursor-pointer">Polityka Prywatności</span>
              <span className="hover:text-[#ff8c42] cursor-pointer">Regulamin Terenu</span>
              <span>Luksus Off-Grid pod gwiazdami</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}