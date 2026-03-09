export const experiences = [
  {
    id: 1,
    title: 'Graduate Research Assistant',
    company: "Penn State",
    duration: "(Aug 2024 - Present)",
    tools: ['Python', 'Machine Learning', 'Medical Imaging', 'Feature Engineering', 'Ensemble Learning', 'SHAP', 'Large Language Models (LLMs)', 'Retrieval-Augmented Generation (RAG)', 'NLP', 'Semantic Search', 'Vector Databases', 'FastAPI'],
    image: '/png/penn.jpg',
    description: 'Developed end-to-end machine learning pipelines for large-scale 3D brain MRI analysis, integrating custom preprocessing, region-wise volumetric feature extraction, ensemble and boosting models, and SHAP-based interpretability to support high-accuracy Parkinson’s classification and biomarker identification. Also building an LLM-based medical case retrieval system that combines clinical notes and imaging-linked case data to help physicians surface similar historical cases through natural language queries, enabling more efficient case-based decision support.'
  },
  {
    id: 2,
    title: "Graduate Teaching Assistant",
    company: "Penn State",
    duration: "(August 2024 - Present)",
    tools: ['Excel', 'Python', 'Linear Algebra', 'Data Structures', 'Algorithms', 'Probabilistic Models', 'Statistics', 'Mentorship'],
    image: '/png/penn.jpg',
    description: 'Led weekly programming labs for 50+ students, providing hands-on mentorship and reducing common engineering errors. Designed coursework and supported grading and evaluation for advanced courses in Data Structures and Algorithms, Operating Systems, Statistics, and Linear Algebra.'
  },
  {
    id: 3,
    title: 'Clinical Research Artificial Intelligence Engineer',
    company: "Penn State Health",
    duration: "(June 2025 - Aug 2025)",
    tools: ['Python', 'FastAPI', 'Next.js', 'RAG', 'LLMs', 'LangChain', 'Pinecone', 'NLP', 'API Development', 'Full-Stack Development'],
    image: '/png/pennhealth.png',
    description: 'Developed an end-to-end Retrieval-Augmented Generation (RAG) application using LangChain, OpenAI embeddings, Pinecone, FastAPI, and Next.js to enable domain-specific question answering across internal policy documents through semantic retrieval. Engineered a robust backend with custom document chunking, metadata-aware retrieval, filtering, caching, and batching strategies, improving response relevance by 30% over naive keyword search while reducing latency and operational costs by 80%. Built a responsive full-stack chat interface supporting multi-session, context-aware interactions, delivering a production-ready solution for internal knowledge access.'
  },
  {
    id: 4,
    title: 'DevSecOps Engineer',
    company: "Persistent Systems Ltd",
    duration: "(July 2022 - June 2024)",
    tools: ['Docker', 'Kubernetes', 'Helm', 'Terraform', 'Jenkins', 'GitHub Actions', 'Artifactory', 'CI/CD', 'Microsoft Azure'],
    image: '/png/psl.jpeg',
    description: 'Designed and implemented custom CI/CD pipelines using GitHub Actions, Docker, Azure Kubernetes Service (AKS), and Kubernetes to automate microservice containerization, deployment, and integrated regression testing, reducing manual testing effort by 80%. Optimized Dockerfiles and Kubernetes resource allocations to reduce image sizes to thinner footprints, improve scalability, and cut application startup time from 8 seconds to 3 seconds. Built a security-focused deployment pipeline for cloud infrastructure that generated native executables outside containers to minimize codebase exposure, and led end-to-end pre-penetration test security readiness by executing manual security reviews across authentication, authorization, input validation, secrets management, logging, monitoring, and dependency hardening.'
  },
  {
    id: 5,
    title: "Junior Software Engineer",
    company: "Persistent Systems Ltd",
    duration: "(Feb 2022 - July 2022)",
    tools: ["Angular", "Springboot", "JavaScript", "Azure Services"],
    image: '/png/psl.jpeg',
    description: 'Designed and developed an internal employee portal for PSL, Project Jupyter, using Spring Boot for the backend and Angular for the frontend, transforming heavily disorganized Excel-based employee data across 400+ records and 10+ fields into a centralized web application. Structured and integrated information spanning seven departments, including employee details, reporting managers, contact information, and active project assignments, improving data accessibility, organization, and cross-department visibility.'
  }
]

