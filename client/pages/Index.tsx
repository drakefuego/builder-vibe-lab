import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation, Clock, DollarSign, Bus, ArrowRight, Search, Star } from "lucide-react";

export default function Index() {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");

  const handleSearch = () => {
    if (fromLocation && toLocation) {
      // Navigate to results page with location data
      window.location.href = `/search?from=${encodeURIComponent(fromLocation)}&to=${encodeURIComponent(toLocation)}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-mesh">
      {/* Header */}
      <header className="relative z-10 bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-purple rounded-lg flex items-center justify-center">
              <Navigation className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">RouteMate</h1>
          </div>
          <div className="flex space-x-2">
            <Link to="/login">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-white text-route-700 hover:bg-white/90">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Journey
            <span className="block bg-gradient-to-r from-white to-route-200 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Find the best routes, track real-time buses, and discover the fastest way to reach your destination.
          </p>
        </div>

        {/* Route Planner Card */}
        <Card className="max-w-2xl mx-auto bg-white/95 backdrop-blur-lg border-0 shadow-2xl animate-float">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-route-800">Plan Your Route</CardTitle>
            <CardDescription className="text-route-600">
              Enter your starting point and destination to get started
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-route-500" />
                <Input
                  placeholder="From (Current location or address)"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  className="pl-10 h-12 text-lg border-route-200 focus:border-route-500 focus:ring-route-500"
                />
              </div>
              
              <div className="flex justify-center">
                <div className="w-8 h-8 bg-route-100 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-route-600" />
                </div>
              </div>

              <div className="relative">
                <Navigation className="absolute left-3 top-3 w-5 h-5 text-route-500" />
                <Input
                  placeholder="To (Destination address)"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  className="pl-10 h-12 text-lg border-route-200 focus:border-route-500 focus:ring-route-500"
                />
              </div>
            </div>

            <Button 
              onClick={handleSearch}
              className="w-full h-12 bg-gradient-purple hover:opacity-90 text-white text-lg font-semibold animate-pulse-glow"
              disabled={!fromLocation || !toLocation}
            >
              <Search className="w-5 h-5 mr-2" />
              Find Best Route
            </Button>
          </CardContent>
        </Card>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardHeader className="text-center">
              <Clock className="w-12 h-12 text-route-300 mx-auto mb-4" />
              <CardTitle className="text-white">Real-Time ETA</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 text-center">
                Get accurate arrival times with live traffic and transit updates.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardHeader className="text-center">
              <DollarSign className="w-12 h-12 text-route-300 mx-auto mb-4" />
              <CardTitle className="text-white">Fare Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 text-center">
                Compare costs across different transportation options and routes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardHeader className="text-center">
              <Bus className="w-12 h-12 text-route-300 mx-auto mb-4" />
              <CardTitle className="text-white">Smart Bus Routes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 text-center">
                Find the best bus connections with stop-by-stop directions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Loved by Commuters</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-4">
                  "RouteMate saved me 30 minutes every day by finding the perfect bus connections!"
                </p>
                <p className="text-white/60">- Sarah M.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-4">
                  "The real-time updates are incredibly accurate. Never missed a bus again!"
                </p>
                <p className="text-white/60">- James L.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-white/5 backdrop-blur-lg border-t border-white/20">
        <div className="container mx-auto px-4 py-8 text-center text-white/60">
          <p>&copy; 2024 RouteMate. Making transit simple for everyone.</p>
        </div>
      </footer>
    </div>
  );
}
