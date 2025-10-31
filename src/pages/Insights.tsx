import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, AlertCircle, Heart } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Insights = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Industry Insights</h1>
            <p className="text-muted-foreground">
              Real-time analytics on workplace trends and satisfaction
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-soft border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl font-bold">12.5K</span>
                </div>
                <p className="text-sm text-muted-foreground">Active Members</p>
                <p className="text-xs text-primary mt-1">+18% this month</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-secondary/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl font-bold">8.2K</span>
                </div>
                <p className="text-sm text-muted-foreground">Posts This Month</p>
                <p className="text-xs text-secondary mt-1">+24% growth</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-accent/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl font-bold">342</span>
                </div>
                <p className="text-sm text-muted-foreground">Issues Reported</p>
                <p className="text-xs text-accent mt-1">-12% vs last month</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl font-bold">7.8</span>
                </div>
                <p className="text-sm text-muted-foreground">Avg Satisfaction</p>
                <p className="text-xs text-primary mt-1">Out of 10</p>
              </CardContent>
            </Card>
          </div>

          {/* Trend Analysis */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Top Workplace Concerns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Work-Life Balance</span>
                    <span className="text-sm text-muted-foreground">68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Management Issues</span>
                    <span className="text-sm text-muted-foreground">54%</span>
                  </div>
                  <Progress value={54} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Career Growth</span>
                    <span className="text-sm text-muted-foreground">47%</span>
                  </div>
                  <Progress value={47} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Compensation</span>
                    <span className="text-sm text-muted-foreground">42%</span>
                  </div>
                  <Progress value={42} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Team Dynamics</span>
                    <span className="text-sm text-muted-foreground">38%</span>
                  </div>
                  <Progress value={38} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Satisfaction by Industry</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Technology</span>
                    <span className="text-sm text-muted-foreground">8.2/10</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Healthcare</span>
                    <span className="text-sm text-muted-foreground">7.9/10</span>
                  </div>
                  <Progress value={79} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Finance</span>
                    <span className="text-sm text-muted-foreground">7.5/10</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Marketing</span>
                    <span className="text-sm text-muted-foreground">7.3/10</span>
                  </div>
                  <Progress value={73} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Retail</span>
                    <span className="text-sm text-muted-foreground">6.8/10</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Insights */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Key Findings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="font-medium">Remote work stress increasing</p>
                    <p className="text-sm text-muted-foreground">
                      45% of remote workers report feeling isolated and overworked
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                  <div>
                    <p className="font-medium">Mental health awareness growing</p>
                    <p className="text-sm text-muted-foreground">
                      More companies implementing wellness programs after community feedback
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <p className="font-medium">Pay transparency gaining traction</p>
                    <p className="text-sm text-muted-foreground">
                      68% support sharing salary ranges in job postings
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Insights;