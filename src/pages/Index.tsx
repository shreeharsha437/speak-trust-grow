import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Shield, Users, TrendingUp, Sparkles, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              AI-Powered Anonymous Community
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
              Speak Freely.<br />Grow Together.
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A safe, verified space to voice workplace concerns, share experiences, 
              and get AI-powered guidance — without fear of judgment or retaliation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/auth">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Join Community
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/insights">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  View Insights
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose ClearVoice?
            </h2>
            <p className="text-muted-foreground text-lg">
              Built for professionals who deserve a voice
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-soft hover:shadow-hover transition-smooth border-primary/20">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Anonymous & Safe</h3>
                <p className="text-muted-foreground">
                  Verified identity through corporate email, but completely anonymous in posts and discussions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-smooth border-secondary/20">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Assistant "Echo"</h3>
                <p className="text-muted-foreground">
                  24/7 AI companion for emotional support, career guidance, and workplace conflict resolution.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-smooth border-accent/20">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Community</h3>
                <p className="text-muted-foreground">
                  Connect with professionals in your industry. NLP-powered tagging for better discovery.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-smooth border-primary/20">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Industry Insights</h3>
                <p className="text-muted-foreground">
                  Real-time analytics on workplace trends, stress levels, and satisfaction across industries.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-smooth border-secondary/20">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Moderated Discussions</h3>
                <p className="text-muted-foreground">
                  AI filters and peer moderation ensure respectful, empathetic conversations always.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-smooth border-accent/20">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mood Tracking</h3>
                <p className="text-muted-foreground">
                  AI sentiment analysis tracks your wellbeing and suggests resources for mental health.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="gradient-hero text-white shadow-hover overflow-hidden">
            <CardContent className="pt-12 pb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Find Your Voice?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of professionals creating a healthier, more transparent workplace culture.
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link to="/auth">
                  Get Started Free
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;