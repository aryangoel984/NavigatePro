import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function RoadmapPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Learning Roadmap</h1>
        <p className="text-muted-foreground">Your personalized path to becoming a Frontend Developer</p>
      </div>

      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="frontend">Frontend Developer</TabsTrigger>
          <TabsTrigger value="data">Data Scientist</TabsTrigger>
          <TabsTrigger value="fullstack">Full Stack Developer</TabsTrigger>
        </TabsList>

        <TabsContent value="frontend" className="mt-6 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Frontend Developer Roadmap</h2>
              <p className="text-muted-foreground">Estimated completion time: 8-12 months</p>
            </div>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download Roadmap
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <RoadmapStage
                title="Stage 1: Web Fundamentals"
                description="Master the core technologies of the web"
                progress={100}
                status="completed"
                modules={[
                  { name: "HTML5 Essentials", status: "completed" },
                  { name: "CSS3 & Responsive Design", status: "completed" },
                  { name: "JavaScript Fundamentals", status: "completed" },
                  { name: "Git & GitHub Basics", status: "completed" },
                ]}
              />

              <RoadmapStage
                title="Stage 2: Frontend Frameworks"
                description="Learn modern JavaScript frameworks"
                progress={65}
                status="in-progress"
                modules={[
                  { name: "React Fundamentals", status: "completed" },
                  { name: "State Management with Redux", status: "completed" },
                  { name: "React Router & Navigation", status: "in-progress" },
                  { name: "Building a React Portfolio Project", status: "not-started" },
                ]}
              />

              <RoadmapStage
                title="Stage 3: Advanced Frontend"
                description="Master advanced concepts and tools"
                progress={0}
                status="not-started"
                modules={[
                  { name: "TypeScript for Frontend", status: "not-started" },
                  { name: "Testing with Jest & React Testing Library", status: "not-started" },
                  { name: "Performance Optimization", status: "not-started" },
                  { name: "Progressive Web Apps (PWAs)", status: "not-started" },
                ]}
              />

              <RoadmapStage
                title="Stage 4: Professional Skills"
                description="Prepare for the job market"
                progress={0}
                status="not-started"
                modules={[
                  { name: "Building a Professional Portfolio", status: "not-started" },
                  { name: "Technical Interview Preparation", status: "not-started" },
                  { name: "Frontend System Design", status: "not-started" },
                  { name: "Career Development & Job Search", status: "not-started" },
                ]}
              />
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Progress</CardTitle>
                  <CardDescription>Frontend Developer Path</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Overall Completion</span>
                        <span className="text-sm text-muted-foreground">41%</span>
                      </div>
                      <Progress value={41} className="h-2" />
                    </div>

                    <div className="pt-4 space-y-2">
                      <h4 className="font-medium">Statistics</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Modules Completed:</span>
                          <span>6/16</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Hours Invested:</span>
                          <span>120</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Projects Built:</span>
                          <span>3</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Days Streak:</span>
                          <span>14</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Resources</CardTitle>
                  <CardDescription>Curated learning materials</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ResourceItem title="Modern React with Redux" type="Course" link="#" />
                    <ResourceItem title="JavaScript: The Good Parts" type="Book" link="#" />
                    <ResourceItem title="CSS Grid & Flexbox for Responsive Layouts" type="Tutorial" link="#" />
                    <ResourceItem title="Frontend Masters Bootcamp" type="Bootcamp" link="#" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="data" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Scientist Roadmap</CardTitle>
              <CardDescription>Switch to this path to view the detailed roadmap</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-8">
              <Button asChild>
                <Link href="/consultation">Get Personalized Data Science Roadmap</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fullstack" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Full Stack Developer Roadmap</CardTitle>
              <CardDescription>Switch to this path to view the detailed roadmap</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-8">
              <Button asChild>
                <Link href="/consultation">Get Personalized Full Stack Roadmap</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function RoadmapStage({ title, description, progress, status, modules }) {
  const statusColors = {
    completed: "bg-green-100 text-green-800",
    "in-progress": "bg-blue-100 text-blue-800",
    "not-started": "bg-gray-100 text-gray-800",
  }

  const statusLabels = {
    completed: "Completed",
    "in-progress": "In Progress",
    "not-started": "Not Started",
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge className={statusColors[status]}>{statusLabels[status]}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Stage Progress</span>
              <span className="text-sm text-muted-foreground">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="space-y-3 pt-2">
            {modules.map((module, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {module.status === "completed" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : module.status === "in-progress" ? (
                    <Clock className="h-5 w-5 text-blue-500" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                  )}
                  <span className={module.status === "completed" ? "line-through text-muted-foreground" : ""}>
                    {module.name}
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                  <Link href="#">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Open module</span>
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ResourceItem({ title, type, link }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-xs text-muted-foreground">{type}</p>
      </div>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
        <Link href={link}>
          <ExternalLink className="h-4 w-4" />
          <span className="sr-only">Open resource</span>
        </Link>
      </Button>
    </div>
  )
}

