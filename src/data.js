const DATA = {
  person: {
    name: "MICHAEL KARAMICHALIS",
    tagline:
      "BSc Computer Science Graduate (BCS Award). MSc Advanced Computer Science student, graduating in September 2026. Passionate about solving problems with real impact.",
    profile:
      "BSc Computer Science Graduate recognised with the British Computer Society Award for outstanding academic performance. Master's in Computer Science student, graduating in September 2026, passionate about solving problems with real impact. Exceptionally creative and innovative with a strong ability to grasp and adapt to new concepts and technologies.",
    links: {
      github: "https://github.com/MichalisCYP",
      linkedin: "https://www.linkedin.com/in/michaelkaramichalis/",
      email: "karamichalism@cardiff.ac.uk",
      phone: "+357 97732341",
    },
  },

  projects: [
    {
      id: "payroll",
      title: "Custom Payroll Management Application",
      description:
        "Full-stack application to digitise HR, payroll and sick leave workflows for hourly-paid employees. Developed and deployed using Next.js, initially developed in C# .NET. Database schema architectured in MySQL, following normalisation principles. Currently implementing secure LAN-based access via Dockerised deployment.",
      tags: [
        "Next.js",
        "SQL",
        "Docker",
        "Full-Stack",
        "C# .NET",
        "JavaScript",
        "AWS",
        "Supabase",
        "Database Design",
      ],
      github: "https://github.com/MichalisCYP",
      private: true,
      images: [
        "/images/AM1.png",
        "/images/AM2.png",
        "/images/AM3.png",
        "/images/AM4.png",
      ],
      dates: "May 2025 - Present",
      org: "Logistics Team in Cyprus",
    },
    {
      id: "mentoring",
      title: "Student Mentoring Application",
      description:
        "React Native mobile application to automate mentor-mentee matching and enable 24/7 availability. Features matching algorithm, user profile management, real-time messaging, authentication, push notifications, Google Gemini AI Integration. Presented to Vice-Chancellor and senior staff. Awarded Final Year Project of the Year.",
      tags: [
        "React Native",
        "Expo",
        "Mobile",
        "iOS",
        "Android",
        "SQL",
        "Supabase",
        "UI UX Design",
        "Database Design",
      ],
      github: "https://github.com/MichalisCYP",
      private: true,
      youtube: "https://www.youtube.com/watch?v=dzGqEToWnqk",
      images: [
        "/images/SM1.jpg",
        "/images/SM2.jpg",
        "/images/SM3.jpg",
        "/images/SM4.jpg",
        "/images/SM5.jpg",
      ],
      dates: "Sep 2024 - May 2025",
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
      tags: [
        "C++",
        "Arduino",
        "IoT",
        "Embedded Systems",
        "Design Patterns",
        "Multithreading",
      ],
      youtube: "https://www.youtube.com/watch?v=kgoBjNTIa34",
      github: "https://github.com/MichalisCYP/SmartHotelSystem",
      private: false,
      images: ["/images/IOT1.png", "/images/IOT2.jpg", "/images/IOT3.jpg"],
      dates: "Sep 2024 - May 2025",
      org: "University of South Wales",
    },
    {
      id: "flight-sim",
      title: "Flight Simulator Controller integrated with Arduino",
      description:
        "C# .NET application connecting to a server simulating flight, integrating with Arduino for control. Applied C# principles: Delegates, Events, Networking.",
      tags: ["C# .NET", "Arduino", "Networking", "Multithreading"],
      github: "",
      private: false,
      images: ["/images/flight1.jpeg"],
      dates: "Sep 2024 - Dec 2024",
      org: "University of South Wales",
    },
    {
      id: "coffee-gis",
      title: "Coffee Shop GIS",
      description:
        "C# .NET application displaying stores and relevant data using Google Maps API, with data stored as GeoJSON in MongoDB.",
      tags: ["C# .NET", "MongoDB"],
      github: "https://github.com/MichalisCYP",
      youtube: "https://www.youtube.com/watch?v=MoXTc3iP_N4",
      private: false,
      images: [],
      dates: "Jan 2024 - Apr 2024",
      org: "University of South Wales",
    },
    {
      id: "ospf-sim",
      title: "Open Shortest Path First (OSPF) Routing Protocol Simulation",
      description:
        "TCP Client and Server through Java Socket Programming and Multithreading for simulated connections. Shortest Path Calculation using Dijkstra’s algorithm and each router’s link-state database.",
      tags: ["Java", "Sockets", "Multithreading"],
      github: "https://github.com/MichalisCYP/OSPF_Simulation",
      private: false,
      youtube: "https://www.youtube.com/watch?v=30G5E18zF0g",
      images: ["/images/network1.png"],
      dates: "Jan 2024 - Apr 2024",
      org: "University of South Wales",
    },
    {
      id: "iot-net-sim",
      title: "IoT Network Simulation",
      description:
        "IoT Network Simulation in Cisco Packet Tracer demonstrating VLANs with Inter-VLAN communication configuration. Incorporated Switch and Router Trunking Protocol, DHCP.",
      tags: ["Cisco Packet Tracer", "VLAN", "DHCP", "Networking"],
      github: "https://github.com/MichalisCYP/Smart-Farm-Cisco-Packet-Tracer",
      private: false,
      youtube: "https://www.youtube.com/watch?v=wpDmKXIqebQ",
      images: [],
      dates: "Sep 2024 - Jan 2025",
      org: "University of South Wales",
    },
    {
      id: "aquabite",
      title: "AquaBite iOS Application",
      description:
        "iOS SwiftUI application enabling self-tracking of food and liquid intake via WatchOS and iOS devices. Incorporated Swift Data, Notifications, Widgets, Apple’s Design Principles and Supabase Authentication.",
      tags: ["SwiftUI", "iOS", "WatchOS", "Supabase", "UI UX Design"],
      github: "https://github.com/MichalisCYP/AquaBite",
      private: false,
      youtube: "https://www.youtube.com/watch?v=BIIFefMx91Y",
      images: ["/images/ios1.png", "/images/ios2.png", "/images/ios3.png"],
      dates: "Jan 2025 - May 2025",
      org: "University of South Wales",
    },
    {
      id: "avl-tree",
      title: "AVL Tree Scheduler Implementation",
      description:
        "Implemented an AVL Tree in C++ to manage and schedule processes based on priority. Ensured balanced tree structure for optimal search, insertion, and deletion operations.",
      tags: ["C++", "Data Structures", "Algorithms"],
      github: "https://github.com/MichalisCYP/AVL-Tree-Scheduler",
      private: false,
      youtube: "https://www.youtube.com/watch?v=ztVPiFrof7w",
      images: [],
      dates: "Jan 2023 - Apr 2023",
      org: "University of South Wales",
    },
    {
      id: "task-manager",
      title: "Client-Server Task Manager",
      tags: [
        "C++",
        "Sockets",
        "Multithreading",
        "TCP/IP",
        "SOLID Principles",
        "Design Patterns",
      ],
      description:
        "Developed a C++ client-server application for managing tasks over a network. Implemented TCP/IP socket programming and multithreading to handle multiple client connections simultaneously. Applied SOLID principles and design patterns to ensure maintainable and scalable code architecture.",
      github: "https://github.com/MichalisCYP/DSA2",
      private: false,
      youtube: "https://www.youtube.com/watch?v=-RXaqIW9RFc",
      images: ["/images/task1.png", "/images/task2.png", "/images/task3.png"],
      dates: "Sep 2022 - Dec 2022",
      org: "University of South Wales",
    },
    {
      id: "plsql",
      title: "PL/SQL Database Management System",
      description:
        "Designed and implemented a database management system using PL/SQL for a hypothetical retail company. Created complex queries, stored procedures, and triggers to manage inventory, sales, and customer data effectively.",
      tags: ["PL/SQL", "Database Design", "Procedures", "Triggers"],
      github: "",
      private: false,
      images: ["/images/plsql.png"],
      dates: "Jan 2023 - Apr 2023",
      org: "University of South Wales",
    },
  ],

  education: [
    {
      degree: "MSc Advanced Computer Science",
      university: "Cardiff University",
      logo: "/images/cardiffuni.svg",
      dates: "Sep 2025 - Sep 2026",
      modules: [
        {
          name: "Principles of Machine Learning",
          tags: [
            "Machine Learning",
            "Supervised Learning",
            "Regression",
            "Decision Trees",
            "Neural Networks",
            "Deep Learning",
          ],
        },
        {
          name: "Computational Linguistics - NLP",
          tags: [
            "NLP",
            "Text Preprocessing",
            "Classification",
            "Embeddings",
            "Language Models",
            "Ethics",
            "Python",
          ],
        },
        {
          name: "Programming Paradigms",
          tags: [
            "Functional Programming",
            "Haskell",
            "Differentiable Programming",
            "Quantum Programming",
            "Python",
            "Logic Programming",
            "ASP",
          ],
        },
        {
          name: "Cloud & Database Systems Security",
          tags: ["DevOps", "DevSecOps", "Secure Deployment"],
        },
        {
          name: "Distributed & Cloud Computing",
          tags: ["Distributed Systems", "Cloud Computing", "Security"],
        },
        {
          name: "System Design & Internet of Thing",
          tags: ["Systems", "IoT", "Project Management", "Architecture"],
        },
      ],
    },
    {
      degree: "BSc Computer Science (Hons)",
      university: "University of South Wales",
      logo: "/images/usw.svg",
      dates: "Sep 2022 - Jul 2025",
      grade: "First-Class Honours - 86.25%",
      awards: [
        "British Computer Society Award for Outstanding Performance",
        "Final Year Project of the Year Vote Winner",
      ],
      modules: [
        {
          name: "Event Driven and GUI Programming",
          tags: ["C# .NET", "Design Patterns", "Events", "Delegates"],
        },
        {
          name: "Individual Project",
          tags: [
            "Full-Stack Development",
            "Project Management",
            "Agile Software Development Lifecycle",
          ],
        },
        {
          name: "Parallel and Concurrent Programming",
          tags: ["Concurrency", "Semaphores", "Multithreading", "C++"],
        },
        {
          name: "Mobile Systems and Applications",
          tags: ["Mobile", "iOS", "Android", "UI and UX Design Principles"],
        },
        { name: "Computer Networks", tags: ["Networks"] },
        {
          name: "Data Structures and Algorithms with OOP",
          tags: [
            "Algorithms",
            "Data Structures",
            "Object Oriented Programming",
            "Complexity Analysis",
            "C++",
          ],
        },
        {
          name: "Intelligent Systems",
          tags: ["AI", "Logic Programming", "CLIPS - Prolog"],
        },
        {
          name: "Team-based Software Development",
          tags: ["Software Engineering", "Teamwork"],
        },
        { name: "Databases and Data Modelling", tags: ["Databases"] },
        { name: "Secure Software Development", tags: ["Security"] },
      ],
    },
    {
      degree: "Cyprus High School Apolyterion, Cyprus",
      dates: "Sep 2018 - Jun 2021",
      logo: "/images/kykkos.png",
      university: "Kykkos A' Lyceum",
      grade: "18.50/20.00 - Graduated with Honours",
      modules: [
        {
          name: "Core Subjects",
          tags: ["Mathematics", "Physics"],
        },
        {
          name: "Specialised Subjects",
          tags: ["Computer Science - C++", "English"],
        },
      ],
    },
  ],

  soft_skills: [
    "Communication - collaborated with staff, mentored students, worked in a group",
    "Teamwork & collaboration - agile methodologies, Git version control",
    "Stakeholder engagement - presented to university senior staff",
    "Adaptability - quick to learn and apply new tech",
    "Problem-solving - project design, deployment",
    "Time management - balanced work, study, personal projects",
  ],

  work: [
    {
      role: "Student IT Support Agent",
      org: "University of South Wales",
      dates: "Sep 2024 - Jun 2025",
      bullets: [
        {
          text: "Efficiently resolved and diagnosed software and network issues.",
          icon: "fa-solid fa-screwdriver-wrench",
        },
        {
          text: "Managed university accounts and devices through Microsoft Azure.",
          icon: "fa-brands fa-microsoft",
        },
      ],
    },
    {
      role: "Student Digital Mentor",
      org: "University of South Wales",
      dates: "Jan 2024 – Jun 2025",
      bullets: [
        {
          text: "Mentored students for academic and technology related advice.",
          icon: "fa-solid fa-user-graduate",
        },
        {
          text: "Directed students to university services and resources.",
          icon: "fa-solid fa-compass",
        },
      ],
    },
    {
      role: "Soldier",
      org: "Cyprus National Guard",
      dates: "Jul 2021 - Aug 2022",
      bullets: [
        {
          text: "Awarded the honorary rank of Lance Corporal for exceptional performance and conduct.",
          icon: "",
        },
      ],
    },
  ],
  timeline: [
    {
      year: "09/2025",
      desc: "Started MSc Advanced Computer Science",
      image: "/images/cardiff1.jpeg",
      alt: "MSc Advanced Computer Science",
    },
    {
      year: "2025",
      desc: "Summer",
      image: "/images/cyprus2.jpeg",
      alt: "2025 Summer",
    },
    {
      year: "06/2025",
      desc: "Graduated with BSc Computer Science",
      image: "/images/cardiff2.jpeg",
      alt: "BSc Computer Science Graduation",
    },
    {
      year: "09/2024",
      desc: "Started Year 3 and Student IT Role",
      image: "/images/cardiff4.jpeg",
      alt: "Started Year 3 and Student IT Role",
    },
    {
      year: "2024",
      desc: "Summer",
      image: "/images/cyprus4.jpeg",
      alt: "2024 Summer",
    },
    {
      year: "09/2023",
      desc: "Started Year 2 and Digital Mentor Role",
      image: "/images/cardiff3.jpeg",
      alt: "Digital Mentor",
    },
    {
      year: "2023",
      desc: "Summer",
      image: "/images/cyprus1.jpeg",
      alt: "2023 Summer",
    },
    {
      year: "09/2022",
      desc: "Started Year 1",
      image: "/images/cardiff5.jpeg",
      alt: "Year 1 Computer Science",
    },
    {
      year: "08/2022",
      desc: "Finished Military Service",
      image: "/images/cyprus3.jpeg",
      alt: "Military Service",
    },
  ],
};

export default DATA;
