// All portfolio content lives in this file. Edit here; the components read from it.

export const PROFILE = {
  name: "Abdallah Elbohy",
  role: "Full Stack Developer",
  headline: "I build web apps from the interface down to the data.",
  intro:
    "I write React front ends, Python APIs with FastAPI, and the data and AI layers behind them. I have an MSc in Computer Engineering from Bahçeşehir University and years of freelance data science work, so I'm comfortable going from a component to an endpoint to a database in the same project.",
  location: "Istanbul, Türkiye",
};

export const LINKS = {
  github: "https://github.com/Abdallaheng2022",
  linkedin: "https://www.linkedin.com/in/abdallah-elbohy-b2b2aa113/",
  email: "abdallah.ramzy.albohy.96@gmail.com",
  // The PDF lives in public/ and is published with the site.
  resume: `${import.meta.env.BASE_URL}Abdallah_Elbohy_CV_Full_Stack.pdf`,
};

export type Layer = "ui" | "api" | "data";

export const LAYERS: Record<Layer, { name: string; tools: string[] }> = {
  ui: {
    name: "Interface",
    tools: ["React", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  api: {
    name: "API",
    tools: ["Python", "FastAPI", "REST", "Docker"],
  },
  data: {
    name: "Data & AI",
    tools: ["SQL / MySQL", "Supabase", "FAISS", "LangGraph"],
  },
};

export type Project = {
  title: string;
  year?: string;
  summary: string;
  highlights: string[];
  layers: Layer[];
  stack: string[];
  repo?: string;
  demo?: string;
  demoLabel?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "BelgeNavi",
    year: "2024 – 2025",
    summary:
      "An assistant for Turkish paperwork, such as residence permits, address registration and company records. Ask a question in Turkish, English or Arabic and get a checklist where every step links to its official source.",
    highlights: [
      "FastAPI back end with a small web UI on top",
      "Multi-step agent: classify the question, retrieve, cite, build the checklist, check the answer",
      "Per-language FAISS search, with Qdrant as an option",
      "Tracing with Langfuse and answer-quality checks with RAGAS and MLflow",
    ],
    layers: ["ui", "api", "data"],
    stack: ["Python", "FastAPI", "Streamlit", "LangGraph", "LangChain", "FAISS", "Qdrant", "Docker"],
    repo: "https://github.com/Abdallaheng2022/BelgeNavi-Ikemat-assistant",
  },
  {
    title: "TrialMatch",
    year: "2025",
    summary:
      "Takes a short patient profile and ranks studies from ClinicalTrials.gov as Likely, Unlikely or Need more info. Each result gives short reasons and a link to the official trial page.",
    highlights: [
      "REST endpoint POST /match built with FastAPI",
      "Streamlit front end for trying it out",
      "Pipeline: intake, trial search, eligibility parsing, rule-based matching, explanation",
      "Guardrails keep answers to the three allowed outcomes and always add a disclaimer",
    ],
    layers: ["ui", "api", "data"],
    stack: ["Python", "FastAPI", "Streamlit", "FAISS"],
    repo: "https://github.com/Abdallaheng2022/Trial-and-matcher-assitant",
  },
  {
    title: "Multi-modal Medical Assistant",
    year: "2024 – 2025",
    summary:
      "Upload a medical report as a PDF or scan, plus an optional image such as an X-ray, then ask questions about it in a chat. Answers are grounded in the text pulled from your documents.",
    highlights: [
      "Streamlit app with model, temperature and chat history controls, and live streamed answers",
      "OCR with Azure Document Intelligence, plus GPT-4o to clean up the extracted text and read images",
      "Hybrid chunking: paragraphs and tables kept whole, plus fixed-size windows for better recall",
      "Switchable vector store: FAISS locally or Azure AI Search in the cloud, with create, save, load and delete",
    ],
    layers: ["ui", "data"],
    stack: ["Python", "Streamlit", "LangChain", "FAISS", "Azure AI Search", "Azure Document Intelligence", "OpenAI"],
    repo: "https://github.com/Abdallaheng2022/Multi-modal_Medical_Assistant",
    demo: "https://drive.google.com/file/d/18nAMFV3y-Kr0JLwqpgWGhJYANnNMrz9S/view?usp=sharing",
    demoLabel: "Watch demo video",
  },
  {
    title: "All Around the World",
    year: "2026",
    summary:
      "Browse every country by flag, population, region and capital. Search by name, filter by region, and open a country to see its currencies, languages and sub-region.",
    highlights: [
      "Data from a public REST API, cached in the browser so later visits load faster",
      "Custom data-fetching hook and client-side routing with a 404 page",
      "Light and dark themes, with the choice saved",
    ],
    layers: ["ui", "api"],
    stack: ["React 19", "React Router", "Tailwind CSS 4", "Vite"],
    repo: "https://github.com/Abdallaheng2022/All_Around_WORLD",
  },
  {
    title: "News Feed",
    year: "2026",
    summary:
      "Read today's top stories from the last 24 hours. Search headlines as you type, filter by topics such as politics, tech, sport or health, and page through the results.",
    highlights: [
      "Live headlines from a public news REST API, one article per story",
      "Search is debounced, and every new keystroke cancels the request still in flight with AbortController",
      "Twelve category filters and Previous / Next paging by offset",
      "Skeleton cards while loading, plus clear error and empty states",
    ],
    layers: ["ui", "api"],
    stack: ["React 19", "Material UI", "TanStack Query", "Lodash", "Tailwind CSS 4", "Vite"],
    // TODO: add the GitHub link once the repo is public, e.g.
    // repo: "https://github.com/Abdallaheng2022/<repo-name>",
  },
  {
    title: "Calorie Tracker",
    year: "2026",
    summary:
      "Log meals and see your calorie total for any day. Records are saved in the browser, so they're still there after a reload.",
    highlights: [
      "Modal form with live validation driven by useReducer",
      "Shared state through React Context, with no prop drilling",
      "Nested routes, active links and an error page that sends you home after 10 seconds",
    ],
    layers: ["ui"],
    stack: ["React 19", "React Router 7", "CSS Modules", "localStorage"],
    repo: "https://github.com/Abdallaheng2022/Calorie_Tracker",
  },
];

export const SKILLS: { group: string; layer?: Layer; items: string[] }[] = [
  {
    group: "Front end",
    layer: "ui",
    items: [
      "React",
      "React Router",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Responsive design",
      "Tailwind CSS",
      "CSS Modules",
      "REST API integration",
      "Vite",
    ],
  },
  {
    group: "Back end",
    layer: "api",
    items: ["Python", "FastAPI", "REST API design", "Streamlit", "Docker", "Kubernetes", "Airflow"],
  },
  {
    group: "Data & AI",
    layer: "data",
    items: [
      "SQL / MySQL",
      "Supabase",
      "FAISS",
      "Qdrant",
      "LangChain",
      "LangGraph",
      "Hugging Face",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Pandas",
    ],
  },
  {
    group: "Cloud & tools",
    items: ["Git and GitHub", "GitHub Actions", "npm", "Azure", "Google Cloud", "Terraform", "Langfuse"],
  },
];

export const EXPERIENCE = [
  {
    title: "Junior Data Scientist (freelance)",
    org: "Upwork, remote",
    period: "2018 – present",
    points: [
      "Build and deploy machine learning and deep learning models for international clients.",
      "Run the full data workflow: collection, cleaning, scaling and modeling.",
      "Delivered projects including breast cancer clustering and market text classification.",
      "Keep a consistent 5/5 client rating by meeting deadlines.",
    ],
  },
  {
    title: "NLP Engineering Intern",
    org: "Hattya, Bahrain",
    period: "2019",
    points: [
      "Built and optimized OCR systems for Arabic text documents.",
      "Cleaned, preprocessed and annotated large text datasets.",
      "Trained and validated NLP models and helped integrate them into live workflows.",
    ],
  },
];

export const EDUCATION = [
  {
    title: "MSc in Computer Engineering",
    org: "Bahçeşehir University (BAU), Istanbul",
    period: "2026",
    detail:
      "Thesis: multilingual LLM mind-map generation from text in English, Arabic and Turkish.",
  },
  {
    title: "BSc in Computer Science",
    org: "Helwan University, Cairo",
    period: "2018",
    detail: "Thesis: Arabic and English poetry meter detection using RNNs.",
  },
];
