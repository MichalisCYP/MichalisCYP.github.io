const DATA = {
  person: {
    name: "MICHAEL KARAMICHALIS",
    tagline:
      "BSc Computer Science Graduate (BCS Award). MSc Advanced Computer Science student, graduating in September 2026. Passionate about solving problems with real impact.",
    profile:
      "BSc Computer Science Graduate recognised with the British Computer Society Award for outstanding academic performance. Master’s in Computer Science student, graduating in September 2026, passionate about solving problems with real impact. Exceptionally creative and innovative with a strong ability to grasp and adapt to new concepts and technologies.",
    links: {
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
      email: "karamichalism@cardiff.ac.uk",
      phone: "97732341",
      portfolio: "#", // Replace with actual portfolio URL if available
    },
    timeline: [
      "2025-2026 — MSc Advanced Computer Science (Cardiff University)",
      "2022-2025 — BSc Computer Science (University of South Wales)",
      "2021-2022 — Military Service (Cyprus National Guard)",
      "2018-2021 — High School (Cyprus Apolyterion)",
    ],
  },

  projects: [
    {
      id: "payroll",
      title: "Custom Payroll Management Application",
      description:
        "Full-stack application to digitise HR, payroll and sick leave workflows for hourly-paid employees. Developed and deployed using Next.js, initially developed in C# .NET. Database schema architectured in MySQL, following normalisation principles. Currently implementing secure LAN-based access via Dockerised deployment.",
      technologies: ["Next.js", "MySQL", "Docker", "Full-Stack", "C# .NET"],
      github: "https://github.com/",
      images: [
        "/images/AM1.png",
        "/images/AM2.png",
        "/images/AM3.png",
        "/images/AM4.png",
      ],
      dates: "May 2025 – Present",
      org: "Logistics Team in Cyprus",
    },
    {
      id: "mentoring",
      title: "Student Mentoring Application",
      description:
        "React Native mobile application to automate mentor-mentee matching and enable 24/7 availability. Features matching algorithm, user profile management, real-time messaging, authentication, push notifications, Google Gemini AI Integration. Presented to Vice-Chancellor and senior staff. Awarded Final Year Project of the Year.",
      technologies: [
        "React Native",
        "Expo",
        "Mobile",
        "Auth",
        "AI",
        "Google Gemini",
      ],
      github: "https://github.com/",
      images: [
        "/images/SM1.jpg",
        "/images/SM2.jpg",
        "/images/SM3.jpg",
        "/images/SM4.jpg",
      ],
      dates: "Sep 2024 – May 2025",
      org: "University of South Wales",
      grade: "88%",
      awards: [
        "Final Year Project of the Year",
        "BCS Award for Outstanding Performance",
      ],
    },
    {
      id: "iot-home",
      title: "Home Monitoring IoT System",
      description:
        "C++ system retrieving values from Arduino Microcontroller Sensors and activating actuators. Designed a physical Arduino Uno circuit and integrated with C++ using the ArduSerial library.",
      technologies: ["C++", "Arduino", "IoT", "ArduSerial"],
      github: "https://github.com/",
      images: ["/images/IOT1.png", "/images/IOT2.jpg", "/images/IOT3.jpg"],
      dates: "Sep 2024 – May 2025",
      org: "University of South Wales",
    },
    {
      id: "flight-sim",
      title: "Flight Simulator Controller integrated with Arduino",
      description:
        "C# .NET application connecting to a server simulating flight, integrating with Arduino for control. Applied C# principles: Delegates, Events, Networking.",
      technologies: ["C# .NET", "Arduino", "Networking"],
      github: "https://github.com/",
      images: [],
      dates: "Sep 2024 – Dec 2024",
      org: "University of South Wales",
    },
    {
      id: "coffee-gis",
      title: "Coffee Shop GIS",
      description:
        "C# .NET application displaying stores and relevant data using Google Maps API, with data stored as GeoJSON in MongoDB.",
      technologies: ["C# .NET", "MongoDB", "GeoJSON", "Google Maps API"],
      github: "https://github.com/",
      images: [],
      dates: "Jan 2024 – Apr 2024",
      org: "University of South Wales",
    },
    {
      id: "ospf-sim",
      title: "Open Shortest Path First (OSPF) Routing Protocol Simulation",
      description:
        "TCP Client and Server through Java Socket Programming and Multithreading for simulated connections. Shortest Path Calculation using Dijkstra’s algorithm and each router’s link-state database.",
      technologies: ["Java", "Sockets", "Multithreading", "Dijkstra"],
      github: "https://github.com/",
      images: [],
      dates: "Jan 2024 – Apr 2024",
      org: "University of South Wales",
    },
    {
      id: "iot-net-sim",
      title: "IoT Network Simulation",
      description:
        "IoT Network Simulation in Cisco Packet Tracer demonstrating VLANs with Inter-VLAN communication configuration. Incorporated Switch and Router Trunking Protocol, DHCP.",
      technologies: ["Cisco Packet Tracer", "VLAN", "DHCP", "Networking"],
      github: "https://github.com/",
      images: [],
      dates: "Sep 2024 – Jan 2025",
      org: "University of South Wales",
    },
    {
      id: "aquabite",
      title: "AquaBite iOS Application",
      description:
        "iOS SwiftUI application enabling self-tracking of food and liquid intake via WatchOS and iOS devices. Incorporated Swift Data, Notifications, Widgets, Apple’s Design Principles and Supabase Authentication.",
      technologies: ["SwiftUI", "iOS", "WatchOS", "Supabase", "Widgets"],
      github: "https://github.com/",
      images: [],
      dates: "Jan 2025 – May 2025",
      org: "University of South Wales",
    },
  ],

  education: [
    {
      degree: "MSc Advanced Computer Science — Cardiff University",
      dates: "Sep 2025 – Sep 2026",
      modules: [
        {
          name: "Principles of Machine Learning (Supervised Learning, Neural Networks, Deep Learning, Model Evaluation)",
          area: "Machine Learning",
        },
        {
          name: "Computational Linguistics (NLP) (Text Preprocessing, Classification, Embeddings, Language Models, Ethics)",
          area: "NLP",
        },
        {
          name: "Programming Paradigms (Functional, Differentiable, Logic, Quantum)",
          area: "Programming",
        },
        {
          name: "Cloud & Database Systems Security (DevOps, DevSecOps, Secure Deployment)",
          area: "Security",
        },
        {
          name: "Distributed & Cloud Computing (Architectures, Security)",
          area: "Distributed Systems",
        },
        {
          name: "System Design & Internet of Things (Project Management, Architecture)",
          area: "Systems/IoT",
        },
      ],
    },
    {
      degree: "BSc Computer Science — University of South Wales",
      dates: "Sep 2022 – Jul 2025",
      grade: "First-Class Honours – 86.25%",
      awards: [
        "British Computer Society Award for Outstanding Performance",
        "Final Year Project of the Year Vote Winner",
      ],
      modules: [
        {
          name: "Event Driven and GUI Programming (C# .NET)",
          area: "Programming",
        },
        { name: "Parallel and Concurrent Programming", area: "Concurrency" },
        { name: "Mobile Systems and Applications", area: "Mobile" },
        { name: "Computer Networks", area: "Networks" },
        { name: "Data Structures and Algorithms with OOP", area: "Algorithms" },
        { name: "Intelligent Systems", area: "AI" },
        {
          name: "Team-based Software Development",
          area: "Software Engineering",
        },
        { name: "Databases and Data Modelling", area: "Databases" },
        { name: "Secure Software Development", area: "Security" },
      ],
      marks: {
        "Individual Project": "88.00%",
        "Parallel and Concurrent Programming": "82.00%",
        "Computer Networks": "79%",
        "Mobile Systems and Applications": "79%",
        "Intelligent Systems": "72.00%",
        "Data Structures and Algorithms with OOP": "94.00%",
        "Event Driven and GUI Programming": "92.75%",
        "Team Based Software Development": "82.90%",
        "Databases and Data Modelling": "98.00%",
        "Secure Software Development": "98.40%",
      },
    },
    {
      degree: "Cyprus High School Apolyterion, Cyprus",
      dates: "Sep 2018 – Jun 2021",
      grade: "18.50/20.00 – Graduated with Honours",
      modules: [
        { name: "Computer Science", area: "A-Level Equivalent" },
        { name: "Mathematics", area: "A-Level Equivalent" },
        { name: "Physics", area: "A-Level Equivalent" },
        { name: "English", area: "A-Level Equivalent" },
      ],
    },
  ],

  skills: {
    soft: [
      "Communication (collaborated with staff, mentored students)",
      "Teamwork & collaboration",
      "Stakeholder engagement",
      "Adaptability (quick to learn/apply new tech)",
      "Problem-solving (project design, deployment)",
      "Time management",
    ],
    technical: [
      "C++, C#, SQL, JavaScript, Python, Swift, Java, HTML, CSS, R, MATLAB",
      "Object-Oriented Design, Algorithm Design, Data Structures, Complexity Analysis",
      "Functional Programming, Concurrent Programming, Logic Programming, Quantum Programming",
      "React Native / mobile apps, SwiftUI, WatchOS",
      "MySQL, MongoDB, Oracle, Supabase",
      "Docker, Git, Microsoft Azure, Expo, Arduino, Cisco Packet Tracer",
      "System design thinking, Software Architecture, Design Patterns, SOLID Principles",
    ],
  },

  work: [
    {
      role: "Student IT Support Agent",
      org: "University of South Wales",
      dates: "Sep 2024 – Jun 2025",
      bullets: [
        "Efficiently resolved and diagnosed software and network issues.",
        "Managed university accounts and devices through Microsoft Azure.",
      ],
    },
    {
      role: "Student Digital Mentor",
      org: "University of South Wales",
      dates: "Jan 2024 – Jun 2025",
      bullets: [
        "Mentored students for academic and technology related advice.",
        "Directed students to university services and resources.",
      ],
    },
    {
      role: "Soldier",
      org: "Cyprus National Guard",
      dates: "Jul 2021 – Aug 2022",
      bullets: [
        "Awarded the honorary rank of Lance Corporal for exceptional performance and conduct.",
      ],
    },
  ],
};

// ====== 2) STATE ======
let selectedTech = null;
let selectedSubject = null;

// projectId -> current image index
const carouselIndex = Object.create(null);

// ====== 3) HELPERS ======
function uniq(arr) {
  return [...new Set(arr)];
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else if (k.startsWith("on") && typeof v === "function")
      node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  for (const child of children) node.appendChild(child);
  return node;
}

function setPressed(button, pressed) {
  button.setAttribute("aria-pressed", pressed ? "true" : "false");
}

// ====== 4) NAV (mobile toggle) ======
(function initNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.querySelector(".nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // close menu after click on mobile
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

// ====== 5) ABOUT ======
function renderAbout() {
  document.getElementById("name").textContent = DATA.person.name;
  document.getElementById("tagline").textContent = DATA.person.tagline;
  if (DATA.person.profile) {
    document.getElementById("profile").textContent = DATA.person.profile;
  }

  // Contact info
  if (DATA.person.links) {
    if (DATA.person.links.email) {
      document.getElementById("email").textContent = DATA.person.links.email;
    }
    if (DATA.person.links.phone) {
      document.getElementById("phone").textContent = DATA.person.links.phone;
    }
    if (DATA.person.links.portfolio) {
      const portfolio = document.getElementById("portfolioLink");
      portfolio.href = DATA.person.links.portfolio;
      if (DATA.person.links.portfolio !== "#") {
        portfolio.style.display = "inline";
      } else {
        portfolio.style.display = "none";
      }
    }
  }

  const gh = document.getElementById("githubLink");
  const li = document.getElementById("linkedinLink");
  gh.href = DATA.person.links.github;
  li.href = DATA.person.links.linkedin;

  // Timeline is now static in index.html, so no JS needed here

  document.getElementById("year").textContent = String(
    new Date().getFullYear()
  );
  document.getElementById(
    "footerLine"
  ).textContent = `© ${new Date().getFullYear()} ${DATA.person.name}`;
}

// ====== 6) TECHNOLOGY FILTERS ======
function renderTechFilters() {
  const allTech = uniq(DATA.projects.flatMap((p) => p.technologies)).sort();
  const wrap = document.getElementById("techFilters");
  wrap.innerHTML = "";

  const allBtn = el("button", {
    class: "chip",
    type: "button",
    "aria-pressed": "true",
    text: "All",
    onclick: () => {
      selectedTech = null;
      renderTechFilters();
      renderProjects();
    },
  });

  setPressed(allBtn, selectedTech === null);
  wrap.appendChild(allBtn);

  allTech.forEach((t) => {
    const btn = el("button", {
      class: "chip",
      type: "button",
      "aria-pressed": "false",
      text: t,
      onclick: () => {
        selectedTech = selectedTech === t ? null : t;
        renderTechFilters();
        renderProjects();
      },
    });

    setPressed(btn, selectedTech === t);
    wrap.appendChild(btn);
  });
}

// ====== 7) PROJECTS + CAROUSEL ======
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  const projects = selectedTech
    ? DATA.projects.filter((p) => p.technologies.includes(selectedTech))
    : DATA.projects;

  projects.forEach((project) => {
    if (carouselIndex[project.id] == null) carouselIndex[project.id] = 0;

    // Create a unique id for the image and carousel controls
    const imgId = `carousel-img-${project.id}`;
    const prevBtnId = `carousel-prev-${project.id}`;
    const nextBtnId = `carousel-next-${project.id}`;

    const img = el("img", {
      id: imgId,
      src: project.images[carouselIndex[project.id]],
      alt: `${project.title} screenshot ${carouselIndex[project.id] + 1}`,
    });

    const prevBtn = el("button", {
      id: prevBtnId,
      type: "button",
      "aria-label": "Previous image",
      text: "‹",
    });

    const nextBtn = el("button", {
      id: nextBtnId,
      type: "button",
      "aria-label": "Next image",
      text: "›",
    });

    const carousel = el("div", { class: "carousel" }, [
      img,
      el("div", { class: "carousel-controls" }, [prevBtn, nextBtn]),
    ]);

    const techPills = el(
      "div",
      { class: "tech-list" },
      project.technologies.map((t) => el("span", { class: "pill", text: t }))
    );

    const meta = el("div", { class: "project-meta" }, [
      el("div", {}, [
        el("div", { class: "muted", text: "Technologies" }),
        techPills,
      ]),
      el("div", {}, [
        el("div", { class: "muted", text: "GitHub" }),
        el("a", {
          href: project.github,
          target: "_blank",
          rel: "noreferrer",
          text: "Repository",
        }),
      ]),
    ]);

    const card = el(
      "article",
      { class: "card", id: `project-card-${project.id}` },
      [
        el("h3", { class: "project-title", text: project.title }),
        carousel,
        el("p", { text: project.description }),
        meta,
      ]
    );

    grid.appendChild(card);

    // Attach event listeners after DOM insertion for best compatibility
    setTimeout(() => {
      const imgElem = document.getElementById(imgId);
      const prevBtnElem = document.getElementById(prevBtnId);
      const nextBtnElem = document.getElementById(nextBtnId);
      if (prevBtnElem) {
        prevBtnElem.onclick = () => {
          const i = carouselIndex[project.id];
          carouselIndex[project.id] =
            (i - 1 + project.images.length) % project.images.length;
          // Only update the image src and alt
          if (imgElem) {
            imgElem.src = project.images[carouselIndex[project.id]];
            imgElem.alt = `${project.title} screenshot ${
              carouselIndex[project.id] + 1
            }`;
          }
        };
      }
      if (nextBtnElem) {
        nextBtnElem.onclick = () => {
          const i = carouselIndex[project.id];
          carouselIndex[project.id] = (i + 1) % project.images.length;
          if (imgElem) {
            imgElem.src = project.images[carouselIndex[project.id]];
            imgElem.alt = `${project.title} screenshot ${
              carouselIndex[project.id] + 1
            }`;
          }
        };
      }
    }, 0);
  });

  if (projects.length === 0) {
    grid.appendChild(
      el("div", { class: "card" }, [
        el("h3", { text: "No matches" }),
        el("p", { text: "Try clearing the technology filter." }),
      ])
    );
  }
}

// ====== 8) EDUCATION + SUBJECT FILTER ======
function renderSubjectFilters() {
  const subjects = uniq(
    DATA.education.flatMap((e) => e.modules.map((m) => m.area))
  ).sort();

  const wrap = document.getElementById("subjectFilters");
  wrap.innerHTML = "";

  const allBtn = el("button", {
    class: "chip",
    type: "button",
    text: "All",
    onclick: () => {
      selectedSubject = null;
      renderSubjectFilters();
      renderEducation();
    },
  });
  setPressed(allBtn, selectedSubject === null);
  wrap.appendChild(allBtn);

  subjects.forEach((s) => {
    const btn = el("button", {
      class: "chip",
      type: "button",
      text: s,
      onclick: () => {
        selectedSubject = selectedSubject === s ? null : s;
        renderSubjectFilters();
        renderEducation();
      },
    });
    setPressed(btn, selectedSubject === s);
    wrap.appendChild(btn);
  });
}

function renderEducation() {
  const list = document.getElementById("educationList");
  list.innerHTML = "";

  DATA.education.forEach((ed) => {
    const modules = selectedSubject
      ? ed.modules.filter((m) => m.area === selectedSubject)
      : ed.modules;

    const moduleItems = modules.length
      ? el(
          "ul",
          { class: "list" },
          modules.map((m) => el("li", { text: `${m.name} — ${m.area}` }))
        )
      : el("p", {
          class: "muted",
          text: "No modules in this subject area for this degree.",
        });

    const card = el("div", { class: "card" }, [
      el("h3", { text: ed.degree }),
      el("p", { class: "muted", text: ed.dates }),
      el("h4", { text: "Modules" }),
      moduleItems,
    ]);

    list.appendChild(card);
  });
}

// ====== 9) SKILLS ======
function renderSkills() {
  const soft = document.getElementById("softSkills");
  const tech = document.getElementById("techSkills");
  soft.innerHTML = "";
  tech.innerHTML = "";

  DATA.skills.soft.forEach((s) => soft.appendChild(el("li", { text: s })));
  DATA.skills.technical.forEach((s) => tech.appendChild(el("li", { text: s })));
}

// ====== 10) WORK ======
function renderWork() {
  const wrap = document.getElementById("workList");
  wrap.innerHTML = "";

  DATA.work.forEach((job) => {
    const card = el("div", { class: "card" }, [
      el("h3", { text: job.role }),
      el("p", { class: "muted", text: `${job.org} — ${job.dates}` }),
      el(
        "ul",
        { class: "list" },
        job.bullets.map((b) => el("li", { text: b }))
      ),
    ]);
    wrap.appendChild(card);
  });
}

// ====== 11) INIT ======
renderAbout();
renderTechFilters();
renderProjects();
renderSubjectFilters();
renderEducation();
renderSkills();
renderWork();
