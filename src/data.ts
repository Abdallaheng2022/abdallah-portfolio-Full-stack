// All portfolio content lives in this file. Edit here; the components read from it.

export const PROFILE = {
  name: "Abdallah Elbohy",
  role: "Full Stack Developer",
  headline: "I build web apps from the interface down to the data.",
  intro:
    "I write React front ends, Python APIs with FastAPI, and the data and AI layers behind them. I have an MSc in Computer Engineering and a background in data science and NLP, so I'm comfortable going from a component to an endpoint to a search index in the same project.",
  location: "Istanbul, Türkiye",
};

export const LINKS = {
  github: "https://github.com/Abdallaheng2022",
  linkedin: "https://www.linkedin.com/in/abdallah-elbohy-b2b2aa113/",
  email: "abdallah.ramzy.elbohy.96@gmail.com",
  resume:
    "https://drive.google.com/file/d/1mXMd_wh1gny7rHMkFv0poEdwnciy2I0g/view?usp=sharing",
};

export type Layer = "ui" | "api" | "data";

export const LAYERS: Record<Layer, { name: string; tools: string[] }> = {
  ui: {
    name: "Interface",
    tools: ["React", "TypeScript", "Tailwind CSS", "React Router"],
  },
  api: {
    name: "API",
    tools: ["Python", "FastAPI", "REST", "Docker"],
  },
  data: {
    name: "Data & AI",
    tools: ["FAISS", "Qdrant", "LangGraph", "MLflow"],
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
};

export const PROJECTS: Project[] = [
  {
    title: "BelgeNavi",
    year: "2025",
    summary:
      "An assistant for Turkish paperwork, such as residence permits, address registration and company records. Ask a question in Turkish, English or Arabic and get a checklist where every step links to its official source.",
    highlights: [
      "FastAPI back end with a small web UI on top",
      "Multi-step agent: classify the question, retrieve, cite, build the checklist, check the answer",
      "Per-language FAISS search, with Qdrant as an option",
      "Tracing with Langfuse and answer-quality checks with RAGAS and MLflow",
    ],
    layers: ["ui", "api", "data"],
    stack: ["Python", "FastAPI", "LangGraph", "LangChain", "FAISS", "Qdrant"],
    repo: LINKS.github,
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
    repo: LINKS.github,
  },
  {
    title: "All Around the World",
    summary:
      "Browse every country by flag, population, region and capital. Search by name, filter by region, and open a country to see its currencies, languages and sub-region.",
    highlights: [
      "Data from a public REST API, cached in the browser so later visits load faster",
      "Custom data-fetching hook and client-side routing with a 404 page",
      "Light and dark themes, with the choice saved",
    ],
    layers: ["ui", "api"],
    stack: ["React 19", "React Router", "Tailwind CSS 4", "Vite"],
    repo: "https://github.com/Abdallaheng2022/All_around_the_world",
  },
  {
    title: "Calorie Tracker",
    summary:
      "Log meals and see your calorie total for any day. Records are saved in the browser, so they're still there after a reload.",
    highlights: [
      "Modal form with live validation driven by useReducer",
      "Shared state through React Context, with no prop drilling",
      "Nested routes, active links and an error page that sends you home after 10 seconds",
    ],
    layers: ["ui"],
    stack: ["React 19", "React Router 7", "CSS Modules", "localStorage"],
    repo: "https://github.com/Abdallaheng2022/calorie-tracker",
  },
];

export const SKILLS: { group: string; layer?: Layer; items: string[] }[] = [
  {
    group: "Front end",
    layer: "ui",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "React Router",
      "Hooks, Context and reducers",
      "Tailwind CSS",
      "CSS Modules",
      "styled-components",
      "Vite",
    ],
  },
  {
    group: "Back end",
    layer: "api",
    items: ["Python", "FastAPI", "REST API design", "Docker", "Airflow", "Streamlit"],
  },
  {
    group: "Data & AI",
    layer: "data",
    items: [
      "FAISS",
      "Qdrant",
      "LangGraph",
      "LangChain",
      "Hugging Face",
      "PyTorch",
      "TensorFlow",
      "MLflow",
      "Langfuse",
    ],
  },
  {
    group: "Workflow",
    items: ["Git and GitHub", "GitHub Actions", "Oxlint", "Linux"],
  },
];

export const EXPERIENCE = [
  {
    title: "Full Stack & AI Developer (independent)",
    period: "2024 – 2025",
    points: [
      "Built and shipped multilingual web apps end to end: FastAPI back ends, simple web front ends, and search over curated data.",
      "Designed clear API contracts and added tracing so problems could be found quickly.",
      "Kept data fresh with expiry rules and \"last checked\" dates on every source.",
      "Wrote demos and documentation ready for production hardening.",
    ],
  },
];

export const EDUCATION = [
  {
    title: "MSc in Computer Engineering",
    detail: "Graduate study in data science, NLP and applied machine learning.",
  },
];
