import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-mesh flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-lg border-0 shadow-2xl text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-purple rounded-lg flex items-center justify-center">
              <Navigation className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl text-route-800">404</CardTitle>
          <CardDescription className="text-route-600 text-lg">
            Looks like you've taken a wrong turn!
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <p className="text-route-700">
            The page you're looking for doesn't exist, but don't worry - we'll help you get back on track.
          </p>
          
          <div className="space-y-3">
            <Link to="/" className="block">
              <Button className="w-full h-12 bg-gradient-purple hover:opacity-90 text-white">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="w-full h-12 border-route-200 text-route-700"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
          
          <div className="text-center text-sm text-route-600">
            Need help? <Link to="/" className="text-route-700 hover:text-route-800 font-semibold">Contact Support</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
