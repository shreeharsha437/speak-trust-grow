import { MessageSquare, BarChart3, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import opecLogo from "@/assets/opec-logo.png";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={opecLogo} alt="OPEC Logo" className="w-10 h-10" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              OPEC
            </span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Button
              variant={isActive("/") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </Button>
            <Button
              variant={isActive("/community") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/community">
                <MessageSquare className="w-4 h-4 mr-2" />
                Community
              </Link>
            </Button>
            <Button
              variant={isActive("/insights") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/insights">
                <BarChart3 className="w-4 h-4 mr-2" />
                Insights
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;