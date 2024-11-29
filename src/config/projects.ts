import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: "MedChat",
    description: "AI-powered medical diagnosis assistance system for healthcare professionals",
    slug: "medchat",
    tags: [
      { label: "AI" },
      { label: "Healthcare" },
      { label: "React" },
      { label: "Node.js" }
    ],
    date: "2024-01",
    introduction: "MedChat represents a breakthrough in medical diagnosis assistance, combining advanced AI technology with an intuitive user interface to support healthcare professionals in their decision-making process.",
    background: "The healthcare industry faces increasing demands for quick and accurate diagnoses. MedChat was developed to address this need by providing AI-powered assistance to healthcare professionals.",
    useCase: "Healthcare professionals can input patient symptoms and medical history, receiving AI-generated diagnostic suggestions and relevant medical literature references.",
    inspiration: "The project was inspired by the need to streamline the diagnostic process and make advanced AI capabilities accessible to medical practitioners.",
    projectDetails: "MedChat utilizes the Llama2 language model, fine-tuned on medical data to provide accurate and contextually relevant responses. The system includes built-in verification mechanisms to ensure reliability.",
    technologyStack: [
      "React.js",
      "Node.js",
      "Express",
      "Llama2 API",
      "MongoDB",
      "WebSocket"
    ],
    developmentProcess: "The development followed an agile methodology, with continuous integration of user feedback from healthcare professionals. Multiple iterations were made to optimize the AI model's accuracy and response time.",
    features: [
      "Real-time diagnostic assistance",
      "Medical literature integration",
      "Secure patient data handling",
      "Customizable AI parameters",
      "Detailed reporting system"
    ],
    benefits: [
      "Reduced diagnosis time",
      "Improved accuracy",
      "Access to comprehensive medical knowledge",
      "Enhanced decision support",
      "Continuous learning capability"
    ],
    challenges: [
      "Ensuring medical accuracy",
      "Managing large-scale medical data",
      "Optimizing model response time",
      "Maintaining data privacy standards"
    ],
    futurePlans: [
      "Integration with electronic health records",
      "Mobile application development",
      "Enhanced AI model training",
      "International market expansion"
    ],
    codeSnippets: [
      {
        title: "AI Response Handler",
        language: "typescript",
        code: `async function handleAIResponse(
  userInput: string,
  medicalContext: MedicalContext
): Promise<DiagnosticResponse> {
  try {
    const llmResponse = await llm.generate({
      prompt: generateMedicalPrompt(userInput, medicalContext),
      temperature: 0.3,
      maxTokens: 500
    });
    
    return {
      suggestion: llmResponse.text,
      confidence: llmResponse.confidence,
      references: await fetchMedicalReferences(llmResponse.keywords)
    };
  } catch (error) {
    console.error('AI Response Error:', error);
    throw new AIResponseError('Failed to generate diagnostic suggestion');
  }
}`,
        description: "Core function handling the AI response generation with medical context and error handling"
      },
      {
        title: "Real-time WebSocket Implementation",
        language: "typescript",
        code: `import { WebSocket, Server } from 'ws';

const wsServer = new Server({ port: 8080 });

wsServer.on('connection', (ws: WebSocket) => {
  ws.on('message', async (message: string) => {
    const data = JSON.parse(message);
    
    // Start streaming AI response
    const stream = await startAIStream(data.input);
    
    stream.on('data', (chunk) => {
      ws.send(JSON.stringify({
        type: 'stream',
        content: chunk.toString()
      }));
    });
    
    stream.on('end', () => {
      ws.send(JSON.stringify({
        type: 'complete'
      }));
    });
  });
});`,
        description: "WebSocket server implementation for real-time AI response streaming"
      }
    ],
    images: [
      {
        url: "/images/projects/medchat/dashboard.jpg",
        alt: "MedChat Dashboard Interface",
        caption: "Main dashboard showing patient history and AI suggestions"
      },
      {
        url: "/images/projects/medchat/diagnosis.jpg",
        alt: "Diagnosis Flow",
        caption: "Step-by-step diagnosis process with AI assistance"
      },
      {
        url: "/images/projects/medchat/mobile.jpg",
        alt: "Mobile Interface",
        caption: "Responsive mobile interface for on-the-go access"
      },
      {
        url: "/images/projects/medchat/analytics.jpg",
        alt: "Analytics Dashboard",
        caption: "Analytics dashboard showing system usage and accuracy metrics"
      }
    ]
  },
  {
    title: "Industrial Automation System",
    description: "Designed and implemented a complete industrial automation system for manufacturing processes",
    slug: "industrial-automation",
    tags: [
      { label: "PLC" },
      { label: "SCADA" },
      { label: "Industrial IoT" }
    ],
    date: "2024-01",
    introduction: "",
    background: "",
    useCase: "",
    inspiration: "",
    projectDetails: "",
    technologyStack: [],
    developmentProcess: "",
    features: [],
    benefits: [],
    challenges: [],
    futurePlans: [],
    conclusion: ""
  },
  {
    title: "Smart Building Control",
    description: "Developed an integrated building management system for energy efficiency and comfort",
    slug: "smart-building",
    tags: [
      { label: "Building Automation" },
      { label: "Energy Management" },
      { label: "IoT" }
    ],
    date: "2023-12",
    introduction: "",
    background: "",
    useCase: "",
    inspiration: "",
    projectDetails: "",
    technologyStack: [],
    developmentProcess: "",
    features: [],
    benefits: [],
    challenges: [],
    futurePlans: [],
    conclusion: ""
  },
  {
    title: "Data Center Infrastructure",
    description: "Designed and deployed critical infrastructure for a high-availability data center",
    slug: "data-center",
    tags: [
      { label: "Infrastructure" },
      { label: "Cooling" },
      { label: "Power Systems" }
    ],
    date: "2023-11",
    introduction: "",
    background: "",
    useCase: "",
    inspiration: "",
    projectDetails: "",
    technologyStack: [],
    developmentProcess: "",
    features: [],
    benefits: [],
    challenges: [],
    futurePlans: [],
    conclusion: ""
  },
  {
    title: "Renewable Energy Integration",
    description: "Implemented control systems for integrating renewable energy sources into the power grid",
    slug: "renewable-energy",
    tags: [
      { label: "Solar" },
      { label: "Grid Integration" },
      { label: "Control Systems" }
    ],
    date: "2023-10",
    introduction: "",
    background: "",
    useCase: "",
    inspiration: "",
    projectDetails: "",
    technologyStack: [],
    developmentProcess: "",
    features: [],
    benefits: [],
    challenges: [],
    futurePlans: [],
    conclusion: ""
  },
  {
    title: "Manufacturing Line Automation",
    description: "Automated a complete manufacturing line with robotic systems and quality control",
    slug: "manufacturing-automation",
    tags: [
      { label: "Robotics" },
      { label: "Quality Control" },
      { label: "Process Automation" }
    ],
    date: "2023-09",
    introduction: "",
    background: "",
    useCase: "",
    inspiration: "",
    projectDetails: "",
    technologyStack: [],
    developmentProcess: "",
    features: [],
    benefits: [],
    challenges: [],
    futurePlans: [],
    conclusion: ""
  },
  {
    title: "HVAC Optimization System",
    description: "Developed an AI-driven HVAC optimization system for commercial buildings",
    slug: "hvac-optimization",
    tags: [
      { label: "HVAC" },
      { label: "AI" },
      { label: "Energy Efficiency" }
    ],
    date: "2023-08",
    introduction: "",
    background: "",
    useCase: "",
    inspiration: "",
    projectDetails: "",
    technologyStack: [],
    developmentProcess: "",
    features: [],
    benefits: [],
    challenges: [],
    futurePlans: [],
    conclusion: ""
  }
];
