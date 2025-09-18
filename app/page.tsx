"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, BookOpen, BrainCircuit, Compass, LineChart, Video } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-br from-[#6D28D9] via-[#6366F1] to-[#60A5FA] text-white shadow-lg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-lg">
                NavigatePro
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-2xl font-light drop-shadow">
                Your AI-Powered Career Mapping Tool
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
              <Button asChild size="lg" className="bg-white text-purple-700 font-bold shadow-lg hover:shadow-xl hover:bg-purple-100 transition">
                <a href="/consultation">
                  Start AI Consultation
                  <BrainCircuit className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-purple-700 transition"
              >
                <a href="/explore" className="flex items-center">
                  Explore Careers
                  <Compass className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="text-purple-700 border border-purple-300 bg-white/90 backdrop-blur-sm hover:bg-purple-100">
                <a href="/login" className="flex items-center">
                  Login
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-b from-white via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800">Key Features</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Everything you need to make informed career decisions
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              icon={<Video className="h-8 w-8 text-purple-500" />}
              title="Live AI Video Consultations"
              description="Engage with our AI mentor through interactive video sessions for personalized career guidance."
              link="/consultation"
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-purple-500" />}
              title="Career Insights & Trends"
              description="Access real-time job market data, salary insights, and growth potential for various tech careers."
              link="/insights"
            />
            <FeatureCard
              icon={<BookOpen className="h-8 w-8 text-purple-500" />}
              title="Personalized Learning Roadmaps"
              description="Get customized step-by-step learning plans to acquire the skills needed for your chosen career."
              link="/roadmap"
            />
            <FeatureCard
              icon={<LineChart className="h-8 w-8 text-purple-500" />}
              title="Skill Gap Analysis"
              description="Identify what skills you need to develop to succeed in your desired tech career path."
              link="/skills"
            />
            <FeatureCard
              icon={<Compass className="h-8 w-8 text-purple-500" />}
              title="Career Comparison Tool"
              description="Compare different career options based on skills, salary, demand, and growth potential."
              link="/compare"
            />
            <FeatureCard
              icon={<BrainCircuit className="h-8 w-8 text-purple-500" />}
              title="AI-Powered Recommendations"
              description="Receive personalized career suggestions based on your interests, skills, and preferences."
              link="/recommendations"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-20 bg-gradient-to-r from-purple-100 via-indigo-100 to-white flex justify-center items-center">
        <div className="bg-white/90 rounded-2xl shadow-xl px-6 py-8 max-w-lg w-full flex flex-col items-center space-y-6 border border-purple-100 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-purple-800 drop-shadow">
              Ready to Find Your Perfect Tech Career?
            </h2>
            <p className="mx-auto max-w-[500px] text-indigo-800 md:text-xl font-medium">
              Start your journey today with our AI-powered career mapping tools.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="px-8 py-4 text-lg rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200"
          >
            <a href="/dashboard" className="flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 flex justify-center items-center">
          <p className="text-sm text-gray-400">&copy; 2025 NavigatePro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// Define the props type for FeatureCard
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

function FeatureCard({ icon, title, description, link }: FeatureCardProps) {
  return (
    <Card className="flex flex-col h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/90 rounded-xl">
      <CardHeader>
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-200 via-indigo-200 to-blue-200 mb-4 shadow">
          {icon}
        </div>
        <CardTitle className="text-purple-700">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base text-gray-700">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="w-full justify-start text-purple-600 hover:bg-purple-50">
          <a href={link} className="flex justify-between items-center w-full">
            <span>Learn more</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

