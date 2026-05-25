export type Lang = 'en' | 'de' | 'fr'

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      cta: 'Get in Touch',
    },
    hero: {
      badge: 'Strategic Consulting & Advisory',
      slides: [
        {
          title: 'Automotive Consulting',
          sub: 'Strategic advisory from the shop floor to the boardroom — OEMs, suppliers, and dealers.',
          service: 'Automotive',
        },
        {
          title: 'Turnkey Projects',
          sub: 'End-to-end project delivery — concept, engineering, build, and commission.',
          service: 'Turnkey',
        },
        {
          title: 'Real Estate',
          sub: 'Commercial and industrial real estate advisory — from site selection to closing.',
          service: 'Real Estate',
        },
        {
          title: 'Plant Setup & Manufacturing',
          sub: 'From greenfield to full production — advisory, planning, and operational ramp-up.',
          service: 'Manufacturing',
        },
      ],
      explore: 'Explore Services',
      talk: 'Talk to Us',
    },
    stats: [
      { value: '20+', label: 'Years of industry experience' },
      { value: '4', label: 'Specialisation verticals' },
      { value: '60+', label: 'Projects delivered' },
      { value: '100%', label: 'Client-first approach' },
    ],
    homeServices: {
      sectionLabel: 'Our Services',
      title: 'Four Pillars of',
      titleAccent: 'Expertise',
      sub: 'Deep specialisation across the industries that move the world.',
      viewAll: 'View All Services →',
      items: [
        {
          icon: '🚗',
          title: 'Automotive Consulting',
          desc: 'Strategic advisory for OEMs, dealerships, and automotive enterprises — from EV transition to market expansion and dealer network optimisation.',
          points: ['EV transition planning', 'Supply chain optimisation', 'Market entry strategy', 'Dealer network advisory'],
        },
        {
          icon: '🏗️',
          title: 'Turnkey Projects',
          desc: 'End-to-end project execution from concept and design through to commissioning and handover — on time, on budget.',
          points: ['Project planning & execution', 'Procurement management', 'Vendor coordination', 'Commissioning & handover'],
        },
        {
          icon: '🏢',
          title: 'Real Estate',
          desc: 'Commercial and industrial real estate advisory — site selection, due diligence, transaction support, and development guidance.',
          points: ['Site selection & due diligence', 'Transaction advisory', 'Industrial development', 'Investment analysis'],
        },
        {
          icon: '🏭',
          title: 'Plant Setup & Manufacturing',
          desc: 'Greenfield and brownfield plant setup — layout planning, process engineering, vendor selection, and full operational ramp-up.',
          points: ['Factory layout & planning', 'Process engineering', 'Equipment & vendor selection', 'Operational ramp-up'],
        },
      ],
    },
    whyUs: {
      sectionLabel: 'Why Gretias',
      title: 'Built on',
      titleAccent: 'Trust & Results',
      sub: 'We bring the depth of industry insiders with the objectivity of trusted advisors.',
      items: [
        { icon: '🎯', title: 'Industry Depth', desc: 'Decades of hands-on experience across automotive, construction, real estate, and manufacturing sectors.' },
        { icon: '🤝', title: 'Partner Mindset', desc: 'We work alongside you — not just deliver reports. Your success is our measure of success.' },
        { icon: '⚡', title: 'Actionable Outcomes', desc: 'Every engagement ends with clarity, a concrete plan, and a path forward.' },
        { icon: '🔒', title: 'Trusted & Discreet', desc: 'Confidential advisory from day one. Your interests guide every recommendation.' },
      ],
    },
    cta: {
      title: 'Ready to move forward?',
      sub: 'Whether you need a strategic review, a project partner, or an expert second opinion — let\'s talk.',
      btn: 'Start the Conversation →',
    },
    about: {
      pageTitle: 'About Gretias',
      hero: {
        sectionLabel: 'About Gretias',
        title: 'Experienced advisors.',
        titleAccent: 'Practical outcomes.',
        sub: 'Gretias was founded to bridge the gap between strategy and reality in industries where the stakes are high and the complexity is real.',
      },
      story: {
        sectionLabel: 'Our Story',
        title: 'Born from the',
        titleAccent: 'industry, not a textbook',
        p1: 'Gretias was built by practitioners who spent years inside automotive enterprises, construction projects, and property markets — understanding what works, what stalls, and what the spreadsheets don\'t capture.',
        p2: 'We saw too many consulting engagements that delivered polished decks but left teams no better equipped to move. Gretias exists to do the opposite — to work alongside leadership, translate strategy into action, and stay accountable to outcomes.',
        p3: 'Today we serve clients across Automotive Consulting, Turnkey Project delivery, Real Estate advisory, and Plant Setup & Manufacturing — bringing the same rigour and candour to every engagement.',
        stats: [
          { label: 'Industries Served', value: '4 core verticals' },
          { label: 'Engagement Style', value: 'Embedded advisory' },
          { label: 'Geography', value: 'India & global' },
          { label: 'Approach', value: 'Outcomes-first' },
        ],
      },
      values: {
        sectionLabel: 'Our Values',
        title: 'What guides',
        titleAccent: 'every engagement',
        items: [
          { icon: '🎯', title: 'Precision', desc: 'We go deep before we go broad. Every recommendation is grounded in evidence and context.' },
          { icon: '🤝', title: 'Partnership', desc: 'We embed ourselves in your challenges. Your success is our measure of success.' },
          { icon: '🔍', title: 'Transparency', desc: 'Honest counsel, even when it is hard to hear. No ambiguity, no jargon.' },
          { icon: '⚡', title: 'Momentum', desc: 'We bias toward action. Insights mean nothing without execution.' },
        ],
      },
      approach: {
        sectionLabel: 'Our Approach',
        title: 'How we',
        titleAccent: 'work with you',
        steps: [
          { step: '01', title: 'Discover', desc: 'We begin by understanding your business, industry dynamics, and the specific challenge at hand — through structured conversations and data review.' },
          { step: '02', title: 'Diagnose', desc: 'We map the root causes, not just symptoms. Using industry frameworks and our sector experience, we identify where the real leverage lies.' },
          { step: '03', title: 'Design', desc: 'We build a practical strategy — one that accounts for your organisation\'s capacity, market realities, and timelines.' },
          { step: '04', title: 'Deliver', desc: 'We stay alongside you through execution, monitoring progress and adapting the plan as conditions evolve.' },
        ],
      },
      cta: {
        title: 'Want to work with us?',
        sub: 'Tell us about your challenge. We\'ll tell you honestly whether and how we can help.',
        btn: 'Start the Conversation →',
      },
    },
    services: {
      sectionLabel: 'Services',
      hero: {
        title: 'Four verticals.',
        titleAccent: 'One trusted partner.',
        sub: 'Gretias operates at the intersection of deep industry experience and practical advisory. We don\'t just recommend — we help you move.',
      },
      items: [
        {
          id: 'automotive',
          icon: '🚗',
          title: 'Automotive Consulting',
          tagline: 'For OEMs, dealerships, Tier 1/2 suppliers, and automotive enterprises',
          overview: 'The automotive sector is undergoing its most significant transformation in a century — electrification, software-defined vehicles, shifting consumer behaviour, and supply chain disruption. Gretias helps automotive businesses navigate this inflection point with clear-eyed strategy and practical execution support.',
          offerings: [
            {
              title: 'Market & Business Strategy',
              points: ['Market entry and expansion strategy', 'EV transition planning and roadmapping', 'Product portfolio and pricing advisory', 'Partnership and JV structuring'],
            },
            {
              title: 'Operations & Supply Chain',
              points: ['Supply chain resilience and optimisation', 'Manufacturing process diagnostics', 'Lean implementation and waste reduction', 'Dealer operations efficiency'],
            },
            {
              title: 'Digital & Innovation',
              points: ['Technology readiness assessments', 'Digital transformation roadmaps', 'Connected vehicle and data strategy', 'Legacy systems modernisation'],
            },
          ],
        },
        {
          id: 'turnkey',
          icon: '🏗️',
          title: 'Turnkey Projects',
          tagline: 'For industrial, commercial, and infrastructure project delivery',
          overview: 'Complex projects fail not because the vision is wrong, but because execution is mismanaged. Gretias provides end-to-end project management and delivery advisory — from initial concept and design through procurement, construction, commissioning, and handover.',
          offerings: [
            {
              title: 'Project Management',
              points: ['Project planning, scheduling, and milestones', 'Cost control and budget management', 'Risk identification and mitigation', 'Stakeholder and contractor management'],
            },
            {
              title: 'Procurement & Vendors',
              points: ['Vendor identification and qualification', 'Contract negotiation and management', 'Procurement strategy and execution', 'Quality assurance and oversight'],
            },
            {
              title: 'Commissioning & Handover',
              points: ['Pre-commissioning and testing protocols', 'Snag list management and resolution', 'Documentation and as-built records', 'Training and knowledge transfer'],
            },
          ],
        },
        {
          id: 'realestate',
          icon: '🏢',
          title: 'Real Estate',
          tagline: 'For investors, developers, and industrial occupiers',
          overview: 'Real estate decisions are long-term and capital-intensive. Whether you are acquiring land for a manufacturing facility, leasing commercial premises, or developing an industrial park, Gretias brings sector-specific expertise to every transaction and project.',
          offerings: [
            {
              title: 'Transaction Advisory',
              points: ['Buy-side and sell-side advisory', 'Lease negotiation and structuring', 'Valuation and market analysis', 'Investment due diligence'],
            },
            {
              title: 'Site Selection',
              points: ['Location and connectivity analysis', 'Zoning and regulatory assessment', 'Infrastructure and utility review', 'Comparative site evaluation'],
            },
            {
              title: 'Development Advisory',
              points: ['Project feasibility and financial modelling', 'Permit and approval navigation', 'Developer and contractor coordination', 'Industrial park and logistics hub advisory'],
            },
          ],
        },
        {
          id: 'manufacturing',
          icon: '🏭',
          title: 'Plant Setup & Manufacturing Advisory',
          tagline: 'For greenfield and brownfield manufacturing facilities',
          overview: 'Setting up a manufacturing facility is one of the most capital-intensive decisions a business can make. Gretias helps companies get it right — from site selection and layout design through process engineering, equipment procurement, compliance, and operational ramp-up.',
          offerings: [
            {
              title: 'Plant Planning',
              points: ['Greenfield and brownfield feasibility', 'Factory layout and material flow design', 'Capacity planning and scalability', 'Utility and infrastructure requirements'],
            },
            {
              title: 'Process & Quality',
              points: ['Manufacturing process design and optimisation', 'Quality management system implementation', 'IATF / ISO readiness and compliance', 'Scrap reduction and yield improvement'],
            },
            {
              title: 'Vendor & Equipment',
              points: ['Equipment selection and specification', 'Supplier qualification and development', 'APQP and PPAP advisory', 'Operational ramp-up and production launch'],
            },
          ],
        },
      ],
      cta: {
        title: 'Not sure where to start?',
        sub: 'Tell us your challenge in a short message and we\'ll come back to you with an honest view of how we can help.',
        btn: 'Get in Touch →',
      },
    },
    contact: {
      sectionLabel: 'Contact',
      hero: {
        title: 'Let\'s',
        titleAccent: 'talk.',
        sub: 'Tell us what you\'re working on. We\'ll respond within 24 hours with an honest view of how we can help.',
      },
      form: {
        name: 'Your Name',
        namePlaceholder: 'Rajesh Sharma',
        email: 'Work Email',
        emailPlaceholder: 'rajesh@company.com',
        company: 'Company / Organisation',
        companyPlaceholder: 'ABC Motors Ltd',
        service: 'Service of Interest',
        servicePlaceholder: 'Select a service...',
        message: 'Your Message',
        messagePlaceholder: 'Tell us about your challenge or what you need help with...',
        send: 'Send Message →',
        sending: 'Sending...',
        successTitle: 'Message received!',
        successSub: 'We\'ll get back to you within 24 hours.',
        error: 'Something went wrong. Please try again or email us directly.',
        services: ['Automotive Consulting', 'Turnkey Projects', 'Real Estate', 'Plant Setup & Manufacturing Advisory', 'Not sure yet'],
      },
      info: {
        directTitle: 'Direct Contact',
        expectTitle: 'What to expect',
        expect: [
          'We respond within 24 hours on working days',
          'First call is always no-commitment',
          'We\'ll tell you honestly if we\'re not the right fit',
          'Confidentiality is taken seriously from day one',
        ],
        servicesTitle: 'Our Services',
        servicesList: ['🚗 Automotive Consulting', '🏗️ Turnkey Projects', '🏢 Real Estate', '🏭 Plant Setup & Manufacturing'],
      },
    },
    footer: {
      tagline: 'Strategic consulting for Automotive, Turnkey Projects, Real Estate, and Plant Setup & Manufacturing Advisory.',
      nav: 'Navigation',
      getInTouch: 'Get in Touch',
      initiative: 'A',
      initiativeLink: 'Gnosiso Labs',
      initiativeSuffix: 'initiative',
      copyright: 'All rights reserved.',
      builtBy: 'Built by Gnosiso Labs',
    },
  },

  de: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Leistungen',
      contact: 'Kontakt',
      cta: 'Kontakt aufnehmen',
    },
    hero: {
      badge: 'Strategische Beratung & Advisory',
      slides: [
        {
          title: 'Automotive-Beratung',
          sub: 'Strategische Beratung – vom Shopfloor bis in den Vorstand. Für OEMs, Zulieferer und Händler.',
          service: 'Automotive',
        },
        {
          title: 'Schlüsselfertige Projekte',
          sub: 'Ganzheitliche Projektabwicklung – Konzept, Engineering, Bau und Inbetriebnahme.',
          service: 'Schlüsselfertig',
        },
        {
          title: 'Immobilien',
          sub: 'Beratung für Gewerbe- und Industrieimmobilien – von der Standortauswahl bis zum Abschluss.',
          service: 'Immobilien',
        },
        {
          title: 'Werksplanung & Fertigung',
          sub: 'Von der grünen Wiese bis zur Serienproduktion – Beratung, Planung und Produktionshochlauf.',
          service: 'Fertigung',
        },
      ],
      explore: 'Leistungen entdecken',
      talk: 'Jetzt sprechen',
    },
    stats: [
      { value: '20+', label: 'Jahre Branchenerfahrung' },
      { value: '4', label: 'Spezialisierungsfelder' },
      { value: '60+', label: 'Abgeschlossene Projekte' },
      { value: '100%', label: 'Kunden an erster Stelle' },
    ],
    homeServices: {
      sectionLabel: 'Unsere Leistungen',
      title: 'Vier Säulen der',
      titleAccent: 'Expertise',
      sub: 'Tiefe Spezialisierung in den Branchen, die die Welt bewegen.',
      viewAll: 'Alle Leistungen →',
      items: [
        {
          icon: '🚗',
          title: 'Automotive-Beratung',
          desc: 'Strategische Beratung für OEMs, Händler und Automobilunternehmen – von der E-Mobilität-Transition bis zur Markterschließung und Händlernetzoptimierung.',
          points: ['Planung E-Mobilität-Transition', 'Lieferkettenoptimierung', 'Markteintrittsstrategien', 'Händlernetzwerk-Beratung'],
        },
        {
          icon: '🏗️',
          title: 'Schlüsselfertige Projekte',
          desc: 'Ganzheitliche Projektabwicklung vom Konzept über das Design bis zur Inbetriebnahme und Übergabe – termin- und budgetgerecht.',
          points: ['Projektplanung & -steuerung', 'Beschaffungsmanagement', 'Lieferantenkoordination', 'Inbetriebnahme & Übergabe'],
        },
        {
          icon: '🏢',
          title: 'Immobilien',
          desc: 'Beratung für Gewerbe- und Industrieimmobilien – Standortauswahl, Due Diligence, Transaktionsbegleitung und Projektentwicklung.',
          points: ['Standortauswahl & Due Diligence', 'Transaktionsberatung', 'Industrielle Projektentwicklung', 'Investitionsanalyse'],
        },
        {
          icon: '🏭',
          title: 'Werksplanung & Fertigung',
          desc: 'Aufbau von Neuanlagen und Bestandswerken – Layoutplanung, Prozessentwicklung, Lieferantenauswahl und vollständiger Produktionshochlauf.',
          points: ['Fabrikplanung & -layout', 'Prozessentwicklung', 'Anlagen- & Lieferantenauswahl', 'Produktionshochlauf'],
        },
      ],
    },
    whyUs: {
      sectionLabel: 'Warum Gretias',
      title: 'Aufgebaut auf',
      titleAccent: 'Vertrauen & Ergebnissen',
      sub: 'Wir vereinen das Know-how von Brancheninsidern mit der Objektivität vertrauenswürdiger Berater.',
      items: [
        { icon: '🎯', title: 'Branchentiefe', desc: 'Jahrzehntelange Praxiserfahrung in Automotive, Bau, Immobilien und Fertigung.' },
        { icon: '🤝', title: 'Partnerschaftlicher Ansatz', desc: 'Wir arbeiten an Ihrer Seite – nicht nur mit Berichten. Ihr Erfolg ist unser Erfolg.' },
        { icon: '⚡', title: 'Umsetzungsorientiert', desc: 'Jedes Mandat endet mit Klarheit, einem konkreten Plan und einem klaren Weg nach vorne.' },
        { icon: '🔒', title: 'Vertrauenswürdig & diskret', desc: 'Vertrauliche Beratung von Anfang an. Ihre Interessen stehen im Mittelpunkt.' },
      ],
    },
    cta: {
      title: 'Bereit für den nächsten Schritt?',
      sub: 'Ob strategisches Review, Projektpartner oder unabhängige Expertenmeinung – sprechen Sie mit uns.',
      btn: 'Gespräch beginnen →',
    },
    about: {
      pageTitle: 'Über Gretias',
      hero: {
        sectionLabel: 'Über Gretias',
        title: 'Erfahrene Berater.',
        titleAccent: 'Praktische Ergebnisse.',
        sub: 'Gretias wurde gegründet, um die Lücke zwischen Strategie und Realität in Branchen zu schließen, in denen die Einsätze hoch und die Komplexität real sind.',
      },
      story: {
        sectionLabel: 'Unsere Geschichte',
        title: 'Aus der Praxis geboren –',
        titleAccent: 'nicht aus Lehrbüchern',
        p1: 'Gretias wurde von Praktikern aufgebaut, die jahrelang in der Automobilindustrie, bei Bauprojekten und auf Immobilienmärkten tätig waren – und verstehen, was funktioniert, was stockt und was Tabellen nicht erfassen.',
        p2: 'Wir haben zu viele Beratungsprojekte erlebt, die elegante Präsentationen lieferten, ohne den Teams Handlungssicherheit zu geben. Gretias existiert, um das Gegenteil zu tun – an der Seite der Führung zu arbeiten, Strategie in Aktion umzusetzen und für Ergebnisse einzustehen.',
        p3: 'Heute beraten wir Kunden in den Bereichen Automotive, schlüsselfertige Projekte, Immobilien sowie Werks- und Fertigungsberatung – mit der gleichen Sorgfalt und Offenheit bei jedem Mandat.',
        stats: [
          { label: 'Bediente Branchen', value: '4 Kernbereiche' },
          { label: 'Beratungsstil', value: 'Eingebettete Beratung' },
          { label: 'Geografie', value: 'Indien & global' },
          { label: 'Ansatz', value: 'Ergebnisorientiert' },
        ],
      },
      values: {
        sectionLabel: 'Unsere Werte',
        title: 'Was jedes Mandat',
        titleAccent: 'prägt',
        items: [
          { icon: '🎯', title: 'Präzision', desc: 'Wir gehen in die Tiefe, bevor wir in die Breite gehen. Jede Empfehlung basiert auf Belegen und Kontext.' },
          { icon: '🤝', title: 'Partnerschaft', desc: 'Wir arbeiten in Ihren Herausforderungen mit. Ihr Erfolg ist unser Maßstab für Erfolg.' },
          { icon: '🔍', title: 'Transparenz', desc: 'Ehrliche Beratung, auch wenn sie schwer zu hören ist. Keine Mehrdeutigkeiten, kein Fachjargon.' },
          { icon: '⚡', title: 'Momentum', desc: 'Wir handeln lieber als zu zögern. Erkenntnisse ohne Umsetzung sind wertlos.' },
        ],
      },
      approach: {
        sectionLabel: 'Unser Vorgehen',
        title: 'Wie wir',
        titleAccent: 'mit Ihnen arbeiten',
        steps: [
          { step: '01', title: 'Erkunden', desc: 'Wir beginnen damit, Ihr Unternehmen, die Branchendynamik und die spezifische Herausforderung zu verstehen – durch strukturierte Gespräche und Datenanalyse.' },
          { step: '02', title: 'Diagnostizieren', desc: 'Wir identifizieren die eigentlichen Ursachen, nicht nur die Symptome. Mit Branchenmethoden und unserer Sektorerfahrung zeigen wir, wo der wirkliche Hebel liegt.' },
          { step: '03', title: 'Gestalten', desc: 'Wir entwickeln eine praxistaugliche Strategie – eine, die die Kapazitäten Ihrer Organisation, die Marktgegebenheiten und die Zeitpläne berücksichtigt.' },
          { step: '04', title: 'Umsetzen', desc: 'Wir bleiben während der Umsetzung an Ihrer Seite, überwachen den Fortschritt und passen den Plan an, wenn sich die Bedingungen ändern.' },
        ],
      },
      cta: {
        title: 'Möchten Sie mit uns arbeiten?',
        sub: 'Schildern Sie uns Ihre Herausforderung. Wir sagen Ihnen ehrlich, ob und wie wir helfen können.',
        btn: 'Gespräch beginnen →',
      },
    },
    services: {
      sectionLabel: 'Leistungen',
      hero: {
        title: 'Vier Bereiche.',
        titleAccent: 'Ein vertrauenswürdiger Partner.',
        sub: 'Gretias verbindet tiefe Branchenerfahrung mit praktischer Beratung. Wir empfehlen nicht nur – wir helfen Ihnen voranzukommen.',
      },
      items: [
        {
          id: 'automotive',
          icon: '🚗',
          title: 'Automotive-Beratung',
          tagline: 'Für OEMs, Händler, Tier 1/2-Zulieferer und Automobilunternehmen',
          overview: 'Die Automobilbranche erlebt den bedeutendsten Wandel seit einem Jahrhundert – Elektrifizierung, softwaredefinierten Fahrzeuge, verändertes Verbraucherverhalten und Lieferkettenunterbrechungen. Gretias hilft Automobilunternehmen, diesen Wendepunkt mit klarer Strategie und praktischer Umsetzungsunterstützung zu navigieren.',
          offerings: [
            {
              title: 'Markt- & Geschäftsstrategie',
              points: ['Markteintritts- und Expansionsstrategie', 'Planung und Roadmap für E-Mobilität-Transition', 'Produkt- und Preisberatung', 'Strukturierung von Partnerschaften und Joint Ventures'],
            },
            {
              title: 'Operations & Lieferkette',
              points: ['Lieferkettenresilienz und -optimierung', 'Fertigungsprozessdiagnose', 'Lean-Implementierung und Verschwendungsreduzierung', 'Händlerbetriebseffizienz'],
            },
            {
              title: 'Digital & Innovation',
              points: ['Technologiebereitschaftsbewertungen', 'Roadmaps für digitale Transformation', 'Connected-Vehicle- und Datenstrategie', 'Modernisierung von Altsystemen'],
            },
          ],
        },
        {
          id: 'turnkey',
          icon: '🏗️',
          title: 'Schlüsselfertige Projekte',
          tagline: 'Für industrielle, gewerbliche und infrastrukturelle Projektabwicklung',
          overview: 'Komplexe Projekte scheitern nicht an der falschen Vision, sondern an mangelhafter Umsetzung. Gretias bietet End-to-End-Projektmanagement und Delivery-Beratung – vom ersten Konzept und Design über Beschaffung, Bau, Inbetriebnahme bis zur Übergabe.',
          offerings: [
            {
              title: 'Projektmanagement',
              points: ['Projektplanung, -terminierung und Meilensteine', 'Kostenkontrolle und Budgetmanagement', 'Risikoidentifikation und -minderung', 'Stakeholder- und Auftragnehmersteuerung'],
            },
            {
              title: 'Beschaffung & Lieferanten',
              points: ['Lieferantenidentifikation und -qualifizierung', 'Vertragsverhandlung und -management', 'Beschaffungsstrategie und -umsetzung', 'Qualitätssicherung und -überwachung'],
            },
            {
              title: 'Inbetriebnahme & Übergabe',
              points: ['Pre-Commissioning- und Testprotokolle', 'Mängellisten und -behebung', 'Dokumentation und As-Built-Unterlagen', 'Schulung und Wissenstransfer'],
            },
          ],
        },
        {
          id: 'realestate',
          icon: '🏢',
          title: 'Immobilien',
          tagline: 'Für Investoren, Entwickler und industrielle Nutzer',
          overview: 'Immobilienentscheidungen sind langfristig und kapitalintensiv. Ob Grundstückserwerb für ein Werk, Anmietung von Gewerbeflächen oder Entwicklung eines Industrieparks – Gretias bringt branchenspezifisches Know-how in jede Transaktion und jedes Projekt.',
          offerings: [
            {
              title: 'Transaktionsberatung',
              points: ['Käufer- und Verkäuferberatung', 'Mietverhandlung und -strukturierung', 'Bewertung und Marktanalyse', 'Investitions-Due-Diligence'],
            },
            {
              title: 'Standortauswahl',
              points: ['Lage- und Anbindungsanalyse', 'Beurteilung von Bebauungsrecht und Regulierung', 'Infrastruktur- und Versorgungsprüfung', 'Vergleichende Standortbewertung'],
            },
            {
              title: 'Projektentwicklungsberatung',
              points: ['Projektmachbarkeit und Finanzmodellierung', 'Genehmigungsnavigation', 'Koordination von Entwickler und Auftragnehmer', 'Industriepark- und Logistik-Hub-Beratung'],
            },
          ],
        },
        {
          id: 'manufacturing',
          icon: '🏭',
          title: 'Werksplanung & Fertigungsberatung',
          tagline: 'Für Neuanlagen und Bestandswerke',
          overview: 'Der Aufbau einer Fertigungsanlage ist eine der kapitalintensivsten Entscheidungen eines Unternehmens. Gretias hilft Unternehmen, es richtig zu machen – von der Standortauswahl und Layoutplanung über Prozess-Engineering, Anlagenbeschaffung, Compliance bis zum Produktionshochlauf.',
          offerings: [
            {
              title: 'Werksplanung',
              points: ['Machbarkeit von Neuanlagen und Bestandswerken', 'Fabrik-Layout und Materialflussplanung', 'Kapazitätsplanung und Skalierbarkeit', 'Versorgungs- und Infrastrukturanforderungen'],
            },
            {
              title: 'Prozess & Qualität',
              points: ['Fertigungsprozessdesign und -optimierung', 'Qualitätsmanagementsystem-Implementierung', 'IATF / ISO-Bereitschaft und Compliance', 'Ausschussreduzierung und Ausbeuteverbesserung'],
            },
            {
              title: 'Lieferanten & Anlagen',
              points: ['Anlagenauswahl und -spezifikation', 'Lieferantenqualifizierung und -entwicklung', 'APQP- und PPAP-Beratung', 'Betrieblicher Hochlauf und Serienanlauf'],
            },
          ],
        },
      ],
      cta: {
        title: 'Nicht sicher, wo Sie anfangen sollen?',
        sub: 'Schildern Sie uns Ihre Herausforderung in einer kurzen Nachricht und wir melden uns mit einer ehrlichen Einschätzung, wie wir helfen können.',
        btn: 'Kontakt aufnehmen →',
      },
    },
    contact: {
      sectionLabel: 'Kontakt',
      hero: {
        title: 'Sprechen',
        titleAccent: 'wir.',
        sub: 'Schildern Sie uns, woran Sie arbeiten. Wir melden uns innerhalb von 24 Stunden mit einer ehrlichen Einschätzung.',
      },
      form: {
        name: 'Ihr Name',
        namePlaceholder: 'Max Mustermann',
        email: 'Geschäftliche E-Mail',
        emailPlaceholder: 'max@unternehmen.de',
        company: 'Unternehmen / Organisation',
        companyPlaceholder: 'Mustermann GmbH',
        service: 'Gewünschte Leistung',
        servicePlaceholder: 'Leistung auswählen...',
        message: 'Ihre Nachricht',
        messagePlaceholder: 'Schildern Sie uns Ihre Herausforderung oder womit Sie Hilfe benötigen...',
        send: 'Nachricht senden →',
        sending: 'Wird gesendet...',
        successTitle: 'Nachricht erhalten!',
        successSub: 'Wir melden uns innerhalb von 24 Stunden.',
        error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.',
        services: ['Automotive-Beratung', 'Schlüsselfertige Projekte', 'Immobilien', 'Werksplanung & Fertigungsberatung', 'Noch nicht sicher'],
      },
      info: {
        directTitle: 'Direktkontakt',
        expectTitle: 'Was Sie erwarten können',
        expect: [
          'Wir antworten innerhalb von 24 Stunden an Werktagen',
          'Das erste Gespräch ist immer unverbindlich',
          'Wir sagen Ihnen ehrlich, wenn wir nicht die richtige Wahl sind',
          'Vertraulichkeit wird von Anfang an ernst genommen',
        ],
        servicesTitle: 'Unsere Leistungen',
        servicesList: ['🚗 Automotive-Beratung', '🏗️ Schlüsselfertige Projekte', '🏢 Immobilien', '🏭 Werksplanung & Fertigung'],
      },
    },
    footer: {
      tagline: 'Strategische Beratung für Automotive, schlüsselfertige Projekte, Immobilien und Werks- & Fertigungsberatung.',
      nav: 'Navigation',
      getInTouch: 'Kontakt aufnehmen',
      initiative: 'Eine',
      initiativeLink: 'Gnosiso Labs',
      initiativeSuffix: 'Initiative',
      copyright: 'Alle Rechte vorbehalten.',
      builtBy: 'Erstellt von Gnosiso Labs',
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      contact: 'Contact',
      cta: 'Nous contacter',
    },
    hero: {
      badge: 'Conseil Stratégique & Advisory',
      slides: [
        {
          title: 'Conseil Automobile',
          sub: 'Conseil stratégique — de l\'atelier au comité de direction. Pour les OEM, fournisseurs et concessionnaires.',
          service: 'Automobile',
        },
        {
          title: 'Projets Clés en Main',
          sub: 'Livraison complète — conception, ingénierie, construction et mise en service.',
          service: 'Clés en Main',
        },
        {
          title: 'Immobilier',
          sub: 'Conseil en immobilier commercial et industriel — de la sélection de site à la signature.',
          service: 'Immobilier',
        },
        {
          title: 'Implantation Industrielle',
          sub: 'Du terrain vierge à la pleine production — conseil, planification et montée en cadence.',
          service: 'Industrie',
        },
      ],
      explore: 'Découvrir nos services',
      talk: 'Nous parler',
    },
    stats: [
      { value: '20+', label: 'Années d\'expérience sectorielle' },
      { value: '4', label: 'Verticales de spécialisation' },
      { value: '60+', label: 'Projets livrés' },
      { value: '100%', label: 'Approche client d\'abord' },
    ],
    homeServices: {
      sectionLabel: 'Nos Services',
      title: 'Quatre Piliers d\'',
      titleAccent: 'Expertise',
      sub: 'Spécialisation approfondie dans les secteurs qui font avancer le monde.',
      viewAll: 'Voir tous les services →',
      items: [
        {
          icon: '🚗',
          title: 'Conseil Automobile',
          desc: 'Conseil stratégique pour les OEM, concessionnaires et entreprises automobiles — de la transition électrique à l\'expansion de marché et à l\'optimisation du réseau de distribution.',
          points: ['Planification de la transition EV', 'Optimisation de la chaîne d\'approvisionnement', 'Stratégie d\'entrée sur le marché', 'Conseil réseau de distribution'],
        },
        {
          icon: '🏗️',
          title: 'Projets Clés en Main',
          desc: 'Exécution complète de projets — de la conception et du design jusqu\'à la mise en service et la livraison — dans les délais et le budget impartis.',
          points: ['Planification et exécution de projet', 'Gestion des achats', 'Coordination fournisseurs', 'Mise en service et livraison'],
        },
        {
          icon: '🏢',
          title: 'Immobilier',
          desc: 'Conseil en immobilier commercial et industriel — sélection de sites, due diligence, accompagnement transactionnel et conseil en développement.',
          points: ['Sélection de site & due diligence', 'Conseil en transactions', 'Développement industriel', 'Analyse d\'investissement'],
        },
        {
          icon: '🏭',
          title: 'Implantation Industrielle',
          desc: 'Mise en place d\'usines nouvelles ou existantes — planification du layout, ingénierie des procédés, sélection d\'équipements et montée en cadence.',
          points: ['Planification et layout d\'usine', 'Ingénierie des procédés', 'Sélection d\'équipements et fournisseurs', 'Montée en production'],
        },
      ],
    },
    whyUs: {
      sectionLabel: 'Pourquoi Gretias',
      title: 'Fondés sur la',
      titleAccent: 'Confiance & les Résultats',
      sub: 'Nous apportons la profondeur des experts sectoriels et l\'objectivité de conseillers de confiance.',
      items: [
        { icon: '🎯', title: 'Expertise Sectorielle', desc: 'Des décennies d\'expérience pratique en automobile, construction, immobilier et fabrication.' },
        { icon: '🤝', title: 'Esprit Partenariat', desc: 'Nous travaillons à vos côtés — pas seulement avec des rapports. Votre succès est notre succès.' },
        { icon: '⚡', title: 'Résultats Concrets', desc: 'Chaque mission se termine avec clarté, un plan concret et une feuille de route.' },
        { icon: '🔒', title: 'Confiance & Discrétion', desc: 'Conseil confidentiel dès le premier jour. Vos intérêts guident chaque recommandation.' },
      ],
    },
    cta: {
      title: 'Prêt à avancer ?',
      sub: 'Qu\'il s\'agisse d\'une revue stratégique, d\'un partenaire de projet ou d\'un avis expert — parlons-en.',
      btn: 'Démarrer la conversation →',
    },
    about: {
      pageTitle: 'À propos de Gretias',
      hero: {
        sectionLabel: 'À propos de Gretias',
        title: 'Des conseillers expérimentés.',
        titleAccent: 'Des résultats concrets.',
        sub: 'Gretias a été fondé pour combler le fossé entre la stratégie et la réalité dans des secteurs où les enjeux sont élevés et la complexité réelle.',
      },
      story: {
        sectionLabel: 'Notre Histoire',
        title: 'Nés de l\'industrie —',
        titleAccent: 'pas des manuels',
        p1: 'Gretias a été fondé par des praticiens ayant passé des années dans l\'industrie automobile, la gestion de projets de construction et les marchés immobiliers — comprenant ce qui fonctionne, ce qui bloque et ce que les tableurs ne capturent pas.',
        p2: 'Nous avons vu trop de missions de conseil livrer de beaux présentations sans donner aux équipes les moyens d\'agir. Gretias existe pour faire le contraire — travailler aux côtés de la direction, traduire la stratégie en action et rester responsable des résultats.',
        p3: 'Aujourd\'hui, nous accompagnons des clients dans le conseil automobile, les projets clés en main, l\'immobilier et le conseil en implantation industrielle — avec la même rigueur et la même franchise pour chaque mission.',
        stats: [
          { label: 'Secteurs couverts', value: '4 verticales clés' },
          { label: 'Style de mission', value: 'Advisory intégré' },
          { label: 'Géographie', value: 'Inde & monde' },
          { label: 'Approche', value: 'Axée résultats' },
        ],
      },
      values: {
        sectionLabel: 'Nos Valeurs',
        title: 'Ce qui guide',
        titleAccent: 'chaque mission',
        items: [
          { icon: '🎯', title: 'Précision', desc: 'Nous allons en profondeur avant d\'aller en largeur. Chaque recommandation est ancrée dans les faits et le contexte.' },
          { icon: '🤝', title: 'Partenariat', desc: 'Nous nous impliquons dans vos défis. Votre succès est notre mesure du succès.' },
          { icon: '🔍', title: 'Transparence', desc: 'Un conseil honnête, même difficile à entendre. Pas d\'ambiguïté, pas de jargon.' },
          { icon: '⚡', title: 'Dynamisme', desc: 'Nous privilégions l\'action. Les insights sans exécution ne valent rien.' },
        ],
      },
      approach: {
        sectionLabel: 'Notre Approche',
        title: 'Comment nous',
        titleAccent: 'travaillons avec vous',
        steps: [
          { step: '01', title: 'Découvrir', desc: 'Nous commençons par comprendre votre entreprise, la dynamique sectorielle et le défi spécifique — à travers des entretiens structurés et une analyse des données.' },
          { step: '02', title: 'Diagnostiquer', desc: 'Nous cartographions les causes profondes, pas seulement les symptômes. En utilisant des cadres sectoriels et notre expérience, nous identifions où se trouve le vrai levier.' },
          { step: '03', title: 'Concevoir', desc: 'Nous élaborons une stratégie pratique — une qui tient compte de la capacité de votre organisation, des réalités du marché et des délais.' },
          { step: '04', title: 'Livrer', desc: 'Nous restons à vos côtés tout au long de l\'exécution, en suivant les progrès et en adaptant le plan à l\'évolution des conditions.' },
        ],
      },
      cta: {
        title: 'Vous souhaitez travailler avec nous ?',
        sub: 'Parlez-nous de votre défi. Nous vous dirons honnêtement si et comment nous pouvons vous aider.',
        btn: 'Démarrer la conversation →',
      },
    },
    services: {
      sectionLabel: 'Services',
      hero: {
        title: 'Quatre verticales.',
        titleAccent: 'Un partenaire de confiance.',
        sub: 'Gretias opère à l\'intersection de la profondeur sectorielle et du conseil pratique. Nous ne recommandons pas seulement — nous vous aidons à avancer.',
      },
      items: [
        {
          id: 'automotive',
          icon: '🚗',
          title: 'Conseil Automobile',
          tagline: 'Pour les OEM, concessionnaires, fournisseurs Tier 1/2 et entreprises automobiles',
          overview: 'Le secteur automobile connaît sa transformation la plus significative depuis un siècle — électrification, véhicules définis par logiciel, évolution des comportements consommateurs et perturbations de la chaîne d\'approvisionnement. Gretias aide les entreprises automobiles à naviguer ce tournant avec une stratégie lucide et un soutien à l\'exécution.',
          offerings: [
            {
              title: 'Marché & Stratégie d\'Entreprise',
              points: ['Stratégie d\'entrée et d\'expansion sur le marché', 'Planification et feuille de route de transition EV', 'Conseil en portefeuille produits et prix', 'Structuration de partenariats et joint-ventures'],
            },
            {
              title: 'Opérations & Chaîne d\'Approvisionnement',
              points: ['Résilience et optimisation de la chaîne d\'approvisionnement', 'Diagnostic des processus de fabrication', 'Mise en œuvre du lean et réduction des gaspillages', 'Efficacité des opérations de concession'],
            },
            {
              title: 'Digital & Innovation',
              points: ['Évaluations de maturité technologique', 'Feuilles de route de transformation digitale', 'Stratégie véhicule connecté et données', 'Modernisation des systèmes existants'],
            },
          ],
        },
        {
          id: 'turnkey',
          icon: '🏗️',
          title: 'Projets Clés en Main',
          tagline: 'Pour la livraison de projets industriels, commerciaux et d\'infrastructure',
          overview: 'Les projets complexes échouent non pas parce que la vision est mauvaise, mais parce que l\'exécution est mal gérée. Gretias fournit une gestion de projet et un conseil en livraison de bout en bout — de la conception initiale à la remise des clés.',
          offerings: [
            {
              title: 'Gestion de Projet',
              points: ['Planification, jalonnement et calendrier', 'Contrôle des coûts et gestion budgétaire', 'Identification et atténuation des risques', 'Gestion des parties prenantes et des entrepreneurs'],
            },
            {
              title: 'Achats & Fournisseurs',
              points: ['Identification et qualification des fournisseurs', 'Négociation et gestion des contrats', 'Stratégie et exécution des achats', 'Assurance qualité et supervision'],
            },
            {
              title: 'Mise en Service & Livraison',
              points: ['Protocoles de pré-commissioning et de tests', 'Gestion et résolution des réserves', 'Documentation et plans de recollement', 'Formation et transfert de compétences'],
            },
          ],
        },
        {
          id: 'realestate',
          icon: '🏢',
          title: 'Immobilier',
          tagline: 'Pour les investisseurs, promoteurs et utilisateurs industriels',
          overview: 'Les décisions immobilières sont durables et capitalistiques. Que vous acquériez un terrain pour une usine, louiez des locaux commerciaux ou développiez un parc industriel, Gretias apporte une expertise sectorielle à chaque transaction et projet.',
          offerings: [
            {
              title: 'Conseil en Transactions',
              points: ['Conseil côté acheteur et vendeur', 'Négociation et structuration de baux', 'Évaluation et analyse de marché', 'Due diligence d\'investissement'],
            },
            {
              title: 'Sélection de Site',
              points: ['Analyse de localisation et de connectivité', 'Évaluation du zonage et de la réglementation', 'Revue des infrastructures et des réseaux', 'Évaluation comparative de sites'],
            },
            {
              title: 'Conseil en Développement',
              points: ['Faisabilité et modélisation financière', 'Navigation des permis et autorisations', 'Coordination promoteur et entrepreneur', 'Conseil parc industriel et hub logistique'],
            },
          ],
        },
        {
          id: 'manufacturing',
          icon: '🏭',
          title: 'Conseil en Implantation Industrielle',
          tagline: 'Pour les sites industriels greenfield et brownfield',
          overview: 'La mise en place d\'une installation de fabrication est l\'une des décisions les plus capitalistiques qu\'une entreprise puisse prendre. Gretias aide les entreprises à bien faire — de la sélection du site et de la conception du layout à l\'ingénierie des procédés, l\'approvisionnement en équipements, la conformité et la montée en production.',
          offerings: [
            {
              title: 'Planification d\'Usine',
              points: ['Faisabilité greenfield et brownfield', 'Layout d\'usine et conception des flux matières', 'Planification des capacités et évolutivité', 'Besoins en infrastructures et réseaux'],
            },
            {
              title: 'Procédés & Qualité',
              points: ['Conception et optimisation des procédés de fabrication', 'Mise en place du système de management de la qualité', 'Conformité IATF / ISO', 'Réduction des rebuts et amélioration des rendements'],
            },
            {
              title: 'Fournisseurs & Équipements',
              points: ['Sélection et spécification des équipements', 'Qualification et développement des fournisseurs', 'Conseil APQP et PPAP', 'Montée en cadence et lancement en série'],
            },
          ],
        },
      ],
      cta: {
        title: 'Vous ne savez pas par où commencer ?',
        sub: 'Dites-nous votre défi en quelques mots et nous vous répondrons avec une vision honnête de comment nous pouvons vous aider.',
        btn: 'Nous contacter →',
      },
    },
    contact: {
      sectionLabel: 'Contact',
      hero: {
        title: 'Parlons-',
        titleAccent: 'en.',
        sub: 'Dites-nous ce sur quoi vous travaillez. Nous vous répondrons dans les 24 heures avec une vision honnête de comment nous pouvons vous aider.',
      },
      form: {
        name: 'Votre nom',
        namePlaceholder: 'Jean Dupont',
        email: 'E-mail professionnel',
        emailPlaceholder: 'jean@entreprise.fr',
        company: 'Entreprise / Organisation',
        companyPlaceholder: 'Entreprise Dupont SA',
        service: 'Service souhaité',
        servicePlaceholder: 'Sélectionner un service...',
        message: 'Votre message',
        messagePlaceholder: 'Parlez-nous de votre défi ou de ce avec quoi vous avez besoin d\'aide...',
        send: 'Envoyer le message →',
        sending: 'Envoi en cours...',
        successTitle: 'Message reçu !',
        successSub: 'Nous vous répondrons dans les 24 heures.',
        error: 'Une erreur s\'est produite. Veuillez réessayer ou nous écrire directement.',
        services: ['Conseil Automobile', 'Projets Clés en Main', 'Immobilier', 'Conseil en Implantation Industrielle', 'Pas encore sûr'],
      },
      info: {
        directTitle: 'Contact Direct',
        expectTitle: 'Ce à quoi vous attendre',
        expect: [
          'Nous répondons dans les 24 heures les jours ouvrables',
          'Le premier appel est toujours sans engagement',
          'Nous vous dirons honnêtement si nous ne sommes pas le bon choix',
          'La confidentialité est prise au sérieux dès le premier jour',
        ],
        servicesTitle: 'Nos Services',
        servicesList: ['🚗 Conseil Automobile', '🏗️ Projets Clés en Main', '🏢 Immobilier', '🏭 Implantation Industrielle'],
      },
    },
    footer: {
      tagline: 'Conseil stratégique pour l\'automobile, les projets clés en main, l\'immobilier et le conseil en implantation industrielle.',
      nav: 'Navigation',
      getInTouch: 'Nous contacter',
      initiative: 'Une initiative',
      initiativeLink: 'Gnosiso Labs',
      initiativeSuffix: '',
      copyright: 'Tous droits réservés.',
      builtBy: 'Créé par Gnosiso Labs',
    },
  },
}

export type Translations = typeof translations.en
export function t(lang: Lang): Translations {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return translations[lang] as any
}
