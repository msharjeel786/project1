// src/data/events.js

const basePath = "/assets/img/blog";

export const events = [
  {
    id: 1,
    title: "Indus AI Week",
    date: "February 2026",
    category: "Summit",
    image: `${basePath}/indus-ai.jpg`,
    images: [`${basePath}/indus-ai.jpg`],
    excerpt: "We successfully concluded our participation at Indus AI Week, hosted by the Ministry of IT and Telecommunication Pakistan.",
    description: "We are proud to share that we have successfully concluded our participation at Indus AI Week, hosted by the Ministry of IT and Telecommunication Pakistan. The response to our AI solutions including chatbots, LMS, Khudi Chat, intelligent crawler, and other advanced systems was overwhelmingly positive. We received valuable feedback, signed multiple MoUs, and engaged with organizations interested in deploying our solutions. It was equally encouraging to see strong interest from students eager to join our internships and AI bootcamps under the AI SkillBridge initiative...",
  },
  {
    id: 2,
    title: "New Year Celebration 2026",
    date: "January 1, 2026",
    category: "Celebration",
    image: `${basePath}/New Year Cake 1.png`,
    images: [
      `${basePath}/New Year Cake 1.png`,
      `${basePath}/New Year Cake 2.png`,
      `${basePath}/New Year Cake 3.png`,
    ],
    excerpt: "Ring in the new year with the AXI Systems team.",
    description: "Welcoming 2026 with the AXI Systems family as we celebrate another year of digital innovation.",
  },
  {
    id: 3,
    title: "Secretary IT Visit — Mr. Zarrar Khan",
    date: "2025",
    category: "Visit",
    image: `${basePath}/zarar.png`,
    images: [`${basePath}/zarar.png`],
    excerpt: "Mr. Zarrar Khan, Secretary IT from the Ministry of Information Technology and Telecommunications, visits AXI Systems.",
    description: "Mr. Zarrar Khan, Secretary IT from the Ministry of Information Technology and Telecommunications, visited AXI Systems at our headquarters. We were honored to host this important visit...",
  },
  {
    id: 4,
    title: "Chinese Delegation Visit",
    date: "2025",
    category: "Delegation",
    image: `${basePath}/image.png`,
    images: [`${basePath}/image.png`],
    excerpt: "We at AXI Systems were honored to host a distinguished delegation at our headquarters.",
    description: "We at AXI Systems were honored to host a distinguished delegation at our headquarters. This visit marks an important step in our commitment to fostering international partnerships...",
  },
  {
    id: 5, // ← added missing ID (you can renumber if preferred)
    title: "Crypto Minister Visit — Mr. Bilal Bin Saqib",
    date: "January 22, 2025",
    category: "Ceremony",
    image: `${basePath}/Crypto Minister Post.png`,
    images: [`${basePath}/Crypto Minister Post.png`],
    excerpt: "We at AXI Systems were honored to host Mr. Bilal Bin Saqib MBE, Minister of State for Crypto & Blockchain.",
    description: "We at AXI Systems were honored to host Mr. Bilal Bin Saqib MBE, Minister of State for Crypto & Blockchain, at our headquarters. This visit marks a significant milestone...",
  },
  // Add more here if needed
];

export default events; // optional, if you prefer default import