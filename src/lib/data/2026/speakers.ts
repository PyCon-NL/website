import type { Speaker } from '../types';

// Note: never remove speakers from this file, only add or update.
// This way permalinks to /speakers/[id] remain valid in future years.
// Images should be cropped to a square centered around the face.
// Bios are rendered as markdown — add blank lines between paragraphs.

export const speakers: Speaker[] = [
  {
    id: 15,
    name: "Charles de Leau",
    position: "Principal Data Scientist",
    company: "Carda",
    bio: `Charles has 13 years of experience in data and AI. He spent several years in consultancy
    before seeing the light at Bol.com, where he worked for five years in roles including data 
    scientist, engineering manager, and data science craft lead. In that last role, he was responsible 
    for data science practices across the Shopping and Advertising domain. In this time he also 
    freelanced for US GenAI start-ups.

    Over the past two years, he has mostly worked independently on his open-source gambling project.
    Quite a change from Bol.com, where his domain included 256 data scientists, ML engineers and 
    software engineers. He also started a PhD at the University of Amsterdam, which may or may not 
    have been a sensible idea at 36.`,
    image: "/speakers/charles_de_leau.jpeg",
    years: [2026],
  },
  {
    id: 16,
    name: "Daria Korsakova",
    position: "Software Engineer",
    company: "Manychat",
    bio: `Daria Korsakova is a Python Engineer at Manychat, 
    
where she builds backend systems for Brands, one of the company's newest products, and
leads the observability effort from the ground up. Her work focuses on production 
reliability, monitoring, and designing systems that make it easier to understand what
is happening when things go wrong. She is particularly interested in turning real 
production incidents into better engineering practices, clearer signals, and more resilient
systems. 
    
Daria writes and speaks about practical observability in Python and presented 
this talk at EuroPython 2026`,
    image: "/speakers/daria_korsakova.jpeg",
    years: [2026],
  },
  {
    id: 3,
    name: "Thiago Bellini Ribeiro",
    position: "Senior Software Engineer",
    company: "Sendcloud",
    bio: `My name is Thiago Bellini Ribeiro, a 38 year-old Brazilian 🇧🇷 software engineer 
living and working in the Netherlands 🇳🇱 at Sendcloud, with my wife, two dogs 🐶, and two cats 😸.

I've been passionate about Python since 2010, using it both professionally and personally.
As an open-source enthusiast, I'm always looking for ways to give back to the community. Since
2022, I've been a maintainer of the 🍓 Strawberry GraphQL Python library - a project I continue
to support out of passion, even though I no longer use it in my day-to-day work.

Outside of coding, I'm known for my positive outlook and my eagerness to help others in the tech
community. I love connecting with people, sharing knowledge, and contributing back to it.`,
    image: "/speakers/thiago_bellini_ribeiro.jpg",
    years: [2026],
  },
  {
    id: 17,
    name: "Linda Kolb",
    position: "End-to-End Data Scientist",
    company: "SupplyBrain",
    bio: `Linda has several years of experience using Python across automation, data science and 
    modern tooling. If she is not busy building data flows, she is flowing on the yoga mat.`,
    image: "/speakers/linda_kolb.jpg",
    years: [2026],
  },
  {
    id: 18,
    name: "Derviş van Leersum",
    position: "Software Engineer",
    company: "Sopra Steria",
    bio: `Derviş traded load-bearing structures for load-bearing Python scripts nearly a decade 
    ago and never looked back. As an engineer at Sopra Steria he works on projects 
    for TenneT, helping build the infrastructure for the energy transition. Which, if you ask 
    him, is a pretty exciting place to write Python for a living. In his own time he's turning a 
    pizza discovery and ranking platform into a production monorepo. You'll likely learn more about
    his pizza obsession at PyCon NL.`,
    image: "/speakers/dervis_van_leersum.jpg",
    years: [2026],
  },
  {
    id: 19,
    name: "Maikel Mardjan",
    position: "IT Architect",
    company: "NO Complexity",
    bio: `Based in the Netherlands, Maikel is an independent architect with over 30 years of 
    experience designing and securing complex IT systems for organizations of all sizes. He holds 
    MSc degrees in Business Studies from the University of Groningen and Electrical Engineering 
    from the Delft University of Technology. Maikel loves new technology and frequently uses 
    Python to bring his ideas to life. `,
    image: "/speakers/maikel_mardjan.jpg",
    years: [2026],
  },
  {
    id: 20,
    name: "James Donahue",
    position: "Founder | Data Scientist",
    company: "Jim's Data Gym",
    bio: `Originally from Nashville, Tennessee, James has bounced around a few continents and 
    professions before settling in data, including adventure tourism and education. He landed 
    in Hamburg, Germany in 2017 and stayed.

    His current project it Jim's Data Gym, a data exercise platform that gives users bite-sized 
    data tasks in Python. It is currently undergoing its first test release. If it survives, he 
    will live his dream live of combining data and education full-time.

    When not working, he can often be found in the garden, where he plays guitar (badly) and 
    manages the compost. He still kayaks occasionally.`,
    image: "/speakers/james_donahue.jpg",
    years: [2026],
  },
  {
    id: 21,
    name: "Murilo Cunha",
    position: "CTO",
    company: "Dataroots",
    bio: `Murilo Cunha is CTO at Dataroots, a data and AI consultancy in Belgium. A machine learning 
    engineering turned Pythonista, he spent years building data and ML systems for a living, with a 
    focus on MLOps and making these systems practical and usable. He also tinkered with GenAI models 
    before the name caught on, playing with NLP long before the ChatGPT release (but definitely more 
    since). Throughout the years, he created databooks, an open source tool for keeping data science 
    notebooks clean and reviewable, more recently pytest-agent-eval for LLM agent testing. He enjoys 
    digging into Python performance and how it plays with other languages (such as Rust, mojo, mypyc and 
    pypy). He co-hosts the Bright Signal and DataTopics podcasts and is one of the organizers of the 
    Python User Group Belgium and PyData Belgium meetup groups. He has spoken at several PyCon events, 
    mostly because he likes chat with passionate people about tech over coffee.`,
    image: "/speakers/murilo_cunha.png",
    years: [2026],
  },
  {
    id: 22,
    name: "Henk-Jan van Hasselaar",
    position: "Staff Software Engineer",
    company: "Alliander",
    bio: `Henk-Jan is a software engineer and architect, currently working as a Staff 
    Software Engineer at Alliander where he's focused on improving digital resilience across 
    the organization. When he's not behind a keyboard, he occasionally remembers to touch grass, 
    usually while training for an ultra trail event, which seemed like a good idea at the time.`,
    image: "/speakers/henk-jan.png",
    years: [2026],
  },
  {
    id: 23,
    name: "Yuvraj Singh Pathania",
    position: "Software Engineer",
    company: "RSM",
    bio: `Yuvraj is a product-first backend and AI engineer, currently working part-time as an 
    AI consultant while pursuing a Master's in Computer Science at TU Delft. Before returning to 
    academia, he worked at the intersection of AI, software, and data engineering, building 
    scalable, fault-tolerant agentic pipelines and exploring AI applications in cybersecurity. 
    He has also built backend systems from scratch for multiple early-stage startups. Outside of 
    engineering, he DJs under the name Patty Jr, usually while waiting for a cron job to finish.`,
    image: "/speakers/yuvraj.jpeg",
    years: [2026],
  },
  {
    id: 24,
    name: "Taras Kozlov",
    position: "Software Developer",
    bio: `Taras Kozlov is a software developer with around 20 years of experience and a background 
    in C++, now working primarily with Python. In recent years, his work has focused on algorithmic 
    trading, with a particular interest in performance, low-latency systems, and asynchronous 
    networking. He is also the author of the open-source Python packages picows and aiofastnet, 
    both focused on high-performance asynchronous networking.`,
    image: "/speakers/taras_kozlov.jpeg",
    years: [2026],
  },
  // {
  //   id: 25,
  //   name: "Murilo",
  //   position: "Machine Learning Engineer",
  //   company: "Dataroots",
  //   bio: `Murilo Cunha is CTO at Dataroots, a data and AI consultancy in Belgium. A machine 
  //   learning engineering turned Pythonista, he spent years building data and ML systems for a 
  //   living, with a focus on MLOps and making these systems practical and usable. He also tinkered 
  //   with GenAI models before the name caught on, playing with NLP long before the ChatGPT release 
  //   (but definitely more since). Throughout the years, he created databooks, an open source tool 
  //   for keeping data science notebooks clean and reviewable, more recently pytest-agent-eval 
  //   for LLM agent testing. He enjoys digging into Python performance and how it plays with other 
  //   languages (such as Rust, mojo, mypyc and pypy). He co-hosts the Bright Signal and DataTopics 
  //   podcasts and is one of the organizers of the Python User Group Belgium and PyData Belgium meetup 
  //   groups. He has spoken at several PyCon events, mostly because he likes chat with passionate 
  //   people about tech over coffee.`,
  //   image: "/speakers/placeholder.jpg",
  //   years: [2026],
  // }
];
