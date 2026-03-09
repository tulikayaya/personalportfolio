export const projectsData = [
    {
        id: 1,
        name: 'PSH RAG Chatbot',
        tools: ['FastAPI', 'Next.js', 'LangChain', 'OpenAI Embeddings', 'Pinecone', 'Python'],
        role: 'Clinical Research AI Engineer',
        code: '',
        demo: '',
        description: 'Developed an end-to-end Retrieval-Augmented Generation (RAG) chatbot for Penn State Health using FastAPI, Next.js, LangChain, OpenAI embeddings, and Pinecone, enabling domain-specific question answering across internal policy documents through semantic retrieval. Built a robust backend with custom document chunking, metadata-aware retrieval, and filtering, improving response relevance by 30% over naive keyword search. Optimized inference workflows with caching and batching strategies to reduce response latency and operational costs by 80%, while delivering a production-ready multi-session chat experience with context-aware responses.'
    },
    {
        id: 2,
        name: 'BrainAI',
        tools: ['FastAPI', 'Next.js', 'OpenAI', 'OpenCV', 'NumPy', 'FastSurfer', 'Docker'],
        role: 'Project Developer',
        code: '',
        demo: '',
        description: 'Built BrainAI, a GPT-4 powered medical assistant using FastAPI, Next.js, OpenAI, FastSurfer, and Docker to automate 3D MRI segmentation and streamline neuroimaging workflows for non-technical users. Orchestrated FastSurfer through Docker to extract and return 3D brain ROIs from MRI scans, while implementing structured prompt engineering to deliver medically aware, context-aware responses in an end-to-end interactive application.'
    },
    {
        id: 3,
        name: 'VisionAssist',
        tools: ['Python', 'YOLOv5', 'OpenCV', 'Roboflow', 'Computer Vision'],
        role: 'Project Developer',
        code: '',
        demo: '',
        description: 'Developed VisionAssist, a real-time object detection system designed to support individuals with Visual Agnosia by identifying and labeling everyday objects through a live webcam feed. Built a custom computer vision pipeline using Python, YOLOv5, OpenCV, and Roboflow, including image collection across Penn State, dataset annotation, and model training for accurate real-time recognition and assistive scene understanding.'
    },
    {
        id: 4,
        name: 'MTMLD-AWSR',
        tools: ['Python', 'PyTorch', 'CUDA', 'NumPy', 'TensorBoard'],
        role: 'Research Publication',
        code: '',
        demo: '',
        description: 'Co-authored MTMLD-AWSR: Multi-Teacher Multi-Level Distillation for Class-Incremental Learning in edge-cloud systems, leveraging Python, PyTorch, CUDA, NumPy, and TensorBoard to study efficient knowledge distillation for scalable machine learning. Presented the work at IEEE Cloud Summit 2025 in Washington, DC, highlighting research contributions in continual learning and resource-aware AI systems.'
    },
    {
        id: 6,
        name: 'Region-Growing Based Hough Transform for Carotid Localization',
        tools: ['Python', 'OpenCV', 'NumPy', 'SciPy', 'scikit-image', 'Pandas', 'Matplotlib'],
        role: 'Research Publication',
        code: '',
        demo: '',
        description: 'Co-authored a research publication on carotid artery localization using a region-growing based Hough Transform approach, leveraging Python, OpenCV, NumPy, SciPy, scikit-image, Pandas, and Matplotlib for medical image processing and analysis. Published in the International Journal of Intelligent Systems and Applications in Engineering, the work focused on accurate artery localization through classical image segmentation and computer vision methods.'
    },  
    
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },