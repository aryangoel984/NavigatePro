import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MicOff, VideoOff, Download, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import AIVideoConsultation from "@/components/ai-video-consultation"

export default function ConsultationPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Career Consultation</h1>
        <p className="text-muted-foreground">Get personalized career guidance from our AI mentor</p>
      </div>

      <Tabs defaultValue="video" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="video">Video Consultation</TabsTrigger>
          <TabsTrigger value="chat">Chat Consultation</TabsTrigger>
        </TabsList>
        <TabsContent value="video" className="mt-6">
          <VideoConsultation />
        </TabsContent>
        <TabsContent value="chat" className="mt-6">
          <ChatConsultation />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function VideoConsultation() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Live AI Video Consultation</CardTitle>
          <CardDescription>Speak with our AI career mentor to get personalized guidance</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <AIVideoConsultation />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button variant="outline" size="icon">
            <MicOff className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <VideoOff className="h-4 w-4" />
          </Button>
          <Button variant="destructive">End Consultation</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Consultation Summary</CardTitle>
          <CardDescription>Key insights from your session</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Recommended Career Paths</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Frontend Developer (92% match)</li>
              <li>UX/UI Designer (87% match)</li>
              <li>Full Stack Developer (83% match)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Skill Recommendations</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Strengthen JavaScript fundamentals</li>
              <li>Learn React framework in depth</li>
              <li>Develop UI/UX design principles</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Next Steps</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Complete the Advanced JavaScript course</li>
              <li>Build a portfolio project using React</li>
              <li>Explore internship opportunities</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Download className="mr-2 h-4 w-4" />
            Download Full Report
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function ChatConsultation() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>AI Chat Consultation</CardTitle>
        <CardDescription>Chat with our AI career advisor to explore your options</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            <ChatMessage
              sender="ai"
              message="Hello! I'm your AI career advisor. I'm here to help you explore tech career options and find the right path for you. What are you most interested in learning about?"
            />
            <ChatMessage
              sender="user"
              message="I'm interested in becoming a developer, but I'm not sure if I should focus on frontend or backend."
            />
            <ChatMessage
              sender="ai"
              message="That's a great question! Both frontend and backend development offer rewarding career paths. Let me ask you a few questions to help you decide which might be a better fit for you."
            />
            <ChatMessage
              sender="ai"
              message="Do you enjoy working on visual elements and user interfaces, or do you prefer working with data, logic, and systems behind the scenes?"
            />
            <ChatMessage
              sender="user"
              message="I think I enjoy the visual aspects more. I like seeing immediate results of my work."
            />
            <ChatMessage
              sender="ai"
              message="Based on your preference for visual work and immediate feedback, frontend development might be a good fit for you! Frontend developers create the user interfaces that people interact with, using technologies like HTML, CSS, JavaScript, and frameworks like React or Vue."
            />
            <ChatMessage
              sender="ai"
              message="Would you like me to provide more information about frontend development career paths, or would you like to explore some learning resources to get started?"
            />
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center space-x-2">
          <Input placeholder="Type your message..." />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

function ChatMessage({ sender, message }) {
  return (
    <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}>
      <div className={`flex gap-3 max-w-[80%] ${sender === "user" ? "flex-row-reverse" : ""}`}>
        <Avatar className={sender === "ai" ? "bg-purple-100" : "bg-blue-100"}>
          <AvatarFallback>{sender === "ai" ? "AI" : "You"}</AvatarFallback>
          {sender === "ai" && <AvatarImage src="/placeholder.svg?height=40&width=40" />}
        </Avatar>
        <div className={`rounded-lg p-3 ${sender === "ai" ? "bg-muted" : "bg-primary text-primary-foreground"}`}>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  )
}

