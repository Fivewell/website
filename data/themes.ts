export interface Subtheme {
  id: string;
  title: string;
  description: string;
  image: string;
  keyPoints: string[];
  details?: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

export interface Theme {
  title: string;
  slug: string;
  description: string;
  theme_page_description: string;
  tagline: string;
  image: string;
  heroImage?: string;
  ctaLink?: string;
  seoKeywords: string[];
  metaDescription: string;
  introduction: {
    title: string;
    content: string;
  };
  keyAreas: {
    title: string;
    points: {
      title: string;
      description: string;
    }[];
  };
  subthemes: Subtheme[];
  keyFocusAreas: string[];
  process: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  approach: string;
  impact: string;
  stats?: {
    value: string;
    label: string;
  }[];
  relatedProjects?: {
    title: string;
    description: string;
    link: string;
  }[];
  pillars?: {
    title: string;
    description: string;
  }[];
}

export const themes: Theme[] = [
  {
    title: "Sustainable & Adaptive Pathways for Development",
    slug: "building-sustainable-and-adaptive-pathways",
    tagline: "Building resilience across people, systems, and environments.",
    description: "We support initiatives that advance the Sustainable Development Goals. Our work integrates innovation, policy, and collaboration to design adaptive solutions that respond to Africa’s evolving realities.",
    seoKeywords: ["climate resilience", "adaptive agriculture", "smallholder adaptation", "water-smart farming", "sustainable development", "adaptive systems", "SDGs in Africa"],
    metaDescription: "Advance Africa's sustainable development with Fivewell Africa. Building resilient communities, ecosystems, and economies through adaptive solutions.",
    image: "/assets/NorthEasternWomen.jpg",
    heroImage: "/assets/NorthEasternWomen.jpg",
    theme_page_description: "This theme is designed to deliver measurable impact across multiple Sustainable Development Goals (SDGs). Through this theme, the organization advances models that regenerate natural ecosystems, empower communities to lead their own development, and build economic systems that can withstand environmental and market shocks. It seeks to create a balance between people, planet, and prosperity by promoting practices that sustain life, nurture equity, and foster long-term transformation.\n\nOur sustainability work is organized around three interconnected pillars that collectively advance all 17 SDGs, ensuring impact that is both broad in scope and deep in transformation.",
    ctaLink: "Explore Sustainable Pathways →",
    introduction: {
      title: "Sustainable & Adaptive Pathways for Development",
      content: "This theme is designed to deliver measurable impact across multiple Sustainable Development Goals (SDGs). Through this theme, the organization advances models that regenerate natural ecosystems, empower communities to lead their own development, and build economic systems that can withstand environmental and market shocks. It seeks to create a balance between people, planet, and prosperity by promoting practices that sustain life, nurture equity, and foster long-term transformation.",
    },
    pillars: [
      {
        title: "Climate-Resilient and Regenerative Systems",
        description: "Projects championing sustainable land and resource management approaches that rebuild ecosystems, restore biodiversity, and strengthen resilience to climate change."
      },
      {
        title: "Sustainable Economies",
        description: "Projects supporting locally driven, circular, and climate-aligned economic systems that ensure prosperity without compromising environmental integrity."
      },
      {
        title: "Social and Institutional Resilience",
        description: "Projects fostering inclusive systems that prioritize human development, equity, and local governance in responding to global challenges."
      }
    ],
    keyAreas: {
      title: "Key Focus Areas",
      points: [
        {
          title: "Climate-Resilient and Regenerative Systems",
          description: "Projects championing sustainable land and resource management approaches that rebuild ecosystems, restore biodiversity, and strengthen resilience to climate change.",
        },
        {
          title: "Sustainable Economies",
          description: "Projects supporting locally driven, circular, and climate-aligned economic systems that ensure prosperity without compromising environmental integrity.",
        },
        {
          title: "Social and Institutional Resilience",
          description: "Projects fostering inclusive systems that prioritize human development, equity, and local governance in responding to global challenges.",
        },
      ],
    },
    subthemes: [
      {
        id: "climate-smart-agriculture",
        title: "Climate-Resilient and Regenerative Systems",
          description: "Projects championing sustainable land and resource management approaches that rebuild ecosystems, restore biodiversity, and strengthen resilience to climate change.",
        image: "/assets/Herbs Greenhouse 2.jpg",
        keyPoints: [
          "Sustainable farming practices",
          "Crop diversification",
          "Soil and water conservation",
          "Climate-resilient crops"
        ],
        details: "Transforming agriculture into a pathway for nourishment and prosperity."
      },
      {
        id: "sustainable-resource-management",
       title: "Sustainable Economies",
        description: "Projects supporting locally driven, circular, and climate-aligned economic systems that ensure prosperity without compromising environmental integrity.",
        image: "/assets/placeholder-resource.jpg",
        keyPoints: [
          "Water conservation techniques",
          "Soil health management",
          "Biodiversity preservation",
          "Sustainable land use"
        ],
        details: "Preserving resources for future generations through responsible management.",
        stats: [
          { value: "40%", label: "Resource efficiency" },
          { value: "150+", label: "Hectares managed" }
        ]
      },
      {
        id: "economic-inclusion-green-growth",
        title: "Social and Institutional Resilience",
          description: "Projects fostering inclusive systems that prioritize human development, equity, and local governance in responding to global challenges.",
        image: "/assets/placeholder-policy.jpg",
        keyPoints: [
          "Policy analysis and advocacy",
          "Market trend forecasting",
          "Regulatory compliance",
          "Business model adaptation"
        ],
        details: "Empowering businesses to thrive in evolving regulatory and market landscapes.",
        stats: [
          { value: "85%", label: "Policy success rate" },
          { value: "50+", label: "Markets covered" }
        ]
      },
    ],
    keyFocusAreas: [
      "Climate-smart agriculture",
      "Circular economy",
      "Resource efficiency",
      "Sustainable food systems"
    ],
    process: {
      title: "Our Implementation Process",
      steps: [
        {
          title: "Assessment",
          description: "Analyze current practices and identify areas for sustainable transformation."
        },
        {
          title: "Solution Design",
          description: "Develop tailored solutions that balance environmental and economic needs."
        },
        {
          title: "Pilot Testing",
          description: "Implement solutions on a small scale to test effectiveness."
        },
        {
          title: "Scaling",
          description: "Expand successful pilots to broader applications."
        },
        {
          title: "Monitoring",
          description: "Continuously evaluate impact and make necessary adjustments."
        },
        {
          title: "Handing Over",
          description: "Project deliverables transferred to client for final ownership"
        },
      ]
    },
    approach: "Our sustainability work is organized around three interconnected pillars that collectively advance all 17 SDGs, ensuring impact that is both broad in scope and deep in transformation.",
    impact: "Our sustainable pathways have helped communities and businesses adapt to change while reducing environmental impact and improving livelihoods.",
    stats: [
      { value: "100+", label: "Communities Impacted" },
      { value: "50%+", label: "Resource Efficiency" },
      { value: "1M+", label: "Lives Improved" },
    ],
  },
  {
    title: "Knowledge, Research, and Capacity Building",
    slug: "knowledge-research-and-capacity-building",
    tagline: "Expanding knowledge that drives progress.",
    description: "We generate evidence, build skills, and share knowledge that transforms ideas into action. Through applied research, capacity-building programs, and collaborative learning, we equip organizations, communities, and leaders with the tools to create measurable impact.",
    theme_page_description:"We believe knowledge is the foundation of progress. Through research and learning, we turn insights into action bridging data, experience, and innovation to solve real-world challenges.\n\nOur work strengthens institutions and communities by building skills, sharing evidence, and nurturing ideas that shape better futures and that make development more informed, inclusive, and sustainable.",
    seoKeywords: ["farmer training", "capacity building", "participatory learning", "research and development Africa", "capacity building", "evidence-based action", "knowledge partnerships"],
    metaDescription: "Transform ideas into action with Fivewell Africa. Evidence-based research, training, and knowledge sharing for inclusive and informed development",
    image: "/assets/StickyNotes.jpg",
    heroImage: "/assets/StickyNotes.jpg",
    ctaLink: "Learn How We Build Knowledge →",
    introduction: {
      title: "Knowledge, Research, and Capacity Building",
      content: "We believe knowledge is the foundation of progress. Through research and learning, we turn insights into action bridging data, experience, and innovation to solve real-world challenges. Our work strengthens institutions and communities by building skills, sharing evidence, and nurturing ideas that shape better futures and that make development more informed, inclusive, and sustainable.",
    },
    keyAreas: {
      title: "Focus Areas",
      points: [
        {
          title: "Applied Research and Learning",
          description: "Conducting studies that inform decisions and guide practical action.",
        },
        {
          title: "Training and Capacity Strengthening",
          description: "Building the skills and confidence of organizations and communities to lead their own growth.",
        },
        {
          title: "Knowledge Sharing and Publications",
          description: "Producing insights, stories, and resources that amplify learning and spark innovation.",
        },
        {
          title: "Innovation and Thought Leadership",
          description: "Exploring emerging ideas that inspire new ways of achieving sustainable development.",
        },
      ],
    },
    subthemes: [
      {
        id: "applied-research",
        title: "Applied Research and Data Analytics",
        description: "Generating evidence to inform policy and program design.",
        image: "/assets/Applied-Research.jpg",
        keyPoints: [
          "Policy research",
          "Impact evaluation",
          "Data visualization",
          "Trend analysis"
        ],
        details: "Transforming data into actionable insights for better decision-making.",
        stats: [
          { value: "100+", label: "Research Studies" },
          { value: "85%", label: "Policy Impact" }
        ]
      },
      {
        id: "capacity-strengthening",
        title: "Capacity Strengthening",
        description: "Building human and institutional capabilities for sustainable development.",
        image: "/assets/Capacity-Building.jpg",
        keyPoints: [
          "Training programs",
          "Mentorship initiatives",
          "Institutional development",
          "Leadership training"
        ],
        details: "Empowering individuals and organizations to drive meaningful change.",
        stats: [
          { value: "5,000+", label: "Trained Professionals" },
          { value: "95%", label: "Satisfaction Rate" }
        ]
      },
      {
        id: "knowledge-management",
        title: "Knowledge Management",
        description: "Curating and disseminating insights that drive innovation and collaboration.",
        image: "/assets/Knowledge-Management.jpg",
        keyPoints: [
          "Knowledge repositories",
          "Best practice sharing",
          "Documentation",
          "Learning systems"
        ],
        details: "Ensuring knowledge is accessible and actionable for all stakeholders.",
        stats: [
          { value: "1,000+", label: "Resources Shared" },
          { value: "10K+", label: "Users Reached" }
        ]
      },
      {
        id: "learning-platforms",
        title: "Learning and Exchange Platforms",
        description: "Creating spaces for cross-sector learning, dialogue, and shared growth.",
        image: "/assets/Learning-Platforms.jpg",
        keyPoints: [
          "Peer learning networks",
          "Community of practice",
          "Webinars & workshops",
          "Knowledge exchanges"
        ],
        details: "Fostering collaboration and continuous learning across sectors.",
        stats: [
          { value: "200+", label: "Events Hosted" },
          { value: "50+", label: "Countries Engaged" }
        ]
      }
    ],
    keyFocusAreas: [
      "Applied Research and Learning",
      "Training and Capacity Strengthening",
      "Knowledge Sharing and Publications",
      "Innovation and Thought Leadership"
    ],
    process: {
      title: "Technology Implementation",
      steps: [
        {
          title: "Needs Assessment",
          description: "Identify technological gaps and opportunities."
        },
        {
          title: "Solution Design",
          description: "Develop customized technology solutions."
        },
        {
          title: "Pilot Testing",
          description: "Test solutions in real-world conditions."
        },
        {
          title: "Training",
          description: "Build local capacity to use and maintain technologies."
        },
        {
          title: "Scale Up",
          description: "Expand successful implementations."
        }
      ]
    },
    approach: "We combine cutting-edge technology with deep sector expertise to create practical, scalable solutions that address real-world challenges in agriculture and beyond.",
    impact: "Our technology initiatives have transformed traditional practices, improving efficiency, productivity, and sustainability across multiple sectors.",
    stats: [
      { value: "500+", label: "Tech Solutions Deployed" },
      { value: "75%", label: "Efficiency Gains" },
      { value: "50K+", label: "Users Trained" },
    ],
  },
  {
    title: "Innovation & Technology",
    slug: "innovation-technology",
    tagline: "Technology for inclusive transformation.",
    description: "We pilot and scale human-centered innovative tools and digital solutions that address real development challenges; improving efficiency, transparency, and access. Our focus is on technologies that simplify systems and enable equitable growth across sectors.",
    theme_page_description:"We believe that new ideas and technology can help solve Africa’s most pressing challenges including system inefficiencies. Using tools like data, digital platforms, and artificial intelligence, we make development work smarter, faster, and more effective.\n\nBut technology is never the goal in itself; It is a way to improve lives, strengthen communities, and create lasting solutions.We support innovators, startups, and institutions to test and scale their ideas so they can reach more people and make real impact. Our focus is on ensuring that innovation remains ethical, inclusive, and practical. ",
    seoKeywords: ["innovation in Africa", "digital transformation", "inclusive technology", "sustainable innovation"],
    metaDescription: "Harness technology to solve Africa's development challenges. Fivewell Africa drives digital innovation, AI, and tools for inclusive transformation.",
    image: "/assets/Innovation.jpg",
    heroImage: "/assets/Innovation.jpg",
    ctaLink: "Discover Our Innovation Approach →",
    introduction: {
      title: "Innovation & Technology",
      content: "We believe that new ideas and technology can help solve Africa's most pressing challenges including system inefficiencies. Using tools like data, digital platforms, and artificial intelligence, we make development work smarter, faster, and more effective. But technology is never the goal in itself; it's a way to improve lives, strengthen communities, and create lasting solutions. We also support innovators, startups, and institutions to test and scale their ideas so they can reach more people and make real impact. Our focus is on ensuring that innovation remains ethical, inclusive, and practical.",
    },
    keyAreas: {
      title: "Focus Areas",
      points: [
        {
          title: "Digital Transformation",
          description: "Applying data-driven tools and platforms to strengthen decision-making, service delivery, and impact tracking.",
        },
        {
          title: "AI and Emerging Technologies",
          description: "Harnessing artificial intelligence and automation to anticipate trends, enhance productivity, and manage risks.",
        },
        {
          title: "Innovation Ecosystems",
          description: "Supporting startups, innovators, and research institutions to co-create technology pipelines that address real-world challenges.",
        },
        {
          title: "Sustainable Technology Adoption",
          description: "Promoting inclusive, ethical, and environmentally aligned use of technology to ensure long-term benefits for all.",
        },
      ],
    },
    subthemes: [
      {
        id: "digital-transformation",
        title: "Digital Transformation",
        description: "Applying data-driven tools and platforms to strengthen decision-making and service delivery.",
        image: "/assets/Digital-Transformation.jpg",
        keyPoints: [
          "Data analytics platforms",
          "Cloud-based solutions",
          "Digital service delivery",
          "Decision support systems"
        ],
        details: "Empowering organizations with digital tools for better outcomes.",
        stats: [
          { value: "70%", label: "Faster decisions" },
          { value: "45%", label: "Cost reduction" }
        ]
      },
      {
        id: "ai-technologies",
        title: "AI and Emerging Technologies",
        description: "Harnessing artificial intelligence and automation to predict trends, enhance productivity, and manage risk.",
        image: "/assets/AI-Technologies.jpg",
        keyPoints: [
          "Predictive analytics",
          "Machine learning models",
          "Automated monitoring",
          "Risk assessment tools"
        ],
        details: "Transforming data into actionable intelligence.",
        stats: [
          { value: "3x", label: "Productivity gain" },
          { value: "85%", label: "Accuracy rate" }
        ]
      },
      {
        id: "innovation-ecosystems",
        title: "Innovation Ecosystems",
        description: "Supporting startups, innovators, and research institutions to build technology pipelines that solve real-world problems.",
        image: "/assets/Innovation-Ecosystems.jpg",
        keyPoints: [
          "Startup incubation",
          "Research partnerships",
          "Technology transfer",
          "Innovation hubs"
        ],
        details: "Fostering collaboration for breakthrough solutions.",
        stats: [
          { value: "50+", label: "Startups supported" },
          { value: "30+", label: "Research partners" }
        ]
      },
      {
        id: "sustainable-tech",
        title: "Sustainable Technology Adoption",
        description: "Ensuring that innovation is inclusive, ethical, and aligned with environmental and social priorities.",
        image: "/assets/Sustainable-Tech.jpg",
        keyPoints: [
          "Green technology",
          "Inclusive design",
          "Ethical AI frameworks",
          "Circular economy solutions"
        ],
        details: "Innovation that works for people and the planet.",
        stats: [
          { value: "90%", label: "Reduced waste" },
          { value: "100%", label: "Ethical compliance" }
        ]
      }
    ],
    keyFocusAreas: [
      "Digital Transformation",
      "AI and Emerging Technologies",
      "Innovation Ecosystems",
      "Sustainable Technology Adoption"
    ],
    process: {
      title: "Capacity Building Approach",
      steps: [
        {
          title: "Needs Assessment",
          description: "Identify knowledge and skill gaps."
        },
        {
          title: "Program Design",
          description: "Develop targeted training and research programs."
        },
        {
          title: "Implementation",
          description: "Deliver high-quality training and conduct research."
        },
        {
          title: "Mentorship",
          description: "Provide ongoing support and guidance."
        },
        {
          title: "Evaluation",
          description: "Measure impact and refine approaches."
        }
      ]
    },
    approach: "Our capacity building initiatives combine academic rigor with practical application, ensuring that knowledge translates into real-world impact. We focus on creating sustainable learning ecosystems that continue to deliver value over time.",
    impact: "Our training and research programs have built the capacity of thousands of professionals and organizations, leading to improved practices and better development outcomes.",
    stats: [
      { value: "10K+", label: "Trained Professionals" },
      { value: "100+", label: "Research Studies" },
      { value: "95%", label: "Satisfaction Rate" },
    ],
  },
  {
    title: "Market Access & Regional Integration",
    slug: "market-access",
    tagline: "Unlocking Africa's potential through open markets.",
    description: "We work to strengthen intra-African and global trade linkages by supporting quality systems, market standards, and enabling policies. Our goal is to make African enterprises more competitive, visible, and connected across borders.",
    seoKeywords: ["market access Africa", "AfCFTA", "trade policy", "value chain integration", "export readiness"],
    metaDescription: "Unlock Africa's potential with Fivewell Africa. We connect producers, enterprises, and innovators to regional and global markets for equitable growth.",
    image: "/assets/Maersk.jpg",
    theme_page_description:"Expanding markets is central to unlocking Africa’s full potential. Under this theme, we connect producers, innovators, and institutions to markets across Africa and beyond, enabling growth that is fair, equitable, and sustainable. Our work focuses on identifying barriers that limit access, strengthening value chains, and fostering regional integration so that African enterprises can thrive in global markets.\n\nWe increase producer earnings by reducing intermediaries, improving quality, and creating new regional and digital trade channels. By bridging policy, innovation, and opportunity, we help build a continent that trades more with itself, and with the world on fair and forward-looking terms.",
    heroImage: "/assets/Maersk.jpg",
    ctaLink: " Learn About Our Market Work →",
    introduction: {
      title: "Market Access & Regional Integration",
      content: "Expanding markets is central to unlocking Africa's full potential. Under this theme, we connect producers, innovators, and institutions to markets across Africa and beyond, enabling growth that is fair, equitable, and sustainable. Our work focuses on identifying barriers that limit access, strengthening value chains, and fostering regional integration so that African enterprises can thrive in global markets. We increase producer earnings by reducing intermediaries, improving quality, and creating new regional and digital trade channels. By bridging policy, innovation, and opportunity, we help build a continent that trades more with itself, and with the world on fair and forward-looking terms.",
    },
    keyAreas: {
      title: "Focus Areas",
      points: [
        {
          title: "Trade Facilitation & Regional Integration",
          description: "Strengthening intra-African and global trade linkages by promoting fair policies, cross-border collaboration, and regional value chains.",
        },
        {
          title: "Quality Standards & Market Readiness",
          description: "Supporting enterprises to meet international standards through certification, compliance, and capacity development.",
        },
        {
          title: "Inclusive Value Chains",
          description: "Empowering small and medium enterprises, cooperatives, and community-based organizations to participate meaningfully in local and international markets.",
        },
        {
          title: "Innovation & Digital Access",
          description: "Leveraging technology to improve market connectivity, enhance transparency, and support data-driven decision-making across value chains.",
        },
      ],
    },
    subthemes: [
      {
        id: "trade-facilitation",
        title: "Trade Facilitation and Policy Advocacy",
        description: "Promoting enabling policies and frameworks for equitable market participation.",
        image: "/assets/Trade-Facilitation.jpg",
        keyPoints: [
          "Policy analysis and reform",
          "Trade agreement support",
          "Regulatory alignment",
          "Stakeholder engagement"
        ],
        details: "Creating an enabling environment for fair and sustainable trade across Africa.",
        stats: [
          { value: "30+", label: "Policy Reforms Supported" },
          { value: "20+", label: "Markets Opened" }
        ]
      },
      {
        id: "quality-standards",
        title: "Quality Standards and Certification",
        description: "Improving competitiveness through adherence to international standards.",
        image: "/assets/Quality-Standards.jpg",
        keyPoints: [
          "Certification support",
          "Quality management systems",
          "Compliance training",
          "Market requirements"
        ],
        details: "Helping African producers meet and exceed international quality benchmarks.",
        stats: [
          { value: "500+", label: "Certifications Obtained" },
          { value: "95%", label: "Compliance Rate" }
        ]
      },
      {
        id: "value-chain",
        title: "Value Chain Strengthening",
        description: "Linking producers, processors, and buyers for greater efficiency and transparency.",
        image: "/assets/Value-Chain.jpg",
        keyPoints: [
          "Value chain analysis",
          "Market system development",
          "Business linkages",
          "Technology integration"
        ],
        details: "Building resilient and efficient agricultural value chains across Africa.",
        stats: [
          { value: "100+", label: "Value Chains Supported" },
          { value: "40%", label: "Efficiency Gain" }
        ]
      },
      {
        id: "export-readiness",
        title: "Export Readiness and Market Linkages",
        description: "Supporting African enterprises to access and sustain new market opportunities.",
        image: "/assets/Export-Readiness.jpg",
        keyPoints: [
          "Market intelligence",
          "Export training",
          "Buyer-seller meetings",
          "Market entry support"
        ],
        details: "Empowering African businesses to compete and succeed in global markets.",
        stats: [
          { value: "1,000+", label: "Businesses Supported" },
          { value: "$50M+", label: "Export Value Generated" }
        ]
      }
    ],
    keyFocusAreas: [
      "Trade Facilitation & Regional Integration",
      "Quality Standards & Market Readiness",
      "Inclusive Value Chains",
      "Innovation & Digital Access"
    ],
    process: {
      title: "Partnership Development",
      steps: [
        {
          title: "Market Analysis",
          description: "Identify market opportunities and constraints."
        },
        {
          title: "Stakeholder Engagement",
          description: "Build relationships with key market actors."
        },
        {
          title: "Partnership Formation",
          description: "Develop strategic alliances and partnerships."
        },
        {
          title: "Capacity Building",
          description: "Strengthen market actors' capabilities."
        },
        {
          title: "Market Linkages",
          description: "Facilitate connections between producers and markets."
        }
      ]
    },
    approach: "We take a market-systems approach to development, working with a wide range of stakeholders to create inclusive and sustainable market systems that benefit all participants, especially smallholder farmers and rural communities.",
    impact: "Our market access initiatives have connected thousands of smallholder farmers to profitable markets, increased incomes, and created sustainable market systems that continue to function and grow.",
    stats: [
      { value: "$100M+", label: "Market Value Created" },
      { value: "50+", label: "Value Chains Strengthened" },
      { value: "200%", label: "Farmer Incomes Increased" },
    ],
  },
  {
    title: "Partnerships & Systems Change",
    slug: "partnerships",
    tagline: "Collaborative action that scale change.",
    description: "We partner with changemakers, governments, and organizations to design and deliver impactful programs. From policy design to implementation support, we build partnerships that strengthen institutions and drive transformative change at scale.",
    seoKeywords: ["systems change", "partnerships for impact", "institutional collaboration", "public-private partnerships"],
    metaDescription: "Fivewell Africa collaborates with governments, institutions, and changemakers to drive impactful programs and scale sustainable solutions across Africa.",
    image: "/assets/Partnerships.jpg",
    heroImage: "/assets/Partnerships.jpg",
    theme_page_description: "We collaborate closely with organizations, changemakers, governments, and private sector partners to drive meaningful development across Africa. Our partnerships are built on trust, shared values, and a common goal to create solutions that make a real difference in people’s lives. By connecting ideas, resources, and people, we help turn plans into action and strengthen the systems that sustain progress.\n\nWe also act as an implementing partner for governments and organizations that need reliable project delivery on the ground. Our team manages programs from planning to execution bridging ideas with action and ensuring every effort creates visible, lasting impact.",
    ctaLink:"Explore Our Partnership Options",
    introduction: {
      title: "Partnerships & Systems Change",
      content: "We collaborate closely with organizations, changemakers, governments, and private sector partners to drive meaningful development across Africa. Our partnerships are built on trust, shared values, and a common goal to create solutions that make a real difference in people's lives. By connecting ideas, resources, and people, we help turn plans into action and strengthen the systems that sustain progress. We also act as an implementing partner for governments and organizations that need reliable project delivery on the ground. Our team manages programs from planning to execution bridging ideas with action and ensuring every effort creates visible, lasting impact.",
    },
    keyAreas: {
      title: "Focus Areas",
      points: [
        {
          title: "Advocacy and Policy Partnerships",
          description: "Engaging with civil society and government agencies to strengthen policy frameworks and amplify citizen voices.",
        },
        {
          title: "Capacity-Building Partnerships",
          description: "Supporting local institutions and communities with training, mentorship, and systems that enhance long-term resilience.",
        },
        {
          title: "Impact Investment Partnerships",
          description: "Working with investors who prioritize both financial returns and measurable social or environmental outcomes.",
        },
        {
          title: "Institutional Partnerships",
          description: "Working with organizations to design and grow projects that create impact.",
        },
        {
          title: "Regional and Cross-Sector Collaboration",
          description: "Bringing together local and global partners to share ideas and drive innovation.",
        },
        {
          title: "Impact Alignment and Measurement",
          description: "Helping partners track their progress and show how their work creates value.",
        },
        {
          title: "Community-Led Collaboration",
          description: "Engaging communities directly to make sure every effort is inclusive and sustainable.",
        },
      ],
    },
    subthemes: [
      {
        id: "institutional-partnerships",
       title: "Advocacy and Policy Partnerships",
          description: "Engaging with civil society and government agencies to strengthen policy frameworks and amplify citizen voices.",
        image: "/assets/Institutional-Partnerships.jpg",
        keyPoints: [
          "Program design and implementation",
          "Capacity building",
          "Scale and replication",
          "Knowledge sharing"
        ],
        details: "Collaborating with organizations to amplify impact through strategic partnerships.",
        stats: [
          { value: "50+", label: "Partners Engaged" },
          { value: "100+", label: "Projects Supported" }
        ]
      },
      {
        id: "regional-collaboration",
        title: "Capacity-Building Partnerships",
        description: "Supporting local institutions and communities with training, mentorship, and systems that enhance long-term resilience.",
        image: "/assets/Regional-Collaboration.jpg",
        keyPoints: [
          "Stakeholder engagement",
          "Innovation facilitation",
          "Cross-sector alignment",
          "Knowledge exchange"
        ],
        details: "Bridging gaps between different sectors and regions for greater impact.",
        stats: [
          { value: "20+", label: "Countries Reached" },
          { value: "10+", label: "Sectors Engaged" }
        ]
      },
      {
        id: "impact-measurement",
        title: "Impact Investment Partnerships",
        description: "Working with investors who prioritize both financial returns and measurable social or environmental outcomes.",
        image: "/assets/Impact-Measurement.jpg",
        keyPoints: [
          "M&E framework development",
          "Impact assessment",
          "Data-driven insights",
          "Reporting and accountability"
        ],
        details: "Ensuring measurable and meaningful outcomes for all stakeholders.",
        stats: [
          { value: "95%", label: "Project Success Rate" },
          { value: "1M+", label: "Lives Impacted" }
        ]
      },
      {
        id: "community-collaboration",
        title: "Institutional Partnerships",
        description: "Working with organizations to design and grow projects that create impact.",
        image: "/assets/Community-Collaboration.jpg",
        keyPoints: [
          "Community engagement",
          "Local capacity building",
          "Participatory approaches",
          "Sustainable solutions"
        ],
        details: "Empowering communities to drive their own development journey.",
        stats: [
          { value: "500+", label: "Communities Served" },
          { value: "10K+", label: "Local Leaders Trained" }
        ]
      },
       {
        id: "regional-collaboration_7",
          title: "Regional and Cross-Sector Collaboration",
          description: "Bringing together local and global partners to share ideas and drive innovation.",
           image: "/assets/Institutional-Partnerships.jpg",
        keyPoints: [
          "Program design and implementation",
          "Capacity building",
          "Scale and replication",
          "Knowledge sharing"
        ],
        details: "Collaborating with organizations to amplify impact through strategic partnerships.",
        stats: [
          { value: "50+", label: "Partners Engaged" },
          { value: "100+", label: "Projects Supported" }
        ]
        },
        {
          id: "impact-measurement-b9",
          title: "Impact Alignment and Measurement",
          description: "Helping partners track their progress and show how their work creates value.",
          image: "/assets/Impact-Measurement.jpg",
        keyPoints: [
          "M&E framework development",
          "Impact assessment",
          "Data-driven insights",
          "Reporting and accountability"
        ],
        details: "Ensuring measurable and meaningful outcomes for all stakeholders.",
        stats: [
          { value: "95%", label: "Project Success Rate" },
          { value: "1M+", label: "Lives Impacted" }
        ]
        },
        {
          id: "community-led-collaboration",
          title: "Community-Led Collaboration",
          description: "Engaging communities directly to make sure every effort is inclusive and sustainable.",
          image: "/assets/Community-Collaboration.jpg",
        keyPoints: [
          "Community engagement",
          "Local capacity building",
          "Participatory approaches",
          "Sustainable solutions"
        ],
        details: "Empowering communities to drive their own development journey.",
        stats: [
          { value: "500+", label: "Communities Served" },
          { value: "10K+", label: "Local Leaders Trained" }
        ]
        },
    ],
    keyFocusAreas: [
      "Advocacy and Policy Partnerships",
      "Capacity-Building Partnerships",
      "Impact Investment Partnerships",
      "Institutional Partnerships",
      "Regional and Cross-Sector Collaboration",
      "Impact Alignment and Measurement",
      "Community-Led Collaboration"
    ],
    process: {
      title: "Partnership Development",
      steps: [
        {
          title: "Market Analysis",
          description: "Identify market opportunities and constraints."
        },
        {
          title: "Stakeholder Engagement",
          description: "Build relationships with key market actors."
        },
        {
          title: "Partnership Formation",
          description: "Develop strategic alliances and partnerships."
        },
        {
          title: "Capacity Building",
          description: "Strengthen market actors' capabilities."
        },
        {
          title: "Market Linkages",
          description: "Facilitate connections between producers and markets."
        }
      ]
    },
    approach: "We take a market-systems approach to development, working with a wide range of stakeholders to create inclusive and sustainable market systems that benefit all participants, especially smallholder farmers and rural communities.",
    impact: "Our market access initiatives have connected thousands of smallholder farmers to profitable markets, increased incomes, and created sustainable market systems that continue to function and grow.",
    stats: [
      { value: "$100M+", label: "Market Value Created" },
      { value: "50+", label: "Value Chains Strengthened" },
      { value: "200%", label: "Farmer Incomes Increased" },
    ],
  },
];