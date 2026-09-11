export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  software: string[];
  heroImage: string;
  gallery: {
    url: string;
    caption: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  materials: string[];
  designHighlights: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientType: string;
  location: string;
  image: string;
}

export interface SiteStoryStep {
  step: string;
  title: string;
  description: string;
  image: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "SAIF ALI KHAN",
    title: "Interior Designer",
    tagline: "Designing spaces where aesthetics, functionality and execution come together.",
    subTitle: "Civil Engineering Graduate | Interior Design | 3D Visualization | Site Execution",
    aboutMe: "I am a civil engineering graduate with a strong passion for interior and architectural design. I specialize in planning functional spaces, preparing accurate drawings, and visualizing interiors that balance aesthetics, comfort, and practicality. I have a strong interest in construction site execution along with designing, and I enjoy understanding how designs are practically implemented on site. As an experienced interior designer, I am highly motivated to learn, adapt, and continuously enhance my design and technical skills while contributing creatively to projects.",
    credentials: [
      {
        number: "01",
        title: "Functional Space Planning",
        description: "Translating architectural footprints into ergonomically optimized, practical living layouts with zero wasted circulation."
      },
      {
        number: "02",
        title: "3D Interior Visualization",
        description: "Producing photorealistic renders with SketchUp, Lumion, and Enscape to bring materials, lighting, and volumes vividly to life."
      },
      {
        number: "03",
        title: "Practical Site Execution",
        description: "Leveraging civil engineering principles, material science (BWP, HDMR), and direct carpenter coordination for flawless site handover."
      }
    ],
    education: [
      {
        degree: "B.Tech in Civil Engineering",
        institution: "QUBA College of Engineering & Technology, Nellore",
        period: "2014 – 2018",
        highlights: "Awarded Best Student of the Year, Professional Safety Development & Class Leadership."
      }
    ],
    contact: {
      phone: "+91 77991 18561",
      phoneRaw: "+917799118561",
      email: "saif.khan16396@gmail.com",
      address: "# 301, 2nd floor Swathi Complex, Near Gandhi Bomma Center, Nellore - 524001, Andhra Pradesh",
      locationName: "Nellore, Andhra Pradesh",
      whatsappUrl: "https://wa.me/917799118561?text=Hello%20Saif,%20I%20would%20like%20to%20discuss%20an%20interior%20project."
    }
  },

  projects: [
    {
      id: "modular-kitchen",
      number: "01",
      title: "MODULAR KITCHEN",
      category: "Modular Kitchen Design",
      shortDescription: "A modern contemporary kitchen defined by bold volumes, sharp lines, and a striking monochrome palette with warm timber accents.",
      fullDescription: "A modern contemporary residence defined by bold volumes and sharp lines, finished in a monochrome palette of white, charcoal grey, and black, complemented by warm wooden screens and subtle accent textures for contrast and depth. Featuring ergonomic work triangle geometry, dual-finish base cabinets, and deep open shelving.",
      software: ["SketchUp", "Lumion"],
      heroImage: "/images/projects/modular-kitchen-main.jpg",
      gallery: [
        {
          url: "/images/projects/modular-kitchen-main.jpg",
          caption: "Primary front elevation displaying monochrome cabinetry, hexagonal backsplash tiles, and teak accent overhead lofts."
        },
        {
          url: "/images/projects/modular-kitchen-angle.jpg",
          caption: "Wide perspective showing breakfast counter with bar stool seating and direct seamless connection to living spaces."
        }
      ],
      specifications: [
        { label: "Layout Type", value: "L-Shaped with Peninsula Counter" },
        { label: "Carcass Material", value: "BWP (Boiling Water Proof) Marine Grade Plywood" },
        { label: "Shutters Finish", value: "Dual Tone Charcoal & White Acrylic Laminate" },
        { label: "Backsplash", value: "Ceramic Geometric Hexagonal Tiles with Black Marble Dado" },
        { label: "Countertop", value: "Solid Jet Black Granite with Chamfered Edges" }
      ],
      materials: [
        "BWP Marine Plywood",
        "High-Gloss & Matte Laminates",
        "Natural Teakwood Louvers",
        "Hexagonal Ceramic Tile Backsplash",
        "Polished Black Marble Edge"
      ],
      designHighlights: [
        "Monochrome aesthetic pairing crisp white drawers with rich charcoal frames",
        "Custom warm teak niche unit for quick-access condiments and decor",
        "Integrated dual window apertures maximizing natural daylight across countertops",
        "Zero-gap loft-to-ceiling alignment minimizing dust accumulation"
      ]
    },
    {
      id: "master-bedroom",
      number: "02",
      title: "MASTER BEDROOM",
      category: "Bedroom Design",
      shortDescription: "Luxurious master suite featuring vitrified marble-finish flooring, PU-finished arched wardrobe shutters, and warm cove lighting.",
      fullDescription: "Modern bedroom featuring vitrified marble-finish flooring, upholstered bed with marble-panel headboard and LED lighting. Designed with PU-finished arched wardrobe shutters, MDF fluted wall panels, and gypsum false ceiling with warm cove lighting. A serene private sanctuary pairing organic arches with refined architectural lines.",
      software: ["SketchUp", "Enscape"],
      heroImage: "/images/projects/master-bedroom-main.jpg",
      gallery: [
        {
          url: "/images/projects/master-bedroom-main.jpg",
          caption: "Main bedroom perspective highlighting the bespoke upholstered bed, marble headboard panel, and fluted accent wall."
        },
        {
          url: "/images/projects/master-bedroom-tv.jpg",
          caption: "Entertainment wall elevation featuring backlit Statuario marble panel and floating mauve lacquer console."
        },
        {
          url: "/images/projects/master-bedroom-wardrobe.jpg",
          caption: "Detailed view of the continuous PU-finished arched wardrobe shutters and integrated window daybed nook."
        }
      ],
      specifications: [
        { label: "Flooring", value: "High-Gloss Vitrified Marble-Finish Tiles" },
        { label: "Wardrobe Shutters", value: "PU-Finished Arched Profiles in Lavender Sheen" },
        { label: "Ceiling", value: "Gypsum False Ceiling with Circular Cove & LED Strip" },
        { label: "Wall Paneling", value: "MDF Fluted Vertical Panels with Matte Finish" },
        { label: "Headboard", value: "Backlit Calacatta Gold Marble Slab with Fluted Trim" }
      ],
      materials: [
        "PU Lacquered Panels",
        "MDF Fluted Slats",
        "Vitrified Marble Slabs",
        "Gypsum Ceiling Board",
        "Warm 3000K Concealed LEDs"
      ],
      designHighlights: [
        "Architectural arched motif carried across wardrobe shutters and window daybed",
        "Floating entertainment console paired with floor-to-ceiling marble feature panel",
        "Organic curved ceiling cove casting a gentle, glare-free ambient glow",
        "Integrated cozy window daybed with discreet under-seat storage drawers"
      ]
    },
    {
      id: "c-bedroom",
      number: "03",
      title: "C-BEDROOM",
      category: "Bedroom Design",
      shortDescription: "Contemporary bedroom with high-gloss acrylic modular wardrobes, pastel laminate accents, and integrated LED ceiling geometry.",
      fullDescription: "The interior features a modular wardrobe in high-gloss acrylic finish on MDF, with soft pastel laminate accents. The ceiling is finished with gypsum board and integrated LED strip lighting, while the flooring uses marble-finish vitrified tiles for a clean, modern look. Complete with a tailored vanity station and arched dressing mirror.",
      software: ["SketchUp", "Enscape"],
      heroImage: "/images/projects/c-bedroom-main.jpg",
      gallery: [
        {
          url: "/images/projects/c-bedroom-main.jpg",
          caption: "Primary view showcasing full-height high-gloss acrylic wardrobe, arched dual-tone motifs, and linear LED ceiling."
        },
        {
          url: "/images/projects/c-bedroom-angle.jpg",
          caption: "Close-up of the wardrobe display niche, open vertical shelving, and tailored bed placement."
        },
        {
          url: "/images/projects/c-bedroom-vanity.jpg",
          caption: "Dresser nook featuring fluted acoustic back-panel, floating console, and arched vanity mirror with halo lighting."
        }
      ],
      specifications: [
        { label: "Wardrobe Finish", value: "High-Gloss Acrylic on Engineered MDF" },
        { label: "Accent Colors", value: "Soft Lilac Pastel with Cream Arch Insets" },
        { label: "Dressing Area", value: "Arched Backlit Mirror with Slatted Wall Backdrop" },
        { label: "Ceiling Detailing", value: "Linear Recessed LED Aluminum Profile Channels" },
        { label: "Flooring", value: "Marble-Finish Vitrified Porcelain Tiles" }
      ],
      materials: [
        "High-Gloss Acrylic Sheets",
        "Pastel Matte Laminates",
        "Moisture-Resistant MDF",
        "Aluminum LED Profiles",
        "Vitrified Porcelain Tiles"
      ],
      designHighlights: [
        "Geometric linear ceiling channels creating a futuristic yet cozy ambience",
        "Integrated reading and display tower beside the main wardrobe",
        "Bespoke makeup/vanity station fitting compactly into dedicated corner geometry",
        "Durable acrylic surfaces resistant to scuffs and moisture"
      ]
    },
    {
      id: "modern-kitchen",
      number: "04",
      title: "MODERN KITCHEN",
      category: "Modular Kitchen Design",
      shortDescription: "Custom modular kitchen crafted with 100% BWP plywood carcass, vertical grooved shutters, and black marble backsplash.",
      fullDescription: "The kitchen features laminated shutters with vertical grooved finish for base, wall, and tall unit lofts. Carcass made with BWP plywood, finished with matte & glossy laminates, paired with a black marble-finish backsplash for contrast. Engineered for high moisture resistance and heavy daily culinary use.",
      software: ["SketchUp", "Enscape"],
      heroImage: "/images/projects/modern-kitchen-main.jpg",
      gallery: [
        {
          url: "/images/projects/modern-kitchen-main.jpg",
          caption: "Main view showing refreshing aqua grooved cabinetry, coral upper storage, black marble dado, and wicker vegetable baskets."
        },
        {
          url: "/images/projects/modern-kitchen-fridge.jpg",
          caption: "Appliance integration elevation with French door refrigerator enclosure, tall larder, and glass crockery unit."
        }
      ],
      specifications: [
        { label: "Carcass Core", value: "100% BWP (Boiling Water Proof) 710 Plywood" },
        { label: "Base & Wall Shutters", value: "Vertical CNC Grooved Matte Aqua Laminate" },
        { label: "Accent Cabinetry", value: "Crimson Coral Gloss Laminate Overhead Units" },
        { label: "Backsplash & Counter", value: "Black Marquina Marble-Finish Quartz Surface" },
        { label: "Hardware & Fittings", value: "Tandem Drawers, Soft-Close Hinges, Wicker Baskets" }
      ],
      materials: [
        "Marine Grade BWP Plywood",
        "CNC Fluted Laminates",
        "Black Marquina Quartz",
        "Wicker Storage Pull-Outs",
        "Smoked Glass & Aluminum Frame"
      ],
      designHighlights: [
        "Fluted tactile grooving on lower and loft cabinetry preventing flat monotone surfaces",
        "Built-in wicker basket pull-outs providing optimal ventilation for onions and potatoes",
        "Dedicated appliance garage and microwave tower housing built-in convection ovens",
        "High-contrast black Marquina dado protecting against grease and heavy cooking stains"
      ]
    },
    {
      id: "living-room",
      number: "05",
      title: "LIVING ROOM",
      category: "Living Room Design",
      shortDescription: "Grand architectural living space finished with Italian marble, matte black fluted paneling, and a Statuario marble TV backdrop.",
      fullDescription: "Modern living space finished with Italian marble flooring, a marble-finish TV back panel, and vertical fluted MDF wall paneling in matte black. The ceiling features gypsum false ceiling with cove and recessed LED lighting, paired with wood veneer laminate cabinetry, glass partitions with metal accents, and warm ambient lighting fixtures.",
      software: ["SketchUp", "Enscape"],
      heroImage: "/images/projects/living-room-main.jpg",
      gallery: [
        {
          url: "/images/projects/living-room-main.jpg",
          caption: "Grand perspective showing Italian marble flooring, dual TV media wall, geometric glass dividers, and sectional sofa."
        }
      ],
      specifications: [
        { label: "Flooring", value: "Polished Italian Travertine / Botticino Marble" },
        { label: "TV Accent Wall", value: "Backlit Statuario Marble Panel with Rich Walnut Wings" },
        { label: "Wall Cladding", value: "Matte Black & Rich Wood Fluted MDF Paneling" },
        { label: "Partitioning", value: "Geometric Mirror Glass & Powder-Coated Metal Screen" },
        { label: "Ceiling", value: "Layered Gypsum False Ceiling with Cove Perimeter" }
      ],
      materials: [
        "Italian Natural Marble",
        "Statuario Marble Slabs",
        "Fluted Black MDF Panels",
        "Natural Walnut Veneer",
        "Beveled Bronze Mirror & Glass"
      ],
      designHighlights: [
        "Dual-level ceiling design defining the conversation area and circulation paths",
        "Custom fluted black timber paneling framing the floor-to-ceiling focal wall",
        "Beveled mirror grid partition maintaining visual openness while separating private rooms",
        "Low-slung modular L-shaped sofa maximizing viewing comfort and seating capacity"
      ]
    },
    {
      id: "island-kitchen",
      number: "06",
      title: "ISLAND KITCHEN & SUITE",
      category: "Modular Kitchen & Suite",
      shortDescription: "Contemporary open-concept island kitchen with waterfall black marble counter, timber ceiling rafters, and adjoining suite.",
      fullDescription: "Open-concept island kitchen featuring a waterfall black marble breakfast counter with bar stool seating and wooden ceiling rafters, seamlessly connected to modern living zones and a vibrant butterfly-themed contemporary bedroom suite.",
      software: ["SketchUp", "Enscape"],
      heroImage: "/images/projects/island-kitchen-main.jpg",
      gallery: [
        {
          url: "/images/projects/island-kitchen-main.jpg",
          caption: "Central island counter with waterfall marble edge, overhead timber beam trellis, and pendant light rings."
        },
        {
          url: "/images/projects/butterfly-bedroom-main.jpg",
          caption: "Adjoining butterfly-themed contemporary suite featuring botanical wallpaper, soft pink accents, and cove illumination."
        }
      ],
      specifications: [
        { label: "Island Concept", value: "Dual Breakfast Bar & Culinary Prep Station" },
        { label: "Ceiling Rafters", value: "Exposed Teak Finish Acoustic Wood Trellis" },
        { label: "Counter Surface", value: "Polished Black Marquina Waterfall Slab" },
        { label: "Pendant Fixtures", value: "Suspended Warm Minimalist Linear Rings" },
        { label: "Suite Feature", value: "Custom Illustrated Butterfly Accent Wall" }
      ],
      materials: [
        "Black Waterfall Quartz",
        "Engineered Timber Rafters",
        "Laminate Storage Islands",
        "Custom Vinyl Accent Wall Murals",
        "Integrated Cove Strips"
      ],
      designHighlights: [
        "Dramatic waterfall island counter serving as an informal breakfast dining hub",
        "Suspended sculptural illumination creating evening mood lighting",
        "Integrated tall pantry cabinets concealing appliances behind uniform surfaces",
        "Playful butterfly-themed bedroom wing pairing creative charm with sleek cabinetry"
      ]
    }
  ],

  expertise: [
    {
      id: "interior-design",
      title: "Interior Design",
      description: "End-to-end interior design solutions customized to client lifestyle, spatial proportions, and daily workflow."
    },
    {
      id: "residential-interiors",
      title: "Residential Interiors",
      description: "Complete home transformations covering villas, contemporary apartments, and bespoke private residences."
    },
    {
      id: "modular-kitchens",
      title: "Modular Kitchen Design",
      description: "Ergonomic work triangles, BWP marine carcass cabinetry, pull-out wire baskets, and resilient marble/quartz countertops."
    },
    {
      id: "bedroom-design",
      title: "Bedroom Design",
      description: "Serene bedroom environments featuring custom headboards, fluted acoustic paneling, and seamless wardrobe storage."
    },
    {
      id: "living-room-design",
      title: "Living Room Design",
      description: "Showstopping entertainment centers, marble backdrop paneling, layered ambient cove lighting, and luxury seating."
    },
    {
      id: "space-planning",
      title: "Space Planning",
      description: "Precise 2D furniture and circulation layouts optimizing natural light, airflow, and functional movement."
    },
    {
      id: "3d-visualization",
      title: "3D Visualization",
      description: "Hyper-realistic architectural renderings and walkthroughs ensuring clients visualize the finished space before construction."
    },
    {
      id: "material-selection",
      title: "Material & Finish Selection",
      description: "Curating authentic core materials, BWP plywood, HDMR, PU finishes, quartz, laminates, and architectural hardware."
    },
    {
      id: "site-execution",
      title: "Site Execution & Supervision",
      description: "On-site quality supervision, civil alignment, carpentry framing, and millwork installation management."
    },
    {
      id: "construction-boq",
      title: "Construction Understanding & BOQ",
      description: "Detailed Bill of Quantities (BOQ), material estimation, and structural engineering insights avoiding costly revisions."
    }
  ],

  softwareSkills: [
    {
      name: "SketchUp Pro",
      role: "3D Modeling & LayOut Documentation",
      description: "Mastery in rapid 3D volumetric modeling, conversion of 2D floor plans into precise millwork assemblies, and generation of comprehensive Construction Document sets in SketchUp LayOut.",
      proficiency: "Advanced Specialist",
      capabilities: [
        "Parametric Cabinetry & Millwork",
        "LayOut Construction Documents",
        "Accurate Site Dimensions Translation",
        "Fast Iterative Client Approvals"
      ]
    },
    {
      name: "Lumion",
      role: "Cinematic Architectural Rendering",
      description: "Expertise in crafting atmospheric exterior and interior visuals, realistic material reflections, daylight studies, and photorealistic ambient lighting for high-stakes presentations.",
      proficiency: "Advanced Specialist",
      capabilities: [
        "Daylight & Sun Angle Simulation",
        "Photorealistic PBR Textures",
        "Atmospheric Depth & Reflection",
        "Cinematic Presentation Frames"
      ]
    },
    {
      name: "Enscape",
      role: "Real-Time Ray-Traced Visualization",
      description: "Deep integration with SketchUp for instant ray-traced walkthroughs, accurate artificial light fixture testing, cove lighting adjustments, and immersive client approvals.",
      proficiency: "Advanced Specialist",
      capabilities: [
        "Real-Time Ray Tracing",
        "Artificial Cove Light Balancing",
        "Live Guided SketchUp Model Tours",
        "Zero Revision Delay Feedback"
      ]
    }
  ],

  siteStory: {
    heading: "FROM DESIGN TO SITE",
    subheading: "A seamless bridge between digital visualization and physical execution.",
    quote: "Beautiful design matters. Practical execution matters more.",
    steps: [
      {
        number: "01",
        title: "2D Layout & Space Optimization",
        description: "Initial client briefing, lifestyle mapping, and millimeter-accurate 2D CAD drawings translating structural walls into optimal zones."
      },
      {
        number: "02",
        title: "Photorealistic 3D Modeling",
        description: "Translating plans into detailed SketchUp models, ray-tracing textures with Enscape and Lumion for complete client sign-off."
      },
      {
        number: "03",
        title: "BOQ & Core Material Selection",
        description: "Drafting accurate Bill of Quantities and selecting verified BWP marine plywood, HDMR, PU paints, and Blum/Hettich hardware."
      },
      {
        number: "04",
        title: "Precision Factory Fabrication",
        description: "CNC cutting, laser edge-banding, and modular cabinet production ensuring zero tolerances before delivery to the site."
      },
      {
        number: "05",
        title: "On-Site Installation & Handover",
        description: "Hands-on site supervision, loft-to-ceiling alignment, electrical conduit verification, and final handover to satisfied clients."
      }
    ],
    photos: [
      {
        url: "/images/site/site-1-loft-assembly.jpg",
        caption: "Saif verifying CAD drawing dimensions on-site during bedroom loft alignment and wardrobe installation."
      },
      {
        url: "/images/site/site-2-carpentry-framing.jpg",
        caption: "Field coordination with carpenters on door frame plumbness, timber moisture, and partition framing."
      },
      {
        url: "/images/site/site-3-masonry-civil.jpg",
        caption: "Site engineer and team inspecting structural column lines, electrical chasing, and rough-in services."
      },
      {
        url: "/images/site/site-4-factory-fabrication.jpg",
        caption: "Design and engineering team at the modular manufacturing facility inspecting panel sizing and edge banding."
      },
      {
        url: "/images/site/site-5-finishing-inspection.jpg",
        caption: "Final material inspection of custom marble table tops, fabric upholstery, and living room fitouts."
      }
    ]
  },

  team: [
    {
      name: "SAIF ALI KHAN",
      role: "Designer & Client Management",
      image: "/images/team/saif-team.jpg",
      bio: "Civil engineering graduate spearheading concept design, 3D visualization, client consultations, and technical site implementation."
    },
    {
      name: "ARSHI",
      role: "Interior Designer",
      image: "/images/team/arshi-team.jpg",
      bio: "Specializing in spatial aesthetics, material mood boards, color harmony, and custom soft furnishings curation."
    }
  ],

  testimonials: [
    {
      id: "test-1",
      quote: "I am very pleased with the quality of the products. Both the design and the materials used are always the best. I love it.",
      clientType: "Residential Client",
      location: "Nellore, Andhra Pradesh",
      image: "/images/testimonials/client-1.jpg"
    },
    {
      id: "test-2",
      quote: "Design and materials as well as service are always the best. It never disappoints so it's always my choice regarding home furnishings.",
      clientType: "Modular Interior Client",
      location: "Nellore, Andhra Pradesh",
      image: "/images/testimonials/client-2.jpg"
    },
    {
      id: "test-3",
      quote: "I really like the design of the furniture, modern and minimalist and a large selection of products to suit my needs.",
      clientType: "Complete Residence Client",
      location: "Nellore, Andhra Pradesh",
      image: "/images/testimonials/client-3.jpg"
    }
  ]
};
