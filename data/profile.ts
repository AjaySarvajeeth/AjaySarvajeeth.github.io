export type Profile = {
  name: string
  shortName: string
  role: string
  location: string
  headline: string
  email: string
  links: {
    github: string
    linkedin: string
  }
  stats: Array<{
    label: string
    value: string
    note: string
  }>
  certifications: string[]
}

export const profile: Profile = {
  name: 'Ajay Sarvajeeth',
  shortName: 'Ajay',
  role: 'AI/ML Engineer',
  location: 'India',
  headline:
    'I build ML & LLM systems end-to-end (data → model → deployment), with strong focus on reliability, observability, and cost.',
  email: 'ajaysarvajeeth@gmail.com',
  links: {
    github: 'https://github.com/AjaySarvajeeth',
    linkedin: 'https://www.linkedin.com/in/ajaysarvajeeth/'
  },
  stats: [
    { label: 'Projects', value: '10+', note: 'Applied ML, LLM, and data products' },
    { label: 'Focus', value: 'Production-first', note: 'Reliability, observability, cost' },
    { label: 'Delivery', value: 'End-to-end', note: 'From data pipelines to deployment' }
  ],
  certifications: [
    'Microsoft Certified: Azure AI Engineer Associate',
    'Microsoft Certified: Azure Data Scientist Associate',
    'Databricks Certified Data Engineer Associate',
    'Google Data Analytics Professional Certificate'
  ]
}

export type Project = {
  slug: string
  title: string
  tagline: string
  summary: string
  impact: string[]
  stack: string[]
  caseStudy?: Array<{
    title: string
    body?: string
    bullets?: string[]
  }>
  links?: {
    github?: string
    demo?: string
    docs?: string
  }
  // Optional assets (put images into /public/projects/<slug>.png)
  image?: string
}

export const projects: Project[] = [
  {
    slug: 'azure-disk-resize-agent',
    title: 'Azure VM Disk Resize Agent',
    tagline: 'LangGraph-powered automation for safe, auditable VM disk resizing',
    summary:
      'Automated Azure VM disk resizing with an agentic workflow using LangChain + LangGraph and Azure Functions. Designed for reliability with audit-friendly execution.',
    impact: [
      'Saved ~13 hours/week across ~50 resize requests',
      'Audit-friendly execution with safe, deterministic control flow'
    ],
    stack: ['FastAPI', 'LangChain', 'LangGraph', 'Azure Functions', 'Azure Identity', 'Audit Logging'],
    links: {
      github: 'https://github.com/AjaySarvajeeth/Azure-VM-Disk-Automation'
    },
    caseStudy: [
      {
        title: 'Problem',
        body:
          'Resizing OS/Data disks on Azure VMs is a multi-step operational workflow (deallocate, resize, expand partition, validate). Doing this manually is slow and error-prone.'
      },
      {
        title: 'Approach',
        bullets: [
          'Built a chat-first interface where a user can request: “Increase OS disk to 512GB on VM X in RG Y.”',
          'Implemented a deterministic ASK → CONFIRM → EXECUTE state machine using LangGraph for orchestration.',
          'Used the LLM only for structured extraction and response phrasing — all control decisions remain in Python.'
        ]
      },
      {
        title: 'Architecture',
        bullets: [
          'UI: single-page client that posts /chat and polls for progress updates.',
          'API: FastAPI /chat endpoint that loads and persists session state.',
          'Execution: operational steps mapped to Azure Functions (vm_deallocate, disk_resize, fs_expand_ntfs, validate_disk).'
        ]
      },
      {
        title: 'Outcome',
        bullets: [
          'Step-by-step status updates during execution + concise final summary.',
          'Designed for safe execution via explicit user confirmation before running steps.'
        ]
      }
    ],
    image: '/projects/azure-disk-resize-agent.png'
  },
  {
    slug: 'fraud-detection-xgboost',
    title: 'Credit Card Fraud Detection',
    tagline: 'Recall-first fraud detection with XGBoost + explainability',
    summary:
      'Built a recall-optimized fraud detection system with imbalance handling, robust evaluation, and a Streamlit interface for batch + single predictions with explainability.',
    impact: [
      'Recall-optimized detection strategy for imbalanced fraud data',
      'Streamlit UI with SHAP explainability + adjustable decision threshold'
    ],
    stack: ['Python', 'XGBoost', 'SMOTE/ADASYN', 'SHAP', 'Streamlit'],
    links: {
      github: 'https://github.com/AjaySarvajeeth/CreditCard-FraudDetection'
    },
    caseStudy: [
      {
        title: 'Problem framing',
        body:
          'Binary classification for fraudulent transactions. Primary objective is recall (catch fraud), because false negatives are more costly than false positives.'
      },
      {
        title: 'Data & feature engineering',
        bullets: [
          'Validated schema, checked nulls/inconsistencies, and confirmed severe class imbalance.',
          'Used stratified splits to preserve fraud ratio.',
          'Applied imbalance handling with SMOTE and ADASYN to improve minority-class learning.',
          'Created derived features (age from DOB, time components) and used one-hot/label encoding depending on cardinality.'
        ]
      },
      {
        title: 'Modeling & evaluation',
        bullets: [
          'Compared Decision Tree (GridSearchCV), Random Forest (RandomizedSearchCV), and XGBoost.',
          'Evaluated with ROC-AUC, precision, recall, and F1 (avoided accuracy due to imbalance).',
          'Achieved ROC-AUC ~0.87 with recall-focused optimization.'
        ]
      },
      {
        title: 'Productionization',
        bullets: [
          'Packaged model + encoders + expected feature schema into a single artifact for consistent inference.',
          'Built Streamlit UI supporting single prediction and batch scoring.',
          'Added explainability using SHAP and an adjustable decision threshold for risk appetite.'
        ]
      }
    ],
    image: '/projects/fraud-detection-xgboost.png'
  },
  {
    slug: 'offline-rag-llama',
    title: 'Offline RAG Chatbot (Phi-2)',
    tagline: 'Document Q&A with local retrieval, citations, and OCR — fully offline',
    summary:
      'Built a fully offline RAG chatbot for querying enterprise documents (including tables and scanned images) using local embeddings, FAISS retrieval, and a lightweight local LLM.',
    impact: ['Private-by-default document Q&A', 'Predictable cost (no per-token API spend)'],
    stack: ['Python', 'Sentence Transformers', 'FAISS', 'Phi-2', 'OCR', 'Streamlit'],
    links: {
      github: 'https://github.com/AjaySarvajeeth/RAG-Chatbot-offline'
    },
    caseStudy: [
      {
        title: 'Problem',
        body:
          'Enable employees to query enterprise documents (PDFs, Word docs, tables, scanned images) and get grounded answers — fully offline for data security.'
      },
      {
        title: 'Pipeline',
        bullets: [
          'Ingestion supports PDF/DOCX/CSV/JSON/TXT/HTML/Markdown from a local /data folder.',
          'Extracts text (PyMuPDF), tables (pdfplumber), and images (Tesseract OCR).',
          'Chunks documents with overlap for better retrieval granularity.',
          'Embeds chunks using all-MiniLM-L6-v2 and indexes in FAISS; stores metadata for citations.'
        ]
      },
      {
        title: 'Query flow',
        bullets: [
          'Embed the user query → retrieve top‑k relevant chunks from FAISS.',
          'Pass retrieved context into a local LLM (Phi‑2) to generate a grounded answer.',
          'Streamlit UI shows chat history plus source document + page number.'
        ]
      },
      {
        title: 'Why offline',
        bullets: [
          'Keeps sensitive documents local (enterprise governance).',
          'Predictable cost profile (no per‑token API spend).'
        ]
      }
    ],
    image: '/projects/offline-rag-llama.png'
  },
  {
    slug: 'bike-demand-linear-regression',
    title: 'Bike Demand Prediction',
    tagline: 'Interpretable forecasting with solid baselines',
    summary:
      'Performed EDA, cleaned data, handled outliers, did feature selection using VIF, and trained a linear regression model to predict bike demand.',
    impact: ['Achieved R² score of 0.77', 'Clear feature insights for demand drivers'],
    stack: ['Python', 'EDA', 'Linear Regression', 'VIF', 'Model Evaluation'],
    links: {
      github: 'https://github.com/AjaySarvajeeth/Bike-sharing-Linear-regression-'
    },
    image: '/projects/bike-demand-linear-regression.png'
  }
]

export const featuredProjects = projects.slice(0, 4)
