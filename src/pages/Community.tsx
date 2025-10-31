import Navigation from "@/components/Navigation";
import PostCard from "@/components/PostCard";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus } from "lucide-react";
import { useState } from "react";

// Mock data
const mockPosts = [
  {
    title: "How to handle micromanagement in remote work?",
    content: "I've been working remotely for 6 months and my manager constantly asks for updates every 2 hours. It's affecting my productivity and mental health. Has anyone dealt with this?",
    tags: ["remote-work", "management", "mental-health"],
    likes: 24,
    comments: 12,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3),
    industry: "Tech"
  },
  {
    title: "Salary negotiation tips that actually worked",
    content: "After 3 years at the same company, I finally negotiated a 20% raise. Here's what worked for me and what didn't. Happy to share my experience!",
    tags: ["salary", "career-growth", "negotiation"],
    likes: 45,
    comments: 28,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8),
    industry: "Finance"
  },
  {
    title: "Toxic team culture - when should you leave?",
    content: "The project is interesting but the team dynamics are terrible. Constant blame games, no psychological safety. At what point do you draw the line?",
    tags: ["workplace-culture", "team-dynamics", "career-advice"],
    likes: 67,
    comments: 34,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
    industry: "Marketing"
  },
  {
    title: "Successfully reported harassment - here's my story",
    content: "It took courage but I reported workplace harassment through proper channels. The process was long but justice prevailed. Here's what I learned...",
    tags: ["harassment", "hr", "workplace-safety"],
    likes: 89,
    comments: 42,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    industry: "Healthcare"
  }
];

const Community = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Community</h1>
              <p className="text-muted-foreground">
                Share experiences, seek advice, grow together
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => setShowChat(!showChat)}>
                Talk to Echo
              </Button>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                New Post
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search discussions..." 
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Tabs defaultValue="trending">
                <TabsList>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="my-industry">My Industry</TabsTrigger>
                </TabsList>

                <TabsContent value="trending" className="space-y-4 mt-6">
                  {mockPosts.map((post, index) => (
                    <PostCard key={index} {...post} />
                  ))}
                </TabsContent>

                <TabsContent value="recent" className="space-y-4 mt-6">
                  {mockPosts.map((post, index) => (
                    <PostCard key={index} {...post} />
                  ))}
                </TabsContent>

                <TabsContent value="my-industry" className="space-y-4 mt-6">
                  {mockPosts.filter(p => p.industry === "Tech").map((post, index) => (
                    <PostCard key={index} {...post} />
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar - Echo Chatbot */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ChatBot isOpen={showChat} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;