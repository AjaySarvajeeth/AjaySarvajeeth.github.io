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
      'Automated Azure VM disk resizing with an agentic workflow using LangChain + LangGraph and Azure Functions. Designed for reliability with managed identities and audit logging.',
    impact: ['Saved ~13 hours/week across ~70 resize requests', 'Audit-friendly execution and safe guardrails'],
    stack: ['LangChain', 'LangGraph', 'Azure Functions', 'Managed Identity', 'Logging'],
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
          'Built a chat-first interface where a user can request: "Increase OS disk to 512GB on VM X in RG Y."',
          'Implemented a deterministic ASK -> CONFIRM -> EXECUTE state machine using LangGraph for orchestration.',
          'Used the LLM only for structured extraction and response phrasing; all control decisions remain in Python.'
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
          'Step-by-step status updates during execution plus concise final summary.',
          'Designed for safe execution via explicit user confirmation before running steps.'
        ]
      }
    ],
    image: '/projects/azure-disk-resize-agent.png'
  },
  {
    slug: 'fraud-detection-xgboost',
    title: 'Credit Card Fraud Detection',
    tagline: 'High-signal fraud detection with XGBoost + monitoring UI',
    summary:
      'Built and deployed a fraud detection system using XGBoost (and explored graph-based approaches). Delivered an interactive Streamlit app to monitor and explain predictions.',
    impact: ['Improved fraud identification accuracy for a credit card use case', 'Streamlit dashboard for insights & monitoring'],
    stack: ['Python', 'XGBoost', 'Feature Engineering', 'Streamlit', 'Model Monitoring'],
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
    title: 'Offline RAG Chatbot (LLaMA)',
    tagline: 'Document Q&A with local retrieval for cost-efficient GenAI',
    summary:
      'Developing a RAG chatbot that answers questions over internal documents using offline/local resources for cost control and data governance.',
    impact: ['Private-by-default document Q&A', 'Cost-efficient local inference/retrieval'],
    stack: ['LLaMA', 'RAG', 'Embeddings', 'Vector Search', 'Prompt Engineering'],
    links: {
      github: 'https://github.com/AjaySarvajeeth/RAG-Chatbot-offline'
    },
    caseStudy: [
      {
        title: 'Problem',
        body:
          'Enable employees to query enterprise documents (PDFs, Word docs, tables, scanned images) and get grounded answers fully offline for data security.'
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
          'Embed the user query -> retrieve top-k relevant chunks from FAISS.',
          'Pass retrieved context into a local LLM (Phi-2) to generate a grounded answer.',
          'Streamlit UI shows chat history plus source document and page number.'
        ]
      },
      {
        title: 'Why offline',
        bullets: [
          'Keeps sensitive documents local (enterprise governance).',
          'Predictable cost profile (no per-token API spend).'
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
