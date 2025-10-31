import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsUp, Share2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface PostCardProps {
  title: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  createdAt: Date;
  industry?: string;
}

const PostCard = ({ title, content, tags, likes, comments, createdAt, industry }: PostCardProps) => {
  return (
    <Card className="shadow-soft hover:shadow-hover transition-smooth">
      <CardContent className="pt-6">
        {industry && (
          <Badge variant="outline" className="mb-3">
            {industry}
          </Badge>
        )}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{content}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="text-sm text-muted-foreground">
          {formatDistanceToNow(createdAt, { addSuffix: true })}
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="gap-2">
            <ThumbsUp className="w-4 h-4" />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <MessageSquare className="w-4 h-4" />
            <span>{comments}</span>
          </Button>
        </div>
        <Button variant="ghost" size="sm">
          <Share2 className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;