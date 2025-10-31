import Navigation from "@/components/Navigation";
import PostCard from "@/components/PostCard";
import ChatBot from "@/components/ChatBot";
import CreatePostDialog from "@/components/CreatePostDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

interface Post {
  id: string;
  title: string;
  content: string;
  tags: string[];
  likes: number;
  created_at: string;
  industry: string | null;
  user_id: string;
}

const Community = () => {
  const [showChat, setShowChat] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [commentCounts, setCommentCounts] = useState<Record<string, number>>({});
  const { toast } = useToast();
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setPosts(data || []);

      // Fetch comment counts for each post
      if (data) {
        const counts: Record<string, number> = {};
        await Promise.all(
          data.map(async (post) => {
            const { count } = await supabase
              .from("comments")
              .select("*", { count: "exact", head: true })
              .eq("post_id", post.id);
            counts[post.id] = count || 0;
          })
        );
        setCommentCounts(counts);
      }
    } catch (error: any) {
      console.error("Error fetching posts:", error);
      toast({
        title: "Error loading posts",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Signed out",
        description: "You've been signed out successfully.",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive"
      });
    }
  };

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
              <CreatePostDialog onPostCreated={fetchPosts} />
              <Button variant="ghost" size="icon" onClick={handleSignOut} title="Sign out">
                <LogOut className="w-4 h-4" />
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
                  {loading ? (
                    <div className="text-center py-8">
                      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                      <p className="text-muted-foreground">Loading posts...</p>
                    </div>
                  ) : posts.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground mb-4">No posts yet. Be the first to share!</p>
                      <CreatePostDialog onPostCreated={fetchPosts} />
                    </div>
                  ) : (
                    posts.map((post) => (
                      <PostCard
                        key={post.id}
                        title={post.title}
                        content={post.content}
                        tags={post.tags}
                        likes={post.likes}
                        comments={commentCounts[post.id] || 0}
                        createdAt={new Date(post.created_at)}
                        industry={post.industry || undefined}
                      />
                    ))
                  )}
                </TabsContent>

                <TabsContent value="recent" className="space-y-4 mt-6">
                  {loading ? (
                    <div className="text-center py-8">
                      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                      <p className="text-muted-foreground">Loading posts...</p>
                    </div>
                  ) : posts.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground mb-4">No posts yet. Be the first to share!</p>
                      <CreatePostDialog onPostCreated={fetchPosts} />
                    </div>
                  ) : (
                    posts.map((post) => (
                      <PostCard
                        key={post.id}
                        title={post.title}
                        content={post.content}
                        tags={post.tags}
                        likes={post.likes}
                        comments={commentCounts[post.id] || 0}
                        createdAt={new Date(post.created_at)}
                        industry={post.industry || undefined}
                      />
                    ))
                  )}
                </TabsContent>

                <TabsContent value="my-industry" className="space-y-4 mt-6">
                  {loading ? (
                    <div className="text-center py-8">
                      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                      <p className="text-muted-foreground">Loading posts...</p>
                    </div>
                  ) : (
                    posts.filter(p => p.industry).map((post) => (
                      <PostCard
                        key={post.id}
                        title={post.title}
                        content={post.content}
                        tags={post.tags}
                        likes={post.likes}
                        comments={commentCounts[post.id] || 0}
                        createdAt={new Date(post.created_at)}
                        industry={post.industry || undefined}
                      />
                    ))
                  )}
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