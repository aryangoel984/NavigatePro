"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InteractiveRoadmap from "@/components/interactive-roadmap"

export default function RoadmapPage() {
  const [selectedNode, setSelectedNode] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const frontendNodes = [
    {
      id: "start",
      title: "Where to Start?",
      description: "Begin your frontend development journey",
      x: 300,
      y: 300,
      color: "#8884d8",
      children: [
        {
          id: "fundamentals",
          title: "Web Fundamentals",
          description: "Master the basics of web development",
          x: 500,
          y: 200,
          color: "#82ca9d",
          status: "not-started",
          children: [
            {
              id: "html",
              title: "HTML5",
              description: "Structure and semantics",
              x: 700,
              y: 150,
              color: "#8884d8",
              status: "not-started",
            },
            {
              id: "css",
              title: "CSS3",
              description: "Styling and layouts",
              x: 700,
              y: 250,
              color: "#8884d8",
              status: "not-started",
            },
          ],
        },
        {
          id: "javascript",
          title: "JavaScript",
          description: "Core programming concepts",
          x: 500,
          y: 400,
          color: "#ffc658",
          status: "not-started",
          children: [
            {
              id: "es6",
              title: "ES6+",
              description: "Modern JavaScript features",
              x: 700,
              y: 350,
              color: "#ffc658",
              status: "not-started",
            },
            {
              id: "dom",
              title: "DOM",
              description: "Document Object Model",
              x: 700,
              y: 450,
              color: "#ffc658",
              status: "not-started",
            },
          ],
        },
      ],
    },
  ]

  const handleNodeClick = (node) => {
    setSelectedNode(node)
    setIsDialogOpen(true)
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Interactive Career Roadmap</h1>
        <p className="text-muted-foreground">Explore your learning path with this interactive mind map</p>
      </div>

      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="frontend">Frontend Developer</TabsTrigger>
          <TabsTrigger value="data">Data Scientist</TabsTrigger>
          <TabsTrigger value="fullstack">Full Stack Developer</TabsTrigger>
        </TabsList>

        <TabsContent value="frontend" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Frontend Developer Roadmap</CardTitle>
              <CardDescription>Click on any node to explore details and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <InteractiveRoadmap nodes={frontendNodes} onNodeClick={handleNodeClick} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Scientist Roadmap</CardTitle>
              <CardDescription>Click on any node to explore details and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-[600px] bg-gray-50 rounded-lg overflow-hidden">
                <DataScienceRoadmap onNodeClick={handleNodeClick} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fullstack" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Full Stack Developer Roadmap</CardTitle>
              <CardDescription>Click on any node to explore details and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-[600px] bg-gray-50 rounded-lg overflow-hidden">
                <FullStackRoadmap onNodeClick={handleNodeClick} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {selectedNode && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedNode.title}</DialogTitle>
              <DialogDescription>{selectedNode.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <h3 className="font-medium mb-2">Learning Resources</h3>
              <ul className="space-y-2">
                <li>Resource 1</li>
                <li>Resource 2</li>
                <li>Resource 3</li>
              </ul>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

function FrontendRoadmap({ onNodeClick }) {
  const frontendNodesOriginal = [
    {
      id: "html-css",
      title: "HTML & CSS Fundamentals",
      description: "The building blocks of web development",
      x: 150,
      y: 300,
      status: "completed",
      importance:
        "HTML and CSS are the foundation of all web development. They define the structure and appearance of web pages and are essential skills for any frontend developer.",
      concepts: [
        "HTML5 semantic elements",
        "CSS selectors and specificity",
        "Responsive design principles",
        "Flexbox and Grid layouts",
        "CSS variables and custom properties",
      ],
      resources: [
        { title: "MDN Web Docs - HTML", type: "Documentation" },
        { title: "CSS Tricks - Complete Guide to Flexbox", type: "Tutorial" },
        { title: "Frontend Masters - HTML & CSS Basics", type: "Course" },
      ],
    },
    {
      id: "javascript",
      title: "JavaScript Fundamentals",
      description: "Core programming concepts for the web",
      x: 350,
      y: 300,
      status: "completed",
      importance:
        "JavaScript is the programming language of the web, allowing you to create dynamic and interactive websites. It's essential for any frontend developer role.",
      concepts: [
        "Variables, data types, and operators",
        "Functions and scope",
        "Arrays and objects",
        "DOM manipulation",
        "Event handling",
        "Asynchronous JavaScript (Promises, async/await)",
      ],
      resources: [
        { title: "JavaScript.info", type: "Documentation" },
        { title: "Eloquent JavaScript", type: "Book" },
        { title: "JavaScript30 by Wes Bos", type: "Course" },
      ],
    },
    {
      id: "react",
      title: "React Framework",
      description: "Component-based UI development",
      x: 550,
      y: 200,
      status: "in-progress",
      importance:
        "React is one of the most popular frontend frameworks, used by companies like Facebook, Instagram, and Airbnb. It enables developers to build reusable UI components and manage application state efficiently.",
      concepts: [
        "Components and props",
        "State and lifecycle",
        "Hooks (useState, useEffect, useContext)",
        "Context API",
        "React Router",
        "State management (Redux, Zustand)",
      ],
      resources: [
        { title: "React Documentation", type: "Documentation" },
        { title: "Epic React by Kent C. Dodds", type: "Course" },
        { title: "React for Beginners by Wes Bos", type: "Course" },
      ],
    },
    {
      id: "typescript",
      title: "TypeScript",
      description: "Type-safe JavaScript development",
      x: 550,
      y: 400,
      status: "not-started",
      importance:
        "TypeScript adds static typing to JavaScript, helping catch errors during development rather than at runtime. It's increasingly required for frontend roles, especially in larger companies and enterprise applications.",
      concepts: [
        "Basic types and interfaces",
        "Type inference",
        "Generics",
        "Union and intersection types",
        "TypeScript with React",
        "Advanced type utilities",
      ],
      resources: [
        { title: "TypeScript Handbook", type: "Documentation" },
        { title: "TypeScript Deep Dive", type: "Book" },
        { title: "Total TypeScript by Matt Pocock", type: "Course" },
      ],
    },
    {
      id: "testing",
      title: "Frontend Testing",
      description: "Ensuring code quality and reliability",
      x: 750,
      y: 300,
      status: "not-started",
      importance:
        "Testing is crucial for maintaining code quality and preventing regressions. Frontend testing includes unit tests, integration tests, and end-to-end tests to ensure your application works as expected.",
      concepts: [
        "Jest for unit testing",
        "React Testing Library",
        "Component testing",
        "Mocking API calls",
        "End-to-end testing with Cypress",
        "Test-driven development (TDD)",
      ],
      resources: [
        { title: "Testing JavaScript by Kent C. Dodds", type: "Course" },
        { title: "React Testing Library Documentation", type: "Documentation" },
        { title: "Cypress Documentation", type: "Documentation" },
      ],
    },
    {
      id: "performance",
      title: "Web Performance",
      description: "Optimizing for speed and user experience",
      x: 950,
      y: 200,
      status: "not-started",
      importance:
        "Web performance directly impacts user experience, conversion rates, and SEO rankings. Understanding how to optimize your frontend applications is a valuable skill that sets you apart as a developer.",
      concepts: [
        "Core Web Vitals",
        "Lazy loading and code splitting",
        "Image optimization",
        "Caching strategies",
        "Performance monitoring",
        "Bundle size optimization",
      ],
      resources: [
        { title: "web.dev - Learn Web Performance", type: "Documentation" },
        { title: "Frontend Masters - Web Performance", type: "Course" },
        { title: "Lighthouse Documentation", type: "Tool" },
      ],
    },
    {
      id: "accessibility",
      title: "Web Accessibility",
      description: "Building inclusive web experiences",
      x: 950,
      y: 400,
      status: "not-started",
      importance:
        "Web accessibility ensures that websites and applications are usable by people with disabilities. It's not only a legal requirement in many countries but also expands your user base and demonstrates ethical development practices.",
      concepts: [
        "WCAG guidelines",
        "Semantic HTML",
        "Keyboard navigation",
        "Screen reader compatibility",
        "Color contrast and visual design",
        "Accessible forms and interactive elements",
      ],
      resources: [
        { title: "MDN Web Docs - Accessibility", type: "Documentation" },
        { title: "A11y Project", type: "Resource" },
        { title: "Deque University", type: "Course" },
      ],
    },
    {
      id: "advanced-ui",
      title: "Advanced UI Development",
      description: "Creating polished user interfaces",
      x: 1150,
      y: 300,
      status: "not-started",
      importance:
        "Advanced UI development skills help you create polished, professional interfaces that stand out. This includes animations, complex interactions, and attention to design details.",
      concepts: [
        "CSS animations and transitions",
        "SVG animations",
        "Advanced React patterns",
        "Micro-interactions",
        "Design systems",
        "CSS-in-JS libraries",
      ],
      resources: [
        { title: "Advanced CSS and Sass by Jonas Schmedtmann", type: "Course" },
        { title: "Framer Motion Documentation", type: "Documentation" },
        { title: "UI Animation Fundamentals", type: "Course" },
      ],
    },
  ]

  // Draw connections between nodes
  const connections = [
    { from: "html-css", to: "javascript" },
    { from: "javascript", to: "react" },
    { from: "javascript", to: "typescript" },
    { from: "react", to: "testing" },
    { from: "typescript", to: "testing" },
    { from: "testing", to: "performance" },
    { from: "testing", to: "accessibility" },
    { from: "performance", to: "advanced-ui" },
    { from: "accessibility", to: "advanced-ui" },
  ]

  return (
    <div className="relative w-full h-full">
      {/* Draw connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map((connection, index) => {
          const fromNode = frontendNodesOriginal.find((node) => node.id === connection.from)
          const toNode = frontendNodesOriginal.find((node) => node.id === connection.to)

          if (fromNode && toNode) {
            return (
              <line
                key={index}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="#d1d5db"
                strokeWidth="2"
              />
            )
          }
          return null
        })}
      </svg>

      {/* Draw nodes */}
      {frontendNodesOriginal.map((node) => (
        <div
          key={node.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-40 p-2 rounded-lg shadow-md cursor-pointer transition-all hover:scale-105 ${
            node.status === "completed"
              ? "bg-green-100 border-green-500"
              : node.status === "in-progress"
                ? "bg-blue-100 border-blue-500"
                : "bg-white border-gray-300"
          } border-2`}
          style={{ left: node.x, top: node.y }}
          onClick={() => onNodeClick(node)}
        >
          <div className="text-center">
            <h3 className="font-medium text-sm">{node.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{node.description}</p>
            {node.status === "completed" && <Badge className="mt-2 bg-green-500">Completed</Badge>}
            {node.status === "in-progress" && <Badge className="mt-2 bg-blue-500">In Progress</Badge>}
          </div>
        </div>
      ))}
    </div>
  )
}

function DataScienceRoadmap({ onNodeClick }) {
  const dataScienceNodes = [
    {
      id: "python",
      title: "Python Programming",
      description: "Foundation for data science",
      x: 150,
      y: 300,
      status: "not-started",
      importance:
        "Python is the most widely used programming language in data science due to its simplicity, readability, and powerful libraries for data analysis and machine learning.",
      concepts: [
        "Basic syntax and data types",
        "Control flow and functions",
        "Object-oriented programming",
        "File handling and I/O",
        "Libraries (NumPy, Pandas)",
        "Virtual environments",
      ],
      resources: [
        { title: "Python Documentation", type: "Documentation" },
        { title: "Python for Data Science Handbook", type: "Book" },
        { title: "DataCamp - Introduction to Python", type: "Course" },
      ],
    },
    {
      id: "statistics",
      title: "Statistics & Mathematics",
      description: "Theoretical foundation",
      x: 350,
      y: 300,
      status: "not-started",
      importance:
        "Statistics and mathematics form the theoretical foundation of data science. Understanding these concepts is crucial for interpreting data, building models, and drawing meaningful conclusions.",
      concepts: [
        "Descriptive statistics",
        "Probability distributions",
        "Hypothesis testing",
        "Linear algebra basics",
        "Calculus fundamentals",
        "Bayesian statistics",
      ],
      resources: [
        { title: "Statistics and Probability by Khan Academy", type: "Course" },
        { title: "Think Stats by Allen B. Downey", type: "Book" },
        { title: "StatQuest with Josh Starmer (YouTube)", type: "Video Series" },
      ],
    },
    {
      id: "data-analysis",
      title: "Data Analysis & Visualization",
      description: "Extracting insights from data",
      x: 550,
      y: 200,
      status: "not-started",
      importance:
        "Data analysis and visualization are essential skills for exploring datasets, identifying patterns, and communicating findings effectively to stakeholders.",
      concepts: [
        "Data cleaning and preprocessing",
        "Exploratory data analysis (EDA)",
        "Pandas for data manipulation",
        "Matplotlib and Seaborn for visualization",
        "Tableau for interactive dashboards",
        "Statistical analysis techniques",
      ],
      resources: [
        { title: "Pandas Documentation", type: "Documentation" },
        { title: "Data Visualization with Python", type: "Course" },
        { title: "Storytelling with Data by Cole Nussbaumer Knaflic", type: "Book" },
      ],
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      description: "Building predictive models",
      x: 550,
      y: 400,
      status: "not-started",
      importance:
        "Machine learning is at the core of data science, enabling computers to learn patterns from data and make predictions or decisions without explicit programming.",
      concepts: [
        "Supervised vs. unsupervised learning",
        "Classification and regression",
        "Model evaluation and validation",
        "Feature engineering",
        "Ensemble methods",
        "Scikit-learn library",
      ],
      resources: [
        { title: "Hands-On Machine Learning with Scikit-Learn", type: "Book" },
        { title: "Machine Learning by Andrew Ng (Coursera)", type: "Course" },
        { title: "Scikit-learn Documentation", type: "Documentation" },
      ],
    },
    {
      id: "deep-learning",
      title: "Deep Learning",
      description: "Neural networks and AI",
      x: 750,
      y: 300,
      status: "not-started",
      importance:
        "Deep learning is a subset of machine learning that uses neural networks with multiple layers to model complex patterns in data, enabling breakthroughs in image recognition, natural language processing, and more.",
      concepts: [
        "Neural network fundamentals",
        "Convolutional neural networks (CNNs)",
        "Recurrent neural networks (RNNs)",
        "Transfer learning",
        "TensorFlow and PyTorch",
        "GPU acceleration",
      ],
      resources: [
        { title: "Deep Learning by Ian Goodfellow", type: "Book" },
        { title: "Deep Learning Specialization by Andrew Ng", type: "Course" },
        { title: "TensorFlow Documentation", type: "Documentation" },
      ],
    },
    {
      id: "big-data",
      title: "Big Data Technologies",
      description: "Processing large-scale datasets",
      x: 950,
      y: 200,
      status: "not-started",
      importance:
        "Big data technologies enable the processing and analysis of datasets too large for traditional data processing applications, a crucial skill for working with enterprise-scale data.",
      concepts: [
        "Distributed computing",
        "Hadoop ecosystem",
        "Apache Spark",
        "SQL and NoSQL databases",
        "Data warehousing",
        "Cloud computing (AWS, GCP, Azure)",
      ],
      resources: [
        { title: "Learning Spark by Holden Karau", type: "Book" },
        { title: "Big Data Specialization (Coursera)", type: "Course" },
        { title: "Apache Spark Documentation", type: "Documentation" },
      ],
    },
    {
      id: "mlops",
      title: "MLOps & Deployment",
      description: "Operationalizing ML models",
      x: 950,
      y: 400,
      status: "not-started",
      importance:
        "MLOps (Machine Learning Operations) bridges the gap between model development and deployment, ensuring that ML models can be reliably deployed, monitored, and maintained in production environments.",
      concepts: [
        "Model versioning and tracking",
        "CI/CD for machine learning",
        "Model serving and APIs",
        "Monitoring and maintenance",
        "Docker and containerization",
        "Kubernetes for orchestration",
      ],
      resources: [
        { title: "Building Machine Learning Pipelines by Hannes Hapke", type: "Book" },
        { title: "MLOps Specialization (Coursera)", type: "Course" },
        { title: "MLflow Documentation", type: "Documentation" },
      ],
    },
    {
      id: "domain-expertise",
      title: "Domain Expertise & Communication",
      description: "Applying DS to real-world problems",
      x: 1150,
      y: 300,
      status: "not-started",
      importance:
        "Domain expertise and communication skills are what transform a data scientist from a technical practitioner to a valuable business asset who can solve real-world problems and effectively communicate insights.",
      concepts: [
        "Business acumen",
        "Problem formulation",
        "Stakeholder management",
        "Data storytelling",
        "Ethical considerations",
        "Project management",
      ],
      resources: [
        { title: "Data Science for Business by Foster Provost", type: "Book" },
        { title: "Communicating Data Science Results", type: "Course" },
        { title: "The Art of Data Science by Roger Peng", type: "Book" },
      ],
    },
  ]

  // Draw connections between nodes
  const connections = [
    { from: "python", to: "statistics" },
    { from: "python", to: "data-analysis" },
    { from: "statistics", to: "data-analysis" },
    { from: "statistics", to: "machine-learning" },
    { from: "data-analysis", to: "machine-learning" },
    { from: "machine-learning", to: "deep-learning" },
    { from: "deep-learning", to: "big-data" },
    { from: "deep-learning", to: "mlops" },
    { from: "big-data", to: "domain-expertise" },
    { from: "mlops", to: "domain-expertise" },
  ]

  return (
    <div className="relative w-full h-full">
      {/* Draw connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map((connection, index) => {
          const fromNode = dataScienceNodes.find((node) => node.id === connection.from)
          const toNode = dataScienceNodes.find((node) => node.id === connection.to)

          if (fromNode && toNode) {
            return (
              <line
                key={index}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="#d1d5db"
                strokeWidth="2"
              />
            )
          }
          return null
        })}
      </svg>

      {/* Draw nodes */}
      {dataScienceNodes.map((node) => (
        <div
          key={node.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-40 p-2 rounded-lg shadow-md cursor-pointer transition-all hover:scale-105 ${
            node.status === "completed"
              ? "bg-green-100 border-green-500"
              : node.status === "in-progress"
                ? "bg-blue-100 border-blue-500"
                : "bg-white border-gray-300"
          } border-2`}
          style={{ left: node.x, top: node.y }}
          onClick={() => onNodeClick(node)}
        >
          <div className="text-center">
            <h3 className="font-medium text-sm">{node.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{node.description}</p>
            {node.status === "completed" && <Badge className="mt-2 bg-green-500">Completed</Badge>}
            {node.status === "in-progress" && <Badge className="mt-2 bg-blue-500">In Progress</Badge>}
          </div>
        </div>
      ))}
    </div>
  )
}

function FullStackRoadmap({ onNodeClick }) {
  const fullStackNodes = [
    {
      id: "html-css",
      title: "HTML & CSS",
      description: "Frontend fundamentals",
      x: 150,
      y: 200,
      status: "not-started",
      importance:
        "HTML and CSS are the foundation of all web development. They define the structure and appearance of web pages and are essential skills for any full stack developer.",
      concepts: [
        "HTML5 semantic elements",
        "CSS selectors and specificity",
        "Responsive design principles",
        "Flexbox and Grid layouts",
        "CSS preprocessors (Sass, Less)",
      ],
      resources: [
        { title: "MDN Web Docs - HTML", type: "Documentation" },
        { title: "CSS Tricks - Complete Guide to Flexbox", type: "Tutorial" },
        { title: "Frontend Masters - HTML & CSS Basics", type: "Course" },
      ],
    },
    {
      id: "javascript",
      title: "JavaScript",
      description: "Frontend programming",
      x: 150,
      y: 400,
      status: "not-started",
      importance:
        "JavaScript is the programming language of the web, allowing you to create dynamic and interactive websites. It's essential for both frontend and backend development in a full stack role.",
      concepts: [
        "Variables, data types, and operators",
        "Functions and scope",
        "DOM manipulation",
        "Event handling",
        "Asynchronous JavaScript",
        "ES6+ features",
      ],
      resources: [
        { title: "JavaScript.info", type: "Documentation" },
        { title: "Eloquent JavaScript", type: "Book" },
        { title: "JavaScript30 by Wes Bos", type: "Course" },
      ],
    },
    {
      id: "frontend-framework",
      title: "Frontend Framework",
      description: "React, Angular, or Vue",
      x: 350,
      y: 200,
      status: "not-started",
      importance:
        "Frontend frameworks like React, Angular, or Vue.js provide structured approaches to building complex user interfaces, with features like component-based architecture and state management.",
      concepts: [
        "Components and props",
        "State management",
        "Routing",
        "API integration",
        "Form handling",
        "Performance optimization",
      ],
      resources: [
        { title: "React Documentation", type: "Documentation" },
        { title: "Vue.js Documentation", type: "Documentation" },
        { title: "Angular Documentation", type: "Documentation" },
      ],
    },
    {
      id: "backend-language",
      title: "Backend Language",
      description: "Node.js, Python, etc.",
      x: 350,
      y: 400,
      status: "not-started",
      importance:
        "Backend languages handle server-side logic, database interactions, and API endpoints. Node.js is popular for full stack JavaScript development, while Python, Java, and others offer different strengths.",
      concepts: [
        "Server-side programming",
        "Request-response cycle",
        "Middleware",
        "Authentication",
        "Error handling",
        "Performance considerations",
      ],
      resources: [
        { title: "Node.js Documentation", type: "Documentation" },
        { title: "Python Django Documentation", type: "Documentation" },
        { title: "The Odin Project - NodeJS", type: "Course" },
      ],
    },
    {
      id: "databases",
      title: "Databases",
      description: "SQL and NoSQL",
      x: 550,
      y: 300,
      status: "not-started",
      importance:
        "Databases store and manage application data. Understanding both SQL (relational) and NoSQL databases is important for choosing the right data storage solution for different use cases.",
      concepts: [
        "Database design",
        "SQL queries",
        "CRUD operations",
        "Indexing and optimization",
        "MongoDB for NoSQL",
        "PostgreSQL/MySQL for SQL",
      ],
      resources: [
        { title: "SQL Tutorial - W3Schools", type: "Tutorial" },
        { title: "MongoDB University", type: "Course" },
        { title: "Database Design for Mere Mortals", type: "Book" },
      ],
    },
    {
      id: "api-development",
      title: "API Development",
      description: "RESTful and GraphQL",
      x: 750,
      y: 300,
      status: "not-started",
      importance:
        "APIs (Application Programming Interfaces) enable communication between different software systems. RESTful APIs and GraphQL are two popular approaches for building web APIs.",
      concepts: [
        "REST principles",
        "HTTP methods",
        "API authentication",
        "GraphQL schemas",
        "API documentation",
        "Rate limiting and security",
      ],
      resources: [
        { title: "RESTful API Design - Best Practices", type: "Documentation" },
        { title: "GraphQL Documentation", type: "Documentation" },
        { title: "API Design Patterns", type: "Book" },
      ],
    },
    {
      id: "devops",
      title: "DevOps & Deployment",
      description: "CI/CD, cloud services",
      x: 950,
      y: 200,
      status: "not-started",
      importance:
        "DevOps practices bridge development and operations, enabling continuous integration, delivery, and deployment. Understanding deployment processes is crucial for getting applications to production.",
      concepts: [
        "Git workflow",
        "CI/CD pipelines",
        "Docker containers",
        "Cloud platforms (AWS, Azure, GCP)",
        "Monitoring and logging",
        "Infrastructure as code",
      ],
      resources: [
        { title: "GitHub Actions Documentation", type: "Documentation" },
        { title: "Docker Documentation", type: "Documentation" },
        { title: "AWS for Developers", type: "Course" },
      ],
    },
    {
      id: "testing",
      title: "Testing & Quality",
      description: "Unit, integration, E2E tests",
      x: 950,
      y: 400,
      status: "not-started",
      importance:
        "Testing ensures code quality, prevents regressions, and makes codebases maintainable. Full stack developers should be familiar with testing at all levels of the application stack.",
      concepts: [
        "Unit testing",
        "Integration testing",
        "End-to-end testing",
        "Test-driven development",
        "Mocking and stubbing",
        "Code coverage",
      ],
      resources: [
        { title: "Jest Documentation", type: "Documentation" },
        { title: "Testing JavaScript by Kent C. Dodds", type: "Course" },
        { title: "Cypress Documentation", type: "Documentation" },
      ],
    },
    {
      id: "architecture",
      title: "System Architecture",
      description: "Designing scalable systems",
      x: 1150,
      y: 300,
      status: "not-started",
      importance:
        "System architecture involves designing scalable, maintainable software systems. Understanding architectural patterns helps build applications that can grow and adapt to changing requirements.",
      concepts: [
        "Microservices vs. monoliths",
        "Serverless architecture",
        "Caching strategies",
        "Load balancing",
        "Database scaling",
        "Security best practices",
      ],
      resources: [
        { title: "Clean Architecture by Robert C. Martin", type: "Book" },
        { title: "System Design Interview", type: "Book" },
        { title: "Microservices Patterns", type: "Course" },
      ],
    },
  ]

  // Draw connections between nodes
  const connections = [
    { from: "html-css", to: "frontend-framework" },
    { from: "javascript", to: "frontend-framework" },
    { from: "javascript", to: "backend-language" },
    { from: "frontend-framework", to: "api-development" },
    { from: "backend-language", to: "databases" },
    { from: "databases", to: "api-development" },
    { from: "api-development", to: "devops" },
    { from: "api-development", to: "testing" },
    { from: "devops", to: "architecture" },
    { from: "testing", to: "architecture" },
  ]

  return (
    <div className="relative w-full h-full">
      {/* Draw connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map((connection, index) => {
          const fromNode = fullStackNodes.find((node) => node.id === connection.from)
          const toNode = fullStackNodes.find((node) => node.id === connection.to)

          if (fromNode && toNode) {
            return (
              <line
                key={index}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="#d1d5db"
                strokeWidth="2"
              />
            )
          }
          return null
        })}
      </svg>

      {/* Draw nodes */}
      {fullStackNodes.map((node) => (
        <div
          key={node.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-40 p-2 rounded-lg shadow-md cursor-pointer transition-all hover:scale-105 ${
            node.status === "completed"
              ? "bg-green-100 border-green-500"
              : node.status === "in-progress"
                ? "bg-blue-100 border-blue-500"
                : "bg-white border-gray-300"
          } border-2`}
          style={{ left: node.x, top: node.y }}
          onClick={() => onNodeClick(node)}
        >
          <div className="text-center">
            <h3 className="font-medium text-sm">{node.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{node.description}</p>
            {node.status === "completed" && <Badge className="mt-2 bg-green-500">Completed</Badge>}
            {node.status === "in-progress" && <Badge className="mt-2 bg-blue-500">In Progress</Badge>}
          </div>
        </div>
      ))}
    </div>
  )
}

